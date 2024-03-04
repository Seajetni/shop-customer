import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <div>
      <div>
        <Nav />
      </div>

      <div>{props.children}</div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
