import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginForm } from 'components/loginForm';
import { signIn } from 'actions'

class loginContainer extends PureComponent {

  render(){
    const { SignIn, loginData } = this.props
    return (
      <LoginForm SignIn={SignIn} Login={loginData}/>
    )
  }
}

function mapStateToProps(state, ownProps){
  const loginData = state.data.getIn(['entries', 'profile']).toJS()
  return{
    loginData
  }
}

function mapDispatchToProps(dispatch){
  return{
    SignIn: (data) => dispatch(signIn(data))
  }
}

export const loginRedux = connect(mapStateToProps, mapDispatchToProps)(loginContainer)