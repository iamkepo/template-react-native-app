import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setStateAction } from '../store/ActivityActions';

import { normalize } from "../utils/fonts";

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setStateAction
  }, dispatch)
);

const mapStateToProps = (state) => {
  const { data } = state
  return { data }
};


function RechercheCelluleComponent(props) {

  return (
    <View style={styles.container}>
      <Image 
        source={props.item.img} 
        style={styles.img}
      />
        <View style={styles.textbox}>

          <Text style={styles.title}>{props.item.title}</Text>
          
          <View style={styles.descriptionbox}> 
            <Ionicons name='call-outline' size={15} color= "#C4C4C4"/>
            <Text style={styles.description}> {props.item.contact} </Text>
          </View>
          <View style={styles.descriptionbox}> 
            <MaterialCommunityIcons name='map-marker' size={15} color= "#C4C4C4"/>
            <Text style={styles.description}> {props.item.description} </Text>
          </View>

          <TouchableOpacity 
            onPress={()=> props.goto()} 
            style={styles.btn}
          >
            <Text style={styles.btntext}> Noter le centre </Text>
          </TouchableOpacity>
          
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "20%",
    flexWrap: "nowrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: "5%",
    padding: "3%",
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOffset: {
      height: 10,
      width: 10
    },
    shadowOpacity: 0.5,
    elevation : 10,
  },
  img: {
    width: "45%", 
    height: "100%", 
    resizeMode: "cover", 
    borderRadius: 10, 
  },
  textbox: {
    width: "52%", 
    height: "100%", 
    alignItems: "flex-start",
    justifyContent: "flex-start", 
  },
  title: { 
    width: "90%",
    minHeight: "15%", 
    color: "#2F80ED", 
    fontSize: normalize(15), 
    fontWeight: "bold"
  },
  descriptionbox: { 
    width: "100%", 
    minHeight: "10%", 
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start", 
    marginBottom: "5%"
  },
  description: { 
    width: "90%", 
    color: "#000", 
    fontSize: normalize(12),
    fontWeight: "bold"
  },
  btn: {
    width: "70%", 
    height: "20%",
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "center", 
    alignSelf: "flex-end",
    backgroundColor: "rgba(47, 128, 237, 0.2)",
    borderRadius: 5,
  },
  btntext: { 
    fontSize: normalize(12),
    fontWeight: "bold",
    color: "#2F80ED",
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(RechercheCelluleComponent);