import React, { Component } from 'react'
// import HomeVideoBtn from '../../components/video-btn/videobtn'
import HomeVideoBtn from '../../components/General/video-btn/videobtn'
export default class About extends Component {
	render() {
		// console.log('About组件收到的props是',this.props);
		return (
			// <h3>环保厅</h3>
			// <div className="home--video_btn_main" style={{ marginTop: '10px' }}>
			<HomeVideoBtn
				videosrc="http://202.119.249.152:8080/resource/App_f8b7037098e44e438c85cfca01eadfdc/statics/videos/EthyleneGlycol.mp4"
				openurl="http://202.119.249.152:8080/resource/App_3069cb5da25daed008faa0ff6d84a5fb/dist/index.html"
				poster="//202.119.249.152:8080/resource/App_f8b7037098e44e438c85cfca01eadfdc/statics/videos/EthyleneGlycol.jpg"
				// btnstyle={{ fontSize: "0" }}
				// btnsetting={{ title: "产治协同优化与智能管控" }}
				videostyle={{ width: "100%", height: "100%" }}
				// videostyle={{ width: '100%', height: '643px' }}
				// style={{ height: "57.9vh" }}
				videosetting={{ autoPlay: "autoPlay", controls: false, loop: true }}
			/>
		)
	}
}
