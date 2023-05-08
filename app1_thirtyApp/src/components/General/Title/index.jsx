import React, { Component } from 'react'
// import picturetitle from '../../pictures/logo.png'
import picturetitle from '../../../pictures/logo.png'
import "./index.css"
export default class Title extends Component {
    render() {
        return (
            <div className='icon'>
                <img src={picturetitle} alt="图片url失效" ></img>
            </div>
        )
    }
}
