// import React from 'react';
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import './App.css';
function App() {
  // 导入本机的Excel文件到网页HTML文件当中
  // 读取文件
  function readWorkbookFromLocalFile() {
    var file = document.getElementById('inputfilename').files[0];
    if (file) {
      var reader = new FileReader();

      reader.onload = function (e) {
        var data = e.target.result;
        var workbook = XLSX.read(data, { //XLSX.read()方法会返回一个workbook 对象
          type: 'binary'
        });
        readWorkbook(workbook);
      };
      reader.readAsBinaryString(file);

    } else {
      alert('请先选择文件');
    }
  }
  // 分别创建json和csv的空列表
  var json = null;
  // var csv = '';
  const [csv, setCsv] = useState("")
  // 读取Excel并且显示在桌面上
  function readWorkbook(workbook) {
    // 工作表名称集合
    var sheetNames = workbook.SheetNames;
    // 这里我们只读取第一张sheet的内容
    var worksheet = workbook.Sheets[sheetNames[0]];
    //这里便可以得到csv格式
    setCsv(XLSX.utils.sheet_to_csv(worksheet))
    // csv = XLSX.utils.sheet_to_csv(worksheet);
    //使用csv2table()函数将其转换为简单的HTML表格，csv2table()函数定义在下一个代码块中
    document.getElementById('result').innerHTML = csv2table(csv);
    json = XLSX.utils.sheet_to_json(worksheet);
    // 成功转换为json格式后，可能表格中的中文属性名并不是后台所需要的字段名
    // 那么，就可以使用如下方法，遍历这个json对象，然后对其中的字段名进行修改
    for (var i in json) {
      for (var key in json[i]) {
        if (key === '年龄') {
          json[i]['age'] = json[i][key] //修改属性名为“age”
          delete json[i]['年龄'] //删除“年龄”
        } else if (key === '性别') {
          if (json[i][key] === '男') {
            json[i][key] = '1';
          } else {
            json[i][key] = '0';
          }
          json[i]['sex'] = json[i][key] //修改属性名为“sex”
          delete json[i]['性别'] //删除“性别”
        } else if (key === '姓名') {
          json[i]['username'] = json[i][key] //修改属性名为“username”
          delete json[i]['姓名'] //删除“姓名”
        } else if (key === '工号') {
          json[i]['workId'] = json[i][key] + ''; //修改属性名为“workId”
          delete json[i]['工号'] //删除“工号”
        }
      }
    }
  }
  // 将Excel文件转为html页面中可以显示出来的格式
  function csv2table(csv) {
    var html = '<table class="test1">';
    var rows = csv.split('\n');
    rows.pop(); // 最后一行没用的
    rows.forEach(function (row, idx) {
      var columns = row.split(',');
      columns.unshift(idx + 1); // 添加行索引
      if (idx === 0) { // 添加列索引
        html += '<tr>';
        for (var i = 0; i < columns.length; i++) {
          html += '<th>' + (i === 0 ? '' : String.fromCharCode(65 + i - 1)) + '</th>';
        }
        html += '</tr>';
      }
      html += '<tr>';
      columns.forEach(function (column) {
        html += '<td>' + column + '</td>';
      });
      html += '</tr>';
    });
    html += '</table>';
    return html;
  }


  // 导出Excel文件到本机中
  // csv转sheet对象
  function csv2sheet(csv) {
    var sheet = {}; // 将要生成的sheet
    csv = csv.split('\n');
    csv.forEach(function (row, i) {
      row = row.split(',');
      if (i === 0) sheet['!ref'] = 'A1:' + String.fromCharCode(65 + row.length - 1) + (csv.length - 1);
      row.forEach(function (col, j) {
        sheet[String.fromCharCode(65 + j) + (i + 1)] = { v: col };
      });
    });
    return sheet;
  }
  // 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
  function sheet2blob(sheet, sheetName) {
    sheetName = sheetName || 'sheet1';
    var workbook = {
      SheetNames: [sheetName],
      Sheets: {}
    };
    workbook.Sheets[sheetName] = sheet;
    // 生成excel的配置项
    var wopts = {
      bookType: 'xlsx', // 要生成的文件类型
      bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
      type: 'binary'
    };
    var wbout = XLSX.write(workbook, wopts);
    var blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
    // 字符串转ArrayBuffer
    function s2ab(s) {
      var buf = new ArrayBuffer(s.length);
      var view = new Uint8Array(buf);
      for (var i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
      return buf;
    }
    return blob;
  }
  /**
* 通用的打开下载对话框方法，没有测试过具体兼容性
* @param url 下载地址，也可以是一个blob对象，必选
* @param saveName 保存文件名，可选
*/
  function openDownloadDialog(url, saveName) {
    if (typeof url == 'object' && url instanceof Blob) {
      url = URL.createObjectURL(url); // 创建blob地址
    }
    var aLink = document.createElement('a');
    aLink.href = url;
    aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
    var event;
    if (window.MouseEvent) event = new MouseEvent('click');
    else {
      event = document.createEvent('MouseEvents');
      event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    }
    aLink.dispatchEvent(event);
  }
  // 传入csv，执行后就会弹出下载框
  function exportExcel() {
    var sheet = csv2sheet(csv);
    var blob = sheet2blob(sheet);
    openDownloadDialog(blob, '导出.xlsx');
  }
  function sum() {
    // var para=document.getElementById("").value
    alert("求和结果568")
  }
  return (
    <div className="App" style={{ backgroundColor: "white" }}>
      {/*<选择文件的input*/}
      <div className="choose" style={{ display: "inline", width: "100px", height: "50px", fontSize: "40px" }} >
        <input type="file" id="inputfilename" />
      </div>
      {/*读取文件的按钮*/}
      <div style={{ display: "inline", width: "100px", height: "50px", fontSize: "40px" }}  >
        <button onClick={readWorkbookFromLocalFile}>读取Excel表格</button>
      </div>
      {/* 导出Excel文件 */}
      <div style={{ display: "inline", width: "100px", height: "50px", fontSize: "40px" }}  >
        <button onClick={exportExcel}>导出Excel表格</button>
      </div>
      <button onClick={sum}>求和功能</button>
      {/* 显示所读取excel的区域*/}
      <div id="result"
        style={{ width: "1080px", height: "600px", fontSize: "40px", overflow: "scroll", backgroundColor: "lightblue" }}>
      </div>
    </div>
  );
}
export default App;