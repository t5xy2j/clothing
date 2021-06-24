import React from 'react'
import {SpinnerOverlay,SpinnerContainer} from './with-spinner.styles'

export const WithSpinner = MyComponent => ({isLoading , ...props}) => {
    return isLoading ? (
        <SpinnerContainer>
            <SpinnerOverlay/>
        </SpinnerContainer>
    )
    : 
    <MyComponent {...props}/>
}

