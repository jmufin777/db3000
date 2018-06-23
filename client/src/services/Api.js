import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://78.102.17.162:3003/`
    // baseURL: `http://192.168.1.180:3003/`
  })
}
