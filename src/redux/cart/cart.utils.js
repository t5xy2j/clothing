export const AddItemToCart = (cartItems , itemToAdd) =>{
    const itemExists = cartItems.find(cartItem => cartItem.id === itemToAdd.id)
    if(itemExists){
        return cartItems.map(item =>
            item.id === itemToAdd.id ?
                {...item,quantity:item.quantity + 1}
            :
                item  
        )
    }

    return [...cartItems,{...itemToAdd,quantity:1}]
}
export const RemoveItemFromCart = (cartItems , itemToDel) =>{
    const itemExists = cartItems.filter(cartItem => cartItem.id !== itemToDel.id)    
    return itemExists
}
export const RemoveItemFromArrow = (cartItems , itemToDel) =>{
    const ExistingItem = cartItems.find(cartItem => cartItem.id === itemToDel.id)  
    if(ExistingItem.quantity == 1){
        return cartItems.filter(cartItem => cartItem.id !== ExistingItem.id)
    }  

    return cartItems.map(cartItem =>
        cartItem.id === itemToDel.id ?
        {
            ...cartItem,  
            quantity : cartItem.quantity - 1
        }
        :
        cartItem
    )
}
// export default AddItemToCart