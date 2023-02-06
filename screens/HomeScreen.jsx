import React from 'react';
import { StyleSheet } from 'react-native';

import { init } from '../store/Reducer';

import AnimatedComponent from '../components/AnimatedComponent';
import ScreenTemplate from '../templates/ScreenTemplate';

class HomeScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list: []
    };
    this.navigation = this.props.navigation;
    this.route = this.props.route;
  };

  
  render(){
    return (
      <ScreenTemplate 
        route={this.route} 
        navigation={this.navigation} 
        title="HomeScreen"
      >
        <AnimatedComponent navigation={this.navigation} />
      </ScreenTemplate>
    );
  }
}


const styles = StyleSheet.create({});

export default init(HomeScreen);
