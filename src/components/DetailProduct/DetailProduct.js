import { useEffect, useState } from "react";
import { Card, Avatar, Row, Col, Button, Meta, Image, Rate  } from "antd";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCartAction } from "../../actions/cartActions.js";
import { formatMoney } from "../../ultils/index.js";
import { quantityUp, quantityDown } from "../../actions/cartActions.js";
import "./detail.scss";

function DetailProduct() {
  const params = useParams();
  const cart = useSelector((state) => state.cart);
  const { Meta } = Card;
  const [detailProduct, setDetailProducts] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [disabled, setDisabled] = useState(true);

  let products = useSelector((state) => state.products.products);
  useEffect(() => {
    const paramId = Number(params.id);
    let detailProduct = products.find((product) => product.id === paramId);
    setDetailProducts(detailProduct);
  }, []);
  const history = useHistory();
  const dispatch = useDispatch();
  const addToCart = (item) => {
    const newCartItem = {
      name: item.name,
      id: item.id,
      price: item.price,
      quantity: quantity,
      imgURL: item.imgURL,
    };
    dispatch(addToCartAction(newCartItem));
    history.push("/cart");
  };

  useEffect(() => {
    if (quantity <= 0) {
      setDisabled(true);
    }
  }, [quantity]);

  function handleQuantityUp() {
    setQuantity(quantity + 1);
    setDisabled(false);
  }

  function handleQuantityDown() {
    if (quantity == 0) {
      setQuantity(0);
    } else {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="detailProduct">
      <Row>
        <Col flex="6" key={detailProduct.id}>
          <Image width={600} src={detailProduct.imgURL} />
          <Row>
            <Col>
            <div style={{marginTop:'12px'}}>
            <Image width={100} src={detailProduct.imgURL} style={{paddingRight:'12px'}}/>
            <Image width={100} src={detailProduct.imgURL} style={{paddingRight:'12px'}}/>
            <Image width={100} src={detailProduct.imgURL} style={{paddingRight:'12px'}}/>
            </div>
            </Col>
          </Row>
        </Col>
        <Col flex="6">
          <h1>{detailProduct.name}</h1>
          <p>{formatMoney(detailProduct.price + " ") + "VND"}</p>
          Quantity ({quantity})
          <div style={{ display: "block", marginTop: "12px" }}>
            <Button
              onClick={() => {
                handleQuantityDown();
              }}
            >
              -
            </Button>
            <Button
              onClick={() => {
                handleQuantityUp();
              }}
            >
              +
            </Button>
            <Button type="primary" onClick={() => addToCart(detailProduct)} disabled={disabled}>
              Add cart
            </Button>
          </div>
          <div className="des" style={{marginTop: "12px" }}>
            <h3>Information product</h3>
            <p>
              {detailProduct.description}
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col flex={24}>
          <h3 style={{marginTop: "12px",display:'block' }}>Top Rate</h3>
          <Rate allowHalf defaultValue={5} style={{display:'block',background:'#ccc' }}/>
        </Col>
      </Row>
    </div>
  );
}

export default DetailProduct;
