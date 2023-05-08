import React, { Component } from 'react'
// import HomeVideoBtn from '../../components/video-btn/videobtn'
import HomeVideoBtn from '../../components/General/video-btn/videobtn'
export default class About extends Component {
    render() {
        return (
            <HomeVideoBtn
                videosrc="http://202.119.249.152:8080/resource/App_f8b7037098e44e438c85cfca01eadfdc/statics/videos/Virtual1x.mp4"
                openurl="http://202.119.249.153:80"
                poster="//202.119.249.152:8080/resource/App_f8b7037098e44e438c85cfca01eadfdc/statics/videos/Virtual1x.jpg"
                btnsetting={{ title: "反应精馏过程控制虚拟仿真" }}
                btnstyle={{ fontSize: "0" }}
                // videostyle={{ width: "100%", height: "100%" }}
                videostyle={{ width: '1493px', height: '798px' }}
                // style={{ height: "100%" }}
                videosetting={{ autoPlay: "autoPlay", controls: false, loop: true }}
            />
        )
    }
}
