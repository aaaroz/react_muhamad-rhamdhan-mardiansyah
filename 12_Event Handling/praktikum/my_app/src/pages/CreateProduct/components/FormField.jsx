import { useState } from "react";
import Form from "react-bootstrap/Form";

export default function FormField() {
  const [productName, setProductName] = useState("");
  const [error, setError] = useState(null);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (event.target.productName.value === "") {
      event.preventDefault();
      alert("Please enter a valid product name");
    } else {
      alert("Form submited");
    }

    setValidated(true);
  };

  function handleNameChange(e) {
    setProductName(e.target.value);
    console.log(e.target.value);
    if (productName.length >= 10) {
      setError(e);
    }
    if (productName.length > 25) {
      alert("Product Name must not exceed 25 characters");
    }
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="mb-3 pe-5">
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          name="productName"
          id="productName"
          className="form-control"
          value={productName}
          onChange={handleNameChange}
          required
        />
        {error !== null && (
          <p className="text-center text-warning">
            product name must not exceed 10 characters
          </p>
        )}
      </div>
      <div className="mb-3 pe-5">
        <label htmlFor="selectCategory">Product Category</label>
        <select
          name="selectCategory"
          id="selectCategory"
          className="form-select"
          required
        >
          <option value="none">Choose one category</option>
          <option value="hoodie">Hoodie</option>
          <option value="t-shirt">T-Shirt</option>
          <option value="jeans">Jeans</option>
        </select>
      </div>
      <div className="mb-3 pe-5">
        <label htmlFor="inputFile">Image of Product</label>
        <input
          type="file"
          className="form-control"
          id="inputFile"
          name="inputFile"
          required
        />
      </div>
      <div>
        <label>Product Freshness</label>
      </div>
      <div className="form-check">
        <input
          id="brandNew"
          type="radio"
          name="radio"
          className="form-check-input"
          value="brand new"
          required
        />
        <label htmlFor="brandNew" className="form-check-label">
          Brand New
        </label>
      </div>
      <div className="form-check">
        <input
          id="secondHand"
          type="radio"
          name="radio"
          className="form-check-input"
          value="second hand"
          required
        />
        <label htmlFor="secondHand" className="form-check-label">
          Second Hand
        </label>
      </div>
      <div className="form-check mb-3 pe-5">
        <input
          id="refurbished"
          type="radio"
          name="radio"
          className="form-check-input"
          value="refurbished"
          required
        />
        <label htmlFor="refurbished" className="form-check-label">
          Refurbished
        </label>
      </div>
      <div className="form-floating mb-3 pe-5">
        <textarea
          id="additionalDescription"
          name="additionalDescription"
          className="form-control"
          placeholder="add your description"
          required
        ></textarea>
        <label htmlFor="additionalDescription">Additional Description</label>
      </div>
      <div>
        <label htmlFor="price">Product Price</label>
      </div>
      <div className="input-group mb-3 pe-5">
        <span className="input-group-text">$</span>
        <input
          id="price"
          type="number"
          name="price"
          className="form-control"
          required
        />
      </div>
      <div className="d-grid mb-3 pe-5">
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </Form>
  );
}
