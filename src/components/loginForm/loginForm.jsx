import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import './loginForm.css'

export class LoginForm extends Component {
  state = {
    login: '',
    password: ''
  }

  checkName = (name) => {
    let result;
    if (name){
      if (name.match(/[a-z]/gi) === null){
        result = false;
      }else{
        result = name === name.match(/[a-z]/gi).join('');
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
    if (!this.checkPassword(password)){
      console.log(false)
    }else{
      console.log(true)
    }
  }
  render(){
    return(
      <div className="login-form">
        <TextField name="login" onChange={this.handleInputChange} className="text-input login" id="standard-required" label="Login"/>
        <TextField name="password" onChange={this.handleInputChange} className="text-input password" id="standard-password-input" label="Password" type="password" autoComplete="current-password"/>
        <Button onClick={this.handleLogin} className="login-btn" variant="outlined" color="primary">LOGIN</Button>
      </div>
    )
  }
}