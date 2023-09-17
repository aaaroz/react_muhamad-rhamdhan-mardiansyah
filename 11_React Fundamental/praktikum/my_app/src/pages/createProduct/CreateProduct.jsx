import Header from "./components/Header";
import FormField from "./components/FormField";
import ListProduct from "./components/ListProduct";
import logo from "./bootstrap-logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
export default function CreateProduct() {
  return (
    <>
      <Header />
      <div className="container-md px-5">
        <div className="hero-card text-center mt-5 px-5">
          <img src={logo} alt="bootstrap-logo" className="img-fluid mt-2" />
          <h2 className="mt-3" id="head">
            Create Product
          </h2>
          <p className="fw-light fs-5 mt-3">
            Below is an example form built entirely with Bootstrap’s form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
        </div>
        <div className="container-md px-5 content justify-content-center">
          <h3 className="fs-4 mt-5">Detail Product</h3>
          <FormField />
        </div>
        <ListProduct />
      </div>
    </>
  );
}
