import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Head } from 'components/Head'

class BaseContainer extends PureComponent {

  render(){
    return(
      <Head/>
    )
  }
}

function mapStateToProps(state, ownProps){
  return{

  }
}

function mapDispatchToProps(dispatch){
  return{

  }
}

export const BaseRedux = connect(mapStateToProps, mapDispatchToProps)(BaseContainer)