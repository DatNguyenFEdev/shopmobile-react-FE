import { react, useEffect, useState } from "react";
import { Card, Row, Col, Button, Input, Pagination, Select, Spin } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../../actions/cartActions.js";
import { formatMoney } from "../../ultils/index.js";
import { LoadingOutlined } from "@ant-design/icons";
import "./shop.scss";
import ItemCard from "../ItemCard";
import { changeProductAction } from "../../actions/productActions.js";
import SideBar from "../SideBar.js/index.js";

function Shop() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1);
  const [numEachPage, setNumPage] = useState(4);

  const setMargin = {
    marginBottom: "20px",
  };

  const { Option } = Select;
  const listSort = [
    { value: 0, label: "Name:A - Z" },
    { value: 1, label: "Name: Z - A" },
  ];
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const [keyword, setKeyWord] = useState("");
  // ====================test-product get from redux ============///
  const listProduct = useSelector((state) => state.products.products);
  const [dataRender, setDataRender] = useState([]);

  // ==========================FEATURE CHANGE PAGE PRODUCT========================
  const handleChangePage = (page, pageSize) => {
    const minValue = (page - 1) * pageSize;
    const maxValue = page * pageSize;
    const newList = listProduct.slice(minValue, maxValue);
    setDataRender(newList);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ==========================FEATURE SEARCH BY NAME PRODUCT======================
  const onSearch = () => {
    const newData = listProduct.filter((item, index) => {
      return item.name
        .toLowerCase()
        .replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "")
        .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
        .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
        .replace(/ì|í|ị|ỉ|ĩ/g, "i")
        .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
        .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
        .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
        .replace(/đ/g, "d")
        .replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A")
        .replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E")
        .replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I")
        .replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O")
        .replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U")
        .replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y")
        .replace(/Đ/g, "D")
        .includes(
          keyword
            .toLowerCase()
            .replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "")
            .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
            .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
            .replace(/ì|í|ị|ỉ|ĩ/g, "i")
            .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
            .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
            .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
            .replace(/đ/g, "d")
            .replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A")
            .replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E")
            .replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I")
            .replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O")
            .replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U")
            .replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y")
            .replace(/Đ/g, "D")
        );
    });
    setDataRender(newData);
  };

  useEffect(() => {
    handleChangePage(1, 10);
  }, []);

  const submitSearch = (e) => {
    if (e.keyCode === 13) {
      onSearch();
    }
  };
  // ==========================FEATURE SORT BY NAME PRODUCT========================
  const handleSort = (value) => {
    let newData = [];
    if (value === 0) {
      newData = dataRender.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    } else if (value === 1) {
      newData = dataRender.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      });
    }
    setLoading(true);
    setDataRender(newData);
  };

  return (
    <div className="shop">
      <Row>
        <Col flex={20}>
          <Spin spinning={loading} indicator={<LoadingOutlined />} tip="Loading...">
            <h1>Shop</h1>
            <button style={setMargin}>
              <Link to="/">Back to home</Link>
            </button>
            <div style={{ display: "flex" }}>
              <Input
                placeholder="Tìm kiếm sản phẩm"
                className="inputSearch"
                value={keyword}
                onChange={(e) => {
                  setKeyWord(e.target.value);
                }}
                onKeyDown={submitSearch}
              />
              <Button onClick={onSearch}>Search</Button>
            </div>
            <Select
              defaultValue={listSort[0].value}
              style={{ width: 120, margin: "12px 0" }}
              onChange={handleSort}
            >
              {listSort.map((sort, index) => (
                <Option key={index} value={sort.value}>
                  {sort.label}
                </Option>
              ))}
            </Select>
            <Row gutter={[32, 32]}>
              {!loading
                ? dataRender.map((item, index) => <ItemCard item={item} index={index} />)
                : ""}
            </Row>
            <Row style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
              <Pagination
                defaultCurrent={1}
                total={listProduct.length}
                onChange={handleChangePage}
                showTotal={(total) => <div>Total: {total} items</div>}
              />
            </Row>
          </Spin>
        </Col>
      </Row>
    </div>
  );
}

export default Shop;
