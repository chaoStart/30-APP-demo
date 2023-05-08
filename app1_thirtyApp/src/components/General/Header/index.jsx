import React, { Component } from 'react'
import "./index.css"
// import pictures0 from '../../pictures/南京工业大学logo.png'
import pictures0 from '../../../pictures/南京工业大学logo.png'
export default class Header extends Component {
	render() {
		console.log('Header组件收到的props是', this.props);
		return (
			<div className="nj" >
				<div className='nj_logo'>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<img src={pictures0} alt="图片url失效"></img>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</div>
				<div className="head" >
					工业APP开发生态系统的构建与实施应用
				</div>
				<div className="forbaidu">
					搜索:&nbsp;<input type="text" name="FirstName" value="装置收率" />
					{/* <input type="submit" value="提交" /> */}
				</div>
			</div>
		)
	}
}
