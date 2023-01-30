import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useActionSheet } from "@expo/react-native-action-sheet";
import { Ionicons } from 'react-native-vector-icons';
import { init } from "../store/Reducer";
import { normalize } from '../utils/fonts';

function ActionSheetComponent (props) {
  const { showActionSheetWithOptions } = useActionSheet();

  const openSheet = () => {
    showActionSheetWithOptions(
      {
        options: ["Delete", "Save", "Cancel"],
        cancelButtonIndex: 2, //the third button will be the 'Cancel' button
        destructiveButtonIndex: 0, //the first button will be the 'Delete' option
        message: "Do you want to delete this draft?",
        title: "Are you sure?",
        showSeparators: true,
        containerStyle: styles.container,
        textStyle: styles.text,
        messageTextStyle: styles.message,
        titleTextStyle: styles.title,
      },(option)=> props.setoption(option)
    );
  }

  return (
    <TouchableOpacity onPress={() => openSheet()} style={styles.icon}>
      <Ionicons name='options' size={normalize(20)}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: normalize(20),
    backgroundColor: "#cb7856",
  },
  message: {
    backgroundColor: "purple",
    color: "white",
  },
  title: {
    backgroundColor: "yellow",
  },
  text: {
    paddingLeft: "40%",
  },
  icon: {
    width: '10%',
    height: '100%',
    alignItems: 'center',
    justifyContent: "center",
    fontSize: normalize(20),
    fontWeight: "bold"
  },
});
export default init(ActionSheetComponent);