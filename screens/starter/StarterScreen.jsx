import React from 'react';
import { StyleSheet, 
  Dimensions, 
  BackHandler, 
  TouchableOpacity, 
  StatusBar, 
  ActivityIndicator, 
  Text, 
  View, 
  Image,
  TextInput,
  ScrollView,
  ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from 'react-native-vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from 'expo-checkbox';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userAction } from '../../store/ActivityActions';

import { normalize } from "../../utils/fonts";
import { getData, storeData } from "../../utils/session";


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    userAction
  }, dispatch)
);

const mapStateToProps = (state) => {
  const { data } = state
  return { data }
};

const screen = Dimensions.get("screen");

class StarterScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loader: true
    };
    this.navigation = this.props.navigation;
    this.route = this.props.route;
  }

  backAction = () => {
    BackHandler.exitApp();
    return true;
  };

  componentWillUnmount() {
   this.backHandler.remove();
  }
  init(){
    getData().then((user)=>{
      if (user != null && user != undefined) {
        //console.log(user);
        this.connexion();
      }else{
        this.setState({loader: false})
      }
    }).catch((e)=>console.log(e))
  }

  async componentDidMount(){
    this.init();
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }
  connexion(){
    this.props.userAction("user");
    this.navigation.reset({ index: 0, routes: [{ name: 'MainNavigator' }]})
  }
  render(){
    return (
      <SafeAreaView style={[styles.container, {backgroundColor: "#000"}]}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        {
          this.props.data.user == undefined && !this.state.loader ?
          <ImageBackground source={require("../../assets/homme.png")} resizeMode="cover" style={styles.bgimg}>

            <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} style={styles.gradient}>
              
              <Text style={styles.firsttext}> {"Benin\nScorecard\nHub"} </Text>

              <TouchableOpacity onPress={()=> this.navigation.navigate('ConnexionScreen')} style={[styles.btn, {backgroundColor: "#2F80ED", borderColor: "#2F80ED"}]}>
                <Text style={styles.btntext}> Connexion </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=> this.navigation.navigate('InscriptionScreen')} style={[styles.btn, {borderColor: "#FFFFFF"}]}>
                <Text style={styles.btntext}> Créer un compte </Text>
              </TouchableOpacity>

            </LinearGradient>
            
          </ImageBackground>
          :
          <ActivityIndicator size="large" color="F00" />
        }
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgimg: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: "flex-end",
    paddingBottom: "25%"
  },
  firsttext: {
    width: "100%",
    textAlign: "center",
    fontSize: normalize(50),
    color: "#FFF",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: "5%"
  },
  btn: {
    width: "85%",
    height: "8%",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    marginVertical: "2%"
  },
  btntext: {
    width: "100%",
    textAlign: "center",
    fontSize: normalize(18),
    color: "#FFF",
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(StarterScreen);
