import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import Category from "./Category";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slide from "./Slide";
import showPrice from "../../utils/showPrice";

const ShopSection = (props) => {
  const { keyword, pagenumber } = props;
  const dispatch = useDispatch();
  const { item } = useParams();
  const [pr, setPr] = useState([]);

  const productList = useSelector((state) => state.productList);
  console.log(productList)
  const { loading, error, products, page, pages } = productList;
  console.log(loading,error,products, page,pages)

  useEffect(async () => {
    if (item) {
      console.log(item)
      const res = await axios.get(`/api/products/category/${item}`);
      if (res.status === 200) {
        setPr(res.data);
      }
    } else {
      dispatch(listProduct(keyword, pagenumber));
    }
  }, [dispatch, keyword, pagenumber, item]);



  return (
    <>
      <div className="container">
        <Category />
        <Slide />
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {loading ? (
                  <div className="mb-5">
                    <Loading />
                  </div>
                ) : error ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : item ? (
                  <>
                    {pr.map((product) => (
                      <div
                        className="shop col-lg-4 col-md-6 col-sm-6"
                        key={product._id}
                      >
                        <div className="border-product">
                          <Link to={`/products/${product._id}`}>
                            <div className="shopBack">
                              <img src={product.image} alt={product.name} />
                            </div>
                          </Link>

                          <div className="shoptext">
                            <p>
                              <Link to={`/products/${product._id}`}>
                                {product.name} - {product.ma}
                              </Link>
                            </p>

                            <Rating
                              value={product.rating}
                              text={`${product.numReviews} reviews`}
                            />
                            <h3
                              style={{
                                display: "inline-block",
                              }}
                            >
                              {showPrice(product.price)}
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {products.map((product) => (
                      <div
                        className="shop col-lg-4 col-md-6 col-sm-6"
                        key={product._id}
                      >
                        <div className="border-product">
                          <Link to={`/products/${product._id}`}>
                            <div className="shopBack">
                              <img src={product.image} alt={product.name} />
                            </div>
                          </Link>

                          <div className="shoptext">
                            <p>
                              <Link to={`/products/${product._id}`}>
                                {product.name} - {product.ma}
                              </Link>
                            </p>

                            <Rating
                              value={product.rating}
                              text={`${product.numReviews} reviews`}
                            />
                            <h3
                              style={{
                                display: "inline-block",
                              }}
                            >
                              {showPrice(product.price)}
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}

                {/* Pagination */}
                <Pagination
                  pages={pages}
                  page={page}
                  keyword={keyword ? keyword : ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
