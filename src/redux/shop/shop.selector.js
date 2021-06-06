import {createSelector} from 'reselect'

const shopSelect = state => state.shop

export const selectCollections = createSelector(
    [shopSelect],
    shop => shop
)

export const selectCollectionForPreview = ()=>(
    createSelector(
        [selectCollections],
        collection => Object.keys(collection).map(keys=>collection[keys])
    )
)

export const selectCollection = URLParam =>(  
    createSelector(
        [selectCollections],
        collection => collection[URLParam]
    )
)