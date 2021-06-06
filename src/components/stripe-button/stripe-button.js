import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({price}) =>{
    const priceForStripe = price*1000
    const publishableToken = 'pk_test_51IzFhWSBlXWJvFgm2uUsqpX5vlKrAIMGesqrzLsRf0zrCLGw3kXXNLIWv1y3XOmmytuLbtuqCjBuVqUSh2TR2eo100UeefIwQW'
    const onToken = (token) =>{
        console.log(token)
        alert('Successfull Payment Done...')
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            description={`Amount is $${price}`}
            image='https://svgshare.com/i/CUz.svg'
            billingAddress
            shippingAddress
            amount={priceForStripe}
            stripeKey={publishableToken}
            panelLabel='Pay Now'
            token={onToken}
        />
    )
}

export default StripeButton