import React from 'react';
import { StyleSheet, Dimensions, BackHandler, TouchableOpacity, StatusBar, Text, View, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setStateAction } from '../../store/ActivityActions';

import { normalize } from "../../utils/fonts";

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setStateAction
  }, dispatch)
);

const mapStateToProps = (state) => {
  const { data } = state
  return { data }
};

const screen = Dimensions.get("screen");

class RechercheNoteScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    this.navigation = this.props.navigation;
    this.route = this.props.route;
  }

  backAction = () => {
    BackHandler.exitApp()
    return true;
  };

  componentWillUnmount() {
   this.backHandler.remove();
  }

  componentDidMount(){
    
    if (this.props.data.user == undefined) {
      this.navigation.navigate("StarterScreen");
    }
    
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }

  render(){
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

        <ImageBackground source={this.route.params.item.img} resizeMode="cover" style={styles.bgimg}>

          <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(47, 128, 237, 1)']} style={styles.gradient}>
            
            <Text style={styles.firsttext}> {this.route.params.item.title} </Text>

          </LinearGradient>
          
        </ImageBackground>
        
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "flex-start",
  },
  bgimg: {
    width: "100%",
    height: "50%",
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: "#F00"
  },
  gradient: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: "flex-end",
    paddingBottom: "5%"
  },
  firsttext: {
    width: "100%",
    textAlign: "center",
    fontSize: normalize(30),
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: "5%"
  },
  text: {
    width: "100%",
    textAlign: "center",
    fontSize: normalize(20),
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(RechercheNoteScreen);
