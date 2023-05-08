import React, { Component } from 'react'
import './index.css'
import Youhua from '../../components/youhua'
import Product from '../../components/product'
import Facility from '../../components/facility'
import Safe from '../../components/safe'
import Energy from '../../components/energy'
export default class Thirty extends Component {
    render() {
        // console.log('About组件收到的props是',this.props);
        return (
            <div className="thirtyMain" >
                {/* 重点研发30个app */}
                <div className="differDomain">
                    <Youhua />
                    <Product />
                    <Facility />
                    <Safe />
                    <Energy />
                </div>
            </div>
        )
    }
}
