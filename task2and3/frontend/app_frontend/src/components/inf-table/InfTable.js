import React from "react";
import { Segment, Icon, Label, Menu, Table } from "semantic-ui-react";
import { connect } from "react-redux";
import { usersSelector } from "../../redux/selector";
import "./inf-table.scss";
function InfTable(props) {
  const { users } = props;
  return (
    <div className="tableContainer">
      <Segment className="tableContainer__table">
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Age</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Income</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {users.length > 0 ? (
              users.map((user, index) => {
                return (
                  <Table.Row key={index}>
                    <Table.Cell>{`${user._fields.firstName} ${user._fields.lastName}`}</Table.Cell>
                    <Table.Cell>{user._fields.age}</Table.Cell>
                    <Table.Cell>{user._fields.email}</Table.Cell>
                    <Table.Cell>{user._fields.income}</Table.Cell>
                  </Table.Row>
                );
              })
            ) : (
              <Table.Row col>
                <Table.Cell>There is no record found!</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </Segment>
    </div>
  );
}
// This function takes the Redux state, runs the
// selectors and returns the props passed to App.
function stateToProps(state) {
  return {
    users: usersSelector(state),
  };
}

export default connect(stateToProps, null)(InfTable);
