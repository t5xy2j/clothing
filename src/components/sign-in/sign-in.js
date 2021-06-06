import React, { Component } from 'react'
import './sign-in.scss'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'
import {setCurrentUser} from '../../redux/user/user-actions'
import {connect} from 'react-redux'

class SignIn extends Component{
    constructor(){
        super();
        this.state = {
            email : '',
            password : ''
        }
    }
    handleSubmit =async event =>{
        event.preventDefault();
        const {email,password} = this.state 
        console.log(email,password)
        this.props.setCurrentUser({
            email:email,
            password:password,
        })
        // try{
        //     await auth.signInWithEmailAndPassword(email,password)
        //     this.setState({email:'',password:''})        
        // }catch(error){
        //     console.log(error)
        // }
    }
    handleChange = event =>{
        const {value,name} = event.target
        this.setState({[name] : value})
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have account</h2>
                <span>Sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='email'
                        required
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                            Sign in with Google{' '}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) =>({
    setCurrentUser : user =>dispatch(setCurrentUser(user))
})
export default connect(null,mapDispatchToProps)(SignIn)