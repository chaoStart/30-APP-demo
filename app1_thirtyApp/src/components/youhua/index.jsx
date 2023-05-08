import React, { Component } from 'react'
import pictures from '../../pictures/下载.png'
import pictures1 from '../../pictures/优化控制域/多回路参数整定.dd6b426ba9ef48a0d6d8.png'
import pictures2 from '../../pictures/优化控制域/模型预测控制.d1660cb5d8489704df48.png'
import pictures3 from '../../pictures/优化控制域/协同操作优化.4cc9130ef72b9176e3bb.png'
import pictures4 from '../../pictures/优化控制域/自适应PID控制.8d96eb5350625e5b812d.png'
import pictures5 from '../../pictures/优化控制域/APC性能监控.c8ccc3cad501e635244b.png'

export default class About extends Component {
    render() {
        return (
            <>
                <div className="differApp1">
                    <div className="top1">
                        <span><img src={pictures} alt="图片url失效" style={{ width: "15px", height: "15px" }}></img></span>&nbsp;
                        <span>优化控制域</span>
                    </div>
                    <div className="buttom1" >
                        <div className="YH1">
                            <span style={{ display: "block", width: "0.5vw", height: "1.0vw", background: " rgba(0, 0, 0, 0)" }}></span>
                            <span style={{ display: "block" }}>
                                <img src={pictures1} alt="图片url失效" style={{ width: "60px", height: "60px" }} onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", "") }}></img>
                            </span>
                            <div style={{ fontSize: "5px" }}><span>多回路参数整定</span></div>
                        </div>
                        <div className="YH1">
                            <span style={{ display: "block", width: "0.5vw", height: "1.0vw", background: " rgba(0, 0, 0, 0)" }}></span>
                            <span style={{ display: "block" }}>
                                <img src={pictures2} alt="图片url失效" style={{ width: "60px", height: "60px" }} onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", "") }}></img>
                            </span>
                            <div style={{ fontSize: "5px" }}><span>模型预测控制</span></div>
                        </div>
                        <div className="YH1">
                            <span style={{ display: "block", width: "0.5vw", height: "1.0vw", background: " rgba(0, 0, 0, 0)" }}></span>
                            <span style={{ display: "block" }}>
                                <img src={pictures3} alt="图片url失效" style={{ width: "60px", height: "60px" }} onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", "") }}></img>
                            </span>
                            <div style={{ fontSize: "5px" }}><span>协同操作优化</span></div>
                        </div>
                        <div className="YH1">
                            <span style={{ display: "block", width: "0.5vw", height: "1.0vw", background: " rgba(0, 0, 0, 0)" }}></span>
                            <span style={{ display: "block" }}>
                                <img src={pictures4} alt="图片url失效" style={{ width: "60px", height: "60px" }} onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", "") }}></img>
                            </span>
                            <div style={{ fontSize: "5px" }}><span>自适应PID控制</span></div>
                        </div>
                        <div className="YH1">
                            <span style={{ display: "block", width: "0.5vw", height: "1.0vw", background: " rgba(0, 0, 0, 0)" }}></span>
                            <span style={{ display: "block" }}>
                                <img src={pictures5} alt="图片url失效" style={{ width: "60px", height: "60px" }} onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", "") }}></img>
                            </span>
                            <div style={{ fontSize: "5px" }}><span>APC性能监控</span></div>
                        </div>
                    </div>
                </div>
                <div className="jianju"></div>
            </>
        )
    }
}
