import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import SubMenu from "antd/lib/menu/SubMenu";
import React from "react";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";

const SideBar = () => {
  return (
    // <div className="side-bar">
      <Sider width={200} className="site-layout-background">
        <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Trang chủ">
            <Menu.Item key="1">
              <Link to="/error">Error</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="Cửa hàng">
            <Menu.Item key="5">
              <Link to="/shop">Iphone</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/shop">Samsung</Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link to="/shop">Oppo</Link>
            </Menu.Item>
            <Menu.Item key="8">
              <Link to="/shop">Shop</Link>Xiaomi
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="Giỏ hàng">
            <Menu.Item key="9">
              <Link to="/cart">Gỉo hàng</Link>
            </Menu.Item>
            <Menu.Item key="10">
              <Link to="/my-order">Sản phẩm đã mua</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    // </div>
  );
};

export default SideBar;
