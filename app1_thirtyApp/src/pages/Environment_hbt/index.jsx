import React, { Component } from 'react'
// import HomeVideoBtn from '../../components/video-btn/videobtn'
import HomeVideoBtn from '../../components/General/video-btn/videobtn'
export default class About extends Component {
	render() {
		// console.log('About组件收到的props是',this.props);
		return (
			<div >
				<div style={{ position: "absolute", top: "23%", left: "50%", color: "#e4ee16", fontSize: "20px", }}>
					固定污染源工况监控系统
				</div>
				<HomeVideoBtn
					videosrc="http://202.119.249.152:8080/resource/App_f8b7037098e44e438c85cfca01eadfdc/statics/videos/GK_capture1x.mp4"
					openurl="http://10.32.203.157:8080"
					poster="//202.119.249.152:8080/resource/App_f8b7037098e44e438c85cfca01eadfdc/statics/videos/GK_capture1x.jpg"
					// videostyle={{ width: "100%", height: "100%" }}
					videostyle={{ width: '1493.67px', height: '798px' }}
					// style={{ height: "30vh" }}
					videosetting={{ autoPlay: "autoPlay", controls: false, loop: true }}
				/>
			</div>

		)
	}
}
