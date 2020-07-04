import React from "react";
import { withPrefix } from "gatsby";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/tungxaydung.com" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/tung-xay-dung-home-banner.jpg`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
      <MessengerCustomerChat
        pageId={"110184210682682"}
        appId={"937368100112461"}
        htmlRef="https://youtube.com"
      />
    </div>
  );
};

export default TemplateWrapper;
