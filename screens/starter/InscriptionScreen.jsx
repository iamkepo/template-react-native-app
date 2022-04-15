import React from 'react';
import { StyleSheet, 
  Dimensions, 
  BackHandler, 
  TouchableOpacity, 
  StatusBar, 
  Text, 
  View, 
  Image,
  TextInput,
  ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from 'react-native-vector-icons';
import Checkbox from 'expo-checkbox';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userAction } from '../../store/ActivityActions';

import { normalize } from "../../utils/fonts";


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

class InscriptionScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      email: "",
      password: "",
      confpassword: "",
      number: null,
      isHiden1: true,
      isHiden2: true,
      isChecked: false,
    };
    this.navigation = this.props.navigation;
    this.route = this.props.route;
  }

  backAction = () => {
    this.navigation.goBack();
    return true;
  };

  componentWillUnmount() {
   this.backHandler.remove();
  }

  async componentDidMount(){

    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }
  
  inscription(){
    this.navigation.navigate('ConnexionScreen')
  }

  render(){
    return (
      <SafeAreaView style={[styles.container, {backgroundColor: "#FFF",}]}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

          <ScrollView>
            <View style={styles.sous}>
              <Image style={styles.logo} source={require('../../assets/Logomark.png')} resizeMode="contain" />

              <Text style={styles.title}> Inscription </Text>
              <Text style={[styles.description, {width: "85%",}]}> Inscrivez-vous pour évaluer la performance des centres de santé communautaire  </Text>
              <View style={styles.inputform}>
                <Text style={[styles.inputtext, {width:"45%"}]}>Nom </Text>
                <View style={{width:"5%"}}/>
                <Text style={[styles.inputtext, {width:"45%"}]}>Prénoms </Text>
                <TextInput
                  style={[styles.input, {width:"45%"}]}
                  onChangeText={(text)=>this.setState({nom: text})}
                  value={this.state.nom}
                  keyboardType="default"
                />
                <View style={{width:"5%"}}/>
                <TextInput
                  style={[styles.input, {width:"45%"}]}
                  onChangeText={(text)=>this.setState({prenom: text})}
                  value={this.state.prenom}
                  keyboardType="default"
                />
              </View>

              <View style={styles.inputform}>
                <Text style={styles.inputtext}>Email </Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(text)=>this.setState({email: text})}
                  value={this.state.email}
                  keyboardType="email-address"
                />
              </View>

              <View style={styles.inputform}>
                <Text style={styles.inputtext}>Numéro de téléphone </Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(text)=>this.setState({number: text})}
                  value={this.state.number}
                  keyboardType="phone-pad"
                />
              </View>
              
              <View style={styles.inputform}>
                <Text style={styles.inputtext}>Mot de passe </Text>
                <TextInput
                  style={[styles.input, {width: "85%",}]}
                  onChangeText={(text)=>this.setState({password: text})}
                  value={this.state.password}
                  secureTextEntry={this.state.isHiden1}
                />
                <TouchableOpacity
                  style={[styles.input, {width: "15%", alignItems: "flex-end"}]}
                  onPress={()=> this.setState({isHiden1: !this.state.isHiden1})}
                >
                  <Entypo name={this.state.isHiden1 ? 'eye' : 'eye-with-line'} size={20} style={{color: "#D3D3D3"}}/>
                </TouchableOpacity>
              </View>

              <View style={styles.inputform}>
                <Text style={styles.inputtext}>Confirmation du mot de passe </Text>
                <TextInput
                  style={[styles.input, {width: "85%",}]}
                  onChangeText={(text)=>this.setState({confpassword: text})}
                  value={this.state.confpassword}
                  secureTextEntry={this.state.isHiden2}
                />
                <TouchableOpacity
                  style={[styles.input, {width: "15%", alignItems: "flex-end"}]}
                  onPress={()=> this.setState({isHiden2: !this.state.isHiden2})}
                >
                  <Entypo name={this.state.isHiden2 ? 'eye' : 'eye-with-line'} size={20} style={{color: "#D3D3D3"}}/>
                </TouchableOpacity>
              </View>
              <View style={styles.section}>
                <Checkbox
                  style={styles.checkbox}
                  value={this.state.isChecked}
                  onValueChange={()=>this.setState({isChecked: !this.state.isChecked})}
                  color={this.state.isChecked ? '#2F80ED' : undefined}
                />
                <TouchableOpacity>
                  <Text style={styles.paragraph}>
                    J’accepte
                    <Text style={styles.green}> les termes et conditions d’utilisation</Text>
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={()=> this.inscription()} style={[styles.btnform, {width: "80%",}]}>
                <Text style={styles.btntext}> Créer un compte </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.navigation.navigate('ConnexionScreen')}>
                <Text style={styles.description}>
                  Vous avez déja un compte ? 
                  <Text style={styles.blue}> Connectez-vous</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
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
  btntext: {
    width: "100%",
    textAlign: "center",
    fontSize: normalize(18),
    color: "#FFF",
  },
  sous: {
    width: screen.width,
    height: screen.height,
    alignItems: 'center',
    justifyContent: "flex-start",
  },
  logo: {
    width: "40%",
    height: "10%",
    marginTop: "5%",
    marginBottom: "10%"
  },
  title: {
    width: "90%",
    textAlign: "center",
    fontSize: normalize(20),
    color: "#000",
    fontWeight: "bold",
    marginTop: "3%"
  },
  description: {
    width: "90%",
    textAlign: "center",
    fontSize: normalize(14),
    color: "#000",
    marginVertical: "4%"
  },
  inputform: {
    width: "90%",
    height: "5%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: 'center',
    justifyContent: "space-between",
    marginVertical: "4%"
  },
  inputtext: {
    width: "100%",
    fontSize: normalize(14),
    color: "#000",
  },
  input: {
    width: "100%",
    height: "80%",
    borderColor: "#808080",
    borderWidth: 0,
    borderBottomWidth: 0.5,
  },
  section: {
    width: "90%",
    flexDirection: 'row',
    marginVertical: "5%"
  },
  paragraph: {
    fontSize: normalize(15),
  },
  checkbox: {
    marginRight: "1%",
  },
  green: {
    color: "#16BB00"
  },
  blue: {
    color: "#2F80ED"
  },
  btnform: {
    height: "6%",
    backgroundColor: "#2F80ED",
    borderColor: "#2F80ED",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    marginVertical: "2%"
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(InscriptionScreen);
