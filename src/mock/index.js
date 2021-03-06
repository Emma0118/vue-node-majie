import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { LoginUsers, Users } from './data/user'

export default {
  bootstrap () {
    let mock = new MockAdapter(axios)
    mock.onGet('/success').reply(200, {
      msg: 'success'
    })
    mock.onPost('/login').reply(config => {
      let { username, password } = JSON.parse(config.data)
      return new Promise(resolve => {
        let user = null
        setTimeout(() => {
          let hasUser = LoginUsers.some(u => {
            if (u.username === username && u.password === password) {
              user = JSON.parse(JSON.stringify(u))
              user.password = undefined
              return true
            }
          })
          hasUser && resolve([200, {
            code: 200,
            msg: '请求成功',
            user
          }])
        }, 1000)
      })
    })
  }
}
