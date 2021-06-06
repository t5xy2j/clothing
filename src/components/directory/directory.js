import React, { Component } from 'react'
import './directory.scss'
import MenuItem from '../menu-item/menu-item'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { directorySelector } from '../../redux/directory/directort.selector'

const Directory = ({sections})=>(
    <div className="directory-menu">
        {
            // this.state.sections.map(({title,imageUrl,id,size,linkUrl},index) =>(
            //     <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
            // ))
            sections.map(({id, ...sectionProps},index) =>(
                <MenuItem key={id} {...sectionProps}/>
            ))
        }
    </div>
)   

const mapStateToProps = createStructuredSelector({
    sections:directorySelector
})
export default connect(mapStateToProps)(Directory)
