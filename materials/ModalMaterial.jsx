import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { init } from '../store/Reducer';
import { G_Styles, bgThemePrimary, bgThemeSecondary } from '../utils/styles';
import { normalize } from '../utils/fonts';

const ModalMaterial = (props) => {
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.visible}
        onRequestClose={() => props.alertAction(INITIAL_STATE.alert)}>
        <View style={[styles.centeredView, { backgroundColor: bgThemeSecondary(props.data.user.theme)+'A'}]}>
          <View style={[styles.modalView, G_Styles.shadow, { backgroundColor: bgThemePrimary(props.data.user.theme)}]}>
            { props.children }
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '90%',
    minHeight: '25%',
    marginVertical: 0,
    borderRadius: normalize(20),
    padding: 35,
    alignItems: 'center',
  },
});

export default init(ModalMaterial);