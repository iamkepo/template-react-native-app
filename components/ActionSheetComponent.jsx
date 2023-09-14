import { StyleSheet, TouchableOpacity } from 'react-native';
import { useActionSheet } from "@expo/react-native-action-sheet";
import { init } from "../store/Reducer";

function ActionSheetComponent (props) {
  const { showActionSheetWithOptions } = useActionSheet();

  const openSheet = () => {
    showActionSheetWithOptions(
      {
        ...props.options,
        containerStyle: styles.container,
        textStyle: styles.text,
        messageTextStyle: styles.message,
        titleTextStyle: styles.title,
      } ,(option)=> props.setoption(option)
    );
  }

  return (
    <TouchableOpacity onPress={() => openSheet()} style={props.styles}>
      { props.children }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
export default init(ActionSheetComponent);