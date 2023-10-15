import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetProducts, selectProducts } from "../store/productsSlice";
import { Link } from "react-router-dom";
import { fetchDeleteProduct } from "../store/deleteProductSlice";

function ListingProducts() {
  const [isReload, setIsReload] = useState(false);
  const stateProducts = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetProducts());
    setIsReload(false);
  }, [dispatch, isReload]);

  const handleDelete = (id) => {
    if (window.confirm("Do you want delete this product?")) {
      dispatch(fetchDeleteProduct(id));
      setIsReload(true);
    }
  };

  return (
    <>
      {stateProducts.status === "loading" && <p>Loading ...</p>}
      {stateProducts.status === "failed" && (
        <div>
          <p>something went wrong</p>
          <p>{stateProducts.message}</p>
        </div>
      )}
      {stateProducts.status === "success" && (
        <div className="container">
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary">
              <Link
                to="/create-product"
                className="text-white text-decoration-none"
              >
                Create Product
              </Link>
            </button>
          </div>
          <table className="table table-hover table-bordered mt-3">
            <thead>
              <tr className="fs-7">
                <th scope="col">No</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Category</th>
                <th scope="col">Product Freshness</th>
                <th scope="col">Additional Description</th>
                <th scope="col">Product Image</th>
                <th scope="col">Product Price</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {stateProducts.data.map((product, no) => (
                <tr key={product.id}>
                  <td>{no + 1}</td>
                  <td>{product.productName}</td>
                  <td>{product.productCategory}</td>
                  <td>{product.productFreshness}</td>
                  <td>{product.addDescription}</td>
                  <td>
                    <img
                      className="align-item-center"
                      src={product.productImage}
                      alt="product"
                      width={80}
                      height={50}
                    />
                  </td>
                  <td>${product.productPrice}</td>
                  <td>
                    <div className="d-flex py-3 gap-1">
                      <Link to={`/product/${product.id}`}>
                        <button className="btn btn-primary">Detail</button>
                      </Link>
                      <Link to={`/update-product/${product.id}`}>
                        <button className="btn btn-success">Edit</button>
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(product.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default ListingProducts;
