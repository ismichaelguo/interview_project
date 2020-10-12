import React, { useEffect, useState } from "react";
import { Grid, Image, Button, Form, Segment } from "semantic-ui-react";
import "./form.scss";
import InfTable from "../inf-table/InfTable";
import { connect } from "react-redux";
import { createUser } from "../../redux/actions";
import { usersSelector, userSelector } from "../../redux/selector";
import axios from "axios";
function FormAndINf(props) {
  const [submitFlag, setSubmitFlag] = useState(false);

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
    props.createUser(user);
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
                <div className="ui left icon input">
                  <input type="text" placeholder="First Name" required />
                  <i className="address card icon"></i>
                </div>
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <div className="ui left icon input">
                  <input type="text" placeholder="Last Name" required />
                  <i className="address card icon"></i>
                </div>
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <div className="ui left icon input">
                  <input type="email" placeholder="Email" required />
                  <i className="envelope outline icon"></i>
                </div>
              </Form.Field>
              <Form.Field>
                <label>Age</label>
                <div className="ui left icon input">
                  <input type="number" placeholder="Age" required />
                  <i className="hourglass half icon"></i>
                </div>
              </Form.Field>
              <Form.Field>
                <label>Income</label>
                <div className="ui left icon input">
                  <input type="number" placeholder="Income" required />
                  <i className="money bill alternate icon"></i>
                </div>
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

// This maps our action creators to props and binds
// them to dispatch.
const dispatchToProps = {
  createUser,
};

function stateToProps(state) {
  return {
    users: usersSelector(state),
    user: userSelector(state),
  };
}
export default connect(stateToProps, dispatchToProps)(FormAndINf);
