import React from 'react'
import {Layout, Menu } from 'antd'

const { Header, Content, Footer } = Layout

const Home: React.FC = () => {
  const items = ['', '', ''].map((_, index) => ({
    key: String(index + 1),
    label: `nav ${index + 1}`
  }))

  return (
    <Layout className='tw-h-dvh' style={{height: '100%'}}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
          Content
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  )
}

export default Home