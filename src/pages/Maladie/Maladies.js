import React from 'react'
import MaladieServices from '../../services/MaladieServices'

function Maladies() {

    const [maladies, setMaladies] = React.useState([])
    const [stades, setStades] = React.useState([])

    const getMaladies = async() =>{
        return MaladieServices.getAllMaladies()
    }

    React.useEffect(()=>{
        getMaladies().then((res)=>{
            setMaladies(res.data)
            console.log(res.data)
        })
    }, [])

  return (
    <>
    
    <div className="row mb-4">
        <div className="col-11">
            <h1 class="h3 mb-3"><strong>Pages/</strong> Maladies</h1>
        </div>
        <div className="col-1">
            <a href='/maladies/add' className="btn btn-primary float-end">Add</a>
        </div>
    </div>

    <div className="card flex-fill">
            <div className="card-header">

                <h5 className="card-title mb-0">Maladies Table</h5>
            </div>
            <table className="table table-hover my-0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className="d-none d-xl-table-cell">Code</th>
                        <th className="d-none d-md-table-cell">Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {maladies.map((maladie, index) =>(
                    <tr>
                        <td>{maladie.nom}</td>
                        <td className="d-none d-xl-table-cell">{maladie.code}</td>
                        <td className="d-none d-md-table-cell">
                        <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" 
                               href={`maladies/add-stade/${maladie.id}`}
                                ><i className="bx bx-edit-alt me-1"></i> Add stade</a>

                                <button className="dropdown-item" data-bs-toggle="modal"
                              data-bs-target="#deleteModal" onClick={(e)=>{setStades(maladie.stades)}} 
                                ><i className="bx bx-trash me-1"></i> Stade</button>
                            </div>
                          </div>
                        </td>
                    </tr>
                    ))}                       
                </tbody>
            </table>
            
        </div>

        {/*<div className="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
        <div className="card flex-fill">
        <table className="table table-hover my-0">
<thead>
    <tr>
        <th>Name</th>
        <th className="d-none d-xl-table-cell">Code</th>
        <th className="d-none d-md-table-cell">Action</th>
    </tr>
</thead>
<tbody>
      {stades.map((stade, index) =>(
                    <tr>
                        <td>{stade.nom}</td>
                        <td className="d-none d-xl-table-cell">{stade.code}</td>
                        <td className="d-none d-md-table-cell">
                        <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <button className="dropdown-item" 
                              data-bs-target="#editModal" 
                                ><i className="bx bx-edit-alt me-1"></i> Edit</button>
                              <button className="dropdown-item" 
                                ><i className="bx bx-trash me-1"></i> Delete</button>
                            </div>
                          </div>
                        </td>
                    </tr>
                    ))}                  
                      
</tbody>
</table>
                        </div>
      </div>*/}
                             <div className="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
                          <div className="modal-dialog" role="document">
                          <div className="card flex-fill">
                          <div className="card-header">
                          <div className="row">
                          <div className="col-11">
<h5 className="card-title mb-0">Stades</h5>
</div>
<div className="col-1">
<button type="button" className="btn btn-primary" data-bs-dismiss="modal">
hide
                                                        </button>
                                                        </div>
                                                        </div>
</div>
                            <table className="table table-hover my-0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th className="d-none d-xl-table-cell">Code</th>
                                    <th className="d-none d-md-table-cell">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                  {stades.map((stade, index) =>(
                                                <tr>
                                                    <td>{stade.level}</td>
                                                    <td className="d-none d-xl-table-cell">{stade.code}</td>
                                                    <td className="d-none d-md-table-cell">
                                                    <div className="dropdown">
                                                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                          <i className="bx bx-dots-vertical-rounded"></i>
                                                        </button>
                                                        <div className="dropdown-menu">
                                                          <a className="dropdown-item" 
                                                          href={`maladies/stade/${stade.id}`}
                                                            ><i className="bx bx-edit-alt me-1"></i> Images</a>
                                                        </div>
                                                      </div>
                                                    </td>
                                                </tr>
                                                ))}                  
                                                  
                            </tbody>
                            </table>
                          </div>
                        </div>
                        </div>



        </>

  )
}

export default Maladies

