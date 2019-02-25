import { Icon,  Menu, Table } from 'semantic-ui-react'
import React, { Component } from 'react';
import Pagination from "react-js-pagination";
import _ from 'lodash'
const {random} = require("../helpers/csv")

export default class NumberList extends Component {
  constructor(params) {
    super(params)
    this.state = {
      pageCount: 10,
      offset:0,
      currentPage: 15,
      direction:'ascending',
      column:'index'
    }
  }


  sort = clickedColumn => () => {
    const { column,  direction } = this.state
    const {numbers} = this.props;
    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(numbers),
        direction: 'ascending',
      })
      return
    }

    // this.setState({
    //   data: numbers.reverse(),
    //   direction: direction === 'ascending' ? 'descending' : 'ascending',
    // })
  }

  render() {
    const {numbers} = this.props;
    const {column, direction} = this.state;
    return (
      <div>
      <Table  sortable celled >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell >Index #</Table.HeaderCell>
          <Table.HeaderCell sorted={column === 'number' ? direction : null}
              onClick={this.sort('name')}>Phone Number</Table.HeaderCell>
  
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
          {
              numbers.map((num,index)=>
              <Table.Row key={index}>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{`0${random(7,9)}${num}`}</Table.Cell>
                </Table.Row>)
          }
        
      
      </Table.Body>
  
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan='3'>
          <Pagination
          activePage={this.state.currentPage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
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