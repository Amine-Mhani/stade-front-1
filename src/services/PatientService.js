import axios from 'axios';
import authHeader from './authHeader';


const API_URL = 'http://localhost:8083/patient/';


class PatientService{
    getAll(){
        return axios({url: API_URL+"all",
            method: "GET",
        headers: authHeader()})
    }
    getAllPatients(){
        return axios({url: API_URL+"all",
        method:"GET",
        headers: authHeader()})
    }

    getPatientById(id){
        return axios({url: API_URL+"get?id="+id,
        method:"POST",
        headers: authHeader()})
    }

    addPatient(patient){
        axios.post("http://localhost:8083/patient/add", patient, {
            headers: {
            "Content-type": 'multipart/form-date',
            headers: authHeader()
        },
        });
    }

}
export default new PatientService();