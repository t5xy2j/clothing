import React from 'react'
import './checkout-item.styles.scss'
import {connect} from 'react-redux'
import {removeItems,addItems,removeFromArrow} from '../../redux/cart/cart.actions'

const CheckoutItem = ({cartItem,removeItems,addItems,removeFromArrow})=>{
    const {imageUrl,name,price,quantity} = cartItem
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='image'/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={()=>removeFromArrow(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={()=>addItems(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={()=>removeItems(cartItem)}>&#10005;</div>
        </div> 
    )
}

const mapDispatchToProps = dispatch =>({
    removeItems : (cartItem)=>dispatch(removeItems(cartItem)),
    addItems : (cartItem)=>dispatch(addItems(cartItem)),
    removeFromArrow : (cartItem)=>dispatch(removeFromArrow(cartItem)),
})
export default connect(null,mapDispatchToProps)(CheckoutItem)