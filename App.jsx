import React from 'react';

import { useRoute, useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import monReducer from './store/ActivityReducer';

import AnimatedAppLoader from './components/AnimatedAppLoader';
import MainNavigator from './navigations/MainNavigator';

const store = createStore(monReducer);
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <AnimatedAppLoader>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="MainNavigator"
              component={props => {
                const navigation = useNavigation();
                const route = useRoute();
                return <MainNavigator {...props} route={route} navigation={navigation} />;
              }}
              options={{ headerLeft: false, headerTitle: false, headerStyle: { height: 0 },}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AnimatedAppLoader>
    </Provider>
  );
}
