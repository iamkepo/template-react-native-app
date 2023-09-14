import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Appearance } from 'react-native';

import { init } from '../store/Reducer';

import ToastComponent from '../components/ToastComponent';
import AlertComponent from '../components/AlertComponent';

import TabNavigator from './TabNavigator';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();

class MainNavigator extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      routes: [
        {
          name: "TabNavigator",
          component: TabNavigator
        },
        {
          name: "DetailScreen",
          component: DetailScreen
        }
      ],
    };
    this.navigation = this.props.navigation;
    this.route = this.props.route;
  }

  componentWillUnmount() {
    this.themeHandler.remove();
  }
  
  componentDidMount(){
    let current_theme = Appearance.getColorScheme();
    this.props.userOneAction('theme', current_theme);

    this.themeHandler = Appearance.addChangeListener(
      (theme)=>{
        this.props.userOneAction('theme', theme.colorScheme);
      }
    );
  }

  render(){
    return (
      <>
      {this.props.data.toast.message != '' &&<ToastComponent />}
        <Stack.Navigator>
          {
            this.state.routes.map((route, i)=>(
              <Stack.Screen
                key={i}
                name={route.name}
                component={route.component}
                route={this.route}
                navigation={this.navigation}
                options={{ headerLeft: false, headerTitle: false, headerStyle: { height: 0 },}}
              />
            ))
          }
        </Stack.Navigator>
      {this.props.data.alert.title != '' &&<AlertComponent />}
      </>
    );
  }
}
export default init(MainNavigator);
