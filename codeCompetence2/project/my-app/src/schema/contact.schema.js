// import { kontol as yup } from "yup";
import * as yup from "yup";

export const ContactSchema = yup.object().shape({
  firstName: yup
    .string("First name should be a string!")
    .required("First name is required!"),
  lastName: yup
    .string("Last name should be a string!")
    .required("Last name is required!"),
  email: yup
    .string("Email should be a string!")
    .email("Please provide  a valid email address!")
    .required("Email is required!"),
  messages: yup
    .string("messages should be a string!")
    .required("Please write your message!"),
});
