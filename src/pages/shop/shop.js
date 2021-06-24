import React from 'react'
import { Component } from 'react'
import {Route} from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/collection-overview'
import CollectionPage from '../collection/collection.page'
import {WithSpinner} from '../../components/with-spinner/with-spinner'

const CollectionWithSpinnerOverview = WithSpinner(CollectionOverview)
const CollectionWithSpinnerPage = WithSpinner(CollectionPage)
class ShopPage extends Component{
    state = {
        loading : true
    }
    componentDidMount = ()=>{
        setTimeout( () => {
            this.setState( {loading : false});
        },2000)
    }
    render(){
        const {match} = this.props
        const {loading} = this.state
        console.log(match)
        return(
        
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props)=>(
                <CollectionWithSpinnerOverview isLoading={loading} {...props}/>
            )}/>
            <Route path={`${match.path}/:collectionId`} render={(props)=>(
                <CollectionWithSpinnerPage isLoading={loading} {...props}/>
            )}/>
        </div>  
        )  
    }
}



export default ShopPage 