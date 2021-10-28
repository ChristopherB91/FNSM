import axios from 'axios';

const STUDENT_API_BASE_URL= "http://localhost:8080/api";
class StudentService{

    getStudents(){
       return axios.get(STUDENT_API_BASE_URL+"/allreports");
    }

    createStudent(person){
        return axios.post(STUDENT_API_BASE_URL+"/addreport",person);
    }

    getReportById(id){
        return axios.get(STUDENT_API_BASE_URL+"/report/"+id);
    }

    updateStudent(person,id){
        return axios.put(STUDENT_API_BASE_URL+"/report/"+id,person);
    }

    deleteStudent(id){
        return axios.delete(STUDENT_API_BASE_URL+"/report/"+id);
    }

}

export default new StudentService();