import React from 'react'

import PatientService from '../../services/PatientService'


function Patients() {

    const[patients, setPatients] = React.useState([])

    const getPatients = async() => {
        return PatientService.getAllPatients()
    }

    React.useEffect(()=>{

        getPatients().then((res) => {
            setPatients(res.data)
            console.log(patients)

          })

    }, [])

  return (
    <>
    
    
        <div className="row mb-4">
            <div className="col-11">
                <h1 className="h3 mb-3"><strong>Pages/</strong> Patients</h1>
            </div>
            <div className="col-1">
                <a href='/patients/add' className="btn btn-primary float-end">Add</a>
            </div>
        </div>

        <div className="card flex-fill">
            <div className="card-header">

                <h5 className="card-title mb-0">Patients Table</h5>

            </div>
            <table className="table table-hover my-0">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>First Name</th>
                        <th className="d-none d-xl-table-cell">Last Name</th>
                        <th className="d-none d-xl-table-cell">Gender</th>
                        <th>Birthdate</th>
                        <th className="d-none d-md-table-cell">Height</th>
                        <th className="d-none d-md-table-cell">Weight</th>
                        <th className="d-none d-md-table-cell">Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {patients.map((patient, index) =>(
                    <tr>
                        <td><img src={patient.photo} alt="Christina Mason" className="img-fluid rounded mb-2" width="64" /></td>
                        <td>{patient.nom}</td>
                        <td className="d-none d-xl-table-cell">{patient.prenom}</td>
                        <td className="d-none d-xl-table-cell">{patient.genre}</td>
                        <td className="d-none d-xl-table-cell">{patient.dateNaissance}</td>
                        <td className="d-none d-md-table-cell">{patient.taille}</td>
                        <td className="d-none d-md-table-cell">{patient.poids}</td>
                        <td className="d-none d-md-table-cell">
                        <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" 
                              data-bs-target="#editModal" href={`patients/profile/${patient.id}`}
                                ><i className="bx bx-edit-alt me-1"></i> Profile</a>
                            </div>
                          </div>
                        </td>
                    </tr>
                    ))}                       
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Patients