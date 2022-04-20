import { Button, Card, Col } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { useHistory } from "react-router-dom";
import { formatMoney } from "../../ultils/index.js";

const ItemCard = ({ item, index }) => {
  const { Meta } = Card;
  const history = useHistory();
  return (
    <Col key={index} xs={12} md={8} xl={6} sm={8}>
      <Card hoverable cover={<img alt={item.name} src={item.imgURL} style={{padding:'20px 0'}}/>}>
        <Meta
          title={item.name}
          description={formatMoney(item.price + "") + "VND"}
          onClick={() => history.push(`/product/${item.id}`)}
        />
        <Button type="primary" onClick={() => history.push(`/product/${item.id}`)} style={{marginTop:'12px'}}>
          Mua ngay
        </Button>
      </Card>
    </Col>
  );
};

export default ItemCard;
