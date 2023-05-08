import React, { PureComponent } from 'react';
import * as echarts from 'echarts';
// import { Table } from 'antd';
export default class PIDComponent extends PureComponent {

  render() {
    return (
      <div className='bg0'>
        <div className="bg1" style={{ width: '500px', height: '300px', backgroundColor: 'pink', position: 'relative' }}>
          <div id="box1">
            <div className="lefttop" style={{ width: '30px', height: '30px', left: '0px', top: '0px', borderTop: '3px solid rgb(94, 227, 229)', borderLeft: '3px solid rgb(94, 227, 229)', position: 'absolute' }} />
            <div className="leftbottom" style={{ width: '30px', height: '30px', left: '0px', bottom: '0px', borderBottom: '3px solid rgb(94, 227, 229)', borderLeft: '3px solid rgb(94, 227, 229)', position: 'absolute' }} />
            <div className="righttop" style={{ width: '30px', height: '30px', right: '0px', top: '0px', borderTop: '3px solid rgb(94, 227, 229)', borderRight: '3px solid rgb(94, 227, 229)', position: 'absolute' }} />
            <div className="rightbottom" style={{ width: '30px', height: '30px', right: '0px', bottom: '0px', borderBottom: '3px solid rgb(94, 227, 229)', borderRight: '3px solid rgb(94, 227, 229)', position: 'absolute' }} />
          </div>
          {/* <div id="box2">
            <div className="topleftbox" />
            <div className="toprightbox" />
            <div className="bottomleftbox" />
            <div className="bottomrightbox" />
          </div> */}
        </div>
      </div>
    )
  }
}
