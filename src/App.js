import "./App.css";
import { useEffect, useState } from "react";
import { Breadcrumb, Layout, Menu, Row, Col } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./components/Home.js";
import Shop from "./components/Shop";
import Cart from "./components/Cart.js";
import Error from "./components/Error.js";
import Checkout from "./components/Checkout";
import DetailProduct from "./components//DetailProduct/DetailProduct.js";
import MyOrder from "./components/MyOrder";


import { createBrowserHistory } from "history";
import { useSelector } from "react-redux";

function App() {
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;
  const quantity = useSelector((state) => state.cart.cart.length);

  return (
    <div className="App">
      <Router>
        <Layout>
          <Header className="header">
            <Row>
              <Col flex="1 1 400px">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
                  <Menu.Item key="1">
                    <Link to="/">Home</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/shop">Shop</Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/cart">Cart</Link>
                  </Menu.Item>
                </Menu>
              </Col>
              <Col flex="0 1 100px">
                <Link to="/cart">
                  <ShoppingCartOutlined
                    style={{ color: "#f6ffed", borderColor: "yellow", fontSize: "150%" }}
                  />
                  <span style={{ color: "#f6ffed", borderColor: "yellow", fontSize: "150%" }}>
                    ({quantity ? quantity : 0})
                  </span>
                </Link>
              </Col>
            </Row>
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="Home">
                  <Menu.Item key="1">
                    <Link to="/error">Error</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="Shop">
                  <Menu.Item key="5"><Link to="/shop">Iphone</Link></Menu.Item>
                  <Menu.Item key="6"><Link to="/shop">Samsung</Link></Menu.Item>
                  <Menu.Item key="7"><Link to="/shop">Oppo</Link></Menu.Item>
                  <Menu.Item key="8"><Link to="/shop">Shop</Link>Xiaomi</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="Cart">
                  <Menu.Item key="9"><Link to="/cart">Gỉo hàng</Link></Menu.Item>
                  <Menu.Item key="10"><Link to="/my-order">Sản phẩm đã mua</Link></Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Switch>
                  <Route path="/" exact>
                    <Home />
                  </Route>
                  <Route path="/shop">
                    <Shop />
                  </Route>
                  <Route path="/product/:id">
                    <DetailProduct />
                  </Route>
                  <Route path="/cart">
                    <Cart />
                  </Route>
                  <Route path="/error">
                    <Error />
                  </Route>
                  <Route path="/checkout">
                    <Checkout />
                  </Route>
                  <Route path="/my-order">
                    <MyOrder />
                  </Route>
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
