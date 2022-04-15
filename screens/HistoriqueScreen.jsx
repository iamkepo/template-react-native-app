import React from 'react';
import { StyleSheet, Dimensions, BackHandler, TouchableOpacity, StatusBar, ActivityIndicator, Text, View, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from 'react-native-vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setStateAction } from '../store/ActivityActions';

import { normalize } from "../utils/fonts";


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

class HistoriqueScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
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

  componentDidMount(){
    

    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }

  render(){
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

         <Text style={styles.text} > HistoriqueScreen </Text>
        
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
  text: {
    width: "100%",
    textAlign: "center",
    fontSize: normalize(20),
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(HistoriqueScreen);
