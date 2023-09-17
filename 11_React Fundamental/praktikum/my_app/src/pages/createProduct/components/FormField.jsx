export default function FormField() {
  return (
    <form>
      <div className="mb-3 pe-5">
        <label htmlFor="productName">Product Name</label>
        <input type="text" id="productName" className="form-control" required />
      </div>
      <div className="mb-3 pe-5">
        <label htmlFor="selectCategory">Product Category</label>
        <select
          name="selectCategory"
          id="selectCategory"
          className="form-select"
          required
        >
          <option value="none"></option>
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
          className="form-check-input"
          type="radio"
          name="radio"
          id="brandNew"
          value="brand new"
          required
        />
        <label htmlFor="brandNew" className="form-check-label">
          Brand New
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="radio"
          id="secondHand"
          value="second hand"
          required
        />
        <label htmlFor="secondHand" className="form-check-label">
          Second Hand
        </label>
      </div>
      <div className="form-check mb-3 pe-5">
        <input
          className="form-check-input"
          type="radio"
          name="radio"
          id="refurbished"
          value="refurbished"
          required
        />
        <label htmlFor="refurbished" className="form-check-label">
          Refurbished
        </label>
      </div>
      <div className="form-floating mb-3 pe-5">
        <textarea
          name="additionalDescription"
          id="additionalDescription"
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
          type="number"
          id="price"
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
    </form>
  );
}
