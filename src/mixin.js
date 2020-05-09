import fly from 'flyio'
import { WToast, WSnackBar } from 'react-native-smart-tip'

const easyTost = (data) => {
  WToast.show({
    data: data,
    position: WToast.position.CENTER,
    duration: WToast.duration.SHORT,
    textColor: '#ffffff'
  })
}

const errTost = (data) => {
  WSnackBar.show({
    data: data,
    position: WSnackBar.position.TOP,
    statusBarHeight: 0,
    duration: WToast.duration.LONG,
    backgroundColor: 'red',
    textColor: '#ffffff'
  })
}

const $http = (url, form = {}, type) => {
  let config = {
    api_url: 'https://xxx.com'
  }
  let requestUrl, requestForm
  
  // 重复请求延迟
  const delayRequest = () => {
    setTimeout(() => {
      requestUrl = ''
      requestForm = {}
    }, 300)
  }
  
  // 判断两个对象属性是否完全相同
  const isObjectValueEqual = (objA, objB) => {
    let aProps = Object.getOwnPropertyNames(objA)
    let bProps = Object.getOwnPropertyNames(objB)
    if (aProps.length !== bProps.length) {
      return false
    }
    for (let i = 0; i < aProps.length; i++) {
      let propName = aProps[i]
      let propA = objA[propName]
      let propB = objB[propName]
      if (typeof (propA) === 'object') {
        if (isObjectValueEqual(propA, propB)) {
          return true
        } else {
          return false
        }
      } else if (propA !== propB) {
        return false
      }
    }
    return true
  }

  // 拦截重复请求
  if ((requestUrl === url && isObjectValueEqual(requestForm, form))) {
    return
  }
  requestUrl = url
  requestForm = JSON.parse(JSON.stringify(form))

  let compleForm = form
  // let presetForm = {
  //   orgName: 123456
  // }
  // Object.assign(compleForm, presetForm)
  let transUrl = url.indexOf('http') !== -1 ? url : config.api_url + url
  return fly.request(transUrl, compleForm, {
    method: type,
    timeout: 10000
  }).then((res) => {
    delayRequest()
    if (type === 'delete' || res.status === 204) {
      return res.text()
    } else if (res.status === 200) {
      return res.data
    } else {
      errTost(JSON.parse(res.data).error.msg)
    }
  }).catch((err) => {
    delayRequest()
    const codeMessage = {
      200: '服务器成功返回请求的数据.',
      201: '新建或修改数据成功.',
      202: '一个请求已经进入后台排队（异步任务）.',
      204: '删除数据成功.',
      400: '发出的请求有错误，服务器没有进行新建或修改数据的操作.',
      401: '用户没有权限（令牌、用户名、密码错误）.',
      403: '用户得到授权，但是访问是被禁止的.',
      404: '发出的请求针对的是不存在的记录，服务器没有进行操作.',
      406: '请求的格式不可得',
      410: '请求的资源被永久删除，且不会再得到的.',
      422: '当创建一个对象时，发生一个验证错误.',
      500: '服务器发生错误，请检查服务器.',
      502: '网关错误',
      503: '服务不可用，服务器暂时过载或维护.',
      504: '网关超时'
    }
    const errortext = codeMessage[err.status] || err.message
    errTost(errortext)
  })
}

$http.get = (url, form) => $http(url, form, 'get')
$http.post = (url, form) => $http(url, form, 'post')
$http.delete = (url, form) => $http(url, form, 'delete')
$http.put = (url, form) => $http(url, form, 'put')

const formatTime = (time, yearKey = '-', monthKey = '-', dayKey = '',
  hasHour, hasMinute) => {
  let date = new Date(time * 1000)
  let y = 1900 + date.getYear()
  let m = '0' + (date.getMonth() + 1)
  let d = '0' + date.getDate()
  let hour = '0' + date.getHours()
  let minute = '0' + date.getMinutes()
  let resultTime = y + yearKey + m.substring(m.length - 2, m.length) + monthKey + d.substring(d.length - 2, d.length) + dayKey
  if (hasHour && !hasMinute) {
    return resultTime + ' ' + hour.substring(hour.length - 2, hour.length)
  } else if (hasHour && hasMinute) {
    return resultTime + ' ' + hour.substring(hour.length - 2, hour.length) + ':' + minute.substring(minute.length - 2, minute.length)
  }
  return resultTime
}

const validate = (arr) => {
  let err
  arr.some((item) => {
    // 数字转换字符串
    if (typeof (item.key) === 'number') {
      item.key = item.key.toString()
    }
    // 验证非空
    if (!item.key || item.key.match(/^[ ]+$/)) {
      err = '请填写' + item.name
      return
    }
    // 验证姓名
    if (item.type === 'name' && (!/^[\u4e00-\u9fa5]+$/.test(item.key) || item.key.length < 2)) {
      err = '请输入正确的' + item.name
      return
    }
    // 验证手机号
    if (item.type === 'phone' && !(item.key.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(item.key))) {
      err = '请输入正确的' + item.name
      return
    }
    // 验证身份证号
    if (item.type === 'idCard' && !/^\d{6}(19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(item.key)) {
      err = '请输入正确的' + item.name
    }
    // 验证金额
    if (item.type === 'price' && ((!Number.isFinite(Number(item.key)) || Number(item.key) <= 0) || (item.key.split('.')[1] && item.key.split('.')[1].length > 2))) {
      err = '请输入正确的' + item.name
    }
  })
  return err
}

export { $http, errTost, easyTost, formatTime, validate }