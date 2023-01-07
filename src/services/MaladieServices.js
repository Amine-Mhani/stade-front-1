import axios from 'axios';
import authHeader from './authHeader';


const API_URL = 'http://localhost:8083/maladie/';

class MaladieServices{
    getAllMaladies(props){
        return axios({url: API_URL+props,
            method: "GET",
            headers:authHeader()})
    }
    getAllMaladies(){
        return axios({url: API_URL+"all",
        method:"GET",
        headers: authHeader()})
    }

    getMaladie(id){
        return axios({url: API_URL+"get?id="+id,
        method:"POST",
        headers: authHeader()})
    }

    addMaladie(maladie){
        axios({url: API_URL+"add", 
        data: maladie,
        method: "POST", 
        headers: authHeader()})
    }
}
export default new MaladieServices();