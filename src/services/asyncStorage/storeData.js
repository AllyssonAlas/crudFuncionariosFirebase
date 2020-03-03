import AsyncStorage from '@react-native-community/async-storage'

export async function storeRegister(newKey, form) {
  await AsyncStorage.setItem(newKey.toString(), JSON.stringify(form))
}
