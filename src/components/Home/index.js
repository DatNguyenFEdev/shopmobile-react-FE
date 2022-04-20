import "./home.scss";
import { react, useEffect, useState } from "react";
import { Button, Card, Col, Row, Carousel } from "antd";
import { useSelector } from "react-redux";
import { formatMoney } from "../../ultils";
import { Link, useHistory, useLocation } from "react-router-dom";

function Home() {
  const { Meta } = Card;
  const history = useHistory();
  const location = useLocation();
  const setMargin = {
    marginBottom: "20px",
  };
  const changeLocation = (location) => {
    history.push(location);
  };
  const listProduct = useSelector((state) => state.products.products);
  let itemProduct = listProduct.slice(0, 4).map((product) => (
    <Col key={product.id} style={setMargin} xs={12} md={8} xl={6} sm={6}>
      <Card
      hoverable
        style={{ margin: "0 6px", padding: "10px 0" }}
        cover={<img alt={product.name} src={product.imgURL} />}
        actions={[]}
      >
        <Meta
          title={product.name}
          description={formatMoney(product.price + " ") + "VND"}
          onClick={() => changeLocation(`/product/${product.id}`)}
          style={setMargin}
        />
        <Button type="primary" onClick={() => changeLocation(`/product/${product.id}`)}>
          Mua ngay
        </Button>
      </Card>
    </Col>
  ));
  return (
    <div className="home">
      <Carousel autoplay>
      <div>
        <img
          src="https://hbmedia.com.vn/wp-content/uploads/2019/09/Banner_2.jpg"
          alt=""
          style={{ objectFit: "cover", width: "100%" }}
        />
      </div>
      <div>
        <img
          src="https://hbmedia.com.vn/wp-content/uploads/2019/09/Banner_2.jpg"
          alt=""
          style={{ objectFit: "cover", width: "100%" }}
        />
      </div>
      <div>
        <img
          src="https://hbmedia.com.vn/wp-content/uploads/2019/09/Banner_2.jpg"
          alt=""
          style={{ objectFit: "cover", width: "100%" }}
        />
      </div>
      </Carousel>
      <h2 style={{marginTop:'20px'}}>BEST SELLER</h2>
      <div className="best-seller">
        <Row>{itemProduct}</Row>
      </div>
    </div>
  );
}

export default Home;
