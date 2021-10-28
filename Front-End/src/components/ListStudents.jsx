import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class ListStudents extends Component {
      constructor(props)
      {
          super(props)
          this.state={
                report:[] 
          }
          this.addStudent=this.addStudent.bind(this);
          this.editStudent=this.editStudent.bind(this);
          this.deleteStudent=this.deleteStudent.bind(this);
          this.viewStudent=this.viewStudent.bind(this);
          this.generalReport=this.generalReport.bind(this);
      }
    
     componentDidMount() {
         StudentService.getStudents().then((res) => {
             this.setState({report:res.data});
         });
     }
     
     addStudent()
     {
        
        this.props.history.push('/add-report');
     }

     editStudent(id)
     {
        this.props.history.push(`/update-report/${id}`);
        
     }

     deleteStudent(id)
     {
        this.props.history.push(`/delete-report/${id}`);
       
        
     }

     viewStudent(id)
     {
        this.props.history.push(`/view-report/${id}`);
  
     }

     generalReport()
     {
         this.props.history.push('/general-reports');
     }
     
    render() {
        return (
            <div>
                <h2 className="text-center">FNSM</h2>
                <div> 
                    <button className="btn btn-primary" onClick={this.addStudent}> Add Report</button>
                    <button className="btn" onClick={this.generalReport}>General Reports</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Problem</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.report.map(
                                     report =>
                                     <tr key={report.id}>
                                         <td>{report.id}</td>
                                         <td>{report.name}</td>
                                         <td>{report.problem}</td>
                                         <td>{report.location}</td>
                                         <td>
                                            <button onClick={() =>this.editStudent(report.id)} className="btn btn-primary">Update</button> 
                                            <button onClick={() =>this.deleteStudent(report.id)} className="btn btn-danger">Delete</button> 
                                            <button onClick={() =>this.viewStudent(report.id)} className="btn btn-primary">View</button> 
                                         </td>
                                     </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListStudents;