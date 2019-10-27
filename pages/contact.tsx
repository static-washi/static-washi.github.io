import * as React from "react";
import Layout from "../components/Layout";

const ContactPage: React.FunctionComponent = () => (
  <Layout title="washi:about">
    <div
      id="contact"
      className="section section--contact section--center dark"
      style={{
        backgroundColor: "#fff",
        paddingBottom: "60px",
        paddingTop: "130px",
        "--pdxMinHeight": "0px",
        "--wrMax": "1200px"
      }}
    >
      <div className="wr">
        <h1 className="color-1 weight-title-h font-title section__title center">
          Contact us
        </h1>
        <p className="weight-text section__subtitle center">
          Got any questions? Don't hesitate to reach out.
        </p>
        <form
          className="contact"
          id="contact_zbnqas2kxz9"
          data-siteid="chxr4kkn1t08"
        >
          <div className="contact__item">
            <label className="weight-text-m">Full Name</label>
            <input
              type="text"
              id="contactName_zbnqas2kxz9"
              placeholder="Jane Doe"
              className="color-1"
            />
          </div>
          <div className="contact__row">
            <div className="contact__item">
              <label className="weight-text-m">Email Address</label>
              <input
                type="email"
                id="contactEmail_zbnqas2kxz9"
                placeholder="jane.doe@mail.com"
                className="color-1"
              />
            </div>
            <div className="contact__item">
              <label className="weight-text-m">Phone (Optional)</label>
              <input
                type="text"
                id="contactPhone_zbnqas2kxz9"
                placeholder="(123) 456-7890"
                className="color-1"
              />
            </div>
          </div>
          <div className="contact__item">
            <label className="weight-text-m">Your Message</label>
            <textarea
              id="contactMessage_zbnqas2kxz9"
              className="color-1"
              defaultValue={""}
            />
          </div>
          <div id="contactError_zbnqas2kxz9" className="contact__error" />
          <button
            id="contactSubmit_zbnqas2kxz9"
            className="btn btn--c btn--primary btn--large"
            style={{ color: "#fff", backgroundColor: "#5757E7" }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </Layout>
);

export default ContactPage;
