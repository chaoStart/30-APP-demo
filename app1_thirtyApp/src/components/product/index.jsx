import React, { Component } from 'react'
import pictures from '../../pictures/下载.png'
import pictures1 from '../../pictures/生产管控域/数据计算分析.48fb1786fa64bee50e24.png'
import pictures2 from '../../pictures/生产管控域/生产调度优化.a9e4f97eb5cc140d0e7a.png'
import pictures3 from '../../pictures/生产管控域/生产统计模型.eea6f66c45ac93a66ac2.png'
import pictures4 from '../../pictures/生产管控域/绩效考核管理.7043142d1849452d228f.png'
import pictures5 from '../../pictures/生产管控域/数据预处理.c7537d7f4891a86b5d7c.png'
export default class About extends Component {
    render() {
        return (
            <>
                <div className="differApp2">
                    <div className="top1">
                        <span><img src={pictures} alt="图片url失效" style={{ width: "15px", height: "15px" }}></img></span>&nbsp;
                        <span>生产管控域</span>
                    </div>
                    <div className="buttom1" >
                        <div className="YH1">
                            <span style={{ display: "block", width: "0.5vw", height: "1.0vw", background: " rgba(0, 0, 0, 0)" }}></span>
                            <span style={{ display: "block" }}>
                                <img src={pictures1} alt="图片url失效" style={{ width: "60px", height: "60px" }} onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", "") }}></img>
                            </span>
                            <div style={{ fontSize: "5px" }}><span>数据计算分析</span></div>
                        </div>
                        <div className="YH1">
                            <span style={{ display: "block", width: "0.5vw", height: "1.0vw", background: " rgba(0, 0, 0, 0)" }}></span>
                            <span style={{ display: "block" }}>
                                <img src={pictures2} alt="图片url失效" style={{ width: "60px", height: "60px" }} onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", "") }}></img>
                            </span>
                            <div style={{ fontSize: "5px" }}><span>生产调度优化</span></div>
                        </div>
                        <div className="YH1">
                            <span style={{ display: "block", width: "0.5vw", height: "1.0vw", background: " rgba(0, 0, 0, 0)" }}></span>
                            <span style={{ display: "block" }}>
                                <img src={pictures3} alt="图片url失效" style={{ width: "60px", height: "60px" }} onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", "") }}></img>
                            </span>
                            <div style={{ fontSize: "5px" }}><span>生产统计模型</span></div>
                        </div>
                        <div className="YH1">
                            <span style={{ display: "block", width: "0.5vw", height: "1.0vw", background: " rgba(0, 0, 0, 0)" }}></span>
                            <span style={{ display: "block" }}>
                                <img src={pictures4} alt="图片url失效" style={{ width: "60px", height: "60px" }} onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", "") }}></img>
                            </span>
                            <div style={{ fontSize: "5px" }}><span>绩效考核管理</span></div>
                        </div>
                        <div className="YH1">
                            <span style={{ display: "block", width: "0.5vw", height: "1.0vw", background: " rgba(0, 0, 0, 0)" }}></span>
                            <span style={{ display: "block" }}>
                                <img src={pictures5} alt="图片url失效" style={{ width: "60px", height: "60px" }} onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", "") }}></img>
                            </span>
                            <div style={{ fontSize: "5px" }}><span>数据预处理</span></div>
                        </div>
                    </div>
                </div>
                <div className="jianju"></div>
            </>
        )
    }
}
