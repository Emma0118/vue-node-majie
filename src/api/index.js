import axios from 'axios'
let base = ''
const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data) }

export {requestLogin}
