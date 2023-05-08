
import * as echarts from '../extensions/echarts.v5.3.1.min';
import React, { Component } from 'react'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mystyle: {
                backgroundColor: 'grey',
                width: '60vw',
                height: '35vh'
            },
            mystyle1: {
                backgroundColor: 'grey',
                width: '30vw',
                height: '35vh'
            },
            mystyle2: {
                backgroundColor: 'grey',
                width: '90vw',
                height: '50vh'
            },
            result: null
        };
    };
    componentDidUpdate = () => {
        window.addEventListener("message", (event) => {
            if (event.data.code) {
                // console.log('event', event.data.params);
                // console.log('[ this.state.result ] >', this.state.result)
                this.setState({
                    result: Object.values(event.data.params)
                },
                    // () => {
                    //     console.log('[  ] >', this.state.result)
                    // }
                )
                // result.push(event.data.params);
                // console.log('[ result ] >', result, typeof result[0]);
                this.myFunction(this.state.result[0], this.state.result[3]);
                this.myFunction1(this.state.result[1]);
                this.myFunction2(this.state.result[2]);
                // this.myFunction2(this.state.result[3]);
            }
        })
    }
    myFunction = (param, r) => {
        /* 获取文本内容 */
        // var text = document.getElementById("myInput").value;
        var text0 = param;
        console.log('r的数字：', r, text0);
        var text = text0 * 1;
        console.log('text的数值类型：', typeof r)
        console.log('r的数值类型：', typeof text)
        console.log('text的数字：', text);
        text = text * r;
        console.log('新的text的数字：', text);
        /* 弹出内容 */
        // alert("输入为: " + text);
        // console.log("输入的文本为:", text)
        // console.log("输入的r1为:", sum)
        /*     this.setState({
              mystyle: {
                backgroundColor: 'yellow',
                width: '60vw',
                height: '35vh'
              }
            }, () => console.log(this.state.mystyle)) */
        this.setState((state, props) => {
            if (text < 20) { return { mystyle: { backgroundColor: 'blue', width: '60vw', height: '35vh' } } }
            else if (text < 100) { return { mystyle: { backgroundColor: 'yellow', width: '60vw', height: '35vh' } } }
            else if (text < 200) { return { mystyle: { backgroundColor: 'orange', width: '60vw', height: '35vh' } } }
            else if (text > 200) {
                return { mystyle: { backgroundColor: 'red', width: '60vw', height: '35vh' } }
            }
        },
            // () => {
            //     console.log(this.state.mystyle);
            // }
        )

    };
    myFunction1 = (param) => {
        /* 获取文本内容 */
        // var text = document.getElementById("myInput1").value;
        var text = param;
        /* 弹出内容 */
        // alert("输入为: " + text);
        // console.log("输入的文本为:", text)
        /*     this.setState({
              mystyle: {
                backgroundColor: 'yellow',
                width: '60vw',
                height: '35vh'
              }
            }, () => console.log(this.state.mystyle)) */
        this.setState((state, props) => {
            if (text < 20) { return { mystyle1: { backgroundColor: 'blue', width: '30vw', height: '35vh' } } }
            else if (text < 100) { return { mystyle1: { backgroundColor: 'yellow', width: '30vw', height: '35vh' } } }
            else if (text < 200) { return { mystyle1: { backgroundColor: 'orange', width: '30vw', height: '35vh' } } }
            else if (text > 200) {
                return { mystyle1: { backgroundColor: 'red', width: '30vw', height: '35vh' } }
            }
        },
            // () => {
            //     console.log(this.state.mystyle1);
            // }
        )

    };
    myFunction2 = (param) => {
        /* 获取文本内容 */
        // var text = document.getElementById("myInput2").value;
        var text = param;
        /* 弹出内容 */
        // alert("输入为: " + text);
        // console.log("输入的文本为:", text)
        /*     this.setState({
              mystyle: {
                backgroundColor: 'yellow',
                width: '60vw',
                height: '35vh'
              }
            }, () => console.log(this.state.mystyle)) */
        this.setState((state, props) => {
            if (text < 20) { return { mystyle2: { backgroundColor: 'blue', width: '90vw', height: '50vh' } } }
            else if (text < 100) { return { mystyle2: { backgroundColor: 'yellow', width: '90vw', height: '50vh' } } }
            else if (text < 200) { return { mystyle2: { backgroundColor: 'orange', width: '90vw', height: '50vh' } } }
            else if (text > 200) {
                return { mystyle2: { backgroundColor: 'red', width: '90vw', height: '50vh' } }
            }
        },
            // () => {
            //     console.log(this.state.mystyle2);
            // }
        )

    };
    render() {
        return (
            <div className='bg0'>
                <div className='box0'>
                </div>
                <div className='box1'>
                    <div className='factory1' style={this.state.mystyle}>
                        <div className='parents_children'>
                            工厂甲
                        </div>
                    </div>
                    <div className='factory2' style={this.state.mystyle1}>
                        <div className='parents_children1'>
                            工厂乙
                        </div>
                    </div>
                </div>
                <div className='box2'>
                    <div className='factory3' style={this.state.mystyle2}>
                        <div className='parents_children'>
                            工厂丙
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
let css = document.createElement('style');
css.innerHTML = `
 .bg0{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction:column;
  flex-wrap:  wrap ;
  justify-content:space-around;
  align-items: center ;
  background-color:rgb(150,185,125);
}
.box0{
  width: 100vw;
  height:10vh ;
  display: flex;
  /* flex-direction:column; */
  flex-direction:row;
  flex-wrap:  wrap ;
  justify-content:space-around;
  align-items: center ;
  background-color:rgb(150,185,125);
}
.box1{
  width: 100vw;
  height:35vh ;
  display: flex;
  flex-direction:row;
  flex-wrap:  nowrap ;
  justify-content:space-around;
  align-items: center ;
  /* background-color: rgb(125, 171, 185); */
}
.box2{
  width: 100vw;
  height:50vh ;
  display: flex;
  flex-direction:row;
  flex-wrap:  nowrap ;
  justify-content:space-around;
  align-items: center ;
  /* background-color: rgb(125, 168, 185); */
}
.factory1{
font-size: 40px;
align-items: center;

position: relative;
/* margin: 100px auto 0; */
}
.factory2{
  font-size: 40px;
/*   width: 30vw;
  height:35vh ; */
  /* background-color: grey; */
  position: relative;
}
.factory3{
  font-size: 40px;
  /* width: 90vw;
  height:50vh ; */
  /* background-color: grey; */
  position: relative;
}
.parents_children{
  position: absolute;
  top: 40%;
  left: 45%;
}
.parents_children1{
  position: absolute;
  top: 40%;
  /* left: 45%; */
  left: 200px;
}
`
document.getElementsByTagName('head')[0].appendChild(css)
