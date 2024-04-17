import ContentContainer from "../components/ContentContainer";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import TextArea from "../components/TextArea";
import FlexContainer from "../components/FlexContainer";
import Modal from "../components/Modal";
import { useForm } from "../contexts/FormContext";
import { useEffect, useRef } from "react";

function Contact() {
  const {
    userInput,
    nameError,
    emailError,
    messageError,
    handleChange,
    handleSubmit,
    isVisible,
    setIsVisible,
    navigationRef,
  } = useForm();

  const sectionRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const sectionHeight = sectionRef.current.clientHeight;
    const navigationHeight = navigationRef.current.clientHeight;

    if (isVisible) {
      modalRef.current.style.height = `${sectionHeight + navigationHeight}px`;
    }
  }, [isVisible, navigationRef]);

  return (
    <section ref={sectionRef} id="contact">
      {isVisible && (
        <Modal
          heading="Thank you"
          message="Your message has been successfully received. We will be in contact with you shortly!"
          buttonText="Close"
          onClick={() => setIsVisible(false)}
          ref={modalRef}
        />
      )}

      <ContentContainer>
        <Header text="Tell us about your ideas" />
        <Paragraph
          text=" Manifestation spirit guides quartz, Reiki practitioner stones oracle
        peace healer goddess sage charms."
        />
      </ContentContainer>
      <Form onSubmit={handleSubmit}>
        <FlexContainer>
          <div>
            <Input
              type="text"
              label="Name"
              htmlFor="firstName"
              name="firstName"
              value={userInput.firstName}
              onChange={handleChange}
              className={nameError ? "error-colour" : ""}
            />
            <span>{nameError}</span>
          </div>
          <div>
            <Input
              type="email"
              label="Email"
              htmlFor="email"
              name="email"
              value={userInput.email}
              onChange={handleChange}
              className={emailError ? "error-colour" : ""}
            />
            <span>{emailError}</span>
          </div>
        </FlexContainer>

        <div className="text-area-container">
          <TextArea
            label="Message"
            htmlFor="message"
            name="message"
            value={userInput.message}
            onChange={handleChange}
            className={messageError ? "error-colour" : ""}
          />
          <span>{messageError}</span>
        </div>

        <Button text="Send Message" type="submit" />
      </Form>
    </section>
  );
}

export default Contact;
