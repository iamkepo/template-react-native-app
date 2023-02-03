import React from 'react';
import { StyleSheet } from 'react-native';

import { init } from '../store/Reducer';

import ScreenTemplate from '../templates/ScreenTemplate';
import ModalComponent from '../components/ModalComponent';

class DetailScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false
    };
    this.navigation = this.props.navigation;
    this.route = this.props.route;
  }
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
        title="DetailScreen"
        left={true}
      >
        {
          this.state.modal &&
          <ModalComponent />
        }
      </ScreenTemplate>
    );
  }
}


const styles = StyleSheet.create({});

export default init(DetailScreen);
