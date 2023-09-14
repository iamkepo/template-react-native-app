import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { init } from "../store/Reducer";
import { normalize } from '../utils/fonts';
import { G_Styles, getColor } from '../utils/styles';

function ButtonOutMaterial (props) {

  return (
    <TouchableOpacity 
      onPress={() => props.onPress()} 
      style={[styles.button, {
        backgroundColor: props.bgColor ? getColor(props.bgColor) : 'none',
        borderColor: getColor(props.brColor),
        borderWidth: 1
      }, props.bgColor ? G_Styles.shadow : {}]}
      disabled={props.loading}
    >

      <Text style={[styles.title, {color: getColor(props.color)}]} numberOfLines={1}> 
        { props.title } 
      </Text>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: normalize(20),
    marginVertical: normalize(15)
  },
  title: {
    textAlign: 'center',
    fontSize: normalize(18),
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(10),
  },
});
export default init(ButtonOutMaterial);