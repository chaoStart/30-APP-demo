import React, { Component } from 'react'
import pictures from '../../pictures/下载.png'
import pictures1 from '../../pictures/能源管控域/加热炉热效率优化.4503c8ac21cc5ac6f3a1.png'
import pictures2 from '../../pictures/能源管控域/能效指标管理.03364193da24a38a4a91.png'
import pictures3 from '../../pictures/能源管控域/能源分析预测.9b05ca620e471bbd41b2.png'
import pictures4 from '../../pictures/能源管控域/能源供需平衡.782ff6aa3b8925515111.png'
import pictures5 from '../../pictures/能源管控域/能源管理调度.29f706d1dca96b1fe8e2.png'

export default class About extends Component {
    render() {
        return (
            <>
                <div className="differApp5">
                    <div className="top1">
                        <span><img src={pictures} alt="图片url失效" style={{ width: "15px", height: "15px" }}></img></span>&nbsp;
                        <span>能源管控域</span>
                    </div>
                    <div className="buttom1" >
                        <div className="YH1">
                            <span style={{ display: "block", width: "0.5vw", height: "1.0vw", background: " rgba(0, 0, 0, 0)" }}></span>
                            <span style={{ display: "block" }}>
                                <img src={pictures1} alt="图片url失效" style={{ width: "60px", height: "60px" }} onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", "") }}></img>
                            </span>
                            <div style={{ fontSize: "5px" }}><span>加热炉热效率优化</span></div>
                        </div>
                        <div className="YH1">
                            <span style={{ display: "block", width: "0.5vw", height: "1.0vw", background: " rgba(0, 0, 0, 0)" }}></span>
                            <span style={{ display: "block" }}>
                                <img src={pictures2} alt="图片url失效" style={{ width: "60px", height: "60px" }} onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", "") }}></img>
                            </span>
                            <div style={{ fontSize: "5px" }}><span>能效指标管理</span></div>
                        </div>
                        <div className="YH1">
                            <span style={{ display: "block", width: "0.5vw", height: "1.0vw", background: " rgba(0, 0, 0, 0)" }}></span>
                            <span style={{ display: "block" }}>
                                <img src={pictures3} alt="图片url失效" style={{ width: "60px", height: "60px" }} onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", "") }}></img>
                            </span>
                            <div style={{ fontSize: "5px" }}><span>能源分析预测</span></div>
                        </div>
                        <div className="YH1">
                            <span style={{ display: "block", width: "0.5vw", height: "1.0vw", background: " rgba(0, 0, 0, 0)" }}></span>
                            <span style={{ display: "block" }}>
                                <img src={pictures4} alt="图片url失效" style={{ width: "60px", height: "60px" }} onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", "") }}></img>
                            </span>
                            <div style={{ fontSize: "5px" }}><span>能源供需平衡</span></div>
                        </div>
                        <div className="YH1">
                            <span style={{ display: "block", width: "0.5vw", height: "1.0vw", background: " rgba(0, 0, 0, 0)" }}></span>
                            <span style={{ display: "block" }}>
                                <img src={pictures5} alt="图片url失效" style={{ width: "60px", height: "60px" }} onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", "") }}></img>
                            </span>
                            <div style={{ fontSize: "5px" }}><span>能源管理调度</span></div>
                        </div>
                    </div>
                </div>
                <div className="jianju"></div>
            </>
        )
    }
}
