import React from 'react'

import { googleProvider, auth } from './base'
import './SignIn.css'

const SignIn = () => {

  const authenticate = () => {
    auth.signInWithPopup(googleProvider)
  }

  return(
    <div className="SignIn">
      <h1>SIGN IN NOW</h1>
      <button onClick={authenticate}>Sign In</button>
    </div>
  )
}

export default SignIn