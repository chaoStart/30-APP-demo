import React, { Component } from 'react'
import pictures from '../../pictures/下载.png'
import pictures1 from '../../pictures/安全环保域/风险评估模型.d7a3da1f97fa8a46d82f.png'
import pictures2 from '../../pictures/安全环保域/互联网智能监管.ccc458a44c2f4496f8cb.png'
import pictures3 from '../../pictures/安全环保域/环保在线监测.87cd09b6a7eb2658694a.png'
import pictures4 from '../../pictures/安全环保域/事故模拟演练.7b838d82b32ba35b5a47.png'
import pictures5 from '../../pictures/安全环保域/应急预案管理.5ecdae6ee27c436633bf.png'

export default class About extends Component {
    render() {
        return (
            <>
                <div className="differApp4">
                    <div className="top1">
                        <span><img src={pictures} alt="图片url失效" style={{ width: "15px", height: "15px" }}></img></span>&nbsp;
                        <span>安全环保域</span>
                    </div>
                    <div className="buttom1" >
                        <div className="YH1">
                            <span style={{ display: "block", width: "0.5vw", height: "1.0vw", background: " rgba(0, 0, 0, 0)" }}></span>
                            <span style={{ display: "block" }}>
                                <img src={pictures1} alt="图片url失效" style={{ width: "60px", height: "60px" }} onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", "") }}></img>
                            </span>
                            <div style={{ fontSize: "5px" }}><span>风险评估模型</span></div>
                        </div>
                        <div className="YH1">
                            <span style={{ display: "block", width: "0.5vw", height: "1.0vw", background: " rgba(0, 0, 0, 0)" }}></span>
                            <span style={{ display: "block" }}>
                                <img src={pictures2} alt="图片url失效" style={{ width: "60px", height: "60px" }} onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", "") }}></img>
                            </span>
                            <div style={{ fontSize: "5px" }}><span>互联网智能监管</span></div>
                        </div>
                        <div className="YH1">
                            <span style={{ display: "block", width: "0.5vw", height: "1.0vw", background: " rgba(0, 0, 0, 0)" }}></span>
                            <span style={{ display: "block" }}>
                                <img src={pictures3} alt="图片url失效" style={{ width: "60px", height: "60px" }} onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", "") }}></img>
                            </span>
                            <div style={{ fontSize: "5px" }}><span>环保在线监测</span></div>
                        </div>
                        <div className="YH1">
                            <span style={{ display: "block", width: "0.5vw", height: "1.0vw", background: " rgba(0, 0, 0, 0)" }}></span>
                            <span style={{ display: "block" }}>
                                <img src={pictures4} alt="图片url失效" style={{ width: "60px", height: "60px" }} onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", "") }}></img>
                            </span>
                            <div style={{ fontSize: "5px" }}><span>事故模拟演练</span></div>
                        </div>
                        <div className="YH1">
                            <span style={{ display: "block", width: "0.5vw", height: "1.0vw", background: " rgba(0, 0, 0, 0)" }}></span>
                            <span style={{ display: "block" }}>
                                <img src={pictures5} alt="图片url失效" style={{ width: "60px", height: "60px" }} onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", "") }}></img>
                            </span>
                            <div style={{ fontSize: "5px" }}><span>应急预案管理</span></div>
                        </div>
                    </div>
                </div>
                <div className="jianju"></div>
            </>
        )
    }
}
