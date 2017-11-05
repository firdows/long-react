import React, { Component } from 'react';
import axios from 'axios';
import {Table,Pagination, Modal, Button} from 'antd';
import LocationForm from './LocationForm';

class Location extends Component {
    
    state = {
        dataSource:{},
        isFormVisible:false,
        confirmLoading:false,
        
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
    
    handleOk = () => {
    this.setState({
      confirmLoading: true,
    });
    // setTimeout(() => {
    //   this.setState({
    //     isFormVisible: false,
    //     confirmLoading: false,
    //   });
    // }, 2000);
  }
  
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      isFormVisible: false,
    });
  }
    
    
    componentWillMount(){
        this.loadData();
    }
    
    showModal = () => {
        this.setState({
            isFormVisible:true
        });
    }
  
  render() {
      const columns =[
          { title: 'PROVINCE_ID', dataIndex: 'PROVINCE_ID', key:'PROVINCE_ID'},
          { title: 'PROVINCE_CODE', dataIndex: 'PROVINCE_CODE', key:'PROVINCE_CODE'},
          { title: 'PROVINCE_NAME', dataIndex: 'PROVINCE_NAME',key:'PROVINCE_NAME', render: text => <a href="{text}">{text}</a>,}
          ];
          
    return (
      <div>
        <h1>Location</h1>
        
        <Button type="primary" onClick={this.showModal}>Create Location</Button>
        <Modal title="Title"
          visible={this.state.isFormVisible}
          onOk={this.handleOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
        >
            <LocationForm />
        </Modal>
        
        
        
         
        <button onClick = {() => this.loadData()}>Load Data1</button>
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
