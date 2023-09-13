// tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

//declared all variables
const forms = document.querySelectorAll(".needs-validation");
const errorMessage = document.getElementById("errorMessage");
const form = document.querySelector("form");
const price = document.getElementById("price");
const pname = document.getElementById("input-pname");
const productFreshness = document.querySelectorAll("input[name='radio']");
const btnAdd = document.querySelector("button");
const table = document.querySelector("table");
const formFile = document.getElementById("formFile");
const selectCat = document.getElementById("select-cat");
const addDesc = document.getElementById("textarea");
const btnDel = document.getElementById("delete");
const searchInput = document.getElementById("searchInput");
const btnSearch = document.getElementById("search");

//validation
Array.from(forms).forEach((form) => {
  form.addEventListener(
    "submit",
    (event) => {
      const errors = [];
      //checking if the input isn't valid
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      //condition when a product name value is more than 25 characters
      else if (pname.value.length > 25) {
        errors.push("Product name must be less than 25 characters");
        alert("Product name must not exceed 25 characters");
        productData.pop();
      }
      //condition when a product name and price value isn't valid
      else if (pname.value == "" || price.value == "" || price.value <= 0) {
        errors.push("Please enter a valid product name/price");
        alert("Please enter a valid product name/price");
        productData.pop();
      }
      //condition when a product name contain a special characters
      else if (/@|#|{|}/.test(pname.value)) {
        errors.push("Product name must not contain symbols");
        alert("Product name must not contain symbols");
        productData.pop();
      }
      //condition when there an error
      else if (errors.length > 0) {
        event.preventDefault();
        errorMessage.innerHTML = errors.join(", ");
      }
      //validation succeed
      else if (form.checkValidity()) {
        alert("succeed");
        event.preventDefault();
      }
      form.classList.add("was-validated");
    },
    false
  );
});

//validation for checked value
let selectedPfreshness = "";
productFreshness.forEach((radio) => {
  radio.addEventListener("change", () => {
    selectedPfreshness = document.querySelector(
      "input[name='radio']:checked"
    ).value;
    console.log(selectedPfreshness);
  });
});

//array for inputed value
let productData = [];

//function for table
function displayTableData() {
  let html = "<table class='table table-striped table-hover table-bordered'>";
  setTimeout(() => {
    html += "<thead>";
    html += "<tr class='fs-7'>";
    html += "<th scope='col'>" + "No" + "</th>";
    html += "<th scope='col'>" + "Product Name" + "</th>";
    html += "<th scope='col'>" + "Product Category" + "</th>";
    html += "<th scope='col'>" + "Image of Product" + "</th>";
    html += "<th scope='col'>" + "Product Freshness" + "</th>";
    html += "<th scope='col'>" + "Additional Description" + "</th>";
    html += "<th scope='col'>" + "Product Price" + "</th>";
    html += "</tr>";
    html += "</thead>";
    for (let i = 0; i < productData.length; i++) {
      let no = i + 1;
      html += "<tbody>";
      html += "<tr class='fs-8'>";
      html += "<td>" + no + "</td>";
      html += "<td>" + productData[i].productName + "</td>";
      html += "<td>" + productData[i].category + "</td>";
      html += "<td>" + productData[i].file + "</td>";
      html += "<td>" + productData[i].productFresh + "</td>";
      html += "<td>" + productData[i].description + "</td>";
      html += "<td>" + "$" + productData[i].productPrice + "</td>";
      html += "</tr>";
      html += "</tbody>";
    }
    html += "</table>";
    document.getElementById("table").innerHTML = html;
  }, 100);
}
displayTableData();

//function for add an input into a table
function addOnClick() {
  const productName = pname.value;
  const category = selectCat.value;
  const file = formFile.value;
  const productFresh = selectedPfreshness;
  const description = addDesc.value;
  const productPrice = price.value;

  if (
    productName &&
    category &&
    file &&
    productFresh &&
    description &&
    productPrice
  ) {
    const id = productData.length + 1;
    productData.push({
      productName: productName,
      category: category,
      file: file,
      productFresh: productFresh,
      description: description,
      productPrice: productPrice,
      id: id,
    });
    displayTableData();
    console.log(productData[2]);
  } else {
    throw new Error("invalid input");
  }
}

//delete item feature
btnDel.addEventListener("click", (e) => {
  productData.pop();
  alert("your data has been deleted!");
  displayTableData();
  e.preventDefault();
});
