import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import NumberList from './components/NumberList'
import { Grid, Label, Button, Icon, Divider } from 'semantic-ui-react';
import Workbook from 'react-excel-workbook'
import _ from 'lodash'
const {random} = require("./helpers/csv")
const {randomize} = require("./helpers/csv.js")




class App extends Component {
  constructor(params) {
    super(params)
    this.state = {
      numbers:[],
      min:0,
      max:0,
      direction:'ascending'
    };
  }

  componentDidMount() {

    randomize(numbers=>{
      this.setState({numbers:_.sortBy(numbers),max:_.max(numbers),min:_.min(numbers)})
    })
    // this.setState({numbers:randomize(res=>_.sortBy(res)),max:_.max(numbers),min:_.min(numbers)})
  }

  generate = ()=>{
    randomize((numbers)=>{
      this.setState({numbers:_.sortBy(numbers),max:_.max(numbers),min:_.min(numbers)})
    })
  }
  

  sort = ()  => {
    const {numbers,direction} = this.state;
      this.setState({
        numbers:direction === 'ascending' ? numbers.reverse() : _.sortBy(numbers) ,
        direction: direction === 'ascending' ? 'descending' : 'ascending',
      })
    }
  render() {

    const {numbers, min , max} = this.state
    const data = numbers.map(num=>({phone:`0${random(7,9)}${num}`}))
    return (
     
      <Grid container columns={1} >
      <Grid.Column>
      <header>
         <NavBar/>
        </header>
        <section>
        
        <div className="row text-center" style={{marginTop: '100px'}}>
    <Workbook filename="phone_numbers.xlsx" element={ <Button basic color="teal" size="big" animated="vertical">
      <Button.Content visible>Save to file</Button.Content>
      <Button.Content hidden>
        <Icon name='download' /> 
      </Button.Content>
    </Button>}>
      <Workbook.Sheet data={data} name="Phone Numbers">
        <Workbook.Column label="phone" value="phone"/>
      </Workbook.Sheet>
    </Workbook>
    <Button onClick={this.generate} basic color="teal" size="big" animated="vertical">
      <Button.Content visible>Generate Numbers</Button.Content>
      <Button.Content hidden>
        <Icon name='sync alternate' />  
      </Button.Content>
    </Button>

    <Label color="teal" >
        Max : {`0`+max}
      </Label>

    <Label color="teal" >
        Min : {`0`+min}
      </Label>

  </div>
  <Divider />
          <NumberList sortClicked={this.sort} direction={this.state.direction}  numbers={numbers}  />
        </section>
      </Grid.Column>
       
      </Grid>
    );
  }
}

export default App;
