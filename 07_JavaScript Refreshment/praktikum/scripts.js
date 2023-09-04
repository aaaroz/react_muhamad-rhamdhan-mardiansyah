// tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// //validation
const forms = document.querySelectorAll(".needs-validation");
const pname = document.getElementById("input-pname");
const errorMessage = document.getElementById("errorMessage");
const form = document.querySelector("form");
const price = document.getElementById("price");
// Loop over them and prevent submission
Array.from(forms).forEach((form) => {
  form.addEventListener(
    "submit",
    (event) => {
      const errors = [];
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      if (pname.value.length > 25) {
        errors.push("Product name must be less than 25 characters");
        alert("Product name must not exceed 25 characters");
      }
      if (pname.value == "" || price.value == "" || price.value <= 0) {
        errors.push("Please enter a valid product name/price");
        alert("Please enter a valid product name/price");
      }
      if (/@|#|{|}/.test(pname.value)) {
        errors.push("Product name must not contain symbols");
        alert("Product name must not contain symbols");
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
