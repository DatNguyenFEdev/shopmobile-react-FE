import { React, useState } from "react";
import "./checkoutStyle.scss";
import { CreditCardOutlined } from "@ant-design/icons";
import {
  Input,
  Row,
  Col,
  Radio,
  List,
  Typography,
  Divider,
  Button,
  Modal,
  Form,
  Image,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { formatMoney } from "../../ultils/index.js";
import { Link } from "react-router-dom";
import { addMyOrderAction } from "../../actions/myOrderActions";
import { clearCart } from "../../actions/cartActions";

const CheckOut = () => {
  const [value, setValue] = useState(1);
  const [inputCode, setInputCode] = useState("");
  const [code, setCode] = useState("");
  const dispatch = useDispatch();
  const [inforClient, setInforClient] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
  });

  const [typePayment, setType] = useState(null);

  const [form] = Form.useForm();

  const handleSaleCode = () => {
    setInputCode(code);
  };

  const cart = useSelector((state) => state.cart.cart);

  let totalPrice = 0;
  const sum = cart.length > 0 ? cart.map((item) => (totalPrice += item.price * item.quantity)) : 0;

  const quantity = useSelector((state) => state.cart.cart.length);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
    dispatch(addMyOrderAction({ ...inforClient, cart }));
    dispatch(clearCart([]));
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    setInforClient(values);
    setIsModalVisible(true);
  };

  const onChange = (e) => {
    setType(e.target.value);
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
      <Modal
        title="ĐẶT HÀNG THÀNH CÔNG"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Cảm ơn bạn đã cho chúng tôi phục vụ!</p>
        <p>
          <strong>Tên:</strong> {inforClient.name}
        </p>
        <p>
          <strong>SDT:</strong> {inforClient.phone}
        </p>
        <p>
          <strong>Địa chỉ:</strong> {inforClient.address}
        </p>
        <p>
          <strong>Email:</strong> {inforClient.email}
        </p>
        <Button>
          <Link to="/my-order">Xem chi tiết đơn hàng</Link>
        </Button>
        <Button>
          <Link to="/">Quay lại trang chủ</Link>
        </Button>
      </Modal>
      {/* ===============modal============ */}

      <Row>
        <Col md={14} sm={24}>
          <h2>Thông tin khách hàng</h2>
          <div className="main-checkout">
            <Form form={form} onFinish={onFinish} layout="vertical">
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[{ required: true, message: "Vui lòng nhập số điện thoại!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Adress"
                name="address"
                rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, type: "email", message: "Vui lòng nhập email!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="paymentType"
                rules={[{ required: true, message: "VUi lòng chọn phương thức thanh toán!" }]}
              >
                <Radio.Group onChange={onChange}>
                  <Radio value={1}>Tiền mặt</Radio>
                  <Radio value={2}>Chuyển khoản</Radio>
                  <Radio value={3}>Ship COD</Radio>
                </Radio.Group>
              </Form.Item>
              {typePayment == 2 ? (
                <Image
                  width={200}
                  height={200}
                  src="error"
                  fallback="data:image/png;base64,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"
                />
              ) : (
                ""
              )}
              <Button
                block={true}
                style={{ marginTop: "12px" }}
                type="primary"
                size="large"
                htmlType="submit"
              >
                ĐẶT MUA
              </Button>
            </Form>
          </div>
        </Col>
        <Col md={10} sm={24}>
          <h2>Giỏ hàng</h2>
          <Divider orientation="left">{quantity} sản phẩm</Divider>
          <List
            bordered
            dataSource={cart}
            renderItem={(item) => (
              <List.Item>
                {/* {handleTotalPrice(item.price,item.quantity)} */}
                <Typography.Text mark>{item.name}</Typography.Text>{" "}
                <strong style={{ display: "block" }}>{item.quantity}</strong>
                <p style={{ display: "block" }}>{formatMoney(item.price + "") + " " + "VND"}</p>
              </List.Item>
            )}
          />
          <Typography.Text>
            Tổng tiền:{" "}
            <p style={{ color: "red", fontSize: "20px" }}>
              {inputCode == "sale" && totalPrice > 0
                ? formatMoney(totalPrice - 50000 + "")
                : formatMoney(totalPrice + "")}{" "}
              VND
            </p>
          </Typography.Text>
          <p>(Đã bao gồm VAT nếu có)</p>
          <p>Nhập mã "sale" để giảm 50.0000 VND</p>
          <Row justify="between">
            <Col>
              <Input placeholder="Nhập mã giảm giá" onChange={(e) => setCode(e.target.value)} />
            </Col>
            <Col>
              <Button onClick={() => handleSaleCode()}>Áp dụng</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CheckOut;
