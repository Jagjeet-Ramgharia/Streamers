import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React from 'react'
import './list.scss'

const List = () => {
    return (
        <div className="list">
            <span className="list_title">Continue to Watch..</span>
            <div className="wrapper">
                <ArrowBackIosOutlined/>
                <div className="container">
                    
                </div>
                <ArrowForwardIosOutlined/>
            </div>
        </div>
    )
}

export default List
