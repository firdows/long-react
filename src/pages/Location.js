import React, { Component } from 'react';
import axios from 'axios';
import {Table,Pagination} from 'antd';

class Location extends Component {
    
    state = {
        dataSource:{}
    }
    
    loadData(page=null){
        const paramPage = (page===null)?``:`?page=${page}`;
        const url = `https://yii2-react-firdows.c9users.io/location${paramPage}`;
        axios.get(url).then(res=>{
            //console.log(res);
            if(res.status === 200){
                console.log(res.data);
                this.setState({
                    dataSource:res.data
                })
            }else{
                alert(`Can not load ${url}`);
            }
        });
    }    
    
    
    onChangePage = (page) => {
        //console.log(page);
        this.loadData(page);
    }
    
    componentWillMount(){
        this.loadData();
    }
  
  render() {
      const columns =[
          { title: 'PROVINCE_ID', dataIndex: 'PROVINCE_ID', rowKey:'PROVINCE_ID'},
          { title: 'PROVINCE_CODE', dataIndex: 'PROVINCE_CODE', },
          { title: 'PROVINCE_NAME', dataIndex: 'PROVINCE_NAME', render: text => <a href="{text}">{text}</a>,}
          ];
          
    return (
      <div>
        <h1>Location</h1>
        <button onClick = {() => this.loadData()}>Load Data</button>
        <Table 
            columns={columns} 
            dataSource={this.state.dataSource.data} 
            pagination={false}
        />
        <Pagination 
        defaultCurrent={1} 
        total={this.state.dataSource.totalCount} 
        onChange={this.onChangePage}/>
      </div>
    );
  }
}

export default Location;
