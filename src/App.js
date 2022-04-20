import "./App.css";
import { Breadcrumb, Layout, Menu, Row, Col } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart.js";
import Error from "./components/Error.js";
import Checkout from "./components/Checkout";
import DetailProduct from "./components//DetailProduct/DetailProduct.js";
import MyOrder from "./components/MyOrder";
import HeaderComp from "./components/Header";
import FooterComp from "./components/Footer";

// import { createBrowserHistory } from "history";
import { useSelector } from "react-redux";

function App() {
  const { SubMenu } = Menu;
  const {Content, Sider } = Layout;
  const quantity = useSelector((state) => state.cart.cart.length);

  return (
    <div className="App">
      <Router>
        {/* <Layout> */}
          <HeaderComp quantity = {quantity} />
          <Layout>
            <div className="side-bar">
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                // defaultSelectedKeys={["1"]}
                // defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="Trang chủ">
                  <Menu.Item key="1">
                    <Link to="/error">Error</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="Cửa hàng">
                  <Menu.Item key="5"><Link to="/shop">Iphone</Link></Menu.Item>
                  <Menu.Item key="6"><Link to="/shop">Samsung</Link></Menu.Item>
                  <Menu.Item key="7"><Link to="/shop">Oppo</Link></Menu.Item>
                  <Menu.Item key="8"><Link to="/shop">Shop</Link>Xiaomi</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="Giỏ hàng">
                  <Menu.Item key="9"><Link to="/cart">Gỉo hàng</Link></Menu.Item>
                  <Menu.Item key="10"><Link to="/my-order">Sản phẩm đã mua</Link></Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            </div>
            <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
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
          <FooterComp />
        {/* </Layout> */}
      </Router>
    </div>
  );
}

export default App;
