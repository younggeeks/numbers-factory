import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import NumberList from './components/NumberList'
import { Grid, Loader, Button, Icon } from 'semantic-ui-react';
import Workbook from 'react-excel-workbook'
import _ from 'lodash'
const {random} = require("./helpers/csv")
 
const {randomize} = require("./helpers/csv.js")




class App extends Component {
  constructor(params) {
    super(params)
    this.state = {
      numbers:[],
      direction:'ascending'
    };
  }

  componentDidMount() {
    this.setState({numbers:randomize(res=>_.sortBy(res)),loading:false})
  }

  generate = ()=>{
    this.setState({loading:true})
    randomize((numbers)=>{
      this.setState({numbers:_.sortBy(numbers),loading:false})
      console.log('the numbers are', numbers)
    })
  }
  

  sort = ()  => {
    console.log("the stuff pressed")
    const {numbers,direction} = this.state;
      this.setState({
        numbers:direction === 'ascending' ? numbers.reverse() : _.sortBy(numbers) ,
        direction: direction === 'ascending' ? 'descending' : 'ascending',
      })
    }
  render() {

    const {numbers, loading} = this.state
    const data = numbers.map(num=>({phone:`0${random(7,9)}${num}`}))
    if (loading) {
      return  <Loader active={loading} indeterminate>Generating Numbers</Loader>
    }
    return (
     
      <Grid centered columns={2}>
      <Grid.Column>
      <header>
         <NavBar/>
        </header>
        <section>
        
        <div className="row text-center" style={{marginTop: '100px'}}>
    <Workbook filename="phone_numbers.xlsx" element={ <Button positive size="big" animated="vertical">
      <Button.Content visible>Download</Button.Content>
      <Button.Content hidden>
        <Icon name='download' /> Generate ✅
      </Button.Content>
    </Button>}>
      <Workbook.Sheet data={data} name="Phone Numbers">
        <Workbook.Column label="phone" value="phone"/>
      </Workbook.Sheet>
    </Workbook>

    <Button onClick={this.generate} size="big" icon>
    <Icon name='recycle' />
  </Button>
  </div>
          <NumberList sortClicked={this.sort} direction={this.state.direction}  numbers={numbers}  />
        </section>
      </Grid.Column>
       
      </Grid>
    );
  }
}

export default App;
