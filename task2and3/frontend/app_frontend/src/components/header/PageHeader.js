import React from "react";
import { Header, Icon, Image } from "semantic-ui-react";
// import "semantic-ui-css/semantic.min.css";

import "./header.scss";
export default function PageHeader() {
  return (
    <Header
      as="h1"
      icon
      textAlign="center"
      className="headerContainer"
      style={{ padding: "2rem 0 2rem", marginBottom:'5rem' }}
    >
      <Icon name="user plus" circular className="headerContainer__icon" />
      <Header.Content className="headerContainer__title">Welcome to Website</Header.Content>
    </Header>
  );
}
