const Login = () => import('@/components/Login')
const Home = () => import('@/components/Home')
const Table = () => import('@/components/nav_1/Table')

let routes = [
    {
        path: '/login',
        component: Login,
        show: false
    },
    {
        path: '/',
        name: '导航一',
        show: true,
        component: Home,
        iconCls: 'emma',
        children: [
            {
                path: '/table',
                component: Table,
                name: 'Table'
            }
        ]
    },
    // {
    //     path: '/home2',
    //     name: '导航二',
    //     show: true,
    //     component: Home,
    //     iconCls: 'emma',
    //     children: [
    //         {
    //             path: '/table',
    //             component: Table,
    //             name: 'Table'
    //         }
    //     ]
    // }
]

export default routes
