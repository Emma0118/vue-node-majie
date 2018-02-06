const Login = () => import('@/components/Login')
const Home = () => import('@/components/Home')

let routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
      alias: '/'
  },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    }

]

export default routes
