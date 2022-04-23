import React, { useEffect, useState } from "react";
import { Table, Tag, Space } from "antd";
import { useSelector } from "react-redux";

const MyOrder = () => {
  const myOrder = useSelector((state)=> state.myOrder.myOrder[0])
  console.log(myOrder);
  const columns = [
    {
      title: "Tên khách hàng",
      dataIndex: "codeOder",
      key: "codeOder",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Địa chỉ",
      dataIndex: "recipient",
      key: "recipient",
    },
    {
      title: "Số điện thoại",
      dataIndex: "createAt",
      key: "createAt",
    },
    {
      title: "Email",
      key: "totalMoney",
      dataIndex: "totalMoney",
    },
    {
      title: "Xem chi tiết",
      key: "action",
      render: () => (
        <Space size="middle">
          <a>Xem chi tiết đơn hàng</a>
        </Space>
      ),
    },
  ];

  const [data, setData] = useState([
    {
      key: "1",
      codeOder: myOrder.name,
      recipient: myOrder.address,
      createAt: myOrder.phone,
      totalMoney: myOrder.email,
    }
  ]);

  return (
    <div>
      <h1 style={{textAlign: 'center',margin: '20px 0'}}>Thông tin khách hàng đã đặt</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default MyOrder;
