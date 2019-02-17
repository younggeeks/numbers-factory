import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import NumberList from './components/NumberList'
import { Grid } from 'semantic-ui-react';
import GenerateButton from "./components/GenerateButton"

const randomNumbers = require("./helpers/csv.js")

class App extends Component {
  constructor(params) {
    super(params)
    this.state = {
      numbers: randomNumbers('ke'),
    }
  }

  generate = (code)=>{
    this.setState({numbers:randomNumbers(code.toUpperCase())})
  }
  render() {
    const {numbers} = this.state
    return (
      <Grid centered columns={2}>
      <Grid.Column>
      <header>
         <NavBar/>
        </header>
        <section>
        <GenerateButton onGenerate={this.generate}/>
          <NumberList  numbers={numbers} />
        </section>
      </Grid.Column>
       
      </Grid>
    );
  }
}

export default App;
