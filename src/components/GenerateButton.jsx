import React from "react";
import { Button, Dropdown, Loader } from "semantic-ui-react";
import { countryOptions } from "../helpers/common.js";

class GenerateButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "ke"
    };
  }
  handleChange = (e,{ value }) => {
    console.log("the value is ", value)
    this.setState({ value });
  }
  render() {
    const {value} = this.state;
    const {onGenerate} = this.props;
    return (
      <div>
         
        <Dropdown
          onChange={this.handleChange}
          value={value}
          placeholder="Select Country"
          fluid
          search
          selection
          options={countryOptions}
        />
        <Button onClick={()=>onGenerate(value)}>Generate</Button>
      </div>
    );
  }
}

export default GenerateButton;
