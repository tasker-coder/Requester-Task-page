import React, { useState } from "react";
import { Form, Input, } from "semantic-ui-react";
import Selection from "./Selection";

 
import Save from './Save';

import "../css/practise.css";



function RegistrationForm(props) {
  const [state, setState] = useState({
    Task: String,
    title: String,
    description: String,
    expiryDate: Date,
    checkbox1: "",
    checkbox2: "",
    checkbox3: "",
    decision: Boolean,
    sentence: String,
    masterWorkers: Boolean,
    reward: Number,
    numberofWorkers: Number,
    RequireOptions: ["Yes", "No"],
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  

  const sendDetailsToServer = () => {
    console.log("title");

    const payload = {
      
      tname: state.Task,
      title: state.title,
      description: state.description,
      expiryDate: state.date,
      checkbox1: state.checkbox1,
      checkbox2: state.checkbox2,
      checkbox3: state.checkbox3,
      decision: state.decision,
      sentence: state.sentence,
      masterWorkers: state.masterWorkers,
      reward: state.reward,
      numberofWorkers: state.numberofWorkers,
    };

    console.log(payload);
    fetch("http://localhost:8000/tasks", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log("Error:" + err);
      });
  };

  return (
    //    header.component
       
       <div class="container margin">
      <header className="navbar" my-4>
        <div className="navbar__title navbar__item">New Requester Task</div>
        <div className="navbar__item">Worker Task</div>
      </header>
      {/* radio component open*/}

      <Selection />

      {/* radio component close*/}
      {/* describe component open */}
      <br></br>
      <div className="Describe__item " >
        <h3 as="h2" class="titleHeadding">Describe your Task To Workers</h3><br></br>

        <Form>
          <Form.Field inline class="Describe_object1">
            <label id="aa">Title</label>
            <Input
              placeholder="Enter Task Title"
              id="title"
              value={state.title}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field inline class="Describe_object2">
            <label id="aa">Description</label>
            <Input
              inputType="Text"
              placeholder="Enter Task Description"
              id="description"
              value={state.description}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field inline class="Describe_object3">
            <label id="aa">Expiry Date</label>
            <Input
              type="date"
              placeholder=" Date"
              id="date"
              value={state.date}
              onChange={handleChange}
            />
          </Form.Field>
        </Form>
      </div>
      <br></br>
      {/* describe component close */}

      {/* requirement component open */}
      <div >
        <h3 as="h2"   className="Replacement__item " class="my-3 titleHeadding">
          Worker Requirement
        </h3><br></br>
       
        <div class="container">
          <div class="ui form moveLeft">
            <div class="inline fields">
              <label class="my-5"> Require Master Workers</label>
              <div class="field">
                <div class="ui radio checkbox">
                  <input
                    type="radio"
                    name="frequency"
                    id="requireWorkers"
                    value={state.masterWorkers}
                    checked="checked"
                    onChange={handleChange}
                  />
                  <label> Yes</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox">
                  <input
                    type="radio"
                    name="frequency"
                    id="requireWorkers"
                    value={state.masterWorkers}
                    onChange={handleChange}
                  />
                  <label>No</label>
                </div>
              </div>
            </div>
            </div>
            <div class="text-left">
            <div class="inline fields moveLeft">  
              <Form >
                <Form.Field inline class="text-left">
                  <label id="aa">Reward per response </label>
                  <input
                    type="number"
                    id="reward"
                    value={state.reward}
                    onChange={handleChange}
                  />
                </Form.Field>
                <Form.Field inline class="Describe_object1">
                  <label id="aa">Number of workers</label>
                  <input
                    type="number"
                    id="numberofWorkers"
                    value={state.numberofWorkers}
                    onChange={handleChange}
                  />
                </Form.Field>
              </Form>
            </div>
          </div>
        </div>
        </div>

     
      

      <Save 
              action = {sendDetailsToServer}
              type = {'primary'} 
              title = {'Save'} 
              
            
          />
      
      {/* <Save 
              action = {sendDetailsToServer}
              type = {'primary'} 
              title = {'Save'} 
              
            
          /> */}
    </div> 
    
  );
}
export default RegistrationForm;
