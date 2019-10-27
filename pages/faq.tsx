import * as React from "react";
import Layout from "../components/Layout";

const FaqPage: React.FunctionComponent = () => (
  <Layout title="washi:FAQ">
    <div
      id="faq"
      className="section section--faq section--center dark"
      style={{
        backgroundColor: "#FCFCFC",
        paddingBottom: "120px",
        paddingTop: "130px",
        "--pdxMinHeight": "0px",
        "--wrMax": "1200px"
      }}
    >
      <div className="wr">
        <h1 className="color-1 weight-title-h font-title section__title center standalone">
          FAQ
        </h1>
        <div className="faq expandable">
          <div className="faqItem closed">
            <h3 className="color weight-text-h faqItem__question faq--expandable">
              Question one?
            </h3>
            <p className="faqItem__answer">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
          <div className="faqItem closed">
            <h3 className="color weight-text-h faqItem__question faq--expandable">
              Question two?
            </h3>
            <p className="faqItem__answer">
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>
          <div className="faqItem closed">
            <h3 className="color weight-text-h faqItem__question faq--expandable">
              Question three?
            </h3>
            <p className="faqItem__answer">
              In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
              Nullam dictum felis eu pede mollis pretium.
            </p>
          </div>
          <div className="faqItem closed">
            <h3 className="color weight-text-h faqItem__question faq--expandable">
              Question four?
            </h3>
            <p className="faqItem__answer">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default FaqPage;
