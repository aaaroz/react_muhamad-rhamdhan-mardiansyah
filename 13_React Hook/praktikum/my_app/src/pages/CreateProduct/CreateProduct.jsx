import { useState } from "react";
import Header from "./components/Header";
import FormField from "./components/FormField";
import logo from "./bootstrap-logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export default function CreateProduct() {
  // objek artikel untuk mengganti Bahasa Inggris atau Indonesia
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

  //useState untuk menentukan state awal, yaitu bahasa inggris
  const [Language, setLanguage] = useState("en");

  return (
    <>
      <Header />
      <div className="container-md container-sm container-lg px-5">
        <div className="hero-card text-center mt-5 px-5">
          <img src={logo} alt="bootstrap-logo" className="img-fluid mt-2" />
          <h2 className="mt-3" id="head">
            {/* Conditional Rendering, Jika state = id, maka akan me-render bahasa indo,
            kondisi kedua jika state=en, maka akan me-render bahasa inggris */}
            {Language === "id"
              ? article.title.id
              : Language === "en"
              ? article.title.en
              : ""}
          </h2>
          <p className="fw-light fs-5 mt-3">
            {/* Conditional Rendering, Jika state = id, maka akan me-render bahasa indo,
             kondisi kedua jika state=en, maka akan me-render bahasa inggris */}
            {Language === "id"
              ? article.description.id
              : Language === "en"
              ? article.description.en
              : ""}
          </p>
          <button
            className="btn btn-primary m-2"
            onClick={() => {
              // handle click, jika state language = "en", maka state language akan berubah menjadi "id"
              if (Language === "en") {
                setLanguage("id");
              } else if (Language === "id") {
                setLanguage("en");
              }
            }}
          >
            {/* conditional rendering, jika state = id, maka akan merender button teks bahasa indo,
            jika state = en, maka akan merender button teks bahasa inggris */}
            {Language === "id"
              ? article.buttonText.id
              : Language === "en"
              ? article.buttonText.en
              : "english language"}
          </button>
        </div>
        <div className="container px-5 justify-content-center">
          <FormField />
        </div>
      </div>
    </>
  );
}
