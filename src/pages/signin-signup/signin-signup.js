import React from 'react'
import './signin-signup.scss'
import SignIn from '../../components/sign-in/sign-in'
import Signup from '../../components/sign-up/sign-up'

const SigninAndSignup = () =>(
    // componentWillReceiveProps(nextProps) {
    //     console.log("nextProps",nextProps)
    //     if (nextProps.location.pathname !== this.props.location.pathname) {
    //         console.log("different")
    //     }else{
    //         console.log("same")
    //     }
    // }
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <Signup/>
    </div>
)

export default SigninAndSignup