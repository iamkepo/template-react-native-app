import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Fontisto, FontAwesome5, AntDesign, SimpleLineIcons, Ionicons, Entypo } from 'react-native-vector-icons';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setStateAction } from '../store/ActivityActions';

import RechercheNavigator from '../navigations/RechercheNavigator';

import HistoriqueScreen from '../screens/HistoriqueScreen';
import ParametresScreen from '../screens/ParametresScreen';
import ProfilScreen from '../screens/ProfilScreen';

const Tab = createBottomTabNavigator();

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setStateAction,
  }, dispatch)
);

const mapStateToProps = (state) => {
  const { data } = state
  return { data }
};

class BottomNavigator extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    this.navigation = this.props.navigation;
    this.route = this.props.route;
  }

  render(){
    return (
      <Tab.Navigator
        initialRouteName='RechercheScreen'
        screenOptions={{
          tabBarActiveTintColor: '#2F80ED',
        }}
      >
        <Tab.Screen 
          name="RechercheNavigator" 
          component={RechercheNavigator}
          route={this.route}
          navigation={this.navigation}
          options={{ 
            headerLeft: false, headerTitle: false, headerStyle: { height: 0 },
            tabBarLabel: "Recherche",
            tabBarIcon: ({ color, size }) => ( <Fontisto name="search" size={size} color={color}/>),
          }}
        />
        <Tab.Screen 
          name="HistoriqueScreen" 
          component={HistoriqueScreen} 
          route={this.route}
          navigation={this.navigation}
          options={{ 
            headerLeft: () => ( <Ionicons name="chevron-back" size={30} color="#2F80ED"/> ), 
            headerTitle: "Historique",
            headerRight: () => ( <Entypo name="notification" size={25} color="#2F80ED"/> ),
            tabBarLabel: "Historique",
            tabBarIcon: ({ color, size }) => ( <AntDesign name="clockcircleo" size={size} color={color}/>),
            headerTitleAlign: "center",
            headerTitleStyle: { fontWeight: "bold" }
          }}
        />
        <Tab.Screen 
          name="ParametresScreen" 
          component={ParametresScreen} 
          route={this.route}
          navigation={this.navigation}
          options={{ 
            headerLeft: () => ( <Ionicons name="chevron-back" size={30} color="#2F80ED"/> ), 
            headerTitle: "Paramètres",
            headerRight:  () => ( <Entypo name="notification" size={25} color="#2F80ED"/> ),
            tabBarLabel: "Paramètres",
            tabBarIcon: ({ color, size }) => ( <SimpleLineIcons name="compass" size={size} color={color}/>),
            headerTitleAlign: "center",
            headerTitleStyle: { fontWeight: "bold" }
          }}
        />
        <Tab.Screen 
          name="ProfilScreen" 
          component={ProfilScreen} 
          route={this.route}
          navigation={this.navigation}
          options={{ 
            headerLeft: () => ( <Ionicons name="chevron-back" size={30} color="#2F80ED"/> ), 
            headerTitle: "Profil",
            headerRight: () => ( <Entypo name="notification" size={25} color="#2F80ED"/> ),
            tabBarLabel: "Profil",
            tabBarIcon: ({ color, size }) => ( <FontAwesome5 name="user" size={size} color={color}/>),
            headerTitleAlign: "center",
            headerTitleStyle: { fontWeight: "bold" }
          }}
        />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavigator);