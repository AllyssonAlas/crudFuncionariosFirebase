import NetInfo from '@react-native-community/netinfo'

export default function verifyConnection() {
  return NetInfo.fetch().then(state => state.isConnected)
}
