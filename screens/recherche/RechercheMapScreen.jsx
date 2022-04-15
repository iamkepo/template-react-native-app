import React from 'react';
import { StyleSheet, Dimensions, BackHandler, TouchableOpacity, StatusBar, ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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

class RechercheMapScreen extends React.Component {
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

        <Text style={styles.text} > RechercheMapScreen </Text>
        
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
export default connect(mapStateToProps, mapDispatchToProps)(RechercheMapScreen);
