import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class DeleteStudent extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 name:'',
                 problem:'',
                 location:'',
             }
     
        
        this.deleteStudent = this.deleteStudent.bind(this);

    }//constructor

     componentDidMount()
     {
        StudentService.getReportById(this.state.id).then((res) =>{
          let student = res.data;
          this.setState({name:student.name,
                  problem:student.problem,
                  location:student.location
                });
        });
           
     }
     
    

    
  deleteStudent = (e) => {
        e.preventDefault();
        let student={
           id: this.state.id,
           name: this.state.name,
           problem: this.state.problem,
           location: this.state.location
        };

        console.log(student);
        StudentService.deleteStudent(this.state.id).then(res => {
            
            this.props.history.push('/reports');
        })
      
        
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
                          <h3 className="text-center">Do you want to delete?</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>ID: </label>
                                      <input placeholder={this.state.id} readOnly="true" name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Name: </label>
                                      <input placeholder={this.state.name} readOnly= "true" name="name" className="form-control"
                                         value={this.state.name} onChange={this.nameHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Problem: </label>
                                      <input placeholder={this.state.problem} readOnly="true" name="grade" className="form-control"
                                         value={this.state.problem} onChange={this.problemHandler} />
                                   </div>
                                   <div className="form-group">
                                      <label>Location: </label>
                                      <input placeholder={this.state.location} readOnly="true" name="grade" className="form-control"
                                         value={this.state.location} onChange={this.locationHandler} />
                                   </div>   
                                    <button className="btn btn-success" onClick={this.deleteStudent}> Delete </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>                    
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default DeleteStudent;