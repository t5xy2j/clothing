import {createSelector} from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)
export const selectHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)
export const selectCartItemCount = createSelector( 
    [selectCartItems],
    cartItems => cartItems.reduce((AccQuantity,cartItem) =>
        AccQuantity+cartItem.quantity,0
    )
)
export const selectTotalAmount = createSelector( 
    [selectCartItems],
    cartItems => cartItems.reduce((AccQuantity,cartItem) =>
        AccQuantity+cartItem.quantity*cartItem.price,0
    )
)