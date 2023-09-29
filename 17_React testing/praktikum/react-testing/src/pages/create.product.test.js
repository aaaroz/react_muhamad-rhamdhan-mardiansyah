import { render, screen, fireEvent } from "@testing-library/react";
import CreateProduct from "./create.product";
import { Provider } from "react-redux";
import store from "../store";
import { BrowserRouter } from "react-router-dom";

describe("CreateProduct", () => {
  it("should render CreateProduct components correctly without crash", () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );
    expect(container).toBeInTheDocument();
  });

  //trigger productName onChange
  it("should trigger input onChange correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );

    const inputElement = screen.getByLabelText(/Product Name/i);
    fireEvent.change(inputElement, { target: { value: "Nikke 1" } });
    expect(inputElement).toHaveValue("Nikke 1");
  });

  //trigger selectCategory input
  it("should trigger select input correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );

    const selectInput = screen.getByRole("combobox");
    expect(selectInput).toBeInTheDocument();
    fireEvent.change(selectInput, { target: { value: "hoodie" } });

    const selectedCategoryText = screen.getByTestId("selected-category");
    expect(selectedCategoryText).toHaveTextContent("hoodie");
  });

  //trigger radio select for productFreshness
  it("should trigger radio select input correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );

    const radioInput = screen.getByRole("radio", { name: "Brand New" });
    expect(radioInput).toBeInTheDocument();
    fireEvent.change(radioInput, { target: { value: "brand new" } });

    const selectedRadioText = screen.getByTestId("selected-radio");
    expect(selectedRadioText).toHaveTextContent("brand new");
  });

  //trigger productName if value contain symbols/special characters
  it("should trigger productName validation error when contains symbols", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );
    const inputElement = screen.getByLabelText(/Product Name/i);
    expect(inputElement).toBeInTheDocument();

    fireEvent.input(inputElement, {
      target: { value: /[@#{}$%^&*!(){}|:;'"/.<_,>?]/ },
    });
    const errorMessage = screen.getByTestId("error-message");
    expect(errorMessage).toHaveTextContent(
      "Product name must not contains symbols"
    );
  });

  //trigger productName validation error if value is empty
  it("should trigger productName validation error when field is empty", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );
    const inputElement = screen.getByLabelText(/Product Name/i);
    expect(inputElement).toBeInTheDocument();

    fireEvent.input(inputElement, {
      target: { value: "s" },
    });
    fireEvent.input(inputElement, {
      target: { value: "" },
    });

    const errorMessage = screen.getByTestId("error-message");
    expect(errorMessage).toHaveTextContent("Product name must be filled!");
  });

  //trigger productName validation error if value exceed 25 characters
  it("should trigger productName validation error when exceed 25 characters", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );
    const inputElement = screen.getByLabelText(/Product Name/i);
    expect(inputElement).toBeInTheDocument();

    fireEvent.input(inputElement, {
      target: { value: "qwertyuiop12345678901234523" },
    });

    const errorMessage = screen.getByTestId("error-message");
    expect(errorMessage).toHaveTextContent(
      "Product name must not exceed 25 characters"
    );
  });

  //trigger validation error if all of the form field is empty
  it("should trigger validation error when form field is empty ", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );
    const inputProductName = screen.getByLabelText(/Product Name/i);
    const inputCategory = screen.getByLabelText(/Product Category/i);
    const inputImage = screen.getByLabelText(/Image of Product/i);
    const radioInput = screen.getByRole("radio", { name: "Brand New" });
    const inputDescription = screen.getByLabelText(/Additional Description/i);
    const inputProductPrice = screen.getByLabelText(/Product price/i);
    const buttonSubmit = screen.getByText(/Submit/i);
    expect(inputProductName).toBeInTheDocument();

    fireEvent.input(inputProductName, { target: { value: "" } });
    fireEvent.input(inputCategory, { target: { value: "" } });
    fireEvent.input(inputImage, { target: { value: "" } });
    fireEvent.input(radioInput, { target: { value: "" } });
    fireEvent.input(inputDescription, { target: { value: "" } });
    fireEvent.input(inputProductPrice, { target: { value: "" } });

    fireEvent.click(buttonSubmit);
    const errorMessage = screen.getByTestId("error-message");
    expect(errorMessage).toHaveTextContent("Form field must be Filled!");
  });
});
