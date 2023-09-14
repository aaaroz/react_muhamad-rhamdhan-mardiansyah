import Header from "./components/Header";
import FormField from "./components/FormField";
import ListProduct from "./components/ListProduct";
import logo from "./bootstrap-logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./script";
import { useState } from "react";

export default function CreateProduct() {
  const article = {
    title: {
      id: "Buat Produk",

      en: "Create Product",
    },

    description: {
      id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",

      en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
    },

    buttonText: {
      id: "Bahasa Inggris",
      en: "Indonesia Language",
    },
  };
  const [Language, setLanguage] = useState("en");

  return (
    <>
      <Header />
      <div className="container-md container-sm container-lg px-5">
        <div className="hero-card text-center mt-5 px-5">
          <img src={logo} alt="bootstrap-logo" className="img-fluid mt-2" />
          <h2 className="mt-3" id="head">
            {Language === "id"
              ? article.title.id
              : Language === "en"
              ? article.title.en
              : "english language"}
          </h2>
          <p className="fw-light fs-5 mt-3">
            {Language === "id"
              ? article.description.id
              : Language === "en"
              ? article.description.en
              : "english language"}
          </p>
          <button
            className="btn btn-primary m-2"
            onClick={() => {
              if (Language === "en") {
                setLanguage("id");
              } else if (Language === "id") {
                setLanguage("en");
              }
            }}
          >
            {Language === "id"
              ? article.buttonText.id
              : Language === "en"
              ? article.buttonText.en
              : "english language"}
          </button>
        </div>
        <div className="container content px-5 justify-content-center">
          <h3 className="fs-4 mt-5">Detail Product</h3>
          <FormField />
        </div>
        <ListProduct />
      </div>
    </>
  );
}
