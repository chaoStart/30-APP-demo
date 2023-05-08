import React, { Component } from 'react'
import pictures from '../../pictures/下载.png'
import pictures1 from '../../pictures/设备运维域/故障定位分析.c5a88f250a6b1767a13c.png'
import pictures2 from '../../pictures/设备运维域/设备备件管理.6353471bf95a71a60a2e.png'
import pictures3 from '../../pictures/设备运维域/设备智能巡检.d5643d481a5493e7bdaa.png'
import pictures4 from '../../pictures/设备运维域/设备检修维护.8255d167ee2c1e561015.png'
import pictures5 from '../../pictures/设备运维域/设备运行能效分析.ae17d0c420237fdab9fb.png'

export default class About extends Component {
    render() {
        return (
            <>
                <div className="differApp3">
                    <div className="top1">
                        <span><img src={pictures} alt="图片url失效" style={{ width: "15px", height: "15px" }}></img></span>&nbsp;
                        <span>设备运维域</span>
                    </div>
                    <div className="buttom1" >
                        <div className="YH1">
                            <span style={{ display: "block", width: "0.5vw", height: "1.0vw", background: " rgba(0, 0, 0, 0)" }}></span>
                            <span style={{ display: "block" }}>
                                <img src={pictures1} alt="图片url失效" style={{ width: "60px", height: "60px" }} onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", "") }}></img>
                            </span>
                            <div style={{ fontSize: "5px" }}><span>故障定位分析</span></div>
                        </div>
                        <div className="YH1">
                            <span style={{ display: "block", width: "0.5vw", height: "1.0vw", background: " rgba(0, 0, 0, 0)" }}></span>
                            <span style={{ display: "block" }}>
                                <img src={pictures2} alt="图片url失效" style={{ width: "60px", height: "60px" }} onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", "") }}></img>
                            </span>
                            <div style={{ fontSize: "5px" }}><span>设备备件管理</span></div>
                        </div>
                        <div className="YH1">
                            <span style={{ display: "block", width: "0.5vw", height: "1.0vw", background: " rgba(0, 0, 0, 0)" }}></span>
                            <span style={{ display: "block" }}>
                                <img src={pictures3} alt="图片url失效" style={{ width: "60px", height: "60px" }} onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", "") }}></img>
                            </span>
                            <div style={{ fontSize: "5px" }}><span>设备智能巡检</span></div>
                        </div>
                        <div className="YH1">
                            <span style={{ display: "block", width: "0.5vw", height: "1.0vw", background: " rgba(0, 0, 0, 0)" }}></span>
                            <span style={{ display: "block" }}>
                                <img src={pictures4} alt="图片url失效" style={{ width: "60px", height: "60px" }} onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", "") }}></img>
                            </span>
                            <div style={{ fontSize: "5px" }}><span>设备检修维护</span></div>
                        </div>
                        <div className="YH1">
                            <span style={{ display: "block", width: "0.5vw", height: "1.0vw", background: " rgba(0, 0, 0, 0)" }}></span>
                            <span style={{ display: "block" }}>
                                <img src={pictures5} alt="图片url失效" style={{ width: "60px", height: "60px" }} onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", "") }}></img>
                            </span>
                            <div style={{ fontSize: "5px" }}><span>设备运行能效分析</span></div>
                        </div>
                    </div>
                </div>
                <div className="jianju"></div>
            </>
        )
    }
}
