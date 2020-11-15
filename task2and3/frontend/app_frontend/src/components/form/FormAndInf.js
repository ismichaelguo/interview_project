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
  const [userInf,setUserInf] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    income: "",
  })
  const dispatch = useDispatch()

  const handleFirstName=(e)=>{
    setUserInf({
      ...userInf,
      firstName:e.target.value
    })
  }

  const handleLastName=(e)=>{
    setUserInf({
      ...userInf,
      lastName:e.target.value
    })
  }

  const handleEmail=(e)=>{
    setUserInf({
      ...userInf,
      email:e.target.value
    })
  }

  const handleAge=(e)=>{
    setUserInf({
      ...userInf,
      age:e.target.value
    })
  }
  const handleIncome=(e)=>{
    setUserInf({
      ...userInf,
      income:e.target.value
    })
  }



  const handleSubmit = () => {
    //organise the user inputs into new object user

    //dispatch action to update state users
    dispatch({
      type:'CREATE_USER',payload:{userInf}
  })
    //sent create new user request to bankend
    axios.post("http://127.0.0.1:8000/api/add_user", userInf);
    setSubmitFlag(true);
    //clear inputs
    setUserInf({
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      income: "",
    })



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
            <Form >
              <Form.Field>
                <label>First Name</label>
                <Input icon="address card" iconPosition="left" placeholder="First Name" required onChange={handleFirstName} value={userInf.firstName} />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <Input icon="address card" iconPosition="left" placeholder="Last Name" required onChange={handleLastName} value={userInf.lastName} />

              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <Input icon="envelope outline icon" iconPosition="left" placeholder="Email" required onChange={handleEmail} value={userInf.email} />
              </Form.Field>
              <Form.Field>
                <label>Age</label>
                <Input icon="hourglass half icon" iconPosition="left" placeholder="Age" required onChange={handleAge} value={userInf.age} />

              </Form.Field>
              <Form.Field>
                <label>Income</label>
                <Input icon="money bill alternate icon" iconPosition="left" placeholder="Income" required onChange={handleIncome} value={userInf.income} />
              </Form.Field>
              <Button primary type="submit" onClick={handleSubmit}>
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
