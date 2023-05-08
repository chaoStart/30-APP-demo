import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import MyNavLink from '../../components/MyNavLink'
import { Route, Switch, Redirect } from 'react-router-dom'
import News from './News'
import Message from './Message'
import './index.css'

export default class Home extends Component {
	render() {
		return (
			<div>
				<h3 className={{ color: "white" }}>我是Home的内容</h3>
				<div>
					{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
					<div className='News' style={{ display: 'inline' }} >
						<NavLink to="/home/news" >News</NavLink>
					</div>
					<div className='Message' style={{ display: 'inline' }}>
						<NavLink to="/home/message">Message</NavLink>
					</div>
					{/* 注册路由 */}
					<Switch>
						<Route path="/home/news" component={News} />
						<Route path="/home/message" component={Message} />
						<Redirect to="/home/news" />
					</Switch>
				</div>
			</div>
		)
	}
}
