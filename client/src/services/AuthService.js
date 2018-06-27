import Api from '@/services/Api'

export default {
  login (credentials) {
    console.log('credentials: ', credentials)
    return Api().post('login', credentials)
  }
}
