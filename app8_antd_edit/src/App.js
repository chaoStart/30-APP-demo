// import { Button, Form, Input, Popconfirm, Table } from 'antd';
// import React, { useContext, useEffect, useRef, useState } from 'react';
// import 'antd/dist/antd.css'
import { Form, InputNumber, Popconfirm, Input, Table, Typography } from 'antd';
import { useState } from 'react';
import './App.css'
const originData = [];
for (let i = 0; i < 10; i++) {
  originData.push({
    key: i.toString(),
    // name: `Edrward ${i}`,
    // age: 32,
    // address: `London Park no. ${i}`,
    // address1: `London Park no. ${i}`,
    // address2: `London Park no. ${i}`,
    name: `请编辑 ${i}`,
    // age: 32,
    age: `请编辑 ${i}`,
    address: `请编辑 ${i}`,
    address1: `请编辑 ${i}`,
    address2: `请编辑${i}`,
  });
}
const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const App = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record) => record.key === editingKey;
  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      address1: '',
      address2: '',
      ...record,
    });
    setEditingKey(record.key);
  };
  const cancel = () => {
    setEditingKey('');
  };
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };
  const columns = [
    {
      // title: 'name',
      // dataIndex: 'name',
      title: '指标',
      dataIndex: 'name',
      width: '15%',
      editable: true,
    },
    {
      title: '主成分1',
      dataIndex: 'age',
      width: '20%',
      editable: true,
    },
    {
      title: '主成分2',
      dataIndex: 'address',
      width: '20%',
      editable: true,
    },
    {
      title: '主成分3',
      dataIndex: 'address1',
      width: '20%',
      editable: true,
    },
    {
      title: '主成分4',
      dataIndex: 'address2',
      width: '20%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};
export default App;