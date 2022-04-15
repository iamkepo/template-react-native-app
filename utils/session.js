import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value) => {
  try {
    console.log(value);
    await AsyncStorage.setItem('@user_Key', value)
  } catch (e) {
    // saving error
    console.log(e);
  }
}
export const getData = async () => {
  try {
    return (await AsyncStorage.getItem('@user_Key'));
  } catch(e) {
    // error reading value
    console.log(e);
  }
}
