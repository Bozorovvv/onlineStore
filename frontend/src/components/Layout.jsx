import React from "react";
import { Container } from "react-bootstrap";

const Layout = (props) => {
  return (
    <div style={{ height: "80vh" }}>
      <Container>{props.children}</Container>
    </div>
  );
};

export default Layout;
