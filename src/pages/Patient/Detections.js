import React from 'react'
import PatientService from '../../services/PatientService'
import { useParams } from 'react-router-dom'


function Detections() {

    const {id} = useParams()

  const [patient, setPatient] = React.useState({})
  const [maladies, setMaladies] = React.useState([{nom: "", code: "", id: ""}])
  const [detections, setDetection] = React.useState([{code: "", date: "", stade: "", description: "", stades: {images: {photo : ""}}}])

 

  

  const getPatient = async() =>{
    return PatientService.getPatientById(id)
  }

  React.useEffect(()=>{
    getPatient().then((res)=>{
      setPatient(res.data)
      setMaladies(res.data.maladies)
      setDetection(res.data.detections)

      console.log(patient)

      //console.log(maladies)
    })
  }, [])

  return (
    <>

<h1 className="h3 mb-3"><strong>Detections</strong></h1>
       <div className="row">
                <div className="col-xl-12 col-xxl-5 d-flex">
                    <div className="w-100">
                        <div className="row">
                          
                        {
                          detections.map((detection) => (
                            <div className="card">
                           
                                <div className="card-body">
                                    <div className="row">
                                    
                                    
                                    <div className="col mt-0">
                                                <h5 className="card-title">{detection.code}</h5>
                                            </div>   
                                    </div>

                                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                      <div class="carousel-inner row">
                                        {detection.stade.images?.map((image)=>(
                                        <div class="carousel-item active">
                                          <img class="d-block w-50" src={image.photo} alt="First slide"/>
                                        </div>
                                        ))}
                                      </div>
                                    </div>
                                    
                                    <h1 className="mt-1 mb-3">{detection.stade.level}</h1>
                                    <p className='text-muted'> {detection.description}</p>
                                    
                                </div>
                                
                            </div>
                            
                        
                        ) )}
                      
                            
                                
                        </div>
                    </div>
                </div>

                
            </div>
            
</>
  )
}

export default Detections