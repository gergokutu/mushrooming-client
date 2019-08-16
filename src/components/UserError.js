import React from 'react'

class UserError extends React.Component{
  
  render(){
    const pStyle = {
      fontSize: '15px',
      textAlign: 'center'
    };
     
    if(this.props.message==='user_email_error'){
      return <p style={pStyle}>User unknown</p>
    }
    if(this.props.message==='user_password_error'){
      return <p style={pStyle}>Wrong password</p>
    }
    
    return null
  }

}
export default UserError
