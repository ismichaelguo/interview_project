import React from "react";
import { Segment, Icon, Label, Menu, Table } from "semantic-ui-react";
import { connect } from "react-redux";
import { usersSelector } from "../../redux/selector";
import { useSelector } from "react-redux";

import "./inf-table.scss";
function InfTable(props) {
  const users = useSelector(usersSelector);
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
              users.map((user) => {
                const userInf = user.userInf;
                return (
                  <Table.Row key={user.id}>
                    <Table.Cell>{`${userInf.firstName} ${userInf.lastName}`}</Table.Cell>
                    <Table.Cell>{userInf.age}</Table.Cell>
                    <Table.Cell>{userInf.email}</Table.Cell>
                    <Table.Cell>{userInf.income}</Table.Cell>
                  </Table.Row>
                );
              })
            ) : (
              <Table.Row>
                <Table.Cell colSpan="4" style={{ textAlign: "center" }}>
                  There is no record found!
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </Segment>
    </div>
  );
}


export default InfTable;
