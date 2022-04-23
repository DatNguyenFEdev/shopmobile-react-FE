import React, { useEffect, useState, createElement } from "react";
import {
  Card,
  Avatar,
  Row,
  Col,
  Button,
  Meta,
  Image,
  Rate,
  Input,
  Form,
  Comment,
  Tooltip,
} from "antd";
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from "@ant-design/icons";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCartAction } from "../../actions/cartActions.js";
import { formatMoney } from "../../ultils/index.js";
import { quantityUp, quantityDown } from "../../actions/cartActions.js";
import "./detail.scss";
import moment from "moment";

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

  const Demo = () => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);

    const like = () => {
      setLikes(1);
      setDislikes(0);
      setAction("liked");
    };

    const dislike = () => {
      setLikes(0);
      setDislikes(1);
      setAction("disliked");
    };

    const actions = [
      <Tooltip key="comment-basic-like" title="Like">
        <span onClick={like}>
          {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
          <span className="comment-action">{likes}</span>
        </span>
      </Tooltip>,
      <Tooltip key="comment-basic-dislike" title="Dislike">
        <span onClick={dislike}>
          {React.createElement(action === "disliked" ? DislikeFilled : DislikeOutlined)}
          <span className="comment-action">{dislikes}</span>
        </span>
      </Tooltip>,
      <span key="comment-basic-reply-to">Reply to</span>,
    ];
  };

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

  const { TextArea } = Input;
  return (
    <div className="detailProduct">
      <Row>
        <Col md={24} xl={10} key={detailProduct.id} align="middle">
          <Image width={600} src={detailProduct.imgURL} />
          <Row>
            <Col>
              <div style={{ marginTop: "12px" }}>
                <Image width={100} src={detailProduct.imgURL} style={{ paddingRight: "12px" }} />
                <Image width={100} src={detailProduct.imgURL} style={{ paddingRight: "12px" }} />
                <Image width={100} src={detailProduct.imgURL} style={{ paddingRight: "12px" }} />
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={24} xl={14}>
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
          <div className="des" style={{ marginTop: "12px" }}>
            <h3>Information product</h3>
            <p>{detailProduct.description}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col flex={24}>
          <h3 style={{ marginTop: "12px", display: "block" }}>Đánh giá</h3>
          <Rate
            allowHalf
            defaultValue={detailProduct.rate}
            style={{ display: "block", background: "#fff" }}
          />
          <h3>Viết đánh giá</h3>
          <Form.Item>
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">
              Add Comment
            </Button>
          </Form.Item>
          <Comment
            author={<a>Dat Nguyen</a>}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={<p>Đã nhận sản phẩm. Rất hài lòng về sản phẩm.</p>}
            datetime={
              <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
        </Col>
      </Row>
    </div>
  );
}

export default DetailProduct;
