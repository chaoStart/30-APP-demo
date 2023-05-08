// import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'

// export default class MyNavLink extends Component {
// 	render() {
// 		console.log(this.props);
// 		return (
// 			// <NavLink activeClassName="atguigu" className="list-group-item" {...this.props}/>
// 		)
// 	}
// }
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index'
export default class MyNavLink extends Component {
    render() {
        return (
            <NavLink className="form" {...this.props} style={{ fontSize: "16px", color: 'white', textDecoration: 'none' }} />
        )
    }
}
