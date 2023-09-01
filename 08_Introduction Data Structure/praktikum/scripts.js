// tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const forms = document.querySelectorAll(".needs-validation");
const errorMessage = document.getElementById("errorMessage");
const form = document.querySelector("form");
let price = document.getElementById("price");
let pname = document.getElementById("input-pname");
let productFreshness = document.querySelectorAll("input[name='radio']");
let selectedPfreshness = "";
let btnAdd = document.querySelector("button");
let table = document.querySelector("table");
let formFile = document.getElementById("formFile");
let selectCat = document.getElementById("select-cat");
let addDesc = document.getElementById("textarea");
let btnDel = document.getElementById("delete");
let searchInput = document.getElementById("searchInput");
let btnSearch = document.getElementById("search");

//validation
Array.from(forms).forEach((form) => {
  form.addEventListener(
    "submit",
    (event) => {
      const errors = [];
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else if (pname.value.length > 25) {
        errors.push("Product name must be less than 25 characters");
        alert("Product name must not exceed 25 characters");
        productData.pop();
      } else if (pname.value == "" || price.value == "" || price.value <= 0) {
        errors.push("Please enter a valid product name/price");
        alert("Please enter a valid product name/price");
        productData.pop();
      } else if (/@|#|{|}/.test(pname.value)) {
        errors.push("Product name must not contain symbols");
        alert("Product name must not contain symbols");
        productData.pop();
      } else if (form.checkValidity()) {
        alert("succeed");
        event.preventDefault();
      }
      if (errors.length > 0) {
        event.preventDefault();
        errorMessage.innerHTML = errors.join(", ");
      }
      form.classList.add("was-validated");
    },
    false
  );
});
productFreshness.forEach((radio) => {
  radio.addEventListener("change", () => {
    selectedPfreshness = document.querySelector(
      "input[name='radio']:checked"
    ).value;
    console.log(selectedPfreshness);
  });
});

//array for inputed value
var productData = [];

function displayTableData() {
  var html = "<table class='table table-striped table-hover table-bordered'>";
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

function addOnClick() {
  let productName = pname.value;
  let category = selectCat.value;
  let file = formFile.value;
  let productFresh = selectedPfreshness;
  let description = addDesc.value;
  let productPrice = price.value;

  if (
    productName &&
    category &&
    file &&
    productFresh &&
    description &&
    productPrice
  ) {
    let id = productData.length + 1;
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
  }
}
//delete item feature
btnDel.addEventListener("click", (e) => {
  productData.pop();
  alert("your data has been deleted!");
  displayTableData();
  e.preventDefault();
});

//for search feature
// searchInput.addEventListener("input", (e) => {
//   let value = e.target.value.toLowerCase();
//   console.log(value);
// });
// let newData = {};
// btnSearch.addEventListener("click", (e) => {
//   productData([value]);
// });
