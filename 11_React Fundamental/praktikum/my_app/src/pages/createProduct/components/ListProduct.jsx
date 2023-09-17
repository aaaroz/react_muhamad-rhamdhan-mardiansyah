export default function ListProduct() {
  return (
    <div className="container">
      <h3 className="text-center mt-3">List Product</h3>
      <div className="table">
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Category</th>
              <th scope="col">Image of Product</th>
              <th scope="col">Product Freshness</th>
              <th scope="col">Additional Description</th>
              <th scope="col">Product Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Nikke 1</td>
              <td>Hoodie</td>
              <td>Hoodie.png</td>
              <td>Brand New</td>
              <td>This is a hoodie</td>
              <td>$69</td>
            </tr>
          </tbody>
        </table>
      </div>
      <form className="d-flex mb-5" role="search">
        <input
          type="search"
          className="form-control me-2"
          id="searchInput"
          placeholder="Search"
        />
        <button className="btn btn-outline-primary" type="submit" id="search">
          Search
        </button>
        <button
          className="btn btn-outline-danger mx-1"
          type="delete"
          id="delete"
        >
          Delete
        </button>
      </form>
    </div>
  );
}
