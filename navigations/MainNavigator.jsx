import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setStateAction } from '../store/ActivityActions';

import BottomNavigator from './BottomNavigator';

import StarterScreen from '../screens/starter/StarterScreen';
import ConnexionScreen from '../screens/starter/ConnexionScreen';
import InscriptionScreen from '../screens/starter/InscriptionScreen';


const Stack = createStackNavigator();

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setStateAction,
  }, dispatch)
);

const mapStateToProps = (state) => {
  const { data } = state
  return { data }
};

class MainNavigator extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    this.navigation = this.props.navigation;
    this.route = this.props.route;
  }

  render(){
    return (
        <Stack.Navigator>
          <Stack.Screen
            name="BottomNavigator"
            component={BottomNavigator}
            route={this.route}
            navigation={this.navigation}
            options={{ headerLeft: false, headerTitle: false, headerStyle: { height: 0 },}}
          />
          <Stack.Screen
            name="StarterScreen"
            component={StarterScreen}
            route={this.route}
            navigation={this.navigation}
            options={{ headerLeft: false, headerTitle: false, headerStyle: { height: 0 },}}
          />
          <Stack.Screen
            name="ConnexionScreen"
            component={ConnexionScreen}
            route={this.route}
            navigation={this.navigation}
            options={{ headerLeft: false, headerTitle: false, headerStyle: { height: 0 },}}
          />
          <Stack.Screen
            name="InscriptionScreen"
            component={InscriptionScreen}
            route={this.route}
            navigation={this.navigation}
            options={{ headerLeft: false, headerTitle: false, headerStyle: { height: 0 },}}
          />
        </Stack.Navigator>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainNavigator);
