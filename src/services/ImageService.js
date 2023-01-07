import axios from 'axios';
import authHeader from './authHeader';


const API_URL = 'http://localhost:8083/image/';

class ImageService{
    getImagesByStadeId(props){
        return axios({url: API_URL+props,
            method: "GET",
            headers: authHeader()})
    }
}
export default new ImageService();