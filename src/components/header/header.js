import React from 'react'
import {HeaderContainer,LogoContainer,OptionsContainer,OptionDiv,OptionLink} from './Header-styled'
import {connect} from 'react-redux'
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
        <HeaderContainer> 
            <LogoContainer to='/'>
                <Logo className='logo'/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>
                    Shop
                </OptionLink>
                <OptionLink to='/contact'>
                    Contact
                </OptionLink>
                {
                    currentUser ?
                    <OptionDiv onClick={() => setCurrentUser(null)}>
                        Sign Out
                    </OptionDiv>
                    :
                    <OptionLink to='/signin'>
                        Sign in                
                    </OptionLink>
                }
                <CartIcon/>
            </OptionsContainer>
            {
                hidden ? null :
                <CartDropdown/>
            }
        </HeaderContainer>
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