import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import NumberList from './components/NumberList'
import { Grid } from 'semantic-ui-react';
const randomNumbers = require("./helpers/csv.js")

class App extends Component {
  render() {
    return (
      <Grid centered columns={2}>
      <Grid.Column>
      <header>
         <NavBar/>
        </header>
        <section>
          <NumberList  numbers={randomNumbers} />
          
        </section>
      </Grid.Column>
       
      </Grid>
    );
  }
}

export default App;
