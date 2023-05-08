import React, { Component } from 'react'
import * as echarts from 'echarts'
// import $ from 'jquery';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      res: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
    }
  }
  componentDidMount = () => {
    this.ChartInit()
  }
  ChartInit = () => {
    var app = {};
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;
    const categories = (function () {
      let now = new Date();
      let res = [];
      let len = 10;
      while (len--) {
        res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
        now = new Date(+now - 2000);
      }
      return res;
    })();
    const categories2 = (function () {
      let res = [];
      let len = 10;
      while (len--) {
        res.push(10 - len - 1);
      }
      return res;
    })();
    const data = (function () {
      let res = [];
      let len = 10;
      while (len--) {
        res.push(Math.round(Math.random() * 1000));
      }
      return res;
    })();
    const data2 = (function () {
      let res = [];
      let len = 0;
      while (len < 10) {
        res.push(+(Math.random() * 10 + 5).toFixed(1));
        len++;
      }
      return res;
    })();
    option = {
      title: {
        text: 'Dynamic Data'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#283b56'
          }
        }
      },
      legend: {},
      toolbox: {
        show: true,
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {}
        }
      },
      dataZoom: {
        show: false,
        start: 0,
        end: 100
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: true,
          data: categories
        },
        {
          type: 'category',
          boundaryGap: true,
          data: categories2
        }
      ],
      yAxis: [
        {
          type: 'value',
          scale: true,
          name: 'Price',
          max: 30,
          min: 0,
          boundaryGap: [0.2, 0.2]
        },
        {
          type: 'value',
          scale: true,
          name: 'Order',
          max: 1200,
          min: 0,
          boundaryGap: [0.2, 0.2]
        }
      ],
      series: [
        {
          name: 'Dynamic Bar',
          type: 'bar',
          xAxisIndex: 1,
          yAxisIndex: 1,
          data: data
        },
        {
          name: 'Dynamic Line',
          type: 'line',
          data: data2
        }
      ]
    };
    app.count = 11;
    setInterval(function () {
      let axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');
      data.shift();
      data.push(Math.round(Math.random() * 1000));
      data2.shift();
      data2.push(+(Math.random() * 10 + 5).toFixed(1));
      categories.shift();
      categories.push(axisData);
      categories2.shift();
      categories2.push(app.count++);
      myChart.setOption({
        xAxis: [
          {
            data: categories
          },
          {
            data: categories2
          }
        ],
        series: [
          {
            data: data
          },
          {
            data: data2
          }
        ]
      });
    }, 2100);
    option && myChart.setOption(option);
  }
  repeatData = () => {
    const newData = [...this.state.res];
    newData.shift()
    newData.push((Math.random() * 100).toFixed(1))
    this.setState({
      count: this.state.count + 1,
      res: newData
    }, () => {
      console.log('res', this.state.res)
    })
    // setInterval(function () { console.log("Hello"); }, 2000);
    setInterval(function () {
      // const newData = [...this.state.res]
      // newData.shift()
      // newData.push((Math.random() * 100).toFixed(1))
      console.log('res', this.state.res)
    }, 2000);
  }
  // function sum(params) {
  //   console.log('23')
  //   console.log(this.state.count)
  // }
  sum = (params) => {
    console.log('23')
    console.log(this.state.count)
  }
  // function exhabition() {
  //   let arr = [
  //     { name: "张三", age: "1", sex: "男", grade: 11 },
  //     { name: "李四", age: "2", sex: "男", grade: 12 },
  //     { name: "王五", age: "3", sex: "男", grade: 13 },
  //     { name: "赵六", age: "4", sex: "男", grade: 16 },
  //   ]

  //   let res = arr.map((item, index) => {
  //     // return item.grade, item.name;

  //     return Object.assign({}, { 'name': item.name, 'grade': item.grade })
  //   })
  //   console.log(res) // 输出结果为 [11, 12, 13, 16]
  // }
  exhabition = () => {
    let arr = [
      { name: "张三", age: "1", sex: "男", grade: 11 },
      { name: "李四", age: "2", sex: "男", grade: 12 },
      { name: "王五", age: "3", sex: "男", grade: 13 },
      { name: "赵六", age: "4", sex: "男", grade: 16 },
    ]

    let res = arr.map((item, index) => {
      // return item.grade, item.name;

      return Object.assign({}, { 'name': item.name, 'grade': item.grade })
    })
    console.log(res) // 输出结果为 [11, 12, 13, 16]
  }
  // setInterval(function(){ alert("Hello"); }, 3000);
  render() {
    // function repeatData() {
    //   this.setState({
    //     count: this.state.count + 1,
    //   })
    //   console.log('我好害怕')
    // }
    return (
      <div>
        <button type="submit" value="提交" onClick={this.sum}>测试</button>
        <button type="submit" value="提交" onClick={this.exhabition}>展示数据</button>
        <button onClick={this.repeatData}>更新数据</button>
        <div id='main' style={{ width: 1000, height: 600 }}></div>
        <h1 style={{ display: 'inline-block' }}>状态:{this.state.count}</h1>&nbsp;&nbsp;
        <h1 style={{ display: 'inline-block' }}>数组:{this.state.res[0]}</h1>
      </div>
    )
  }
}
export default App