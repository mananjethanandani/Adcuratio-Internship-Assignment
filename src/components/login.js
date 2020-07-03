import React, { useState } from 'react';
import "../css/login.css"
import data from '../data/data.json'

const verifyPassword = password => {
  var specialChars = /[!-/:-@[-`{-~]/;
  var number = /\d/;
  var lowerChars = /[a-z]/;
  var upperChars = /[A-Z]/;
  
  if (password.length > 8 && specialChars.test(password) && number.test(password) 
  && lowerChars.test(password) && upperChars.test(password)){  
    return true
  }
  return false

}

const verifyEmail = email => {
 var isValid = false
  data.forEach(function(user, index) {
    if (email === user.email){
      isValid = true
    }  
  });
  return isValid
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 
function Login(props) {
  const useremail = useFormInput('');
  const password = useFormInput('');
 
  // handle button click of login form
    const handleLogin = () => {
      var validPassword = verifyPassword(password.value)
      var validEmail = verifyEmail(useremail.value) 
      if(validPassword && validEmail){
      props.history.push('/dashboard');
    }
      else{
        alert("Incorrect Credentials")
      }
  }

 
  return (
    <div className="login-main">
      <div className="login-email">
        <b>Email</b><br />
        <input className="email-input" type="text" {...useremail} />
      </div>
      <div className="login-password">
        <b>Password</b><br />
        <input className="password-input" type="password" {...password} />
        <br /><br />
      </div>
      <div >
      <input className="login-button" type="button" value='Login' onClick={handleLogin} onSubmit={handleLogin} />
      </div>
    </div>
  );
}
 
 
export default Login;
