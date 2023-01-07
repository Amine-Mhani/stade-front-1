import * as React from 'react';
import StadeService from '../services/StadeService';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Stades(props) {
    const {id} = useParams();
    const [stades, setStades] = React.useState([]);
    const [filterList, setFilterList] = React.useState([]);
    const [stadesList, setStadesList] = React.useState([]);
    React.useEffect(()=>{
        Swal.fire({
            title: 'please complete your profile',
            text: "go to your profile and update your information like gender, photo, address...",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Go to profile!'
          }).then((result) => {
            if (result.isConfirmed) {
              
            }
          })
        StadeService.getStadesByMaladie(id)
        .then((res) => {
            setStades(res.data)
            setStadesList(res.data)
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
            stadesList.forEach(element => {
                if(element.level.toLowerCase().match(f.value.toLowerCase()) ){
                  filterList.push(element)
            }})
            setStades(filterList)
            setFilterList([])
          }
        else{
            console.log(f.value);
            setStades(stadesList)
                }
        
        }
    return(
       <>
        <input id="filter" type="text" class="form-control" placeholder="Search ..." style={{width:"30%",float:"right"}} onChange={(e)=>{filter()}}/>

       <h1 class="h3 mb-3"><strong>Patients / Maladie / Stades</strong></h1>
       <div class="row">
                <div class="col-xl-12 col-xxl-5 d-flex">
                    <div class="w-100">
                        <div class="row">
                        {stades.map((stade) => (
                            <div class="col-sm-3">
                            <div class="card">
                           
                                <div class="card-body">
                                    <div class="row">
                                    
                                    
                                    <div class="col mt-0">
                                                <h5 class="card-title">{stade.code}</h5>
                                            </div>   
                                    </div>
                                    
                                    <h1 class="mt-1 mb-3">{stade.level}</h1>
                                    <p className='text-muted'> {stade.description}</p>
                                    <Link to = {`stade/${stade.id}`} > <button class='btn btn-primary' style={{width:"30%"}}  >images</button></Link> 
                                    
                                    
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