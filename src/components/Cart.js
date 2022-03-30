import { Link } from "react-router-dom";
import { Table, Tag, Space, Row, Col, Button} from "antd";
import { useSelector, useDispatch} from "react-redux";
import {quantityUp, quantityDown, removeProduct} from "../actions/cartActions.js";
import { formatMoney } from "../ultils/index.js";


function Cart() {
  const dispatch = useDispatch()
  function handleQuantityUp(item) {
    dispatch(quantityUp(item))
  }

  function handleQuantityDown(item) {
    dispatch(quantityDown(item))
  }

  function handleDelete(item) { 
    dispatch(removeProduct(item))
  }
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Action",
      key: "action",
      render: (item) => (
        <Space size="middle">
          <Button onClick={()=> {handleQuantityUp(item)}}>+</Button>
          <Button onClick={()=> {handleQuantityDown(item)}}>-</Button>
          <a onClick={()=> handleDelete(item)}>Delete</a>
        </Space>
      ),
    },
  ];
  const data = useSelector((state) => state.cart.cart).map((cart, index) => {
    return {
      key: cart.id,
      name: cart.name,
      price: formatMoney(cart.price + ''),
      quantity: cart.quantity,
    };
  });


  return (
    <>
      <h1>Cart</h1>
      <Table columns={columns} dataSource={data}></Table>
      <Row justify="space-between">
        <Col span={4}>
          <button>
            <Link to="/shop">Tiếp tục mua hàng</Link>
          </button>
        </Col>
        <Col span={3}>
          <button>
            <Link to="/checkout" >Đặt hàng</Link>
          </button>
        </Col>
      </Row>
    </>
  );
}

export default Cart;
