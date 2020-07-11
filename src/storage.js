import AsyncStorage from '@react-native-community/async-storage'

class Storage {
  async set (key, value) {
    await AsyncStorage.setItem(key, value)
  }
  get (key) {
    return new Promise(async (resolve) => {
      let res = await AsyncStorage.getItem(key)
      resolve(res)
    })
  }
  async remove (key, value) {
    await AsyncStorage.removeItem(key)
  }
}

const storage = new Storage()

export default storage