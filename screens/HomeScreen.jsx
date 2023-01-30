import React from 'react';
import { Button, StyleSheet } from 'react-native';
import ModalComponent from '../components/ModalComponent';

import { init } from '../store/Reducer';

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

  setoption = (buttonIndex) => {
    if (buttonIndex == 1) {
      this.setState({modal: true})
    }
  };
  
  render(){
    return (
      <ScreenTemplate 
        route={this.route} 
        navigation={this.navigation} 
        title="HomeScreen"
        right={true}
        setoption={(index) => this.setoption(index)}
      >
        <Button title='go to Detail' onPress={()=> this.navigation.navigate('DetailScreen')} />
        {
          this.state.modal &&
          <ModalComponent />
        }
      </ScreenTemplate>
    );
  }
}


const styles = StyleSheet.create({});

export default init(HomeScreen);
