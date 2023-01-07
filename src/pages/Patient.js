import * as React from 'react';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import "react-awesome-lightbox/build/style.css";
import PatientService from '../services/PatientService';
import { Icon } from '@iconify/react';
import Popup from 'reactjs-popup';
import Swal from 'sweetalert2';
import 'reactjs-popup/dist/index.css';

export default function Patient() {
    const [patients, setPatients] = React.useState([]);
    const [filterList, setFilterList] = React.useState([]);
    const [patientsList, setPatientsList] = React.useState("");
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
        PatientService.getAll()
        .then((res) => {
            setPatients(res.data)
             setPatientsList(res.data)
            console.log(res.data)
          })
          // Catch errors if any
          .catch((err) => { 
           
          });
          <Popup trigger={<button> Trigger</button>} position="right center">
                <div>Popup content here !!</div>
            </Popup>
    }
   ,[])
    const filter = ()=>{
        setFilterList([])
        var f = document.getElementById("filter")
        if(f.value){
            console.log(f.value);
            patientsList.forEach(element => {
                if(element.nom.toLowerCase().match(f.value.toLowerCase()) ||  element.prenom.toLowerCase().match(f.value.toLowerCase())){
                  filterList.push(element)
            }})
            setPatients(filterList)
        setFilterList([])
          }
        else{
            console.log(f.value);
            setPatients(patientsList)
                }
        
        }
        const popup = ()=>{
            
        }
    
    return(
        <>
        
        


        <input id="filter" type="text" class="form-control" placeholder="Search ..." style={{width:"30%",float:"right"}} onChange={(e)=>{filter()}}/>
        <h1 class="h3 mb-3"><strong>Patients</strong></h1>
        <div class="row">
                 <div class="col-xl-12 col-xxl-5 d-flex">
                     <div class="w-100">
                         <div class="row">
                         {patients.map((patient) => (
                             <div class="col-sm-3">
                             <div class="card">
                                 <div class="card-body">
                                     <div class="row">
                                      <div class="col mt-0">
                                                 <h5 class="card-title">{patient.code}</h5>
                                             </div>  
                                    
                                     </div>
                                     <div class="row">
                                     <div class="col mt-0">
                                     <h1 class="mt-1 mb-3">{patient.prenom +" "+ patient.nom}</h1>
                                             </div>  
                                    <div class="col-auto">
                                            <div class="align-middle">
                                            <Avatar src={patient.photo} name={patient.prenom +" "+ patient.nom} size="80" round={true} />
                                            </div>
                                        </div> 
                                     </div>
                                     <br/>
                                     <div class="row">
                                        <div class="col mt-0">
                                        <Icon icon="mdi:gender-male"   width="16" height="16" hFlip={true} /> 
                                        <Icon icon="mdi:gender-female" width="16" height="16" hFlip={true} />                                       </div>
                                        <div  class="col mt-0">
                                            <h5 class="card-title">{patient.genre}</h5>
                                        </div>
                                    </div><div class="row">
                                        <div class="col mt-0">
                                            <Icon icon="material-symbols:phone-enabled"  width="16" height="16" hFlip={true} /> telephone:
                                        </div>
                                        <div  class="col mt-0">
                                            <h5 class="card-title">{patient.telephone}</h5>
                                        </div>
                                    </div>
                                     
                                    
                                     
                                     <div class="row">
                                        <div class="col mt-0">
                                            <Icon icon="game-icons:weight"  style={{ fontSize: '16px' }} />  poids:
                                        </div>
                                        <div  class="col mt-0">
                                            <h5 class="card-title">{patient.poids} kg</h5>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col mt-0">
                                            <Icon icon="mdi:human-male-height-variant"  width="16" height="16" /> taille:
                                        </div>
                                        <div  class="col mt-0">
                                            <h5 class="card-title">{patient.taille} m</h5>
                                        </div>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col mt-0">
                                            <Icon icon="fa-solid:birthday-cake"  width="16" height="16" hFlip={true} />  date de naissance:
                                        </div>
                                        <div  class="col mt-0">
                                            <h5 class="card-title">{(patient.dateNaissance).slice(0, 10)}</h5>
                                        </div>
                                    </div>    
                                    <div class="row">
                                        <div class="col mt-0">
                                            <Icon icon="mdi:address-marker"  width="16" height="16" /> adresse:
                                            
                                        </div >
                                        <div  class="col mt-0">
                                            <h5 class="card-title" style={{textOverflow:"ellipsis"}}>{patient.adresse}</h5>
                                        </div>
                                        
                                    </div>                              
                                     <p className='text-muted'> {patient.description}</p>
                                     <Link to = {`${patient.id}`} > <button class='btn btn-primary'  >Maladies</button></Link> 
                                     
                                     
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