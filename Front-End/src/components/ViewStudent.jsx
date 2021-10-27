import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class ViewStudent extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 student:{}

             }
     
        
        
    }//constructor

     componentDidMount()
     {
        StudentService.getReportById(this.state.id).then((res) =>{
            this.setState({students:res.data})
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
                                    <input placeholder="id" readOnly={true} name="id" className="form-control" value={this.state.id} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Name: </label>
                                      <input placeholder="Name" readOnly={true} name="name" className="form-control" value={this.state.student.name}/>
                                   </div>   
                                   <div className="form-group">
                                      <label>Problem: </label>
                                      <input placeholder="Problem" readOnly={true} name="problem" className="form-control" value={this.state.problem}/>
                                   </div> 
                                   <div className="form-group">
                                      <label>Location: </label>
                                      <input placeholder="Location" readOnly={true} name="location" className="form-control" value={this.state.location}/>
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