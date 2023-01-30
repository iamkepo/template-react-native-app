import React from 'react';
import { StyleSheet } from 'react-native';

import { init } from '../store/Reducer';

import ScreenTemplate from '../templates/ScreenTemplate';

class DetailScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list: []
    };
    this.navigation = this.props.navigation;
    this.route = this.props.route;
  }

  render(){
    return (
      <ScreenTemplate 
        route={this.route} 
        navigation={this.navigation} 
        title="DetailScreen"
        left={true}
      >

      </ScreenTemplate>
    );
  }
}


const styles = StyleSheet.create({});

export default init(DetailScreen);
