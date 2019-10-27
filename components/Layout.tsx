import * as React from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "washi:"
}) => {
  React.useEffect(() => {
    const buffer = 10;
    const margin = 60 + 40 + buffer;
    // button
    const button = document.getElementById("headerMenuButton") as HTMLElement;
    const buttonWrapper = document.getElementById("headerMenu") as HTMLElement;
    // drawer
    const drawer = document.getElementById("headerDrawer") as HTMLElement;
    const drawerBackdrop = document.getElementById(
      "headerDrawerBackdrop"
    ) as HTMLElement;
    const drawerClose = document.getElementById(
      "headerDrawerClose"
    ) as HTMLElement;
    // header UI
    const logo = document.getElementById("headerLogo") as HTMLElement;
    const nav = document.getElementById("headerNav") as HTMLElement;
    const logoWidth = logo.offsetWidth;
    const navWidth = nav.offsetWidth;

    const determineVisibility = function() {
      const parent = window.innerWidth;
      if (logoWidth + navWidth > parent - margin) {
        nav.classList.add("header__nav--hidden");
        buttonWrapper.classList.add("headerMenu--visible");
      } else {
        nav.classList.remove("header__nav--hidden");
        buttonWrapper.classList.remove("headerMenu--visible");
      }
    };

    const showDrawer = function() {
      drawer.classList.add("headerMenu--visible");
    };

    const hideDrawer = function() {
      drawer.classList.remove("headerMenu--visible");
    };

    button.onclick = showDrawer;
    drawerBackdrop.onclick = hideDrawer;
    drawerClose.onclick = hideDrawer;

    window.addEventListener("resize", determineVisibility);
    determineVisibility();
    return () => {};
  });

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="Discover a new way of writing" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="twitter:title" content="washi:" />
        <meta
          name="twitter:description"
          content="Discover a new way of writing"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="./icon.png" />
        <meta property="og:image:width" content={"1200"} />
        <meta property="og:image:height" content={"630"} />
        <meta name="twitter:image" content="./icon.png" />
        <link rel="canonical" href="https://washi.tech/" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?" />
        <link rel="stylesheet" href="/static/main.css" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n       body{font-family:Rubik,sans-serif;font-size:14px;font-weight:400;--title-scale:1}@media only screen and (max-width:750px){body{--title-scale:0.7}}.wr{max-width:1200px;max-width:var(--wr-max)}.section:not(.dark),.section:not(.dark) .color-2{color:#eee}.section.dark,.section.dark .color-2{color:#6b7c93}.section:not(.dark) .color-1{color:#fff}.section.dark .color-1{color:#32325d}.section:not(.dark) .color-2{color:#eee}.section.dark .color-2{color:#6b7c93}.link,a:not(.btn){color:rgba(182,182,255,1);--link-hover-bg:rgba(182, 182, 255, 0.05);--link-hover:rgb(80, 80, 255)}.dark .link,.dark a:not(.btn){color:rgba(87,87,231,1);--link-hover-bg:rgba(87, 87, 231, 0.05);--link-hover:rgb(27, 27, 189)}.weight-text{font-weight:400}.weight-text-m{font-weight:500}.weight-text-h{font-weight:500}.weight-title{font-weight:400}.weight-title-m{font-weight:500}.weight-title-h{font-weight:500}.font-title{font-family:Rubik,sans-serif}.link,a{text-decoration:none;font-weight:500}a:not(.btn):hover{text-decoration:underline}\n    "
          }}
        />
        <link href="/static/css.css" rel="stylesheet" />
      </Head>
      <header id="header" className="section header dark">
        <div className="wr color-1">
          <a
            id="headerLogo"
            href="https://washi.tech/"
            className="header__logo"
            style={{ fontWeight: 500, fontSize: "26px" }}
          >
            washi:
          </a>
          <nav id="headerNav" className="header__nav">
            <div className="headerNav__links">
              <Link href="/features">
                <a>Features</a>
              </Link>{" "}
              <Link href="/pricing">
                <a>Pricing</a>
              </Link>{" "}
              <Link href="/faq">
                <a>FAQ</a>
              </Link>{" "}
            </div>
            <div className="header__navCtas">
              <Link href="/login">
                <a
                  className="btn btn--c btn--secondary"
                  style={{ color: "#5757E7" }}
                >
                  Login
                </a>
              </Link>{" "}
              <Link href="/signup">
                <a
                  className="btn btn--c btn--primary"
                  style={{ color: "#fff", backgroundColor: "#5757E7" }}
                >
                  Sign Up{" "}
                  <svg
                    width={13}
                    height={12}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z"
                      fill="#fff"
                    />
                  </svg>
                </a>
              </Link>{" "}
            </div>
          </nav>
          <nav id="headerMenu" className="header__nav header__nav--hidden">
            <div id="headerMenuButton" className="burger">
              Menu
            </div>
          </nav>
        </div>
        <nav id="headerDrawer" className="headerMenu col-dark-sec">
          <div id="headerDrawerBackdrop" className="headerMenu__backdrop" />
          <div
            className="headerMenu__wrapper"
            style={{ backgroundColor: "#ffffff" }}
          >
            <button id="headerDrawerClose" className="headerMenu__close btn" />
            <ul className="headerMenu__links">
              <li>
                <a href="/features" className="drawerLink">
                  Features{" "}
                </a>
              </li>
              <li>
                <a href="/pricing" className="drawerLink">
                  Pricing{" "}
                </a>
              </li>
              <li>
                <a href="/faq" className="drawerLink">
                  FAQ{" "}
                </a>
              </li>
              <li>
                <a href="/login" className="drawerLink">
                  Login{" "}
                  <svg
                    width={13}
                    height={12}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.557 7H1a1 1 0 1 1 0-2h8.586L7.007 2.421a1 1 0 0 1 1.414-1.414l4.243 4.243c.203.202.3.47.292.736a.997.997 0 0 1-.292.735L8.42 10.964A1 1 0 1 1 7.007 9.55L9.557 7z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/signup" className="drawerLink col-dark">
                  Sign Up{" "}
                  <svg
                    width={13}
                    height={12}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.557 7H1a1 1 0 1 1 0-2h8.586L7.007 2.421a1 1 0 0 1 1.414-1.414l4.243 4.243c.203.202.3.47.292.736a.997.997 0 0 1-.292.735L8.42 10.964A1 1 0 1 1 7.007 9.55L9.557 7z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {children}
      <footer
        id="footer"
        className="section section--footer section--center"
        style={{
          backgroundColor: "#393E46",
          paddingBottom: "15px",
          paddingTop: "15px"
        }}
      >
        <div className="wr">
          <div className="footer">
            <div className="footer__primary">
              <span>© 2019 MadHat </span>
              <ul className="footer__social">
                <li>
                  <a
                    href="https://washi.tech/"
                    target="_blank"
                    className="color-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://washi.tech/"
                    target="_blank"
                    className="color-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://washi.tech/"
                    target="_blank"
                    className="color-2"
                  >
                    <svg viewBox="0 0 448 512">
                      <path
                        d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__linkGroups">
              <ul className="footer__linkGroup">
                <li className="weight-text">Product</li>
                <li>
                  <a href="/features">Features</a>
                </li>
                <li>
                  <a href="/pricing">Pricing</a>
                </li>
                <li>
                  <a href="/jobs">Jobs</a>
                </li>
              </ul>
              <ul className="footer__linkGroup">
                <li className="weight-text">Company</li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/team">Team</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
              </ul>
              <ul className="footer__linkGroup">
                <li className="weight-text">Legal</li>
                <li>
                  <a href="/tos">Terms of Service</a>
                </li>
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/gdpr">GDPR Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
