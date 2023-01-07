import * as React from 'react';
import ImageService from '../services/ImageService';
import { useParams } from "react-router-dom";
// Required component 
import Lightbox from "react-awesome-lightbox";
// Required stylesheet
import Swal from 'sweetalert2';

import "react-awesome-lightbox/build/style.css";
export default function Image(props) {
    const {id} = useParams();
    const [images, setImages] = React.useState([]);
    const [imageId, setImageId] = React.useState(-1);
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
        ImageService.getImagesByStadeId(id)
        .then((res) => {
            
            setImages(res.data)
            console.log(res.data)
          })
          // Catch errors if any
          .catch((err) => { 
           
          });
    },[])
    return(
       <>
       <h1 class="h3 mb-3"><strong>Patients / Maladie / Stades / Images</strong></h1>
       <div class="row">
                <div class="col-xl-12 col-xxl-5 d-flex">
                    <div class="w-100">
                        <div class="row">
                        {images.map((image) => (
                            <div class="col-sm-3">
                            <div class="card">
                           
                                <div class="card-body">
                                    <div class="row">
                                    <div class="col mt-0">
                                                <h5 class="card-title">{image.code}</h5>
                                            </div>  
                                            <img src={image.photo} onClick={(e)=>{setImageId(image.id)}}/> 
                                           {imageId == -1? <></>:
                                           imageId == image.id ? <Lightbox image={image.photo} title={image.code} onClose={(e)=>{setImageId(-1)}}/>:<></>
                                            }
                                            
                                    </div>
                                   
                                    
                                    
                                    
                                    
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