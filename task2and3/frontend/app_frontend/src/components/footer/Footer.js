import React from "react";
import { Grid, Image, Button, Form, Segment, Card } from "semantic-ui-react";
import "./footer.scss";
export default function Footer() {
  return (
    <section className="footerContainer">
      <Segment
        style={{
          borderLeft: "none",
          borderRight: "none",
          borderBottom: "none",
        }}
      >
        <Grid centered columns={1}>
          <Grid.Column>
            <h4 className="footerContainer__title">Copy Right 2016</h4>
          </Grid.Column>
        </Grid>
      </Segment>
    </section>
  );
}
