import React, { Component } from 'react'
import { Form ,Radio  } from 'semantic-ui-react'
import ChoiceTask from './ChoiceTask.jsx'
import DecisionTask from './DecisionTask.jsx'
import SentenceTask from './SentenceTask.jsx'
import "./Replacement.css"

export default class Selection extends Component {
  
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {

    const { value } = this.state;
    
    return (

<div class= "inline fields">
<Form inline >
<Form.Group inline>
          <label class = "Radio__item"> Select Task Type</label>
          
          <Form.Field> 
           <Radio 
            
            label='Choice Task'
            name= "task"
            value={<ChoiceTask />}
            checked={value === {ChoiceTask}}
            onChange={this.handleChange}
          />
          </Form.Field>
          <Form.Field>
           <Radio 
            
            label='Decision-making Task'
            name= "task"
            value={<DecisionTask />}
            checked={value === {DecisionTask}}
          onChange={this.handleChange}
          />
          </Form.Field> 
          <Form.Field>
            <Radio
            label='Sentence-level Task'
            name = "task"
            value={<SentenceTask/>}
            checked={value === {SentenceTask}}
           onChange={this.handleChange}
          />
          </Form.Field> 
</Form.Group>
          

<div class="my-4 ">
      <h3 as='h2' class="titleHeadding Setting__item" >Setting up your task</h3>
      </div>
      <div class= "margin">
           <Form.Field>
          Selected value: <b>{this.state.value}</b>
        </Form.Field>
        </div>
        </Form>
      

     
      </div>      

        
 )}}