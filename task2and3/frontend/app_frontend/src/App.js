import React, { Fragment } from "react";
//components
import PageHeader from "./components/header/PageHeader";
import FormAndInf from "./components/form/FormAndInf";
import Footer from "./components/footer/Footer";
//semantic ui
import { Segment,Icon } from "semantic-ui-react";
//css
import './app.scss'

function App() {
  return (
    <Fragment>
      <PageHeader />

      <FormAndInf />
      <Footer />
    </Fragment>
  );
}

export default App;
