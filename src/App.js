import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


class App extends Component {
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h1 className="App-title">Welcome to React1234</h1>
  //       </header>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
          
  //         <Button type="primary">Button</Button>
  //       </p>
        
  //       <ul>
  //         <li><Link to="/">Home</Link></li>
  //         <li><Link to="/about">About</Link></li>
  //         <li><Link to="/contact">Topics</Link></li>
  //       </ul>
      
  //       <Route exact path="/" component={Home}/>
  //       <Route path="/about" component={About}/>
  //       <Route path="/contact" component={Contact}/>
  //     </div>
  //   );
  // }
  
  render(){
    return(
  <Layout>
    <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/">
            <Icon type="user" />
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/about">
          <Icon type="video-camera" />
          <span className="nav-text">About</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/contact">
          <Icon type="upload" />
          <span className="nav-text">Contact</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout style={{ marginLeft: 200 }}>
      <Header style={{ background: '#fff', padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
         <Route exact path="/" component={Home}/>
         <Route path="/about" component={About}/>
         <Route path="/contact" component={Contact}/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
      );
  }
}

export default App;
