import { observable, action } from "mobx"

class UserInfo {
  @observable username

  constructor() {
    this.username = 'yang'
  }
  
  @action getUserInfo = (name) => {
    this.username = name
  }
}

const userInfo = new UserInfo()

const store = { userInfo }

export default store