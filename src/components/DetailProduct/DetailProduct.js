import { useEffect, useState } from "react";
import { Card, Avatar, Row, Col, Button, Meta } from "antd";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCartAction } from "../../actions/cartActions.js";
import { formatMoney } from "../../ultils/index.js";
import { quantityUp, quantityDown } from "../../actions/cartActions.js";

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
  const history = useHistory()
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
    history.push("/cart")
  };

  useEffect(()=> {
    if(quantity <=0) {
      setDisabled(true)
    }
  }, [quantity])

  function handleQuantityUp() {
    setQuantity(quantity+1)
    setDisabled(false)
  }

  function handleQuantityDown() {
    if(quantity==0) {
      setQuantity(0)
    }
    else {
      setQuantity(quantity-1)
    }
  }

  return (
    <>
      <Row>
        <Col flex="6" key={detailProduct.id}>
          <Card
            style={{ width: 600 }}
            cover={<img alt={detailProduct.name} src={detailProduct.imgURL} />}
            actions={[]}
          ></Card>
        </Col>
        <Col flex="6">
          <h1>{detailProduct.name}</h1>
          <p>{formatMoney(detailProduct.price + " ") + "VND"}</p>
          Quantity ({quantity})
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
        </Col>
      </Row>
    </>
  );
}

export default DetailProduct;
