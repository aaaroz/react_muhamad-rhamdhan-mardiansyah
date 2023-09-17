import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CreateProduct from "./pages/CreateProduct/CreateProduct";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is a Create Product Page!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <CreateProduct />
    </>
  );
}

export default App;
