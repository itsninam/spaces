import React, { createContext, useContext, useState, useRef } from "react";

const FormContext = createContext();

function FormProvider({ children }) {
  const navigationRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const [userInput, setUserInput] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!userInput.firstName) {
      setNameError("Please enter your name");
    }

    if (!userInput.email) {
      setEmailError("Please enter your email");
    }

    if (!userInput.message) {
      setMessageError("Please enter a message");
    }

    if (userInput.firstName && userInput.email && userInput.message) {
      setUserInput({
        firstName: "",
        email: "",
        message: "",
      });

      setIsVisible(true);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });

    if (userInput.firstName) {
      setNameError("");
    }

    if (userInput.email) {
      setEmailError("");
    }

    if (userInput.message) {
      setMessageError("");
    }
  };

  return (
    <FormContext.Provider
      value={{
        userInput,
        nameError,
        emailError,
        messageError,
        handleChange,
        handleSubmit,
        isVisible,
        setIsVisible,
        navigationRef,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

function useForm() {
  const context = useContext(FormContext);
  return context;
}
export { FormProvider, useForm };
