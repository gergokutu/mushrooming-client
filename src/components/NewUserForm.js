import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 200px;
  height: 290px;
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
`;

// correct={true} » refers to StyledInput
function NewUserForm (props) {
  const { onSubmitNew, onChangeNew, values } = props
  console.log('NewUserForm values:', values)
  const { newemail, newpassword, nickname, avatarUrl } = values

  return (
    <form onSubmit={onSubmitNew}>
    <StyledLogin>
      <h2>Never Played?</h2>

      <StyledInput 
      type="text" 
      name='newemail'
      value={newemail}
      onChange={onChangeNew} 
      placeholder="email" 
      />
      <StyledInput
       type="password"
       name='newpassword'
       value={newpassword}
       onChange={onChangeNew} 
       placeholder="password" 
       />
      <StyledInput 
      type="text"
      name="nickname" 
      value={nickname}
      onChange={onChangeNew}  
      placeholder="nickname" 
      />
      <StyledInput 
      type="text"
      name='avatarUrl'
      value={avatarUrl}
      onChange={onChangeNew} 
      placeholder="avatarUrl" 
      />
      <Link to='/forest'>
      <button type='submit'>Create User</button>
      </Link>
    </StyledLogin>
    </form>
  )
}

export default NewUserForm