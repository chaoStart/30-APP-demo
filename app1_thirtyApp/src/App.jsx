import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home' //Home是路由组件
// import Yierchun from './pages/About' //About是路由组件
import Yierchun from './pages/Yierchun' //About是路由组件
import List from './pages/List'//List是路由组件
import Thirty from './pages/Thirty'//Thirty是路由组件
import Environment_hbt from './pages/Environment_hbt'//Environment_hbt是路由组件

import Header from './components/General/Header'//Header是一般组件
// import { NavLink } from 'react-router-dom'
import MyNavLink from './components/General/MyNavLink'
import './App.css'
import picture from './pictures/icon_l3.png'
import Title from './components/General/Title'

export default class App extends Component {
	render() {
		return (
			//#region 
			// <div className='grid-container' >
			// 	<div className="row">
			// 		<div className="col-xs-offset-2 col-xs-8">
			// 			<Header/>
			// 		</div>
			// 	</div>
			// 	<div className="row">
			// 		<div className="col-xs-2 col-xs-offset-2">
			// 			<div className="list-group">
			// 				<MyNavLink to="/about">About</MyNavLink>
			// 				<MyNavLink to="/home">Home</MyNavLink>
			// 			</div>
			// 		</div>
			// 		<div className="col-xs-6">
			// 			<div className="panel">
			// 				<div className="panel-body">
			// 					{/* 注册路由 */}
			// 					<Switch>
			// 						<Route path="/about" component={About}/>
			// 						<Route path="/home" component={Home}/>
			// 						<Redirect to="/about"/>
			// 					</Switch>
			// 				</div>
			// 			</div>
			// 		</div>
			// 	</div>
			// </div>
			//#endregion
			<div className='grid-container' >
				<div className="header">
					<Header />
				</div>
				<div className="menu" >
					<Title />
					{/* 编写路由链接 */}
					<div className="about">
						<span><img src={picture} alt="图片url失效" className="img"></img></span>&nbsp;&nbsp;
						{/* <NavLink to="/about" style={{ fontSize: "16px", color: 'white' }}>煤制乙二醇平台</NavLink> */}
						<MyNavLink to="/yierchun">煤制乙二醇平台</MyNavLink>
					</div>
					<div className='list'>
						<span><img src={picture} alt="图片url失效" className="img"></img></span>&nbsp;&nbsp;
						<MyNavLink to="/list">虚拟仿真平台</MyNavLink>
					</div>
					<div className='thirty'>
						<span><img src={picture} alt="图片url失效" className="img"></img></span>&nbsp;&nbsp;
						<MyNavLink to="/thirty" >重点研发30个APP</MyNavLink>
					</div>
					<div className='environment'>
						<span><img src={picture} alt="图片url失效" className="img"></img></span>&nbsp;&nbsp;
						<MyNavLink to="/environment">环保厅在线监测</MyNavLink>
					</div>
					<div className='home'>
						<span><img src={picture} alt="图片url失效" className="img"></img></span>&nbsp;&nbsp;
						<MyNavLink to="/home">其他选项</MyNavLink>
					</div>
				</div>
				<div className="main">
					{/* 注册路由 */}
					<Switch>
						<Route path="/yierchun" component={Yierchun} />
						<Route path="/home" component={Home} />
						<Route path="/list" component={List} />
						<Route path="/thirty" component={Thirty} />
						<Route path="/environment" component={Environment_hbt} />
						<Redirect to="/about" />
					</Switch>
				</div>
			</div>
		)
	}
}
