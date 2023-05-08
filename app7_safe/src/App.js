import React, { Component } from 'react'
// import * as echarts from 'echarts'
// import * as echarts from '../extensions/echarts.v5.3.1.min';
import './App.css'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mystyle: {
        backgroundColor: 'rgba(128, 128, 128, .7)',
        width: '25vw',
        height: '14vh',
        left: '-45px'
      },
      mystyle1: {
        backgroundColor: 'rgba(128, 128, 128, .7)',
        width: '22vw',
        height: '14vh',
        top: '50px',
        left: '-400px'
      },
      mystyle2: {
        backgroundColor: 'rgba(128, 128, 128, .7)',
        width: '25vw',
        height: '14vh',
        top: '-10px',
        left: '-45px'
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
  openwin = () => {
    window.open("http://218.94.19.58:8080/#/runtime-fullscreen/runtime-fullscreen/Page_e3709246f00f4dc8b4b421fc6550e407");
  }
  openwin1 = () => {
    window.open("http://218.94.19.58:8080/#/runtime-fullscreen/runtime-fullscreen/Page_2168af4556f04d859c7c81cd92a14533");
  }
  openwin2 = () => {
    window.open("http://218.94.19.58:8080/#/runtime-fullscreen/runtime-fullscreen/Page_416a6af023a24b2ab3d1c8a476487b67");
  }
  render() {
    return (
      <div className='bg0'>
        <div className='box1'>
          <div className='factory1' style={this.state.mystyle} onClick={this.openwin}>
            <div className='parents_children'  >
              DMO合成
            </div>
          </div>
          <div className='factory2' style={this.state.mystyle1} onClick={this.openwin1}>
            <div className='parents_children' >
              EG合成
            </div>
          </div>
          <div className='factory3' style={this.state.mystyle2} onClick={this.openwin1}>
            <div className='parents_children' >
              EG精馏
            </div>
          </div>
        </div>
      </div>
    )
  }
}
// let css = document.createElement('style');
// css.innerHTML = `
//  .bg0{
//   width: 100vw;
//   height: 100vh;
//   // width: 100%;
//   // height: 100%;
//   display: flex;
//   flex-direction:column;
//   flex-wrap:  wrap ;
//   justify-content:space-around;
//   align-items: center ;
//   background-image:url('http://218.94.19.58:8080/resource/App_c82514dfed2cce4afaf88b0e6cf9f25a/screenshot/biger.png');
// }
// .box1{
//   width: 100vw;
//   height:35vh ;
//   // width: 100%;
//   // height:35% ;
//   display: flex;
//   flex-direction:row;
//   flex-wrap:  nowrap ;
//   justify-content:space-around;
//   align-items: center ;
//   /* background-color: rgb(125, 171, 185); */
// }
// .box2{
//   width: 100vw;
//   height:50vh ;
//   // width: 100%;
//   // height:50% ;
//   display: flex;
//   flex-direction:row;
//   flex-wrap:  nowrap ;
//   justify-content:space-around;
//   align-items: center ;
//   /* background-color: rgb(125, 168, 185); */
// }
// .factory1{
// font-size: 40px;
// align-items: center;
// position: relative;
// }
// .factory2{
//   font-size: 40px;
// /*   width: 30vw;
//   height:35vh ; */
//   position: relative;
// }
// .factory3{
//   font-size: 40px;
//   /* width: 90vw;
//   height:50vh ; */
//   position: relative;
// }
// .parents_children{
//   position: absolute;
//   top: 40%;
//   left: 45%;
// }
// .parents_children1{
//   position: absolute;
//   top: 40%;
//   left: 200px;
// }
// `
// document.getElementsByTagName('head')[0].appendChild(css)

