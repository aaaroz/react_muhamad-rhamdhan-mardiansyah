import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactSchema } from "../schema/contact.schema";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function FormContact() {
  const [isShow, setIsShow] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [messages, setMessages] = useState("");
  const handleClose = () => setIsShow(false);

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ContactSchema) });

  const onSubmit = (data) => {
    setEmail(data.email);
    setName(data.firstName + data.lastName);
    setMessages(data.messages);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ firstName: "", lastName: "", email: "", messages: "" });
      setIsShow(true);
    }
  }, [formState, reset]);

  return (
    <>
      <Modal show={isShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hi {name} !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>email: {email}</h6>
          <p>{messages}</p>
        </Modal.Body>
        <Modal.Footer>
          <span className="me-5 pe-5">Your message was delivered!</span>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row pt-5 mb-4">
          <div className="col">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              className="form-control"
              {...register("firstName")}
            />
            {errors.firstName ? (
              <p className="text-danger text-center">
                {errors.firstName.message}
              </p>
            ) : (
              <></>
            )}
          </div>
          <div className="col">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              className="form-control"
              {...register("lastName")}
            />
            {errors.lastName ? (
              <p className="text-danger text-center">
                {errors.lastName.message}
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-danger text-center">{errors.email.message}</p>
          ) : (
            <></>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="message">What can we help you with?</label>
          <textarea
            id="message"
            className="form-control"
            rows={4}
            {...register("messages")}
          />
          {errors.messages ? (
            <p className="text-danger text-center">{errors.messages.message}</p>
          ) : (
            <></>
          )}
        </div>
        <button type="submit" className="btn btn-info px-4 text-white">
          Submit
        </button>
      </form>
    </>
  );
}
