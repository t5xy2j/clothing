import React from 'react'
import './header.scss'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils'
import {setCurrentUser} from '../../redux/user/user-actions'
import {selectCurrentUser} from '../../redux/user/user.selector'
import {selectHidden} from '../../redux/cart/cart.selectors'

const Header = ({currentUser,setCurrentUser,hidden}) =>{
    console.log(currentUser)
    return(
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/contact'>
                Contact
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => setCurrentUser(null)}>
                    Sign Out
                </div>
                :
                <Link className='option' to='/signin'>
                    Sign in                
                </Link>
            }
                <CartIcon/>
            </div>
            {
                hidden ? null :
                <CartDropdown/>
            }
        </div>
    )
}

const mapStateToProps = (state) =>({
    currentUser:selectCurrentUser(state),
    hidden : selectHidden(state)
})
const mapDispatchToProps = dispatch =>({
    setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)