import React, { Component } from 'react';
import axios from 'axios';

class Location extends Component {
    
    state = {
        dataSource:{}
    }
    
    loadData(){
        const url = 'https://yii2-react-firdows.c9users.io/location/';
        axios.get(url).then(res=>{
            //console.log(res);
            if(res.status == 200){
                console.log(res.data);
            }else{
                alert(`Can not load ${url}`);
            }
        });
    }    
    
    
  render() {
    return (
      <div>
        <h1>Location</h1>
        <button onClick = {() => this.loadData()}>Load Data</button>
        
      </div>
    );
  }
}

export default Location;
