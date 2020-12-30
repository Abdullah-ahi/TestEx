import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginForm } from 'components/loginForm';
import { signIn } from 'actions'

class loginContainer extends PureComponent {

  render(){
    const { SignIn } = this.props
    return (
      <LoginForm SignIn={SignIn}/>
    )
  }
}

function mapStateToProps(state, ownProps){
  return{

  }
}

function mapDispatchToProps(dispatch){
  return{
    SignIn: (data) => dispatch(signIn(data))
  }
}

export const loginRedux = connect(mapStateToProps, mapDispatchToProps)(loginContainer)