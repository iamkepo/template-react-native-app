import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import ModalMaterial from '../materials/ModalMaterial';

import { init } from '../store/Reducer';

import { INITIAL_STATE } from '../utils/ConstState';
import { txtThemePrimary } from '../utils/styles';
import { normalize } from '../utils/fonts';
import ButtonInMaterial from '../materials/ButtonInMaterial';

function AlertComponent (props) {
  const valider = () => {
    props.data.alert.action.button();
    props.alertAction(INITIAL_STATE.alert);
  }
  return (
    <ModalMaterial 
      visible={props.data.alert.title != ''}
    >
      <Text style={[styles.modalText, { color: txtThemePrimary(props.data.user.theme) }]}> { props.data.alert.title } </Text>
      <Text style={[styles.modalText, { color: txtThemePrimary(props.data.user.theme) }]}> { props.data.alert.description } </Text>
      <ButtonInMaterial
        title="Cancel" 
        bgColor="blue1"
        color="light"
        loading={false}
        onPress={() => props.alertAction(INITIAL_STATE.alert)}
      />
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={()=> valider()}>
        <Text style={styles.textStyle}> { props.data.alert.action.text } </Text>
      </TouchableOpacity>
    </ModalMaterial>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: normalize(20),
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default init(AlertComponent);