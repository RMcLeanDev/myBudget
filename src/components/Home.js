import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';

function Home(props){

  let display;

  if(props.userInformation){
    display = 
    <div>
      <Header userInformation={props.userInformation}/>
      <h1>Welcome to my budget!</h1>
    </div>
  } else {
    display = <img src={require('../assets/loadingGif.gif')} />
  }

  return(
    <div>
      {display}
    </div>
  )
}

const mapStateToProps = state => ({
  userInformation: state.userInformationState
})

export default connect(mapStateToProps)(Home);
