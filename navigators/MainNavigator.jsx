import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { init } from '../store/Reducer';

import HomeScreen from '../screens/HomeScreen.jsx';
import DetailScreen from '../screens/DetailScreen';


const Stack = createStackNavigator();

class MainNavigator extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      route: [
        {
          name: "HomeScreen",
          component: HomeScreen
        },
        {
          name: "DetailScreen",
          component: DetailScreen
        }
      ]
    };
    this.navigation = this.props.navigation;
    this.route = this.props.route;
  }

  render(){
    return (
        <Stack.Navigator>
          {
            this.state.route.map((item, i)=>(
              <Stack.Screen
                key={i}
                name={item.name}
                component={item.component}
                route={this.route}
                navigation={this.navigation}
                options={{ headerLeft: false, headerTitle: false, headerStyle: { height: 0 },}}
              />
            ))
          }
        </Stack.Navigator>
    );
  }
}
export default init(MainNavigator);
