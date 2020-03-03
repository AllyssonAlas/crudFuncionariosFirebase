import AsyncStorage from '@react-native-community/async-storage'

export async function deleteRegister(key) {
  await AsyncStorage.removeItem(key)
}
