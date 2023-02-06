import React from 'react';

import { StyleSheet, View, TouchableOpacity, Animated } from 'react-native';
import { AntDesign, Entypo } from 'react-native-vector-icons';

import { init } from '../store/Reducer';
import { screen } from '../utils/helper';

function AddPostComponent(props) {
  const [click, setclick] = React.useState(false);
  const camera = React.useMemo(() => new Animated.Value((screen.width-60)/2), []);
  const picture = React.useMemo(() => new Animated.Value((screen.width-60)/4), []);
  const video = React.useMemo(() => new Animated.Value(-(screen.width-60)/4), []);
  const videocamera = React.useMemo(() => new Animated.Value(-(screen.width-60)/2), []);

  React.useEffect(() => {
    change();
  }, []);

  const change = () => {
    setclick(!click);
    Animated.timing(camera, {toValue: click ? 0 : (screen.width-60)/2,duration: 600,useNativeDriver: true,}).start();
    Animated.timing(picture, {toValue: click ? 0 : (screen.width-60)/4,duration: 300,useNativeDriver: true,}).start();
    Animated.timing(video, {toValue: click ? 0 : -(screen.width-60)/4,duration: 300,useNativeDriver: true,}).start();
    Animated.timing(videocamera, {toValue: click ? 0 : -(screen.width-60)/2,duration: 600,useNativeDriver: true,}).start();
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={()=> props.navigation.navigate('DetailScreen')} 
        style={[styles.newpost, {transform: [{translateX: camera}], zIndex: click ? 4 : 1, width: click ? 0 : 60,}]}
      >
        <Entypo name="camera" size={25} color="#FFF"/>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={()=> false} 
        style={[styles.newpost, {transform: [{translateX: picture}], zIndex: click ? 4 : 2, width: click ? 0 : 60,}]}
      >
        <AntDesign name="picture" size={25} color="#FFF"/>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={()=> change()} 
        style={[styles.newpost, {backgroundColor: !click ? "#FFF" : "#F00", zIndex: 5,}]}
      >
        <AntDesign name={!click ? "close" : "plus"} size={25} color={!click ? "#000" : "#FFF"}/>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={()=> false} 
        style={[styles.newpost, {transform: [{translateX: video}], zIndex: click ? 4 : 3, width: click ? 0 : 60,}]}
      >
        <Entypo name="video" size={25} color="#FFF"/>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={()=> false} 
        style={[styles.newpost, {transform: [{translateX: videocamera}], zIndex: click ? 4 : 4, width: click ? 0 : 60,}]}
      >
        <Entypo name="video-camera" size={25} color="#FFF"/>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 60,
    position: "absolute",
    bottom: 80,
    zIndex: 5,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
  },
  newpost: {
    width: 60,
    height: "100%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F00",
    borderRadius: 50,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOffset: {
      height: 10,
      width: 10
    },
    shadowOpacity: 0.5,
    elevation : 10,
  }
  
});
export default init(AddPostComponent);
