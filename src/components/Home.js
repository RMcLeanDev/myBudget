import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import Budget from './budgetComponents/Budget';
import Debts from './debtComponents/Debts';
import Savings from "./savingsComponents/Savings";

function Home(props){

  let display;

  if(props.userInformation){
    display = 
    <div>
      <Header userInformation={props.userInformation}/>
      <h1>Welcome to my budget!</h1>
      <Debts debts={props.userInformation.debts}/>
      <Budget budget={props.userInformation.budget}/>
      <Savings savings={props.userInformation.savings}/>
    </div>
  } else {
    display = <div className="loadingGif"><img src={require('../assets/loadingGif.gif')} /></div>
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
