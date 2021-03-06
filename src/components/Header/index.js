import { Col, Menu, Row, Layout, Input } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined, SearchOutlined, MenuOutlined} from "@ant-design/icons";
import "./header.scss"

const HeaderComp = (props) => {
  const { Header } = Layout;
  const [isOpen,setOpen] = useState(false)
  const toggleMenu = () => {
    setOpen(!isOpen)
  }
  return (
    <Header className="header">
      <Row className="nav">
        <Col lg={2} xs={12}>
        <Link to="/">
          <div className="logo" style={{ width: "50px", marginRight: "30px" }}>
            <img
              style={{ width: "100%" }}
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </Link>
        </Col>
        <Col flex="1 1 400px" lg={10} xs={0}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/">Trang ch???</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/shop">C???a h??ng</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/cart">Gi??? h??ng</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/contact">Li??n h???</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/my-order">????n h??ng c???a t??i</Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col lg={8} style={{margin:'0 auto'}} xs={0}>
          <div style={{position:"relative"}}>
          <Input placeholder="Search " />
          <SearchOutlined style={{color: '#bbbbbb',position:"absolute", top:'40%',right:'10px',cursor:'pointer'}} />
          </div>
        </Col>
        <Col lg={2} xs={0}>
          <Link to="/cart">
            <ShoppingCartOutlined
              style={{ color: "#f6ffed", borderColor: "yellow", fontSize: "150%" }}
            />
            <span style={{ color: "#f6ffed", borderColor: "yellow", fontSize: "150%" }}>
              ({props.quantity ? props.quantity : 0})
            </span>
          </Link>
        </Col>
        <Col lg={0} md={12} sm={12} xs={12}><MenuOutlined 
        style={{ float: "right",paddingTop:'20px',color: "#f6ffed", fontSize: "150%" }}
        onClick={()=> {toggleMenu()}}
        /></Col>
        {isOpen ? <Col span={24} className="menu_mobile">
        <Menu theme="dark" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" align="middle">
              <Link to="/">Trang ch???</Link>
            </Menu.Item>
            <Menu.Item key="2" align="middle">
              <Link to="/shop">C???a h??ng</Link>
            </Menu.Item>
            <Menu.Item key="3" align="middle">
              <Link to="/cart">Gi??? h??ng</Link>
            </Menu.Item>
            <Menu.Item key="4" align="middle">
              <Link to="/contact">Li??n h???</Link>
            </Menu.Item>
            <Menu.Item key="5" align="middle">
              <Link to="/my-order">????n h??ng c???a t??i</Link>
            </Menu.Item>
          </Menu>
        </Col>:''}
      </Row>
    </Header>
  );
};

export default HeaderComp;
