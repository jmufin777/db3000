import Api from '@/services/Api'

export default {
  all () {
    // console.log('jedou credentials: ', credentials)
    return Api().get('list_users1')
  }
}
