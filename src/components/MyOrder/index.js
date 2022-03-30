import React, { useState } from "react";
import { Table, Tag, Space } from "antd";

const MyOrder = () => {
  const columns = [
    {
      title: "Mã đơn hàng",
      dataIndex: "codeOder",
      key: "codeOder",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tên người nhận",
      dataIndex: "recipient",
      key: "recipient",
    },
    {
      title: "Thời gian tạo",
      dataIndex: "createAt",
      key: "createAt",
    },
    {
      title: "Tiền thanh toán",
      key: "totalMoney",
      dataIndex: "totalMoney",
    },
    {
      title: "Action",
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
      codeOder: "Điện thoại iPhone 12",
      recipient: 'Nguyen Van A',
      createAt: "10/12/2021",
      totalMoney: 40000000,
    },
    {
      key: "2",
      codeOder: "Điện thoại iPhone 11",
      recipient: 'Nguyen Van B',
      createAt: "10/02/2022",
      totalMoney: 50000000,
    },
    {
      key: "3",
      codeOder: "Điện thoại iPhone 13",
      recipient: 'Nguyen Van C',
      createAt: "10/03/2022",
      totalMoney: 6500000,
    },
  ]);

  return (
    <div>
      <h1>Đơn hàng của bạn</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default MyOrder;
