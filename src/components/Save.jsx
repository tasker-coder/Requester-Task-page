import React from 'react';
import "./Replacement.css";
import "../css/practise.css";

function Save(props) {
	
	console.log(props.style);
	return(
    <button class=" right"
        
		style= {props.style} 
		
		onClick= {props.action} > 
		{props.title} 
	</button>)
}


export default Save;

