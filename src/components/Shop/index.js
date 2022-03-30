import { react, useEffect, useState } from "react";
import { Card, Row, Col, Button, Breadcrumb, Input } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../../actions/cartActions.js";
import { formatMoney } from "../../ultils/index.js";
import { LoadingOutlined } from '@ant-design/icons';
import './Shop.scss'

function Shop() {
  const { Meta } = Card;

  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const setMargin = {
    marginBottom: "20px",
  };

  const [keyword, setKeyWord] = useState()
  // ====================test-product get from redux ============///
  const listProduct = useSelector((state) => state.products.products);

  listProduct.filter(item=> {
    return item == "keyword"
  })

  const changeLocation = (location) => {
    history.push(location);
  };

  let itemProduct = listProduct.map((product) => (
    <Col flex="1" key={product.id} style={setMargin}>
      <Card
        style={{ width: 300 }}
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

  useEffect( ()=> {
    setLoading(true)
    const timeOut = setTimeout(
      ()=> {
        itemProduct = listProduct.map((product) => (
          <Col flex="1" key={product.id} style={setMargin}>
            <Card
              style={{ width: 300 }}
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
      setLoading(false)
      }
    , 2500)


    return ()=> {
      clearTimeout(timeOut)
    }
  }, [])


  return (
    <div className="shop">
      <h1>Shop</h1>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home{location.pathname}</Breadcrumb.Item>
      </Breadcrumb>
      <button style={setMargin}>
        <Link to="/">Back to home</Link>
      </button>
      <Input placeholder="Tìm kiếm sản phẩm" className="inputSearch" onChange={(e)=>{setKeyWord(e.target.value)}} />
      <Row >{loading? <LoadingOutlined className="loading"/>: ''}</Row>
      <Row>{listProduct && loading == false ? itemProduct : []}</Row>
    </div>
  );
}

export default Shop;
