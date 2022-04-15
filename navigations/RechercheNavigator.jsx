import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Entypo, Ionicons } from 'react-native-vector-icons';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setStateAction } from '../store/ActivityActions';

import RechercheListScreen from '../screens/recherche/RechercheListScreen';
import RechercheNoteScreen from '../screens/recherche/RechercheNoteScreen';
import RechercheMapScreen from '../screens/recherche/RechercheMapScreen';


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
            name="RechercheListScreen"
            component={RechercheListScreen}
            route={this.route}
            navigation={this.navigation} 
            options={{ 
              headerLeft: () => ( <Image style={styles.logo} source={require('../assets/Logomark.png')} resizeMode="contain" /> ), 
              headerTitle: "Recherche",
              headerRight: () => ( <Entypo name="notification" size={25} color="#2F80ED"/> ),
              headerTitleAlign: "center",
              headerTitleStyle: { fontWeight: "bold" }
            }}
          />
          <Stack.Screen
            name="RechercheNoteScreen"
            component={RechercheNoteScreen}
            route={this.route}
            navigation={this.navigation} 
            options={{ 
              headerLeft: () => ( <TouchableOpacity onPress={()=> this.navigation.goBack()}><Ionicons name="chevron-back" size={30} color="#2F80ED"/></TouchableOpacity> ), 
              headerTitle: "Recherche",
              headerRight: () => ( <Entypo name="notification" size={25} color="#2F80ED"/> ),
              headerTitleAlign: "center",
              headerTitleStyle: { fontWeight: "bold" }
            }}
          />
          <Stack.Screen
            name="RechercheMapScreen"
            component={RechercheMapScreen}
            route={this.route}
            navigation={this.navigation} 
            options={{ 
              headerLeft: () => ( <TouchableOpacity onPress={()=> this.navigation.goBack()}><Ionicons name="chevron-back" size={30} color="#2F80ED"/></TouchableOpacity> ), 
              headerTitle: "Recherche",
              headerRight: () => ( <Entypo name="notification" size={25} color="#2F80ED"/> ),
              headerTitleAlign: "center",
              headerTitleStyle: { fontWeight: "bold" }
            }}
          />
        </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigator);
