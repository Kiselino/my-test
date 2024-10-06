import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Overview from './pages/Overview'
import Publish from './pages/Publish'
import Profile from './pages/Profile'
import PlayGround from './pages/PlayGround'
import { Result } from 'antd'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <Overview/>
      },
      {
        path: 'publish',
        element: <Publish/>
      },
      {
        path: 'playground',
        element: <PlayGround/>
      },
      {
        path: 'profile',
        element: <Profile/>
      },
      {
        path: '*',
        element: <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
        />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default router