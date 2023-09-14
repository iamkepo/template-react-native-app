import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';

import { init } from '../store/Reducer';
import { normalize } from '../utils/fonts';
import { INITIAL_STATE } from '../utils/ConstState';
import { G_Styles, getColor } from '../utils/styles';

function ToastComponent(props) {
  const show = React.useMemo(() => new Animated.Value(-100), []);

  React.useEffect(() => {
    Animated.timing(show, {toValue: 50, duration: 500, useNativeDriver: true,}).start();
    setTimeout(() => {
      props.toastAction(INITIAL_STATE.toast)
      Animated.timing(show, {toValue: -100, duration: 500, useNativeDriver: true,}).start();
    }, 2000);
  }, []);
  
  return (
    <Animated.View 
      style={[styles.newpost, {transform: [
        {
          translateY: show,
        },
      ],}]}
    >
      <TouchableOpacity style={[styles.touch, G_Styles.shadow, { backgroundColor: getColor(props.data.toast.type) }]}>
        <Text style={styles.textStyle}>
          { props.data.toast.message }
        </Text>
      </TouchableOpacity>
    </Animated.View>
  )
}
const styles = StyleSheet.create({
  newpost: {
    position: "absolute",
    top: -10,
    zIndex: 10,
    width: "100%",
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touch: {
    paddingHorizontal: '5%',
    paddingVertical: '2.5%',
    borderRadius: normalize(18),
    opacity: 0.8,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: normalize(20)
  },
  
});
export default init(ToastComponent);
