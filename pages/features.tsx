import * as React from "react";
import Layout from "../components/Layout";

const FeaturesPage: React.FunctionComponent = () => (
  <Layout title="washi:features">
    <div>
      <div
        id="grid"
        className="section section--grid section--center dark"
        style={{
          backgroundColor: "#FCFCFC",
          paddingBottom: "60px",
          paddingTop: "130px",
          "--pdxMinHeight": "0px",
          "--wrMax": "1200px"
        }}
      >
        <div className="wr">
          <h1 className="color-1 weight-title-h font-title section__title center standalone">
            Features
          </h1>
          <div className="grid grid--undefined">
            <div className="gridItem">
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
                    fill="rgb(50, 146, 255)"
                    fillRule="nonzero"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={34}
                  height={34}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>
              </div>
              <h3 className="gridItem__title color-1 weight-text-m">
                Multi-devices
              </h3>
              <div className="gridItem__description">
                <p>
                  Work anywhere, on any device. Use offline, sync later !
                  Compatible browser, desktop, android, iOS
                </p>
              </div>
            </div>
            <div className="gridItem">
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
                    fill="rgb(50, 146, 255)"
                    fillRule="nonzero"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={34}
                  height={34}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="gridItem__title color-1 weight-text-m">
                Multi-users
              </h3>
              <div className="gridItem__description">
                <p>
                  Work as a team, invite friends and family, get reviews from
                  social networks ! Works flawlessly even with multiple
                  concurrent users !
                </p>
              </div>
            </div>
            <div className="gridItem">
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
                    fill="rgb(50, 146, 255)"
                    fillRule="nonzero"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={34}
                  height={34}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <circle cx={18} cy={18} r={3} />
                  <circle cx={6} cy={6} r={3} />
                  <path d="M13 6h3a2 2 0 0 1 2 2v7" />
                  <line x1={6} y1={9} x2={6} y2={21} />
                </svg>
              </div>
              <h3 className="gridItem__title color-1 weight-text-m">
                Versionned
              </h3>
              <div className="gridItem__description">
                <p>
                  Branch, merge, rebase, rollback, restore... The best of
                  versionning in an easy-to-use interface
                </p>
              </div>
            </div>
            <div className="gridItem">
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
                    fill="rgb(50, 146, 255)"
                    fillRule="nonzero"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={34}
                  height={34}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
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
              <h3 className="gridItem__title color-1 weight-text-m">
                Write as you like
              </h3>
              <div className="gridItem__description">
                <p>
                  Markdown, Plain text, WYSIWYG, or even custom-coded text based
                  shortcuts !
                </p>
              </div>
            </div>
            <div className="gridItem">
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
                    fill="rgb(50, 146, 255)"
                    fillRule="nonzero"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={34}
                  height={34}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                  <line x1={7} y1={7} x2={7} y2={7} />
                </svg>
              </div>
              <h3 className="gridItem__title color-1 weight-text-m">
                Help yourself with metadatas
              </h3>
              <div className="gridItem__description">
                <p>
                  Write context, describe your characters, places, lore or
                  simply ideas and access thoses whenever you need it
                </p>
              </div>
            </div>
            <div className="gridItem">
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
                    fill="rgb(50, 146, 255)"
                    fillRule="nonzero"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={34}
                  height={34}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3 className="gridItem__title color-1 weight-text-m">
                IA-powered inspiration
              </h3>
              <div className="gridItem__description">
                <p>
                  Get recommandations or proposals based on the current
                  paragraph context and global metadatas, from thousands of
                  open-sourced books
                </p>
              </div>
            </div>
            <div className="gridItem">
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
                    fill="rgb(50, 146, 255)"
                    fillRule="nonzero"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={34}
                  height={34}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255, 255, 255, 1)"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="gridItem__title color-1 weight-text-m">
                Bookmark and search
              </h3>
              <div className="gridItem__description">
                <p>TODO</p>
              </div>
            </div>
            <div className="gridItem">
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
                    fill="rgb(50, 146, 255)"
                    fillRule="nonzero"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={34}
                  height={34}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255, 255, 255, 1)"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1={12} y1={3} x2={12} y2={15} />
                </svg>
              </div>
              <h3 className="gridItem__title color-1 weight-text-m">
                Publish or export
              </h3>
              <div className="gridItem__description">
                <p>
                  Export as ebook, kindle, or push to online libraries such as
                  Amazon or Google Books ! Or create a mobile library app with
                  all your past and upcoming books ! Or even create a hosted
                  blog ! The choice is yours
                </p>
              </div>
            </div>
            <div className="gridItem">
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
                    fill="rgb(50, 146, 255)"
                    fillRule="nonzero"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={34}
                  height={34}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255, 255, 255, 1)"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                  <path d="M7 11V7a5 5 0 0 1 9.9-1" />
                </svg>
              </div>
              <h3 className="gridItem__title color-1 weight-text-m">
                Manage permissions
              </h3>
              <div className="gridItem__description">
                <p>
                  Restrict read and write access for reviewers, writers and
                  public per project, chapter or even paragraph
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="signup"
        className="section section--email section--center dark"
        style={{
          backgroundColor: "#fff",
          paddingBottom: "60px",
          paddingTop: "60px",
          "--pdxMinHeight": "0px",
          "--wrMax": "1200px"
        }}
      >
        <div className="wr">
          <div className="inlineFormWrapper">
            <form id="if_saad6uzgt5p" className="inlineForm inlineForm--c">
              <div className="inlineFormContent">
                <input
                  type="hidden"
                  id="if_siteid_saad6uzgt5p"
                  defaultValue="chxr4kkn1t08"
                />
                <input type="hidden" id="if_listid_saad6uzgt5p" />
                <input
                  type="hidden"
                  id="if_action_saad6uzgt5p"
                  defaultValue="forward"
                />
                <input type="hidden" id="if_url_saad6uzgt5p" />
                <input type="hidden" id="if_legal_saad6uzgt5p" />
                <input type="hidden" id="if_reqaccept_saad6uzgt5p" />
                <input
                  type="email"
                  id="if_email_saad6uzgt5p"
                  className="inlineForm__input"
                  placeholder="My Awesome Book"
                />
                <button
                  id="if_submit_saad6uzgt5p"
                  className="btn btn--c btn--primary btn--large"
                  style={{ color: "#fff", backgroundColor: "#5757E7" }}
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default FeaturesPage;
