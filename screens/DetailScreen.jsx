import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

import { init } from '../store/Reducer';

import ScreenTemplate from '../templates/ScreenTemplate';
import ButtonInMaterial from '../materials/ButtonInMaterial';
import ButtonOutMaterial from '../materials/ButtonOutMaterial';

class DetailScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      options: {
        options: ["Delete", "Save", "Cancel"],
        cancelButtonIndex: 2, //the third button will be the 'Cancel' button
        destructiveButtonIndex: 0, //the first button will be the 'Delete' option
        message: "Do you want to delete this draft?",
        title: "Are you sure?",
        showSeparators: true,
      },
      buttons1: [
        {color: 'blue1', bgColor: 'blue1', brColor: 'blue1'},
        {color: 'blue2', bgColor: 'blue2', brColor: 'blue2'},
        {color: 'yellow1', bgColor: 'yellow1', brColor: 'yellow1'},
        {color: 'yellow2', bgColor: 'yellow2', brColor: 'yellow2'},
        {color: 'dark', bgColor: 'yellow3', brColor: 'yellow3'},
        {color: 'dark', bgColor: 'yellow4', brColor: 'yellow4'},
        {color: 'success', bgColor: 'success', brColor: 'success'},
        {color: 'danger', bgColor: 'danger', brColor: 'danger'},
        {color: 'dark', bgColor: 'light', brColor: 'light'},
        {color: 'dark', bgColor: 'dark', brColor: 'dark'},
      ],
      buttons2: [
        {color: 'light', bgColor: 'blue1', brColor: 'blue1'},
        {color: 'light', bgColor: 'blue2', brColor: 'blue2'},
        {color: 'light', bgColor: 'yellow1', brColor: 'yellow1'},
        {color: 'light', bgColor: 'yellow2', brColor: 'yellow2'},
        {color: 'dark', bgColor: 'yellow3', brColor: 'yellow3'},
        {color: 'dark', bgColor: 'yellow4', brColor: 'yellow4'},
        {color: 'light', bgColor: 'success', brColor: 'success'},
        {color: 'light', bgColor: 'danger', brColor: 'danger'},
        {color: 'dark', bgColor: 'light', brColor: 'light'},
        {color: 'light', bgColor: 'dark', brColor: 'dark'},
      ]
    };
    this.navigation = this.props.navigation;
    this.route = this.props.route;
  }
  componentDidMount(){
  }

  setoption = (buttonIndex) => {
    console.log(buttonIndex);
  };

  render(){
    return (
      <ScreenTemplate 
        route={this.route} 
        navigation={this.navigation} 
        title="DetailScreen"
        left={true}
        onRefresh={()=> console.log('onRefresh')}
        right={{options: this.state.options, setoption: (index) => this.setoption(index)}}
      >
        {
          this.state.buttons1.map((item, i) => (
            <ButtonInMaterial
              key={i}
              title={item.brColor}
              brColor={item.brColor}
              color={item.color}
              loading={false}
              onPress={()=> this.props.alertAction({
                title: 'alert ', 
                description: item.brColor+ 'alert ButtonInMaterial', 
                type: '', 
                action: {
                  text: 'ok', button: ()=> console.log('alert')
                }
              }) } 
            />
          ))
        }
        {
          this.state.buttons2.map((item, i) => (
            <ButtonInMaterial
              key={i}
              title={item.brColor}
              bgColor={item.bgColor}
              brColor={item.brColor}
              color={item.color}
              loading={false}
              onPress={()=> this.props.alertAction({
                title: 'alert ', 
                description: item.brColor+ 'alert ButtonInMaterial', 
                type: '', 
                action: {
                  text: 'ok', button: ()=> console.log('alert')
                }
              }) } 
            />
          ))
        }
        {
          this.state.buttons1.map((item, i) => (
            <ButtonOutMaterial
              key={i}
              title={item.brColor}
              brColor={item.brColor}
              color={item.color}
              loading={false}
              onPress={()=> this.props.alertAction({
                title: 'alert ', 
                description: item.brColor+ 'alert ButtonOutMaterial', 
                type: '', 
                action: {
                  text: 'ok', button: ()=> console.log('alert')
                }
              }) } 
            />
          ))
        }
        {
          this.state.buttons2.map((item, i) => (
            <ButtonOutMaterial
              key={i}
              title={item.brColor}
              bgColor={item.bgColor}
              brColor={item.brColor}
              color={item.color}
              loading={false}
              onPress={()=> this.props.alertAction({
                title: 'alert ', 
                description: item.brColor+ 'alert ButtonOutMaterial', 
                type: '', 
                action: {
                  text: 'ok', button: ()=> console.log('alert')
                }
              }) } 
            />
          ))
        }
      </ScreenTemplate>
    );
  }
}


const styles = StyleSheet.create({
  buttons: {
    // width: '80%',
    // height: 'auto'
  }
});

export default init(DetailScreen);
