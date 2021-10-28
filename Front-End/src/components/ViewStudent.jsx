import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class ViewStudent extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 report:[]

             }
     
        
        
    }//constructor

     componentDidMount()
     {
        StudentService.getReportById(this.state.id).then((res) =>{
            this.setState({report:res.data})
            console.log(res)
         });
     }
     
     cancel(){
        this.props.history.push('/reports');
    }
    
    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">View Report Details</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                    <label>ID: </label>
                                    <input placeholder={this.state.id} readOnly={true} name="id" className="form-control" />
                                   </div>   
                                   <div className="form-group">
                                      <label>Name: </label>
                                      <input placeholder={this.state.report.name} readOnly={true} name="name" className="form-control" />
                                   </div>   
                                   <div className="form-group">
                                      <label>Problem: </label>
                                      <input placeholder={this.state.report.problem} readOnly={true} name="problem" className="form-control" />
                                   </div> 
                                   <div className="form-group">
                                      <label>Location: </label>
                                      <input placeholder={this.state.report.location} readOnly={true} name="location" className="form-control" />
                                   </div>
                                      <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Back </button>                            
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}


export default ViewStudent;