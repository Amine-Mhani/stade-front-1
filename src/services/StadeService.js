import axios from 'axios';
import authHeader from './authHeader';


const API_URL = 'http://localhost:8083/stade/';


class StadeService{
    getStadesByMaladie(props){
        return axios({url: API_URL+props,
            method: "GET",
        headers: authHeader()})
    }
    addStade(stage){
        return axios.post({url: API_URL+"/add", 
        body: stage,
        method: "POST", 
        headers: authHeader()})
    }

    getStadeById(id){
        return axios({url: API_URL+"get?id="+id,
        method:"POST",
        headers: authHeader()})
    }
}
export default new StadeService();