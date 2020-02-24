import React, { Component } from 'react'

import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import { Router, Route, Switch, BrowserRouter, Link } from 'react-router-dom'
import { Users } from './Users'
import { Home } from './Home'
import HomeWithHooks from './Home/HomeWithHooks'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Layout>
                        <Header className="header">
                            <Link to="/"><div style={{ color: "green" }}>Ana Sayfa</div></Link>
                            <div className="logo" />
                        </Header>
                        <Layout>
                            <Sider width={200} style={{ background: '#fff' }}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ height: '100%', borderRight: 0 }}
                                >
                                    <SubMenu
                                        key="sub1"
                                        title={
                                            <span>
                                                <Icon type="user" />
                                                Kullanicilar
                      </span>
                                        }
                                    >
                                        <Menu.Item key="1"><Link to="/createuser">Kullanici Ekle</Link></Menu.Item>
                                        <Menu.Item key="2">Kullanici Bilgileri</Menu.Item>
                                    </SubMenu>
                                    <SubMenu
                                        key="sub2"
                                        title={
                                            <span>
                                                <Icon type="laptop" />
                                                subnav 2
                      </span>
                                        }
                                    >
                                        <Menu.Item key="5">option5</Menu.Item>
                                        <Menu.Item key="6">option6</Menu.Item>
                                        <Menu.Item key="7">option7</Menu.Item>
                                        <Menu.Item key="8">option8</Menu.Item>
                                    </SubMenu>
                                    <SubMenu
                                        key="sub3"
                                        title={
                                            <span>
                                                <Icon type="notification" />
                                                subnav 3
                      </span>
                                        }
                                    >
                                        <Menu.Item key="9">option9</Menu.Item>
                                        <Menu.Item key="10">option10</Menu.Item>
                                        <Menu.Item key="11">option11</Menu.Item>
                                        <Menu.Item key="12">option12</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </Sider>
                            <Layout style={{ padding: '0 24px 24px' }}>
                                <Breadcrumb style={{ margin: '16px 0' }}>
                                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                                    <Breadcrumb.Item>List</Breadcrumb.Item>
                                    <Breadcrumb.Item>App</Breadcrumb.Item>
                                </Breadcrumb>
                                <Content
                                    style={{
                                        background: '#fff',
                                        padding: 24,
                                        margin: 0,
                                        minHeight: 280,
                                    }}
                                >
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/createuser" component={Users} />
                                </Content>
                            </Layout>
                        </Layout>
                    </Layout>
                </Switch>
            </BrowserRouter>
        )
    }
}
