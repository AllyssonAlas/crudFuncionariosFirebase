import AsyncStorage from '@react-native-community/async-storage'

export async function getAllKeys() {
  const keys = await AsyncStorage.getAllKeys()
  keys.sort((a, b) => a - b)
  return keys
}

export async function getRegister(key) {
  return await AsyncStorage.getItem(key)
}
