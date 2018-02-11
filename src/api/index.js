import axios from 'axios'
let base = ''
const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data) }
const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }) }

export { requestLogin, getUserListPage }
