import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class AddStudent extends Component {
    constructor(props)
    {
        super(props)
        this.state={
           id: '',
           name:'',
           problem:'',
           location:''
        }
      
        this.idHandler = this.idHandler.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
        this.problemHandler = this.problemHandler.bind(this);
        this.locationHandler = this.locationHandler.bind(this);

    }//constructor

     
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

    saveStudent = (e) => {
        e.preventDefault();
        let student={
           id: this.state.id,
           name: this.state.name,
           problem: this.state.problem,
           location: this.state.location,
        };
        console.log(student);
        StudentService.createStudent(student).then(res =>{
                this.props.history.push('/reports');  
            }).catch(err=>{
                console.log("record not saved.");
            });
       
       
        
        
    }//closing save method

    cancel(){
        this.props.history.push('/reports');
    }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Add Student</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>ID: </label>
                                      <input placeholder="WILL BE GIVEN" name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} readOnly={true}/>
                                   </div>   
                                   <div className="form-group">
                                      <label>Name: </label>
                                      <input placeholder="Name" name="name" className="form-control"
                                         value={this.state.name} onChange={this.nameHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Problem: </label>
                                      <input placeholder="Problem" name="problem" className="form-control"
                                         value={this.state.problem} onChange={this.problemHandler} />
                                   </div>
                                <div className="form-group">
                                    <label>Location: </label>
                                    <input placeholder="Location" name="location" className="form-control"
                                       value={this.state.location} onChange={this.locationHandler} />
                                 </div>   
                                    <button className="btn btn-success" onClick={this.saveStudent}> Save </button>
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

export default AddStudent;