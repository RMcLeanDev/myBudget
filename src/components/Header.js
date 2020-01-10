import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function Header(){
  const Div = styled.div`
    h2{
      margin-top: 0;
      padding-top: 15px;
    }
  `
  return(
    <Div>
      <h2>THIS IS A HEADER</h2>
      <Link to='/'>Home</Link>
    </Div>
  )
}

export default Header
