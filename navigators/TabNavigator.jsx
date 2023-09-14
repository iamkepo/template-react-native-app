import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { init } from '../store/Reducer';

import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';

import TabNavigatorTemplate from '../templates/TabNavigatorTemplate';
import { bgThemePrimary, txtThemePrimary } from '../utils/styles';

const Tab = createMaterialTopTabNavigator();

class TabNavigator extends React.Component {
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
      routes: [
        {
          name: "Tab1Screen",
          component: Tab1Screen
        },
        {
          name: "Tab2Screen",
          component: Tab2Screen
        }
      ]
    }
    this.navigation = this.props.navigation;
    this.route = this.props.route;
  }
  setoption = (buttonIndex) => {
    console.log(buttonIndex);
  };
  render() {
    return (
      <TabNavigatorTemplate
        route={this.route} 
        navigation={this.navigation} 
        title="TabNavigator"
        right={{options: this.state.options, setoption: (index) => this.setoption(index)}}
      >
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: txtThemePrimary(this.props.data.user.theme),
            tabBarLabelStyle: { fontSize: 12 },
            tabBarStyle: { backgroundColor: bgThemePrimary(this.props.data.user.theme) },
          }}
        >
          {
            this.state.routes.map((route, i)=>(
              <Tab.Screen
                key={i}
                name={route.name}
                component={route.component}
                route={this.route}
                navigation={this.navigation}
              />
            ))
          }
        </Tab.Navigator>
      </TabNavigatorTemplate>
    );
  }
}

const styles = StyleSheet.create({});
export default init(TabNavigator);