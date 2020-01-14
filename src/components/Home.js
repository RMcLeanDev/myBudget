import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';

function Home(props){

  return(
    <div>
      <Header userInformation={props.userInformation}/>
      <h1>Welcome to me</h1>
    </div>
  )
}

const mapStateToProps = state => ({
  userInformation: state.userInformationState
})

export default connect(mapStateToProps)(Home);
