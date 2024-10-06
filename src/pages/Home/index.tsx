import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import {Avatar, Layout, Menu, MenuProps } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const { Header, Content, Footer } = Layout

const items = [
  {
    key: '/',
    label: '首页'
  },
  {
    key: '/publish',
    label: '投稿'
  },
  {
    key: '/playground',
    label: '试验场'
  },
  {
    key: '/profile',
    label: '个人资料'
  }
]

const Home: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeKey, setActiveKey] = useState('/')

  useEffect(() => {
    const path = location.pathname.split('/')?.[1] ?? ''
    const keys = items
      .map(({key}) => key)
      .filter(item => `/${path}` === item)
    setActiveKey(keys?.[0] ?? '/')
  }, [location.pathname])

  const onMenuClick:MenuProps['onClick'] = ({key}) => {
    setActiveKey(key)
    navigate(key)
  }

  return (
    <Layout className='tw-h-full'>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          padding: '0 48px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          background: '#fff'
        }}
      >
        <Avatar size={48} icon={<UserOutlined />} />
        <Menu
          selectedKeys={[activeKey]}
          items={items}
          mode="horizontal"
          style={{ flex: 1, minWidth: 0 }}
          onClick={onMenuClick}
        />
      </Header>

      <Content style={{ padding: '12px 48px' }}>
        <Outlet/>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  )
}

export default Home