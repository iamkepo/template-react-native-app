import React from 'react';
import { Button, StyleSheet } from 'react-native';

import { init } from '../store/Reducer';

import ScreenTemplate from '../templates/ScreenTemplate';


class Tab1Screen extends React.Component {
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
        theme={this.props.theme}
      >
        <Button title='success toast' onPress={()=> this.props.toastAction({message: 'success', type: 'success'})} />
        <Button title='error toast' onPress={()=> this.props.toastAction({message: 'danger', type: 'danger'})} />
      </ScreenTemplate>
    );
  }
}


const styles = StyleSheet.create({});

export default init(Tab1Screen);
