import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import './loginForm.css';

import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export class LoginForm extends Component {
  state = {
    login: '',
    password: '',
  }

  checkLogin = (login) => {
    let result;
    if (login){
      if (login.match(/[a-z]/gi) === null){
        result = false;
      }else{
        result = login === login.match(/[a-z]/gi).join('');
      }
      return result;
    }else{
      return
    }
  }

  checkPassword = (password) => {
    let result;
    const validation = /(?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
    if (password){
      if (password.match(validation) === null){
        result = false;
      }else{
        result = password === password.match(validation).join('');
      }
      return result;
    }else{
      return
    }
  }

  handleInputChange = (event) => {
    const fieldName = event.target.name
    this.setState({
      [fieldName]: event.target.value
    })
  }

  handleLogin = () => {
    const { login, password } = this.state
    const { SignIn } = this.props

    if (!this.checkPassword(password) || !this.checkLogin(login)){
      this.handleLoginErrors(login, password)
    }else{
      if(document.querySelector('.format-error')){
        document.querySelector('.format-error').remove()
      }
      SignIn(this.state)
    }
  }

  handleLoginErrors = (login, password) => {
    if(document.querySelector('.format-error')){
      document.querySelector('.format-error').remove()
    }
    const error = document.createElement('div')
    error.classList.add('format-error')
    document.querySelector('.login-form').append(error)

    if(!this.checkPassword(password) && !this.checkLogin(login)){
      error.textContent = 'Неверный формат данных';
    }else if (!this.checkPassword(password) && this.checkLogin(login)){
      error.textContent = 'Неверный формат пароля';
    }else{
      error.textContent = 'Неверный формат логина'
    }
  }
  checkLinkPath = (login, password) => {
    let result;
    if (!this.checkLogin(login) || !this.checkPassword(password)){
      result =  false
    }else{
      result =  true
    }
    return result
  }
  
  render(){
    const { login, password } = this.state
    const { Login } = this.props
    return(
      <div>
        <header>
          <AppBar position="static" className="MY CLASS">
            <Toolbar className="nav">
              <div className="nav-elems">
                <Link to='/' className="nav-link">
                  <Button className="nav-link-btn" variant="outlined">Head</Button>
                </Link>
                <Link to='/news' className="nav-link">
                  <Button className="nav-link-btn" variant="outlined">News</Button>
                </Link>
              </div>
              {Login.login ? 
              <Link to='/profile' className="log-in-link">
                <Button className="log-in-link-btn" variant="outlined" color="inherit">Profile</Button>
              </Link> :
              <Link to='/login' className="log-in-link">
                <Button className="log-in-link-btn" variant="outlined" color="inherit">LOG IN</Button>
              </Link>
              }
            </Toolbar>
          </AppBar>
        </header>
        <div className="login-form">
          <TextField name="login" onChange={this.handleInputChange} className="text-input login" id="standard-required" label="Login"/>
          <TextField name="password" onChange={this.handleInputChange} className="text-input password" id="standard-password-input" label="Password" type="password" autoComplete="current-password"/>
          <Link to={!this.checkLinkPath(login, password) ? () => {return} : '/'} className="login-link">
            <Button onClick={this.handleLogin} className="login-btn" variant="outlined" color="primary">LOGIN</Button>
          </Link>
        </div>
      </div>
    )
  }
}