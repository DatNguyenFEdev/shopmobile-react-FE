import { React, useState } from "react";
import "./checkoutStyle.scss";
import { CreditCardOutlined } from "@ant-design/icons";
import { Input, Row, Col, Radio, Space, List, Typography, Divider, Button, Modal } from "antd";
import { useSelector } from "react-redux";
import { formatMoney } from "../../ultils/index.js";
import { Link } from "react-router-dom";
const CheckOut = () => {
  const [value, setValue] = useState(1);
  const [inputCode, setInputCode] = useState('');
  const [code, setCode] = useState('');
  
  const handleSaleCode = ()=> {
    setInputCode(code)
  }

  const cart = useSelector((state) => state.cart.cart);

  let totalPrice = 0;
  const sum = (cart.length > 0 ? cart.map((item) => (totalPrice += (item.price * item.quantity))) : 0);

  const quantity = useSelector((state) => state.cart.cart.length);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="checkout">
      <div className="header-checkout">
        <div>
          <CreditCardOutlined className="icon" />
        </div>
        <h1>
          CheckOut (Vui lòng kiểm tra thông tin khách hàng, thông tin giỏ hàng trước khi đặt hàng)
        </h1>
      </div>
      {/* ===============modal============ */}
      <Modal title="ĐẶT HÀNG THÀNH CÔNG" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Cảm ơn bạn đã cho chúng tôi phục vụ!</p>
        <Button><Link to="/my-order">Xem chi tiết đơn hàng</Link></Button>
        <Button><Link to="/">Quay lại trang chủ</Link></Button>
        
      </Modal>
      {/* ===============modal============ */}

      <Row>
        <Col span={14}>
          <h2>Thông tin khách hàng</h2>
          <div className="main-checkout">
            <Input size="large" className="input" placeholder="Họ tên" />
            <Input size="large" className="input" placeholder="Giới tính" />
            <Input size="large" className="input" placeholder="Địa chỉ" />
            <Input size="large" className="input" placeholder="Email" />
          </div>
          <h3>Hình thức thanh toán</h3>
          <Radio.Group onChange={(e) => onChange(e)} value={value}>
            <Space direction="vertical">
              <Radio value={1}>Tiền mặt</Radio>
              <Radio value={2}>Chuyển khoản</Radio>
              <Radio value={3}>Ship COD</Radio>
            </Space>
          </Radio.Group>
          <Button size="large" className="btn-order" onClick={showModal}>
            Đặt hàng
          </Button>
        </Col>
        <Col span={10}>
          <h2>Giỏ hàng</h2>
          <Divider orientation="left">{quantity} sản phẩm</Divider>
          <List
            bordered
            dataSource={cart}
            renderItem={(item) => (
              <List.Item>
                {/* {handleTotalPrice(item.price,item.quantity)} */}
                <Typography.Text mark>{item.name}</Typography.Text>{" "}
                <strong style={{display: 'block'}}>{item.quantity}</strong>
                <p style={{display: 'block'}}>
                {formatMoney(item.price + "") + " " + "VND"}
                </p>
              </List.Item>
            )}
          />
          <Typography.Text>Tổng tiền: {inputCode=="sale" && totalPrice >0 ? formatMoney((totalPrice - 50000) + ""):formatMoney((totalPrice) + "")} VND</Typography.Text>
          <p>Nhập mã "sale" để giảm 50.0000 VND</p>
          <Row justify="between">
            <Col>
              <Input placeholder="Nhập mã giảm giá" onChange={((e)=> setCode(e.target.value))}/>
            </Col>
            <Col>
              <Button onClick={()=> handleSaleCode()}>Áp dụng</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CheckOut;
