import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, BackHandler } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

import { init } from '../store/Reducer';
import { normalize } from '../utils/fonts';
import ActionSheetComponent from './ActionSheetComponent';
import { bgThemePrimary, txtThemePrimary } from '../utils/styles';

class HeaderComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    this.navigation = this.props.navigation;
    this.route = this.props.route;
  }

  backAction = () => {
    this.props.left ?  this.navigation.goBack() : BackHandler.exitApp()
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
      this.props.title &&
      <View style={[styles.header, {backgroundColor: bgThemePrimary(this.props.data.user.theme)}]}>

        { 
          this.props.left ?
          <TouchableOpacity onPress={() => this.navigation.goBack()} style={styles.icon}>
            <Ionicons name='arrow-back' size={normalize(20)} color={txtThemePrimary(this.props.data.user.theme)}/>
          </TouchableOpacity>
          :
          false
        }

        <Text style={[styles.title, {color: txtThemePrimary(this.props.data.user.theme)}]} numberOfLines={1}>
          {this.props.title}
        </Text>

        { 
          this.props.right ?
          <ActionSheetComponent styles={styles.icon} options={this.props.right.options} setoption={(option)=> this.props.right.setoption(option)}>
            <Ionicons name='options' size={normalize(20)} color={txtThemePrimary(this.props.data.user.theme)}/>
          </ActionSheetComponent>
          :
          false
        }

      </View>
    );
  }
}


const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: normalize(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-around",
  },
  title: {
    width: '70%',
    fontSize: normalize(20),
    fontWeight: "bold"
  },
  icon: {
    width: '10%',
    height: '100%',
    alignItems: 'center',
    justifyContent: "center",
    fontSize: normalize(20),
    fontWeight: "bold"
  },
});
export default init(HeaderComponent);
