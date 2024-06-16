"use client"; // client side component

import { useState } from "react";
import TextInput from "../TextInput";
import axios from "axios";
import { allDataFilledIn } from "@/utils/validation.utils";
import { generateSignupPayload } from "@/utils/strapi.utils";

const SignupForm = ({
  headline,
  infoText,
  buttonLabel,
  pricing,
  eventId = null,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Update the state when the user types in the form fields
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    const payload = generateSignupPayload(formData, eventId);

    if (allDataFilledIn(formData)) {
      // send data to Strapi
      try {
        const repsonse = await axios.post(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/participants`,
          payload
        );
        setShowConfirmation(true);
      } catch (error) {
        setErrorMessage(
          error.response?.data?.error?.message ||
            "Something went wrong. Please try again later."
        );
      }
    } else {
      setErrorMessage("Please fill out all fields.");
    }
  };
  return (
    <section className="signup-form">
      <div className="signup-form__info">
        <h3 className="signup-form__headline">{headline}</h3>
        {infoText}
      </div>
      {showConfirmation ? (
        <div className="signup-form__form">
          <h4>Thank you for signing up. We will get in touch soon!</h4>
        </div>
      ) : (
        <form className="signup-form__form" onSubmit={onSubmit}>
          <div className="signup-form__name-container">
            <TextInput
              inputName="firstName"
              value={formData.firstName}
              label="First Name"
              onChange={onChange}
            />
            <TextInput
              inputName="lastName"
              value={formData.lastName}
              label="Last Name"
              onChange={onChange}
            />
          </div>
          <TextInput
            inputName="email"
            value={formData.email}
            label="Your email address"
            onChange={onChange}
          />
          <TextInput
            inputName="phone"
            value={formData.phone}
            label="Your telephone number"
            onChange={onChange}
          />
          {errorMessage && (
            <p className="copy signup-form__error">{errorMessage}</p>
          )}
          <button className="btn btn--medium btn--turquoise" type="submit">
            {buttonLabel || "Stay in touch!"}
          </button>
          {pricing && (
            <div className="signup-form__pricing">
              <h3>Pricing</h3>
              <p className="copy">
                Single Room:
                <span className="bold"> {pricing.singlePrice}€ per person</span>
              </p>
              <p className="copy">
                Shared Room:
                <span className="bold"> {pricing.sharedPrice}€ per person</span>
              </p>
            </div>
          )}
        </form>
      )}
    </section>
  );
};

export default SignupForm;
