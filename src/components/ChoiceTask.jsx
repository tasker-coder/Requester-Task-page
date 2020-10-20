import React  from 'react'
import {Form , Checkbox } from 'semantic-ui-react'

 class ChoiceTask extends React.Component{
 // function ChoiceTask() {
   
  state = {}
  handleChange = (e, {   value  }) => this.setState({  value })
  render(){
  const { value } = this.state;
  

        return(
    <div>
    <Form.Group inline> 
    <label> Select </label>
    <Form.Field 
      control={Checkbox}
      name = "task"
      label='option 1'
      id = 'checkbox1'
      value='checkbox1'
      checked={value === 'checkbox1'}
      onChange={this.handleChange}
    />
    <Form.Field 
      control={Checkbox}
      name = "task"
      label='option 2'
      value='checkbox2'
      checked={value === 'checkbox2'}
      onChange={this.handleChange}
    />
    <Form.Field 
      control={Checkbox}
      name = "task"
      label='option 3'
      value='checkbox3'
      checked={value === 'checkbox3'}
      onChange={this.handleChange}
    />
    </Form.Group>
    </div>
  
);}}

export default ChoiceTask;



