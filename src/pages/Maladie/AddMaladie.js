import React from 'react'
import MaladieServices from '../../services/MaladieServices';
import Swal from 'sweetalert2'

function AddMaladie() {


    const [nom, setNom] = React.useState("")




    

    const makeid = (length) => {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const addMaladie = (e) =>{
        e.preventDefault()
        const maladie = {nom: nom, code: makeid(20)}
        MaladieServices.addMaladie(maladie)
        console.log(maladie)

        setNom("")

        popUp()

        document.getElementById('cancel').click()
    }

    const popUp= ()=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Maladie has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    }

  return (
    <>

    <h1 className="h3 mb-3"><strong>Pages/</strong> Add Disease</h1>

        <div className="card">
            <div className="card-header">
                <h5 className="card-title mb-0">Disease form</h5>
            </div>
        <div className="card-body">
    							

        <form>


        <div className="form-group mb-3">
            <label className="form-label" for="inputAddress">Nom</label>
            <input type="text" className="form-control" name='nom' id="nom" placeholder="Disease Name" value={nom} onChange={(e)=>setNom(e.target.value)}/>
        </div>
        <div className='mt-4'>
            <div className='col-2 float-end'>
            <button type="submit" className="btn btn-primary me-2" onClick={(e)=>addMaladie(e)}>Add</button>
            <button type="reset" className="btn btn-secondary" id='cancel'>Cancel</button>
            </div>
        </div>
        </form>
        </div>
							</div>

    </>
  )
}

export default AddMaladie