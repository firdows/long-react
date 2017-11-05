import React, { Component } from 'react';
import axios from "axios";

class LocationForm extends Component {
  
  state = {
    PROVINCE_CODE:'',
    PROVINCE_NAME:'',
    PROVINCE_NAME_ENG:'',
  };
  
  hadleChange = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  
  handleSubmit = (e) =>{
   e.preventDefault();
   console.log(this.state);
   const url = `https://yii2-react-firdows.c9users.io/location`;
   axios.post(url,this.state).then(res => {
      console.log(res);
   });
  }
  
  render() {
    return (
      <div>
        <h1>About Page</h1>
        <form onSubmit={this.handleSubmit} >
        <label htmlFor="PROVINCE_CODE">Code : </label>
        <input type="text" name="PROVINCE_CODE" id= "PROVINCE_CODE" onChange={this.hadleChange}/>
        
        <br/>
        
        <label htmlFor="PROVINCE_NAME">Name : </label>
        <input type="text" name="PROVINCE_NAME" id= "PROVINCE_NAME" onChange={this.hadleChange}/>
        
        <br/>
        
        <label htmlFor="PROVINCE_NAME_ENG">Name Eng: </label>
        <input type="text" name="PROVINCE_NAME_ENG" id= "PROVINCE_NAME_ENG" onChange={this.hadleChange}/>
        
        <button type="submit">Save</button>
        
        </form>
        
      </div>
    );
  }
}

export default LocationForm;
