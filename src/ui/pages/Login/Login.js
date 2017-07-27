import React, { Component } from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import './login.css'
import axios from 'axios'
import {
  Link
} from 'react-router-dom'
import Settings from '../../../settings'
import store from '../../../redux/store'


class Login extends Component {
	login=(e)=>{
		e.preventDefault()
		let username=this.usernameInput.value
	    let password=this.passwordInput.value
	    let data={username,password}
	    axios.post(`${Settings.host}/user/login`, data).then( res => {
	      console.log(res.data)
        this.props.history.push('./dashboard')
        store.dispatch({type:'AUTH_USER',user:res.data.username})
        
      
    	}).catch(err=>{
        console.log(err.response.data.msg)
      })
	}
 

  render() {
    return(
      <div className="signup">
        <TitleHeader title="login" />
        <div className="signup-content">
          <div className="signup-hero" >
            <h1 className="title">
              登录
            </h1>
            <p className="slogan">
              连接小而确定的幸福
            </p>
          </div>
          <form onSubmit={this.login} className="signup-form">
            <div className="signup-text-inputs">
              <div className="signup-text-inputs-inner">
                <input ref={value=>this.usernameInput=value} type="text" placeholder="用户名" />
                <input ref={value=>this.passwordInput=value} type="password" placeholder="password" />  
              </div>
            </div>
            <div className="signup-actions">
              <button type="submit">登录</button>
            </div>
          </form>
          <div className="signup-other-option">
            <Link to="/signup">没有账号？直接注册</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Login