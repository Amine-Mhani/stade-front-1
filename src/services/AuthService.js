import axios from "axios";
import { useNavigate } from 'react-router-dom';

const API_URL = "http://localhost:8083/api/auth/";
class AuthService{
   
    async login(email, password){
        const response = await axios({
            url: API_URL + "signin",
            method: "POST",
            data: {
                "email": email,
                "password": password,
            }
        });
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      };
      register(nom,prenom, email, password){
        return axios({url:API_URL + "signup",
        method:"POST",
        data: {
            "nom":nom,
            "prenom":prenom,
            "email":email,
            "password":password,
            "role":["medcin"]
        }});
      };
      logout() {
        localStorage.removeItem("user");
        window.location.replace('/')
     
      };
      getCurrentUser(){
        return JSON.parse(localStorage.getItem("user"));
      };

}
export default new AuthService();