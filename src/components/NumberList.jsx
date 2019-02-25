import { Icon,  Menu, Table } from 'semantic-ui-react'
import React, { Component } from 'react';
import Pagination from "react-js-pagination";
const {random} = require("../helpers/csv")


export default class NumberList extends Component {
  constructor(params) {
    super(params)
  }



  render() {
    const {numbers,sortClicked,direction} = this.props;
    return (
      <div>
      <Table  sortable celled >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell >Index #</Table.HeaderCell>
          <Table.HeaderCell sorted={direction}
              onClick={()=>sortClicked()}>Phone Number</Table.HeaderCell>
  
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
          {
              numbers.map((num,index)=>
              <Table.Row key={index}>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{`0${num}`}</Table.Cell>
                </Table.Row>)
          }
        
      
      </Table.Body>
  
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan='3'>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
      
    </div>
    );
  }
}

// const styles = StyleSheet.flatten({});


  
// )

// export default NumberList