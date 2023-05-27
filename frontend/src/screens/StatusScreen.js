import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import randomSequence from "../utils/randomSequence";

const StatusScreen = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const params = Object.fromEntries(searchParams.entries());
  const {vnp_TransactionNo,
    vnp_Amount,
    vnp_BankCode,
    vnp_PayDate,
    vnp_OrderInfo,
    vnp_TransactionStatus}=params
  let message=params.vnp_TransactionStatus==='00' ? "Giao Dịch Thành Công ✅" : "Giao Dịch Thất Bại ❌"
  let img=params.vnp_TransactionStatus==='00' ? 'giaodichthanhcong.png' : 'giaodichthatbai.png'
  try {
    
    useEffect( async()=>{
      if(vnp_TransactionNo !=='0'){
        
        await axios.post('/api/transaction',{
        vnp_TransactionNo,
        vnp_Amount,
        vnp_BankCode,
        vnp_PayDate,
        vnp_OrderInfo,
        vnp_TransactionStatus
        })
      }
    },[])
  } catch (error) {
    throw new Error(error)
  }
  return (
    <>
    <Header></Header>
    <div className="container my-5">
        <div className="row justify-content-center align-items-center">
          <h4 className="text-center  mb-2 mb-sm-5">{message}</h4>
          <img
            style={{ width: "100%", height: "300px", objectFit: "contain" }}
            src={`/images/${img}`}
            alt="Not-found"
          />
          <button className="col-md-3 col-sm-6 col-12 btn btn-success mt-5">
            <Link to="/" className="text-white text-decoration-none">
              Về Trang Chủ
            </Link>
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default StatusScreen;
