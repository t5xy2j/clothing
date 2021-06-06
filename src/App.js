import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop'
import CollectionPage from './pages/collection/collection.page'
import Header from './components/header/header'
import SigninAndSignup from './pages/signin-signup/signin-signup'
import {Switch,Route,Redirect} from 'react-router-dom'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import { Component } from 'react';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user-actions';
import CheckoutPage from './pages/checkout/checkout'

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentUser : null,
    }
  }
  unsubscribeFromAuth = null
  componentDidMount(){
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser:user})
      // createUserProfileDocument(user)
      if(this.props.currentUser){
        // const userRef = await createUserProfileDocument(userAuth)
        // userRef.onSnapshot(snapShot =>{
        //   setCurrentUser({
        //     id:snapShot.id,
        //     ...snapShot.data()
        //   });
        // });

        setCurrentUser(this.props.currentUser)
      }else{
        setCurrentUser(userAuth)

      }

    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
    console.log(this.props.currentUser)
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/signin' render = {()=> this.props.currentUser ? <Redirect to='/' /> : <SigninAndSignup/>}/>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({user}) =>({
  currentUser : user.currentUser
})
const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
