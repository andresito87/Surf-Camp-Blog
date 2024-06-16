"use client"; // It is necessary for the component to be executed on the client side, adding interactivity to the page(form).
import { useState } from "react";
import axios from "axios";

const SubscribeToNewsletter = () => {
  const [email, setEmail] = useState("");
  const [hasSignedUp, setHasSignedUp] = useState(false); // State to handle the user sign up status
  const [showError, setShowError] = useState(false); // State to handle the error message

  // Function to handle the email input change
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  // Function to handle the form submission
  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      if (email.length) {
        // Send email to Strapi
        await axios.post(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/newsletter-signups`,
          {
            data: {
              email,
            },
          }
        );
      }
      setHasSignedUp(true);
    } catch (error) {
      setShowError(true);
    }
  };

  return (
    <section className="newsletter">
      {showError ? (
        <h4 className="newsletter__error">
          An error occurred, please try again later.
        </h4>
      ) : hasSignedUp ? (
        <h4 className="newsletter__thanks">
          Thank you for subscribing to our newsletter!
        </h4>
      ) : (
        <>
          <div className="newsletter__info">
            <h4>subscribe to our newsletter</h4>
            <p className="copy">
              Unlock Exclusive Insights and Stay In the Know – Subscribe to Our
              Newsletter Today to always stay in touch
            </p>
          </div>
          <form action="" className="newsletter__form" onSubmit={onSubmitForm}>
            <input
              type="text"
              className="newsletter__email input"
              placeholder="Enter your E-mail address"
              value={email}
              onChange={onChangeEmail}
            />
            <button
              type="submit"
              className="newsletter__subscribe btn btn--medium btn--turquoise"
            >
              SUBSCRIBE
            </button>
          </form>
        </>
      )}
    </section>
  );
};

export default SubscribeToNewsletter;
