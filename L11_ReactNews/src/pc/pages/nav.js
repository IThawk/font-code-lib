import React from "react"
import { Menu, Icon,Button, Modal,Tabs,Form,Input,message } from 'antd';
import { Link } from "react-router"
import { httpPost } from "../http/http"
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import "../assets/css/nav.css"
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class Nav extends React.Component{

  constructor(){
    super();
    this.state = {
      currentKey:"index",
      isLogin:false,
      visible:false,
      action:"1",
      username:"未知"
    }
  }

  componentWillMount(){
    if(localStorage.getItem("username")){
      this.setState({
        isLogin:true,
        username:localStorage.getItem("username")
      })
    }
  }

  // 关闭模态框
  closeModelHandler(event){
    this.setState({
      visible:false
    })
  }

  // 表单提交事件
  handleSubmit(event){
    event.preventDefault();
    var formData = this.props.form.getFieldsValue();
    if(this.state.action == "1"){
      // 登录
      httpPost("http://localhost:3000/login",{
        username:formData.userName,
        password:formData.password
      })
      .then(res => {
        return res.json();
      })
      .then(data => {
        if(data[0]){
          this.writeUserInfo(data[0].username);
          this.setState({
            visible:false,
            isLogin:true,
            username:data[0].username
          })
        }else{
          message.info('用户名密码错误');
        }
      })
    }else{
      // 注册
      httpPost("http://localhost:3000/register",{
        username:formData.regUserName,
        password:formData.regPassword
      })
      .then(res => {
        return res.json();
      })
      .then(data => {
        if(data.msg == "success"){
          this.writeUserInfo(formData.regUserName);
          this.setState({
            visible:false,
            isLogin:true,
            username:formData.regUserName
          })
          message.info('注册成功');
        }
      })
    }
  }

  // 写入到本地数据中
  writeUserInfo(username){
    localStorage.setItem("username",username);
  }

  menuHandler(event){
    this.setState({
      currentKey:event.key
    })
    if(event.key == "register"){
      this.setState({
        visible:true
      })
    }
  }

  // 登录与注册的切换
  changeTabs(key){
    if(key == "1"){
      // 登录
      this.setState({
        action:"1"
      })
    }
    if(key == "2"){
      // 注册
      this.setState({
        action:"2"
      })
    }
  }

  // 登出
  logoutHandler(event){
    localStorage.removeItem("username");
    this.setState({
      isLogin:false
    })
  }

  render(){

    const { getFieldDecorator } = this.props.form;

    var isLoginView = this.state.isLogin
    ?
    <Menu.Item className="login" key="login">
      <Button type="primary">{ this.state.username }</Button>
      <Button><Link to="/center">个人中心</Link></Button>
      <Button onClick={this.logoutHandler.bind(this)} type="primary">登出</Button>
    </Menu.Item>
    :
    <Menu.Item className="login" key="register">
      登录|注册
    </Menu.Item>

    return(
      <div className="nav">
        <Menu onClick={this.menuHandler.bind(this)} mode="horizontal" selectedKeys={[this.state.currentKey]}>
          <Menu.Item key="index">
            <Link to="/"><Icon type="credit-card" />首页</Link>
          </Menu.Item>
          <Menu.Item key="yule">
            <Link to="/yule"><Icon type="desktop" />娱乐</Link>
          </Menu.Item>
          <Menu.Item key="tiyu">
            <Link to="/tiyu"><Icon type="appstore" />体育</Link>
          </Menu.Item>
          <Menu.Item key="junshi">
            <Link to="/junshi"><Icon type="line-chart" />军事</Link>
          </Menu.Item>
          <Menu.Item key="guoji">
            <Link to="/guoji"><Icon type="solution" />国际</Link>
          </Menu.Item>
          <Menu.Item key="guonei">
            <Link to="/guonei"><Icon type="rocket" />国内</Link>
          </Menu.Item>
          { isLoginView }
        </Menu>

        {/* 登录注册模态框 */}
        <Modal title="登录与注册" visible={this.state.visible}  onOk={this.closeModelHandler.bind(this)} onCancel={this.closeModelHandler.bind(this)}>
          <Tabs defaultActiveKey="1" onChange={this.changeTabs.bind(this)}>
            <TabPane tab="登录" key="1">
                {/* 登录表单 */}
                 <Form layout="vertical" onSubmit={this.handleSubmit.bind(this)}>
                  <FormItem>
                    {getFieldDecorator('userName', {
                     rules: [{ required: true, message: 'Please input your username!' }],
                     })(
                     <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('password', {
                     rules: [{ required: true, message: 'Please input your password!' }],
                     })(
                     <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="password" />
                    )}
                  </FormItem>
                  <FormItem>
                     <Button type="primary" htmlType="submit">
                       Log in
                     </Button>
                  </FormItem>
                 </Form>
            </TabPane>
            <TabPane tab="注册" key="2">
                {/* 注册侧表单 */}
                <Form layout="vertical" onSubmit={this.handleSubmit.bind(this)}>
                 <FormItem>
                   {getFieldDecorator('regUserName', {
                    rules: [{ required: true, message: 'Please input your regUserName!' }],
                    })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="username" />
                   )}
                 </FormItem>
                 <FormItem>
                   {getFieldDecorator('regPassword', {
                    rules: [{ required: true, message: 'Please input your regPassword!' }],
                    })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="password" />
                   )}
                 </FormItem>
                 <FormItem>
                    <Button type="primary" htmlType="submit">
                      register
                    </Button>
                 </FormItem>
                </Form>
            </TabPane>
          </Tabs>
        </Modal>
      </div>
    )
  }
}

export default Nav = Form.create({})(Nav);
