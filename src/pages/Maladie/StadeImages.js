import React from 'react'
import PatientService from '../../services/PatientService'
import StadeService from '../../services/StadeService'
import { useParams } from 'react-router-dom'


function StadeImages() {

    const {id} = useParams()

  const [stade, setStade] = React.useState({})


 

  

  const getStade = async() =>{
    return StadeService.getStadeById(id)
  }

  React.useEffect(()=>{
    getStade().then((res)=>{
      setStade(res.data)


      console.log(stade)

      //console.log(maladies)
    })
  }, [])

  return (
    <>

<h1 className="h3 mb-3"><strong>Images</strong></h1>
       <div className="row w-100">
                <div className="col-xl-12 col-xxl-12 d-flex">
                    <div className="w-100">
                        <div className="row w-100">
                          
                        {
                          stade.images?.map((image) => (
                            <div className="card col-5 me-2">
                           
                                <div className="card-body">
                                    <div className="row">
                                    
                                    
                                    <div className="col mt-0">
                                                <h5 className="card-title">{image.code}</h5>
                                            </div>   
                                    </div>

                                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                      <div class="carousel-inner row">
                             
                                        <div class="carousel-item active">
                                          <img class="d-block w-100" src={image.photo} alt="First slide"/>
                                        </div>
                          
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
  )
}

export default StadeImages