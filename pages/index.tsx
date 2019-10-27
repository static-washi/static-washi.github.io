import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  //TODO check for auth ?

  return (
    <Layout title="washi:">
      <div>
        <div
          id="hero"
          className="section section--hero section--noPadding section--left dark"
          style={{
            backgroundColor: "#fcfcfc",
            "--pdxMinHeight": "700px",
            "--wrMax": "1200px"
          }}
        >
          <div
            className="ft ft--left ft--isFirst"
            style={{ "--pdxPt": 0, "--pdxPb": 0 }}
          >
            <div className="ft__half">
              <div className="ft__wrapper" style={{ maxWidth: "570px" }}>
                <div className="ft__content">
                  <h1 className="hero__title color-1 weight-title-h font-title">
                    Discover a new way of writing
                  </h1>
                  <p className="hero__subtitle weight-text">
                    Every tool a writer can dream of inside one app, on all your
                    devices
                  </p>
                  <div className="ctas">
                    <div className="inlineFormWrapper left">
                      <form
                        id="if_vumjqwwllml"
                        className="inlineForm inlineForm--c"
                      >
                        <div className="inlineFormContent">
                          <input
                            type="text"
                            id="if_email_vumjqwwllml"
                            className="inlineForm__input"
                            placeholder="My Awesome Book"
                          />
                          <button
                            id="if_submit_vumjqwwllml"
                            className="btn btn--c btn--primary btn--large"
                            style={{
                              color: "#fff",
                              backgroundColor: "#5757E7"
                            }}
                          >
                            Get Started
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ft__half pdx pdxParent--img-transparent"
              style={{ "--pdxMaxheight": 1 }}
            >
              <div className="pdxItem pdxItem--img-transparent">
                <img src="./static/working_late.svg" />
              </div>
            </div>
          </div>
        </div>
        <div
          id="feature"
          className="section section--feature section--noPadding section--left dark"
          style={{
            backgroundColor: "#FCFCFC",
            "--pdxMinHeight": "500px",
            "--wrMax": "1200px"
          }}
        >
          <div className="ft ft--left" style={{ "--pdxPt": 0, "--pdxPb": 0 }}>
            <div className="ft__half">
              <div className="ft__wrapper" style={{ maxWidth: "570px" }}>
                <div className="ft__content">
                  <h2 className="color-1 weight-title-h font-title section__title left noMargin">
                    Deeply cooperative
                  </h2>
                  <p className="weight-text section__subtitle left noMargin">
                    Access your workspace from anywhere, give read or write
                    access to your colleagues, friends and family, or ask for
                    reviews on social medias !
                  </p>
                  <div className="ftChecks col-sec">
                    <div className="ftCheck">
                      <svg
                        width="21px"
                        height="17px"
                        viewBox="0 0 21 17"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            id="ui-icons"
                            transform="translate(-109.000000, -67.000000)"
                            fill="#22BC66"
                          >
                            <polygon
                              id="check"
                              points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"
                            />
                          </g>
                        </g>
                      </svg>{" "}
                      Multi-users
                    </div>
                    <div className="ftCheck">
                      <svg
                        width="21px"
                        height="17px"
                        viewBox="0 0 21 17"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            id="ui-icons"
                            transform="translate(-109.000000, -67.000000)"
                            fill="#22BC66"
                          >
                            <polygon
                              id="check"
                              points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"
                            />
                          </g>
                        </g>
                      </svg>{" "}
                      Multi-devices
                    </div>
                    <div className="ftCheck">
                      <svg
                        width="21px"
                        height="17px"
                        viewBox="0 0 21 17"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            id="ui-icons"
                            transform="translate(-109.000000, -67.000000)"
                            fill="#22BC66"
                          >
                            <polygon
                              id="check"
                              points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"
                            />
                          </g>
                        </g>
                      </svg>{" "}
                      Social reviews
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ft__half pdx pdxParent--img-transparent"
              style={{ "--pdxMaxheight": 1 }}
            >
              <div className="pdxItem pdxItem--img-transparent">
                <img src="./static/group_chat.svg" alt="Group chat" />
              </div>
            </div>
          </div>
        </div>
        <div
          id="feature"
          className="section section--feature section--noPadding section--right dark"
          style={{
            backgroundColor: "#FCFCFC",
            "--pdxMinHeight": "500px",
            "--wrMax": "1200px"
          }}
        >
          <div className="ft ft--right" style={{ "--pdxPt": 0, "--pdxPb": 0 }}>
            <div
              className="ft__half pdx pdxParent--img-transparent"
              style={{ "--pdxMaxheight": 1 }}
            >
              <div className="pdxItem pdxItem--img-transparent">
                <img src="./static/accept_request.svg" alt="Accept request" />
              </div>
            </div>
            <div className="ft__half">
              <div className="ft__wrapper" style={{ maxWidth: "570px" }}>
                <div className="ft__content">
                  <h2 className="color-1 weight-title-h font-title section__title right noMargin">
                    Choose your weapons
                  </h2>
                  <p className="weight-text section__subtitle right noMargin">
                    More a Markdown or a plain text kind of guy ? Wanna do your
                    own langage shortcuts ?
                  </p>
                  <div className="ftPoint">
                    <div
                      className="iconWrapper medium circle"
                      style={{ width: "34px", height: "34px" }}
                    >
                      <svg
                        className="backdrop"
                        width={34}
                        height={34}
                        viewBox="0 0 28 28"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx={40}
                          cy={42}
                          r={14}
                          transform="translate(-26 -28)"
                          fill="rgba(207, 230, 255, 1.0)"
                          fillRule="nonzero"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={34}
                        height={34}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon"
                      >
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    </div>
                    <div className="ftPoint__meta">
                      <h3 className="ftPoint__title color-1 weight-text-m">
                        Full Markdown support
                      </h3>
                      <div className="ftPoint__description">
                        <p>
                          To the right (or left) of your feature text, you can
                          add a product display just like the ones in the hero
                          section.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ftPoint">
                    <div
                      className="iconWrapper medium circle"
                      style={{ width: "34px", height: "34px" }}
                    >
                      <svg
                        className="backdrop"
                        width={34}
                        height={34}
                        viewBox="0 0 28 28"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx={40}
                          cy={42}
                          r={14}
                          transform="translate(-26 -28)"
                          fill="rgba(207, 230, 255, 1.0)"
                          fillRule="nonzero"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={34}
                        height={34}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon"
                      >
                        <line x1={8} y1={6} x2={21} y2={6} />
                        <line x1={8} y1={12} x2={21} y2={12} />
                        <line x1={8} y1={18} x2={21} y2={18} />
                        <line x1={3} y1={6} x2={3} y2={6} />
                        <line x1={3} y1={12} x2={3} y2={12} />
                        <line x1={3} y1={18} x2={3} y2={18} />
                      </svg>
                    </div>
                    <div className="ftPoint__meta">
                      <h3 className="ftPoint__title color-1 weight-text-m">
                        Full WYSIWYG editor support
                      </h3>
                      <div className="ftPoint__description">
                        <p>
                          You can toggle this list and any other part of the
                          feature section to adjust it to your needs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ftPoint">
                    <div
                      className="iconWrapper medium circle"
                      style={{ width: "34px", height: "34px" }}
                    >
                      <svg
                        className="backdrop"
                        width={34}
                        height={34}
                        viewBox="0 0 28 28"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx={40}
                          cy={42}
                          r={14}
                          transform="translate(-26 -28)"
                          fill="rgba(207, 230, 255, 1.0)"
                          fillRule="nonzero"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={34}
                        height={34}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon"
                      >
                        <line x1={4} y1={9} x2={20} y2={9} />
                        <line x1={4} y1={15} x2={20} y2={15} />
                        <line x1={10} y1={3} x2={8} y2={21} />
                        <line x1={16} y1={3} x2={14} y2={21} />
                      </svg>
                    </div>
                    <div className="ftPoint__meta">
                      <h3 className="ftPoint__title color-1 weight-text-m">
                        Customizable plain text shortcuts
                      </h3>
                      <div className="ftPoint__description">
                        <p>
                          You can also add a little list of short text snippets
                          with green checkmarks in front of them.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="feature"
          className="section section--feature section--noPadding section--left dark"
          style={{
            backgroundColor: "#FCFCFC",
            "--pdxMinHeight": "500px",
            "--wrMax": "1200px"
          }}
        >
          <div className="ft ft--left" style={{ "--pdxPt": 0, "--pdxPb": 0 }}>
            <div className="ft__half">
              <div className="ft__wrapper" style={{ maxWidth: "570px" }}>
                <div className="ft__content">
                  <h2 className="color-1 weight-title-h font-title section__title left noMargin">
                    Keep your ideas close to you
                  </h2>
                  <p className="weight-text section__subtitle left noMargin">
                    Write structured or unsctructured metadatas on the lore,
                    characters, places or just random ideas, and access them
                    instantly ! Search through your book, or bookmark places
                    that need rework or reviews
                  </p>
                  <div className="ftChecks col-sec">
                    <div className="ftCheck">
                      <svg
                        width="21px"
                        height="17px"
                        viewBox="0 0 21 17"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            id="ui-icons"
                            transform="translate(-109.000000, -67.000000)"
                            fill="#22BC66"
                          >
                            <polygon
                              id="check"
                              points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"
                            />
                          </g>
                        </g>
                      </svg>{" "}
                      Extensive metadatas
                    </div>
                    <div className="ftCheck">
                      <svg
                        width="21px"
                        height="17px"
                        viewBox="0 0 21 17"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            id="ui-icons"
                            transform="translate(-109.000000, -67.000000)"
                            fill="#22BC66"
                          >
                            <polygon
                              id="check"
                              points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"
                            />
                          </g>
                        </g>
                      </svg>{" "}
                      Search engine
                    </div>
                    <div className="ftCheck">
                      <svg
                        width="21px"
                        height="17px"
                        viewBox="0 0 21 17"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            id="ui-icons"
                            transform="translate(-109.000000, -67.000000)"
                            fill="#22BC66"
                          >
                            <polygon
                              id="check"
                              points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"
                            />
                          </g>
                        </g>
                      </svg>{" "}
                      Smart bookmarks
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ft__half pdx pdxParent--img-transparent"
              style={{ "--pdxMaxheight": 1 }}
            >
              <div className="pdxItem pdxItem--img-transparent">
                <img src="./static/process.svg" alt="Process" />
              </div>
            </div>
          </div>
        </div>
        <div
          id="feature"
          className="section section--feature section--noPadding section--right dark"
          style={{
            backgroundColor: "#FCFCFC",
            "--pdxMinHeight": "500px",
            "--wrMax": "1200px"
          }}
        >
          <div className="ft ft--right" style={{ "--pdxPt": 0, "--pdxPb": 0 }}>
            <div
              className="ft__half pdx pdxParent--img-transparent"
              style={{ "--pdxMaxheight": 1 }}
            >
              <div className="pdxItem pdxItem--img-transparent">
                <img src="./static/japan.svg" alt="Japan" />
              </div>
            </div>
            <div className="ft__half">
              <div className="ft__wrapper" style={{ maxWidth: "570px" }}>
                <div className="ft__content">
                  <h2 className="color-1 weight-title-h font-title section__title right noMargin">
                    IA-driven inspiration at your fingertips
                  </h2>
                  <p className="weight-text section__subtitle right noMargin">
                    Short on inspiration ? Get instant proposals from your own
                    metadatas, or from thousands of books within the same
                    context.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="cta"
          className="section section--cta section--center dark"
          style={{
            backgroundColor: "#FCFCFC",
            paddingBottom: "60px",
            paddingTop: "60px",
            "--pdxMinHeight": "0px",
            "--wrMax": "1200px"
          }}
        >
          <div className="wr">
            <div className="cta__titles">
              <h2 className="color-1 weight-title-h font-title section__title center">
                Ready to get started?
              </h2>
              <p className="weight-text section__subtitle center">
                Create your workspace now.
              </p>
            </div>
            <div className="ctas">
              <Link href="/login">
                <a
                  className="btn btn--c btn--primary btn--large"
                  style={{ color: "#fff", backgroundColor: "#5757E7" }}
                >
                  Get Started
                </a>
              </Link>
              <Link href="/contact">
                <a
                  className="btn btn--c btn--secondary btn--large"
                  style={{ color: "#5757E7" }}
                >
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
