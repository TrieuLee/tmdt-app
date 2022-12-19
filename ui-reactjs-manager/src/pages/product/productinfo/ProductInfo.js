import React, { useEffect, useContext, useState } from "react";
import "./Single.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import List from "../../../components/table/Table";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import domain from "../../../utils/domain";
export default function ProductInfo() {
  const location = useLocation();
  const idP = location.pathname.split("/")[2];
  console.log(idP);
  const [products, setProducts] = useState({});
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${domain}/api/products/find/` + idP);
        setProducts(res.data);
        localStorage.setItem("editProduct", JSON.stringify(res.data));
      } catch (err) {}
    };
    getProducts();
  }, [idP]);
  console.log(products.size);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">
              <Link to="/products/edit" className="link">
                Chỉnh sửa
              </Link>
            </div>
            <h1 style={{ color: "black" }} className="title">
              Thông tin sản phẩm
            </h1>
            <div className="item">
              <img
                className="itemImg"
                src={`${domain}/images/${products.img}`}
                alt=""
                crossorigin="anonymous"
              />

              <div className="details">
                <h1 className="itemTitle">{products.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Hãng:</span>
                  <span className="itemValue">{products.brand}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Giá tiền:</span>
                  <span className="itemValue">{products.price}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Size:</span>
                  <span className="itemValue">{products.size?.join()}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Tình trạng:</span>
                  <span className="itemValue">
                    {products.state ? (
                      <span style={{ color: "green", fontWeight: "bold" }}>
                        Còn hàng
                      </span>
                    ) : (
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        Tạm hết
                      </span>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
