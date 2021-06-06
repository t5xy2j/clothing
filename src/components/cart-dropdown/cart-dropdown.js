import React from 'react'
import {connect} from 'react-redux'
import CustomButton from '../custom-button/custom-button'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

const CartDropdown = ({cartItems,history,dispatch})=>{
    console.log(cartItems)
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map(cart =>
                    <CartItem key={cart.id} item={cart}/>
                )
                :
                <span className='empty-message'>Nothing added to cart</span>
            }
            </div>
            <CustomButton onClick={()=>{
                history.push('./checkout');
                dispatch(toggleCartHidden())
                }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) =>({
    cartItems: selectCartItems(state)
})
export default withRouter(connect(mapStateToProps,null)(CartDropdown))