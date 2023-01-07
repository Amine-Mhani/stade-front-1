import React from 'react'
import { Link, useParams } from 'react-router-dom'
import PatientService from '../../services/PatientService'



function Profile() {

  const {id} = useParams()

  const [patient, setPatient] = React.useState({})
  const [maladies, setMaladies] = React.useState([{nom: "", code: "", id: ""}])
  const [detections, setDetection] = React.useState([{code: "", date: "", stade: "", description: ""}])


  const getPatient = () =>{
    return PatientService.getPatientById(id)
  }

  React.useEffect(()=>{
    getPatient().then((res)=>{
      setPatient(res.data)
      setMaladies(res.data.maladies)
      setDetection(res.data.detections)

      console.log(patient)
      console.log(maladies)
    })
  }, [])

  return (
    <>
    					<div className="mb-3">
						<h1 className="h3 d-inline align-middle">Profile</h1>
					</div>
					<div className="row">
						<div className="col-md-4 col-xl-3">
							<div className="card mb-3">
								<div className="card-header">
									<h5 className="card-title mb-0">Patient Details</h5>
								</div>
								<div className="card-body text-center">
									<img src={patient.photo} alt="Christina Mason" className="img-fluid rounded-circle mb-2" width="128" height="128" />
									<h5 className="card-title mb-0">{patient.nom+" "+patient.prenom}</h5>
									<div className="text-muted mb-2">{patient.genre}</div>

									<div>
                  <div className="row">
                  <div className="col-6"><h6 className="card-text border-end">{patient.taille+" cm"}</h6></div>
                  <div className="col-6"><h6 className="card-text">{patient.poids+" Kg"}</h6></div>
                  </div>

									</div>
								</div>
								<hr className="my-0" />
								{/*<div className="card-body">
									<h5 className="h6 card-title">Skills</h5>
									<a href="#" className="badge bg-primary me-1 my-1">HTML</a>
									<a href="#" className="badge bg-primary me-1 my-1">JavaScript</a>
									<a href="#" className="badge bg-primary me-1 my-1">Sass</a>
									<a href="#" className="badge bg-primary me-1 my-1">Angular</a>
									<a href="#" className="badge bg-primary me-1 my-1">Vue</a>
									<a href="#" className="badge bg-primary me-1 my-1">React</a>
									<a href="#" className="badge bg-primary me-1 my-1">Redux</a>
									<a href="#" className="badge bg-primary me-1 my-1">UI</a>
									<a href="#" className="badge bg-primary me-1 my-1">UX</a>
								</div>
								<hr className="my-0" />
								<div className="card-body">
									<h5 className="h6 card-title">About</h5>
									<ul className="list-unstyled mb-0">
										<li className="mb-1"><span data-feather="home" className="feather-sm me-1"></span> Lives in <a href="#">San Francisco, SA</a></li>

										<li className="mb-1"><span data-feather="briefcase" className="feather-sm me-1"></span> Works at <a href="#">GitHub</a></li>
										<li className="mb-1"><span data-feather="map-pin" className="feather-sm me-1"></span> From <a href="#">Boston</a></li>
									</ul>
								</div>
								<hr className="my-0" />
								<div className="card-body">
									<h5 className="h6 card-title">Elsewhere</h5>
									<ul className="list-unstyled mb-0">
										<li className="mb-1"><a href="#">staciehall.co</a></li>
										<li className="mb-1"><a href="#">Twitter</a></li>
										<li className="mb-1"><a href="#">Facebook</a></li>
										<li className="mb-1"><a href="#">Instagram</a></li>
										<li className="mb-1"><a href="#">LinkedIn</a></li>
									</ul>
								</div>*/}
							</div>
						</div>

						<div className="col-md-8 col-xl-9">
							<div className="card">
								<div className="card-header">

									<h5 className="card-title mb-0">Maladies</h5>
								</div>
								<div className="card-body h-100">
              {maladies.map((maladie, index) => (
                <>
									<div className="d-flex align-items-start">
										<div className="flex-grow-1">
											{/*<small className="float-end text-navy">{maladie.nom}</small>*/}
                      <div className="dropdown float-end">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href={'/patients/detections/'+patient.id} 
                              data-bs-target="#editModal"
                                ><i className="bx bx-edit-alt me-1"></i> Detections</a>
                            </div>
                          </div>
											<strong>{maladie.nom}</strong>  <br />
											<small className="text-muted">{maladie.code}</small><br />

										</div>
									</div>

									<hr />
                  </>		
			  ))}
								</div>
							</div>
						</div>
					</div>
    </>
  )
}

export default Profile