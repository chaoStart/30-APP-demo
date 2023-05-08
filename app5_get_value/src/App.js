import React, { Component } from 'react'
import './App.css'
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
      }
    };
  };
  myFunction = () => {
    /* 获取文本内容 */
    var text = document.getElementById("myInput").value;
    /* 弹出内容 */
    alert("输入为: " + text);
    console.log("输入的文本为:", text)
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
      else if (text > 200) { return { mystyle: { backgroundColor: 'red', width: '60vw', height: '35vh' } } }
    }, () => {
      console.log(this.state.mystyle);
    })

  };
  myFunction1 = () => {
    /* 获取文本内容 */
    var text = document.getElementById("myInput1").value;
    /* 弹出内容 */
    alert("输入为: " + text);
    console.log("输入的文本为:", text)
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
    }, () => {
      console.log(this.state.mystyle1);
    })

  };
  myFunction2 = () => {
    /* 获取文本内容 */
    var text = document.getElementById("myInput2").value;
    /* 弹出内容 */
    alert("输入为: " + text);
    console.log("输入的文本为:", text)
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
    }, () => {
      console.log(this.state.mystyle2);
    })

  };
  openwin = () => {
    window.open("http://218.94.19.58:8080/#/runtime-fullscreen/runtime-fullscreen/Page_e3709246f00f4dc8b4b421fc6550e407");
  }
  render() {
    // let mystyle = {
    //   backgroundColor: 'darkcyan',
    //   width: '60vw',
    //   height: '35vh',
    // }
    return (
      <div className='bg0'>
        <div className='box0'>
          <div className='first'>
            <button onClick={this.myFunction}>工厂甲等级测评</button>
            <input type='text' placeholder="输入" id="myInput" />
          </div>
          <div className='second'>
            <button onClick={this.myFunction1}>工厂已等级测评</button>
            <input type='text' placeholder="输入" id="myInput1" />
          </div>
          <div className='third'>
            <button onClick={this.myFunction2}>工厂丙等级测评</button>
            <input type='text' placeholder="输入" id="myInput2" />
          </div>
        </div>
        <div className='box1'>
          <div className='factory1' style={this.state.mystyle}>
            <div className='parents_children'>
              工厂甲
            </div>
          </div>
          <div className='factory2' style={this.state.mystyle1}>
            <div className='parents_children1' onClick={this.openwin}>
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


