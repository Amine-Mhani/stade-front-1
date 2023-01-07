import * as React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import MaladieServices from '../services/MaladieServices';
import Stades from './Stade';
import Swal from 'sweetalert2';

export default function Maladie(props) {
    const {id} = useParams();
    const [maladies, setMaladies] = React.useState([]);
    const [filterList, setFilterList] = React.useState([]);
    const [maladiesList, setMaladiesList] = React.useState("");
    React.useEffect(()=>{
        Swal.fire({
            title: 'please complete your profile',
            text: "go to your profile and update your information like gender, photo, address...",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Go to profile'
          }).then((result) => {
            if (result.isConfirmed) {
            }
          })
        MaladieServices.getAllMaladies(id)
       
        .then((res) => {
            
            setMaladies(res.data)
            setMaladiesList(res.data)
            console.log(res.data)
          })
          // Catch errors if any
          .catch((err) => { 
           
          });
    },[])
    const filter = ()=>{
        setFilterList([])
        var f = document.getElementById("filter")
        if(f.value){
            console.log(f.value);
            maladiesList.forEach(element => {
                if(element.nom.toLowerCase().match(f.value.toLowerCase()) ){
                  filterList.push(element)
            }})
            setMaladies(filterList)
        setFilterList([])
          }
        else{
            console.log(f.value);
            setMaladies(maladiesList)
                }
        
        }
    return(
       <>
               <input id="filter" type="text" class="form-control" placeholder="Search ..." style={{width:"30%",float:"right"}} onChange={(e)=>{filter()}}/>

       <h1 class="h3 mb-3"><strong>Patients / Maladies</strong></h1>
       <div class="row">
                <div class="col-xl-12 col-xxl-5 d-flex">
                    <div class="w-100">
                        <div class="row">
                       
                            
                        {maladies.map((maladie) => (
                            <div class="col-sm-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                    <div class="col mt-0">
                                        <h5 class="card-title">{maladie.code}</h5>
                                    </div>
                                    </div>
                                    <h1 class="mt-1 mb-3">{maladie.nom}</h1>
                                    <Link to = {`maladie/${maladie.id}`} > <button class='btn btn-primary' style={{width:"30%"}}  >stades</button></Link> 

                                    
                                </div>
                                
                            </div>
                            
                        </div>
                        

                        ) )}
                        
                            
                            
                                
                        </div>
                    </div>
                </div>

                
            </div>

</>
    );
}