import React from 'react'
import {Form , Radio } from 'semantic-ui-react'

class DecisionTask extends React.Component{
    state = {}
    handleChange = (e, {   value  }) => this.setState({  value })
    render() {
        const { value } = this.state;  

        return(


    <div>
    <Form.Group inline>
    <label>Select </label>
    <Form.Field 
      control={Radio}
      name = "task"
      label='True'
      value= 'state.decision1'
      checked={value === 'contact.decision1'}
      onChange={this.handleChange}
    />
    <Form.Field 
      control={Radio}
      name = "task"
      label='False'
      value='state.decision'
      checked={value === 'contact.decision'}
      onChange={this.handleChange}
    />
    </Form.Group>
    </div>
  
);}}

export default DecisionTask;