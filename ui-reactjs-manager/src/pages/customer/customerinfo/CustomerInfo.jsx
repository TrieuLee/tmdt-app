import React, { useEffect, useContext, useState } from "react";
import "./Single.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import List from "../../../components/table/Table";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import domain from "../../../utils/domain";
export default function CustomerInfo() {
  // const { user } = useContext(AuthContext);
  const location = useLocation();

  const idP = location.pathname.split("/")[2];
  console.log(idP);
  const [users, setUsers] = useState({});
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(`${domain}/api/auth/find/` + idP);
        setUsers(res.data);
        console.log(res.data);
      } catch (err) {}
    };
    getUsers();
  }, [idP]);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">
              <Link to="/users/edit" className="link">
                Chỉnh sửa
              </Link>
            </div>
            <h1 className="title">Thông tin khách hàng</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{users.username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{users.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Số điện thoại:</span>
                  <span className="itemValue">{users.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Địa chỉ:</span>
                  <span className="itemValue">{users.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {users.role !== 3 ? (
          <div></div>
        ) : (
          <div className="bottom">
            <h1 className="title">Sản phẩm đã mua</h1>
            <List />
          </div>
        )}
      </div>
    </div>
  );
}
