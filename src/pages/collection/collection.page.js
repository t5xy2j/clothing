import React from 'react'
import { connect } from 'react-redux'
import CollectionItem from '../../components/collection-item/collection-item'
import { selectCollection } from '../../redux/shop/shop.selector'
import './collection.scss'

const CollectionPage = ({collection})=>{
    console.log(collection)
    const {items,title} = collection
    return(
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
        {
            items
            // .filter((item,index) => index < 4)
            .map(item =>(
                <CollectionItem key={item.id} item={item}/> 
            ))
        } 
        </div>
    </div>
)}

const mapStateToProps = (state,ownProps)=>({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)