import { observable, action } from "mobx"

class UserInfo {
  @observable username

  constructor () {
    this.username = ''
  }
  
  @action setUserInfo = (name) => {
    this.username = name
  }
}

class Token {
  @observable token

  constructor () {
    this.token = ''
  }
  
  @action setToken = (token) => {
    this.token = token
  }
}

const userInfo = new UserInfo()
const token = new Token()

const store = { userInfo, token }

export default store