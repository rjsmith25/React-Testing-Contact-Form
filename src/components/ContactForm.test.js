import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("firstname rendered", () => {
  const { getByText } = render(<ContactForm />);
  const firstname = getByText(/first name/i);

  expect(firstname).toBeInTheDocument();
  expect(firstname).toBeTruthy();
  expect(firstname).not.toBeFalsy();
});

test("lastname rendered", () => {
  const { getByText } = render(<ContactForm />);
  const lastname = getByText(/last name/i);

  expect(lastname).toBeInTheDocument();
  expect(lastname).toBeTruthy();
  expect(lastname).not.toBeFalsy();
});

test("email rendered", () => {
  const { getByText } = render(<ContactForm />);
  const email = getByText(/email/i);

  expect(email).toBeInTheDocument();
  expect(email).toBeTruthy();
  expect(email).not.toBeFalsy();
});

test("message rendered", () => {
  const { getByText } = render(<ContactForm />);
  const message = getByText(/message/i);

  expect(message).toBeInTheDocument();
  expect(message).toBeTruthy();
  expect(message).not.toBeFalsy();
});

test("form submit firstname, lastname, email, and message input", () => {
  const { getByTestId } = render(<ContactForm />);

  const firstnameInput = getByTestId(/firstname/i);
  const lastnameInput = getByTestId(/lastname/i);
  const emailInput = getByTestId(/email/i);
  const messageTextArea = getByTestId(/message/i);
  const submitBtn = getByTestId(/submitBtn/i);

  fireEvent.change(firstnameInput, { target: { value: "John" } });
  fireEvent.change(lastnameInput, { target: { value: "Doe" } });
  fireEvent.change(emailInput, { target: { value: "JoeDoe@email.com" } });
  fireEvent.change(messageTextArea, { target: { value: "Hello World" } });

  expect(firstnameInput.value).toBe("John");
  expect(lastnameInput.value).toBe("Doe");
  expect(emailInput.value).toBe("JoeDoe@email.com");
  expect(messageTextArea.value).toBe("Hello World");

  let result = fireEvent.click(submitBtn);
  expect(result).toBeTruthy();
  expect(result).not.toBeFalsy();
});
