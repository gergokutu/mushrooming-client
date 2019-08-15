import React from 'react'
import styled from "styled-components"

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 200px;
  height: 200px;
  margin: 50px auto 50px;
  border: 2px solid #000;
  border-radius: 20px;
  background: #eee;

  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }

  button {
    background: green;
    color: #fff;
    padding: 10px;
    margin: 5px;
    width: 150px;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
  }
`;

const StyledInput = styled.input`
border: 1px solid #000;
border-radius: 10px;
padding: 10px;
margin: 5px;
width: 150px;
box-sizing: border-box;
// background: ${prop => prop.correct ? 'white' : 'red'};
`;

// correct={true} » refers to StyledInput
function LoginForm (props) {
  const { onSubmitLogin, onChangeLogin, values } = props
  const { email, password } = values

  return (
    <form onSubmit={onSubmitLogin}>
    <StyledLogin >
      <h2>Let's Mushrooming!</h2>

      
        <StyledInput 
          correct={true} 
          type="text"
          name='email'
          value={email}
          onChange={onChangeLogin} 
          placeholder="email" 
        />
        <StyledInput 
          correct={false} 
          type="password"
          name='password'
          value={password}
          onChange={onChangeLogin} 
          placeholder="password" 
        />
        
          <button type='submit'>Login</button>
        
      
    </StyledLogin>
    </form>
  )
}

export default LoginForm
