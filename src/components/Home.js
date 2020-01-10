import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

function Home({dispatch}){
  const Something = styled.h1`
    @keyframes pulse {
      0%{color: hotpink}
      50%{color: limegreen}
      100%{color: hotpink}
    }
      animation: pulse 1s linear infinite;
      color: green;
      &:hover {
        cursor: pointer;
        animation: none;
        color: black;
      }
  `

  return(
    <div>
      <Something>My Budget</Something>
    </div>
  )
}

export default connect()(Home)
