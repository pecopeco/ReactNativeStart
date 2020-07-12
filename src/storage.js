import AsyncStorage from '@react-native-community/async-storage'

class Storage {
  async set (key, value) {
    let val = value
    if (typeof val !== 'string') {
      val = value.toString()
    }
    await AsyncStorage.setItem(key, val)
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