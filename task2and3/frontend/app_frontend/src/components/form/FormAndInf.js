import React, { useEffect, useState, useCallback } from "react";
import { Grid, Image, Button, Form, Segment, Input } from "semantic-ui-react";
import "./form.scss";
import InfTable from "../inf-table/InfTable";
import { connect } from "react-redux";
import { createUser } from "../../redux/actions";
import { usersSelector, userSelector } from "../../redux/selector";
import { useDispatch } from 'react-redux'

import axios from "axios";
function FormAndINf(props) {
  const [submitFlag, setSubmitFlag] = useState(false);
  const dispatch = useDispatch()


  const handleSubmit = (e) => {
    //organise the user inputs into new object user
    const user = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      email: e.target[2].value,
      age: e.target[3].value,
      income: e.target[4].value,
    };
    //dispatch action to update state users
    dispatch({
      type:'CREATE_USER',payload:{user}
  })
    //sent create new user request to bankend
    axios.post("http://127.0.0.1:8000/api/add_user", user);
    setSubmitFlag(true);
    //clear inputs
    e.target[0].value = ""
    e.target[1].value = ""
    e.target[2].value = ""
    e.target[3].value = ""
    e.target[4].value = ""


  };
  useEffect(() => {
    //get initial user data 
    axios
      .get("http://127.0.0.1:8000/api/get_users/")
      .then((res) => res.data)
      .then((data) =>
        data.map((user) => {
          props.createUser(user);
        })
      );
  }, []);
  useEffect(()=>{
    //submit message will be disappeared after 3 s
    if(submitFlag){
      setTimeout(()=>setSubmitFlag(false),3000)
    }
  },[submitFlag])
  return (
    <Grid stackable columns={2}>
      <Grid.Column style={{ width: "100" }}>
        <div className="formContainer">
          <Segment className="formContainer__form">
            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <label>First Name</label>
                <Input icon="address card" iconPosition="left" placeholder="First Name" required />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <Input icon="address card" iconPosition="left" placeholder="Last Name" required />

              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <Input icon="envelope outline icon" iconPosition="left" placeholder="Email" required />
              </Form.Field>
              <Form.Field>
                <label>Age</label>
                <Input icon="hourglass half icon" iconPosition="left" placeholder="Age" required />

              </Form.Field>
              <Form.Field>
                <label>Income</label>
                <Input icon="money bill alternate icon" iconPosition="left" placeholder="Income" required />
              </Form.Field>
              <Button primary type="submit">
                Submit
              </Button>
            </Form>
            {submitFlag && (
              <div className="ui success message">
                <div className="header">Form Completed</div>
                <p>You're successfully registered.</p>
              </div>
            )}
          </Segment>
        </div>
      </Grid.Column>
      <Grid.Column>
        <InfTable />
      </Grid.Column>
    </Grid>
  );
}


export default FormAndINf;
