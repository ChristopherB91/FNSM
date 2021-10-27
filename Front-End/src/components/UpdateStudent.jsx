import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class UpdateStudent extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 name:'',
                 problem:'',
                 location:''
             }
     
        this.idHandler = this.idHandler.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
        this.problemHandler = this.problemHandler.bind(this);
        this.locationHandler = this.locationHandler.bind(this);
        this.updateStudent = this.updateStudent.bind(this);

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
     
    idHandler=(event) => {
        this.setState({
             id: event.target.value});
    }

    nameHandler=(event) => {
        this.setState({
           name: event.target.value});
    }

   problemHandler=(event) => {
        this.setState({
             problem: event.target.value});
    }

    locationHandler=(event) => {
        this.setState({
             location: event.target.value});
    }

   updateStudent = (e) => {
        e.preventDefault();
        let student={
           id: this.state.id,
           name: this.state.name,
           problem: this.state.problem,
           location: this.state.location,
        };
        
        StudentService.updateStudent(student,this.state.id).then((res) => {
                this.props.history.push('/reports');
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
                          <h3 className="text-center">Update Student</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>ID: </label>
                                      <input placeholder="ID" readOnly={true} name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Name: </label>
                                      <input placeholder="Name" name="name" className="form-control"
                                         value={this.state.name} onChange={this.nameHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Problem: </label>
                                      <input placeholder="Problem" name="grade" className="form-control"
                                         value={this.state.problem} onChange={this.problemHandler} />
                                   </div>
                                   <div className="form-group">
                                      <label>Location: </label>
                                      <input placeholder="location" name="grade" className="form-control"
                                         value={this.state.location} onChange={this.locationHandler} />
                                   </div>   
                                    <button className="btn btn-success" onClick={this.updateStudent}> Update </button>
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

export default UpdateStudent;