import "./App.css";
import { Breadcrumb, Layout, Menu, Row, Col, BackTop } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  ArrowUpOutlined
} from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
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
import SideBar from "./components/SideBar.js";

function App() {
  const { SubMenu } = Menu;
  const {Content, Sider } = Layout;
  const quantity = useSelector((state) => state.cart.cart.length);

  return (
    <div className="App">
      <BackTop>
        <div style={{background:'#1088e9', height: '40px', width:'40px', textAlign: 'center',lineHeight:'40px', borderRadius: 50,color:'#fff'}}>
        <ArrowUpOutlined />
        </div>
      </BackTop>
      <Router>
        {/* <Layout> */}
          <HeaderComp quantity = {quantity} />
          <Layout>
            <SideBar/>
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
                <Route path="/checkout">
                  <Checkout />
                </Route>
                <Route path="/my-order">
                  <MyOrder />
                </Route>
                <Route path="*">
                  <Error />
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
