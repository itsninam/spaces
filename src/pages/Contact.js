import React from "react";
import ContentContainer from "../components/ContentContainer";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import TextArea from "../components/TextArea";
import FlexContainer from "../components/FlexContainer";

function Contact() {
  return (
    <section>
      <ContentContainer>
        <Header text="Tell us about your ideas" />
        <Paragraph
          text=" Manifestation spirit guides quartz, Reiki practitioner stones oracle
        peace healer goddess sage charms."
        />
      </ContentContainer>
      <Form>
        <FlexContainer>
          <div>
            <Input type="text" label="Name" htmlFor="name" />
          </div>
          <div>
            <Input type="text" label="Email" htmlFor="email" />
          </div>
        </FlexContainer>

        <TextArea label="Message" htmlFor="message" />
        <Button text="Send Message" />
      </Form>
    </section>
  );
}

export default Contact;
