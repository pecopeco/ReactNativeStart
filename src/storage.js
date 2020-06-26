import AsyncStorage from '@react-native-community/async-storage'

class Storage {
  async set (key, value) {
    await AsyncStorage.setItem(key, value)
  }
  async get (key) {
    return await AsyncStorage.getItem(key)
  }
  async remove (key, value) {
    await AsyncStorage.removeItem(key)
  }
}

const storage = new Storage()

export default storage