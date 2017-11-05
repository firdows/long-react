import React, { Component } from 'react';
import axios from 'axios';
import {Table,Pagination, Modal, Button, Spin } from 'antd';
import LocationForm from './LocationForm';

class Location extends Component {
    
    state = {
        dataSource:{},
        isFormVisible:false,
        isViewVisible:false,
        confirmLoading:false,
        dataView:{},
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
    console.log('Clicked Ok');
    this.refs.locationForm.handleSubmit(new Event('submit'));
    // setTimeout(() => {
    //   this.setState({
    //     isFormVisible: false,
    //     confirmLoading: false,
    //   });
    // }, 2000);
  }
  
  locationFormSubmit = () => {
      this.setState({
          confirmLoading:false,
          isFormVisible: false,
      })
      
  }
  
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      isFormVisible: false,
      isViewVisible: false,
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
    
    updateData = (id) =>{
        const url = `https://yii2-react-firdows.c9users.io/location/${id}`;
        axios.get(url).then(res=>{
            //console.log(res);
            if(res.status === 200){
                console.log(res);
                this.setState({
                    dataView:res.data,
                    isViewVisible:true
                })
                
            }else{
                alert(`Can not load ${url}`);
            }
        });
        
        
        this.setState({
            isFormVisible:true
        });
    }
    
    viewData = (id) =>{
        const url = `https://yii2-react-firdows.c9users.io/location/${id}`;
        axios.get(url).then(res=>{
            //console.log(res);
            if(res.status === 200){
                console.log(res);
                this.setState({
                    dataView:res.data,
                    isViewVisible:true
                })
                
            }else{
                alert(`Can not load ${url}`);
            }
        });
    }
  
  render() {
      const columns =[
          { title: 'PROVINCE_ID', dataIndex: 'PROVINCE_ID', key:'PROVINCE_ID'},
          { title: 'PROVINCE_CODE', dataIndex: 'PROVINCE_CODE', key:'PROVINCE_CODE'},
          { title: 'PROVINCE_NAME', dataIndex: 'PROVINCE_NAME',key:'PROVINCE_NAME', render: text => <a href="{text}">{text}</a>,},
          { title: 'PROVINCE_NAME_ENG', dataIndex: 'PROVINCE_NAME_ENG',key:'PROVINCE_NAME_ENG'},
          { render: (text,record)=>(
              <a onClick = {() => this.viewData(record.PROVINCE_ID)}>
              ดู
              </a>
          ),},
          { render: (text,record)=>(
              <a onClick = {() => this.updateData(record.PROVINCE_ID)}>
              แก้ไข
              </a>
          ),}
          ];
          
    return (
      <div>
        <h1>Location</h1>
        
        <Button type="primary" onClick={this.showModal}>Create Location</Button>
        
         <Modal title="View data"
          visible={this.state.isViewVisible}
          onOk={this.updateData(this.state.dataView.PROVINCE_ID)}
          okText = "ปรับปรุง"
          cancelText = "ยกเลิก"
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
        >
            <label>NAME</label> : {this.state.dataView.PROVINCE_NAME}<br/>
        </Modal>
        
        
        
        <Modal title="Title"
          visible={this.state.isFormVisible}
          onOk={this.handleOk}
          okText = "ตกลง"
          cancelText = "ยกเลิก"
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
        >
            <Spin spinning={this.state.confirmLoading}>
                <LocationForm 
                    ref="locationForm"
                    handleSubmit = {this.locationFormSubmit}
                    />
            </Spin>
        
        </Modal>
        
        
         
        <button onClick = {() => this.loadData()}>Load Data1</button>
        <Table 
            columns={columns} 
            dataSource={this.state.dataSource.data} 
            pagination={false}
        />
        <br/>
        <Pagination 
        defaultCurrent={1} 
        total={this.state.dataSource.totalCount} 
        onChange={this.onChangePage}/>
        
        
      </div>
    );
  }
}

export default Location;
