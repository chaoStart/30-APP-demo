import React, { Component } from 'react'
import * as echarts from "echarts";//引入echarts
// import './App.css'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Radius: [['19%', '20%'], ['39%', '40%'], ['69%', '70%'], ['89%', '90%']],
      result: null,
      positioninital: {
        left: '-70px',
        top: '0px'
      }
    }
  };
  componentDidMount = () => {
    // this.ChartInit()
    var chartDom = document.getElementById('main1');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
      tooltip: {
        trigger: 'item1'
      },
      // legend: {
      //   top: '5%',
      //   left: 'center'
      // },
      series: [
        {
          name: '我驱动器',
          type: 'pie',
          // radius: ['29%', '30%'],
          radius: this.state.Radius[0],
          avoidLabelOverlap: true,
          itemStyle: {
            borderRadius: 10,
            color: 'red',
            borderColor: 'red',
            borderWidth: 2
          },
          label: {
            show: true,
            position: 'center'
          },
          emphasis: {
            label: {
              // show: true,
              // fontSize: '40',
              color: 'red'
              // fontWeight: 'bold'
            }
          },
          labelLine: {
            // show: false
            show: true
          },
          data: [{ value: 148 }]
        }
      ]
    };
    option && myChart.setOption(option);

    var chartDom2 = document.getElementById('main2');
    var myChart2 = echarts.init(chartDom2);
    var option2;
    option2 = {
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: this.state.Radius[1],
          // avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            color: 'orange',
            borderColor: 'orange',
            borderWidth: 2
          },
          label: {
            show: true,
            position: 'center'
          },
          emphasis: {
            label: {
              // show: true,
              // fontSize: '40',
              color: 'red'
              // fontWeight: 'bold'
            }
          },
          labelLine: {
            // show: false
            show: true
          },
          data: [{ value: 1048 }]
        }
      ]
    };
    option2 && myChart2.setOption(option2);

    var chartDom3 = document.getElementById('main3');
    var myChart3 = echarts.init(chartDom3);
    var option3;
    option3 = {
      tooltip: {
        trigger: 'item'
      },
      // legend: {
      //   top: '5%',
      //   left: 'center'
      // },
      series: [
        {
          name: '财产损失',
          type: 'pie',
          radius: this.state.Radius[2],
          // avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            color: 'yellow',
            borderColor: 'yellow',
            borderWidth: 2
          },
          label: {
            show: true,
            position: 'center'
          },
          emphasis: {
            label: {
              // show: true,
              // fontSize: '40',
              color: 'red'
              // fontWeight: 'bold'
            }
          },
          labelLine: {
            // show: false
            show: true
          },
          data: [{ value: 608 }]
        }
      ]
    };
    option3 && myChart3.setOption(option3);

    var chartDom4 = document.getElementById('main4');
    var myChart4 = echarts.init(chartDom4);
    var option4;
    option4 = {
      tooltip: {
        trigger: 'item'
      },
      // legend: {
      //   top: '5%',
      //   left: 'center'
      // },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: this.state.Radius[3],
          avoidLabelOverlap: true,
          itemStyle: {
            borderRadius: 10,
            color: 'blue',
            borderColor: 'blue',
            borderWidth: 2
          },
          label: {
            show: true,
            position: 'center'
          },
          emphasis: {
            label: {
              // show: true,
              // fontSize: '40',
              color: 'red'
              // fontWeight: 'bold'
            }
          },
          labelLine: {
            // show: false
            show: true
          },
          data: [{ value: 1048 }]
        }
      ]
    };
    option4 && myChart4.setOption(option4);

  }
  // ChartInit = () => {}
  myFunction = () => {
    /* 获取文本内容 */
    var text = document.getElementById("myInput").value;
    var text1 = document.getElementById("myInput1").value;
    /* 弹出内容 */
    alert("输入为: " + text);
    alert("输入为: " + text1);
    console.log("输入的文本为:", text, text1)
    this.setState({
      positioninital: { left: text + 'px', top: text1 + 'px' }
    })
  };
  render() {
    return (
      <div className='bg0' >
        <div className='position_direction' style={this.state.positioninital}>
          <div id='main1' style={{ width: '50vw', height: '50vh', position: 'absolute' }}>
            爆炸区域
          </div>
          <div id='main2' style={{ width: '50vw', height: '50vh', position: 'absolute' }}>
            财产损失
          </div>
          <div id='main3' style={{ width: '50vw', height: '50vh', position: 'absolute' }}>
            人员伤亡
          </div>
          {/* <div id='main4' style={{ width: '50vw', height: '50vh', position: 'absolute', top: '150px ', left: '150px' }} > */}
          <div id='main4' style={{ width: '50vw', height: '50vh', position: 'absolute' }} >
            计算范围
          </div>
        </div>
        {/* <div className='input_xy' style={{ left: '-400px' }}> */}
        <div className='input_xy' >
          <input type='text' placeholder="输入X" id="myInput" />
          <input type='text' placeholder="输入Y" id="myInput1" />
          <button onClick={this.myFunction}>危险源定位</button>
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
  /* justify-content:flex-start; */
  align-items: center ;
  /* position: relative; */
  /* background-color: darkblue; */
  /* background-color: lightblue; */
  overflow:hidden

}
.input_xy{
  width: 100vw;
  height: 5vh ;
  /* background-color: pink; */
}
.position_direction{
  width: 45vw;
  height: 45vh;
  position: relative;
  /* background-color: yellowgreen; */
}

`
document.getElementsByTagName('head')[0].appendChild(css)

