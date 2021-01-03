import React, { PureComponent } from 'react';
import { News } from 'components/news';
import { connect } from 'react-redux';

class newsContainer extends PureComponent {

  render(){
    const { loginData } = this.props
    return (
      <News Login={loginData}/>
    )
  }
}

function mapStateToProps(state, ownProps){
  const loginData = state.data.getIn(['entries', 'profile']).toJS()
  return {
    loginData
  }
}
function mapDispatchToProps(dispatch){

  return {

  }
}

export const newsRedux = connect(mapStateToProps, mapDispatchToProps)(newsContainer)