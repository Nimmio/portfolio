"use client";

import React from "react";
import { useForm } from "@mantine/form";
import {
  Button,
  Checkbox,
  Grid,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
const ContactSection = () => {
  const contactForm = useForm({
    mode: "uncontrolled",
    initialValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      text: "",
      phone: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      termsOfService: (value) => (value ? null : "Need to accept terms"),
      company: (value) => (value !== "" ? null : "Company must be filled"),
    },
  });

  return (
    <div id="contact-section">
      <Title> Contact</Title>
      <form onSubmit={contactForm.onSubmit((values) => console.log(values))}>
        <Grid>
          <Grid.Col span={6}>
            <TextInput
              label="First Name"
              key={contactForm.key("firstName")}
              {...contactForm.getInputProps("firstName")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Last Name"
              key={contactForm.key("lastName")}
              {...contactForm.getInputProps("lastName")}
            />
          </Grid.Col>{" "}
          <Grid.Col span={6}>
            <TextInput
              withAsterisk
              label="Company"
              key={contactForm.key("company")}
              {...contactForm.getInputProps("company")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              withAsterisk
              label="E-Mail"
              placeholder="email@provider.com"
              key={contactForm.key("email")}
              {...contactForm.getInputProps("email")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Phone"
              key={contactForm.key("phone")}
              {...contactForm.getInputProps("phone")}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <Textarea
              label="Your Message"
              autosize
              minRows={2}
              key={contactForm.key("text")}
              {...contactForm.getInputProps("text")}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <Checkbox
              mt="md"
              label="I agree to sell my privacy"
              key={contactForm.key("termsOfService")}
              {...contactForm.getInputProps("termsOfService", {
                type: "checkbox",
              })}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <Button type="submit" fullWidth>
              {" "}
              Submit
            </Button>
          </Grid.Col>
        </Grid>
      </form>
    </div>
  );
};

export default ContactSection;
