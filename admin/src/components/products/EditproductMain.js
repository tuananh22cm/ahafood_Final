import React, { useState, useEffect, useRef } from "react";
import Toast from "./../LoadingError/Toast";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editProduct,
  updateProduct,
} from "./../../Redux/Actions/ProductActions";
import { PRODUCT_UPDATE_RESET } from "../../Redux/Constants/ProductConstants";
import { toast } from "react-toastify";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import axios from "axios";
import CropEasy from "../crop/CropEasy";
import { imageShow, imageUpload } from "../../ulities/imageUpload";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const EditProductMain = (props) => {
  const { productId } = props;
  const [name, setName] = useState("");
  const [isShow,setIsShow]=useState(true);
  const [price, setPrice] = useState(0);
  const [images, setImages] = useState({});
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [listCategory, setListCategory] = useState([]);
  const [preview, setPreview] = useState("");

  const [file, setFile] = useState(null);
  const [photoURL, setPhotoURL] = useState();
  const [openCrop, setOpenCrop] = useState(false);
  const [checkCrop, setCheckCrop] = useState(false);
  const fileRef = useRef();

  const dispatch = useDispatch();

  const productEdit = useSelector((state) => state.productEdit);
  const { loading, error, product } = productEdit;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    return new Promise(async () => {
      const res = await axios.get("/api/category/all/status/no");
      if (res.status === 200) {
        setListCategory(res.data);
      }
    });
  }, []);

  const handleChangeImages = (e) => {
    const files = [...e.target.files];
    setPreview("");
    setImages(files[0]);
  };

  useEffect(() => {
    if (successUpdate) {  
      dispatch({ type: PRODUCT_UPDATE_RESET });
      toast.success("Product Updated", ToastObjects);
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(editProduct(productId));
      } else {
        setName(product.name);
        setIsShow(product.isShow);
        setDescription(product.description);
        setPrice(product.price);
        setCategory(product.category);
        setPreview(product.image);
      }
    }
  }, [product, dispatch, productId, successUpdate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const image = await imageUpload(images);
    if (image) {
      dispatch(
        updateProduct({
          _id: productId,
          name,
          isShow,
          price,
          description,
          category,
          image,
        })
      );
    }
  };

  useEffect(() => {
    if (checkCrop) {
      setPreview("");
      setImages(file);
      fileRef.current.value = null;
      setCheckCrop(false);
    }
  }, [checkCrop]);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setPhotoURL(URL.createObjectURL(file));
      setOpenCrop(true);
    }
  };

  console.log("====================================");
  console.log(preview);
  console.log("====================================");

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/products" className="btn btn-danger text-white">
              Đi đến trang chủ sản phẩm
            </Link>
            <h2 className="content-title">Cập nhật sản phẩm</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Cập nhật
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {errorUpdate && (
                    <Message variant="alert-danger">{errorUpdate}</Message>
                  )}
                  {loadingUpdate && <Loading />}
                  {loading ? (
                    <Loading />
                  ) : error ? (
                    <Message variant="alert-danger">{error}</Message>
                  ) : (
                    <>
                      <div className="mb-4">
                        <label htmlFor="product_title" className="form-label">
                          Tiêu đề
                        </label>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="form-control"
                          id="product_title"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_price" className="form-label">
                          Giá
                        </label>
                        <input
                          type="number"
                          placeholder="Type here"
                          className="form-control"
                          id="product_price"
                          required
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_price" className="form-label">
                          Danh Mục
                        </label>
                        <select
                          className="form-control"
                          onChange={(e) => setCategory(e.target.value)}
                          value={category}
                        >
                          <option value=""></option>
                          {listCategory.map((item) => (
                            <option value={item._id}>{item.name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_price" className="form-label">
                          Hiển Thị
                        </label>
                        <select
                          className="form-control"
                          onChange={(e) => setIsShow(e.target.value)}
                          value={isShow}
                        >
                          <option value=""></option>
                            <option value="true">Hiển Thị</option>
                            <option value="false">Ẩn</option>
                        </select>
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Description</label>
                        <textarea
                          placeholder="Type here"
                          className="form-control"
                          rows="7"
                          required
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                      </div>
                      <div className="mb-4">
                        <input
                          className="form-control mt-3"
                          type="file"
                          accept="image/*"
                          onChange={handleChange}
                          ref={fileRef}
                        />
                      </div>
                      <div className="mb-4">
                        {(preview && imageShow(preview)) ||
                          (images.name &&
                            imageShow(URL.createObjectURL(images)))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
        {openCrop && (
          <CropEasy
            {...{ photoURL, setOpenCrop, setPhotoURL, setFile, setCheckCrop }}
          />
        )}
      </section>
    </>
  );
};

export default EditProductMain;
