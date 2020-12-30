import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Head } from 'components/Head';

class BaseContainer extends PureComponent {

  render(){
    const { loginData } = this.props
    console.log(loginData);
    return(
      <Head />
    )
  }
}

function mapStateToProps(state, ownProps){
  const loginData = state.data.getIn(['entries', 'profile']).toJS()

  return{
    loginData,
  }
}

function mapDispatchToProps(dispatch){
  return{
  }
}

export const BaseRedux = connect(mapStateToProps, mapDispatchToProps)(BaseContainer)