import React, { Component } from 'react';
import './profile.css';

import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import classNames from 'classnames'
export class Profile extends Component {
  state = {
    tel: '',
    InputIsVisible: false,
  }

  handleAddTel = () => {
    const { SignIn, Login } = this.props
    const { tel } = this.state
    if (this.checkTel(tel)){
      if (document.querySelector('.format-error')){
        document.querySelector('.format-error').remove()
      }
      SignIn(this.state)
      this.setState({
        InputIsVisible: false,
      })
    }else{
      this.showTelError()
    }
  }
  showTelError = () => {
    if (document.querySelector('.format-error')){
      document.querySelector('.format-error').remove()
    }
    const error = document.createElement('div')
    error.classList.add('format-error')
    error.textContent = 'Телефон должен быть введен в формате +7-000-000-0000'
    document.querySelector('.profile-info').append(error)
  }
  handleInputChange = (event) => {
    const fieldName = event.target.name

    this.setState({
      [fieldName]: event.target.value
    })
  }
  showInput = () => {
    const { InputIsVisible } = this.state
    if (document.querySelector('.format-error')){
      document.querySelector('.format-error').remove()
    }
    this.setState({
      InputIsVisible: !InputIsVisible
    })
  }
  checkTel(tel){
    let result;
    if (tel.match(/\+7[\-]\d{3}[\-]\d{3}[\-]\d{4}/) === null){
      result = false;
    }else{
      result = tel === tel.match(/\+7[\-]\d{3}[\-]\d{3}[\-]\d{4}/).join('');
    }
    return result;
  }
  render(){
    const { Login } = this.props
    const { InputIsVisible } = this.state

    const inputClasses = classNames('tel', {
      'show': InputIsVisible,
      'hide': !InputIsVisible
    })
    const BtnClasses = classNames('log-out-block-btn', {
      'show': InputIsVisible,
      'hide': !InputIsVisible
    })
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
        <div className="profile-info-container">
          {Login.login 
          ? 
          <div className="profile-info">
            <h1>{Login.login}</h1>
            <h2 className="login-tel">{Login.tel}</h2>
            <Button onClick={this.showInput} className="show-input-btn" variant="outlined" color="inherit">{Login.tel ? 'Изменить телефон' : 'Добавить телефон'}</Button>
            <Input name="tel" onChange={this.handleInputChange} type="tel" placeholder="+7-999-826-3596" variant="outlined" multiline={false}  className={inputClasses}></Input>
            <Button onClick={this.handleAddTel} className={BtnClasses} variant="outlined" color="inherit">Добавить</Button>
          </div> 
          :
          <div className="log-out-block">
            <h3 className="log-out-message">Авторизуйтесь, чтобы получить доступ к данному разделу</h3>
            <Link to='/login' className="log-out-block-link">
              <Button className="log-out-block-btn" variant="outlined" color="inherit">LOG IN</Button>
            </Link>
          </div>
          }
        </div>
      </div>
    )
  }
}