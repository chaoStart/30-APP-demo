import React, { PureComponent } from 'react';
import * as echarts from 'echarts';
// import { Table } from 'antd';
export default class PIDComponent extends PureComponent {
  componentDidMount = () => {
    this.ChartInit()
  };
  ChartInit = () => {
    this.zikongchart = echarts.init(document.getElementById('zikongpercentChart'));
    this.pingwenchart = echarts.init(document.getElementById('pinwenpercentChart'))
    this.trChart = echarts.init(document.getElementById('trChart'));
    this.chaotiaoliangChart = echarts.init(document.getElementById('chaotiaolaingChart'));
    this.zikongchart.setOption({
      title: {
        text: '产品浓度(摩尔分率)',
        textStyle: {
          color: '#00CCFF',
          fontSize: 24
        }
      },
      series: [
        {
          type: 'gauge',
          axisLine: {
            lineStyle: {
              width: 20,
              color: [
                [0.2, '#fd666d'],
                [0.8, '#37a2da'],
                [1, '#67e0e3']
              ]
            }
          },
          pointer: {
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            distance: -30,
            length: 8,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          },
          splitLine: {
            distance: -40,
            length: 10,
            lineStyle: {
              color: '#fff',
              width: 4
            }
          },
          axisLabel: {
            color: 'auto',
            distance: 40,
            fontSize: 13
          },
          detail: {
            valueAnimation: true,
            formatter: '{value} %',
            color: 'auto',
            fontSize: 24,
            offsetCenter: [0, "60%"]
          },
          data: [
            {
              value: 30.77
            }
          ]
        }
      ]
    });
    this.pingwenchart.setOption({
      title: {
        text: '产品流量(Kmol/h)',
        textStyle: {
          color: '#00CCFF',
          fontSize: 24
        }
      },
      series: [
        {
          type: 'gauge',
          axisLine: {
            lineStyle: {
              width: 20,
              color: [
                [0.2, '#fd666d'],
                [0.8, '#37a2da'],
                [1, '#67e0e3']
              ]
            }
          },
          pointer: {
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            distance: -30,
            length: 8,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          },
          splitLine: {
            distance: -40,
            length: 10,
            lineStyle: {
              color: '#fff',
              width: 4
            }
          },
          axisLabel: {
            color: 'auto',
            distance: 40,
            fontSize: 13
          },
          detail: {
            valueAnimation: true,
            formatter: '{value} %',
            color: 'auto',
            fontSize: 24,
            offsetCenter: [0, "60%"]
          },
          data: [
            {
              value: 91.21
            }
          ]
        }
      ]
    });
    this.trChart.setOption({
      title: {
        text: '乙二醇进料流量(Kmol/h)',
        textStyle: {
          color: '#00CCFF',
          fontSize: 24
        }
      },
      series: [
        {
          type: 'gauge',
          axisLine: {
            lineStyle: {
              width: 20,
              color: [
                [0.2, '#fd666d'],
                [0.8, '#37a2da'],
                [1, '#67e0e3']
              ]
            }
          },
          pointer: {
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            distance: -30,
            length: 8,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          },
          splitLine: {
            distance: -40,
            length: 10,
            lineStyle: {
              color: '#fff',
              width: 4
            }
          },
          axisLabel: {
            color: 'auto',
            distance: 40,
            fontSize: 13
          },
          detail: {
            valueAnimation: true,
            formatter: '{value} %',
            color: 'auto',
            fontSize: 24,
            offsetCenter: [0, "60%"]
          },
          data: [
            {
              value: 30.77
            }
          ]
        }
      ]
    });
    this.chaotiaoliangChart.setOption({
      title: {
        text: '乙醇进料流量(Kmol/h)',
        textStyle: {
          color: '#00CCFF',
          fontSize: 24
        }
      },
      series: [
        {
          type: 'gauge',
          axisLine: {
            lineStyle: {
              width: 20,
              color: [
                [0.2, '#fd666d'],
                [0.8, '#37a2da'],
                [1, '#67e0e3']
              ]
            }
          },
          pointer: {
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            distance: -30,
            length: 8,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          },
          splitLine: {
            distance: -40,
            length: 10,
            lineStyle: {
              color: '#fff',
              width: 4
            }
          },
          axisLabel: {
            color: 'auto',
            distance: 40,
            fontSize: 13
          },
          detail: {
            valueAnimation: true,
            formatter: '{value} %',
            color: 'auto',
            fontSize: 24,
            offsetCenter: [0, "60%"]
          },
          data: [
            {
              value: 91.21
            }
          ]
        }
      ]
    });
  }
  render() {
    return (
      <div className='bg0'>
        <div className="bg1">
          <div id="box1">
            <div className="topleftbox" />
            <div className="toprightbox" />
            <div className="bottomleftbox" />
            <div className="bottomrightbox" />
            <div id="zikongpercentChart" style={{ width: '100%', height: '90%', position: 'absolute', top: 20 }} />
          </div>
          <div id="box2">
            <div className="topleftbox" />
            <div className="toprightbox" />
            <div className="bottomleftbox" />
            <div className="bottomrightbox" />
            <div id="pinwenpercentChart" style={{ width: '100%', height: '90%', position: 'absolute', top: 20 }} />
          </div>
          <div id="box3">
            <div className="topleftbox" />
            <div className="toprightbox" />
            <div className="bottomleftbox" />
            <div className="bottomrightbox" />
            <div id="trChart" style={{ width: '100%', height: '90%', position: 'absolute', top: 20 }} />
          </div>
          <div id="box4">
            <div className="topleftbox" />
            <div className="toprightbox" />
            <div className="bottomleftbox" />
            <div className="bottomrightbox" />
            <div id="chaotiaolaingChart" style={{ width: '100%', height: '90%', position: 'absolute', top: 20 }} />
          </div>
        </div>
      </div>
    )
  }
}
let css = document.createElement('style');
css.innerHTML = `
.bg0 {
    width: 100vw;
    height: 100vh;
    display: flex;
    /* 规定主轴的方向:row是横向，column是纵向 */
    flex-direction: column;
    justify-content: space-around;
  }
  .bg0 .bg1 {
    width: 100%;
    height: 40%;
    // height: 100%;
    display: flex;
    /*规定子元素在主轴上的对齐方式*/
    justify-content: space-around;
    /*元素在侧轴上的对齐方式*/
    align-items: center;
  }
  .bg0 .bg1 #box1 {
    width: 20%;
    height: 98%;
    // width: 18%;
    // height: 98%;
    position: relative;
  }
  .bg0 .bg1 #box1 .topleftbox {
    width: 120px;
    height: 120px;
    position: absolute;
    // background-color:red;
    background-color:pink;
    // left: 0px;
    // top: 0px;
    border-top: 2px solid #116bb7;
    border-left: 2px solid #116bb7;
  }
  .bg0 .bg1 #box1 .toprightbox {
    width: 12px;
    height: 12px;
    position: absolute;
    // right: 0px;
    // top: 0px;
    border-top: 2px solid #116bb7;
    border-right: 2px solid #116bb7;
  }
  .bg0 .bg1 #box1 .bottomleftbox {
    width: 12px;
    height: 12px;
    position: absolute;
    left: 0px;
    bottom: 0px;
    border-bottom: 2px solid #116bb7;
    border-left: 2px solid #116bb7;
  }
  .bg0 .bg1 #box1 .bottomrightbox {
    width: 12px;
    height: 12px;
    position: absolute;
    right: 0px;
    bottom: 0px;
    border-bottom: 2px solid #116bb7;
    border-right: 2px solid #116bb7;
  }
  .bg0 .bg1 #box2 {
    width: 18%;
    height: 98%;
    position: relative;
  }
  .bg0 .bg1 #box2 .topleftbox {
    width: 12px;
    height: 12px;
    position: absolute;
    left: 0px;
    top: 0px;
    border-top: 2px solid #116bb7;
    border-left: 2px solid #116bb7;
  }
  .bg0 .bg1 #box2 .toprightbox {
    width: 12px;
    height: 12px;
    position: absolute;
    right: 0px;
    top: 0px;
    border-top: 2px solid #116bb7;
    border-right: 2px solid #116bb7;
  }
  .bg0 .bg1 #box2 .bottomleftbox {
    width: 12px;
    height: 12px;
    position: absolute;
    left: 0px;
    bottom: 0px;
    border-bottom: 2px solid #116bb7;
    border-left: 2px solid #116bb7;
  }
  .bg0 .bg1 #box2 .bottomrightbox {
    width: 12px;
    height: 12px;
    position: absolute;
    right: 0px;
    bottom: 0px;
    border-bottom: 2px solid #116bb7;
    border-right: 2px solid #116bb7;
  }
  .bg0 .bg1 #box3 {
    width: 28%;
    height: 98%;
    position: relative;
  }
  .bg0 .bg1 #box3 .topleftbox {
    width: 12px;
    height: 12px;
    position: absolute;
    left: 0px;
    top: 0px;
    border-top: 2px solid #116bb7;
    border-left: 2px solid #116bb7;
  }
  .bg0 .bg1 #box3 .toprightbox {
    width: 12px;
    height: 12px;
    position: absolute;
    right: 0px;
    top: 0px;
    border-top: 2px solid #116bb7;
    border-right: 2px solid #116bb7;
  }
  .bg0 .bg1 #box3 .bottomleftbox {
    width: 12px;
    height: 12px;
    position: absolute;
    left: 0px;
    bottom: 0px;
    border-bottom: 2px solid #116bb7;
    border-left: 2px solid #116bb7;
  }
  .bg0 .bg1 #box3 .bottomrightbox {
    width: 12px;
    height: 12px;
    position: absolute;
    right: 0px;
    bottom: 0px;
    border-bottom: 2px solid #116bb7;
    border-right: 2px solid #116bb7;
  }
  .bg0 .bg1 #box4 {
    width: 28%;
    height: 98%;
    position: relative;
  }
  .bg0 .bg1 #box4 .topleftbox {
    width: 12px;
    height: 12px;
    position: absolute;
    left: 0px;
    top: 0px;
    border-top: 2px solid #116bb7;
    border-left: 2px solid #116bb7;
  }
  .bg0 .bg1 #box4 .toprightbox {
    width: 12px;
    height: 12px;
    position: absolute;
    right: 0px;
    top: 0px;
    border-top: 2px solid #116bb7;
    border-right: 2px solid #116bb7;
  }
  .bg0 .bg1 #box4 .bottomleftbox {
    width: 12px;
    height: 12px;
    position: absolute;
    left: 0px;
    bottom: 0px;
    border-bottom: 2px solid #116bb7;
    border-left: 2px solid #116bb7;
  }
  .bg0 .bg1 #box4 .bottomrightbox {
    width: 12px;
    height: 12px;
    position: absolute;
    right: 0px;
    bottom: 0px;
    border-bottom: 2px solid #116bb7;
    border-right: 2px solid #116bb7;
  }
`
document.getElementsByTagName('head')[0].appendChild(css)