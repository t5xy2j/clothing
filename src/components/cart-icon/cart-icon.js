import React from 'react'
import './cart-icon.styles.scss'
import {selectCartItemCount} from '../../redux/cart/cart.selectors'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

const CartIcon = ({toggleCartHidden,itemCount})=>(
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden}/>
        <span className='item-count'>{itemCount}</span>
    </div>
)
const mapDispatchToProps = dispatch =>({
    toggleCartHidden : ()=>dispatch(toggleCartHidden())
})
const mapStateToProps = (state) =>({
    itemCount : selectCartItemCount(state)
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)