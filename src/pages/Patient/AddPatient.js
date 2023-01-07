import axios from 'axios'
import React from 'react'
import PatientService from '../../services/PatientService'
import Swal from 'sweetalert2'

function AddPatient() {

    const [fname, setFname] = React.useState("")
    const [lname, setLname] = React.useState("")
    const [phone, setPhone] = React.useState("")
    const [birth, setBirth] = React.useState("")
    const [gender, setGender] = React.useState("")
    const [address, setAdress] = React.useState("")
    const [height, setHeight] = React.useState("")
    const [weight, setWeight] = React.useState("")
    const [image, setImage] = React.useState()

    const formData = {fname : ""}

    const addPatient = async(patient) => {

    }

    const add = async(e) => {

        e.preventDefault()

        const formData = new FormData()
        const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoYW16YWV6emFoaUBnbWFpbC5jb20iLCJpYXQiOjE2NzMwNDg4MDQsImV4cCI6MTY3MzEzNTIwNH0.C3UwTQSQ6cvlLxMTOp4heH8zge8zZUqmu8511xtphb2bkJqqlT4FKWTmnVn8RGUpbHE8V_dro15IkWc8TbnNIw"


        formData.append('fname', fname)
        formData.append("lname", lname)
        formData.append("phone", phone)
        formData.append("birth", birth)
        formData.append("gender", gender)
        formData.append("address", address)
        formData.append("height", height)
        formData.append("weight", weight)
        formData.append("image", image)
        
        console.log(formData)
        PatientService.addPatient(formData)

        popUp()

        document.getElementById('cancel').click()
        
    }

    const popUp= ()=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Patient has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    }

  return (
    <>
    <h1 className="h3 mb-3"><strong>Pages/</strong> Add Patient</h1>

        <div className="card">
            <div className="card-header">
                <h5 className="card-title mb-0">Patient form</h5>
            </div>
        <div className="card-body">
    							

        <form>
        <div className="row mb-2">
            <div className="form-group col-md-6">
            <label className="form-label" for="inputEmail4">First Name</label>
            <input type="text" className="form-control"  placeholder="First name" onChange={(e)=>{setFname(e.target.value)}}/>
            </div>
            <div className="form-group col-md-6">
            <label className="form-label" for="inputPassword4">Last Name</label>
            <input type="text" className="form-control"  placeholder="Last name" onChange={(e)=>{setLname(e.target.value)}}/>
            </div>
        </div>
        <div className="row mb-2">
            <div className="form-group col-md-6">
            <label className="form-label" for="inputCity">Phone Number</label>
            <input type="text" className="form-control" id="inputCity" onChange={(e)=>{setPhone(e.target.value)}}/>
            </div>
            <div className="form-group col-md-4">
            <label className="form-label" for="inputState">Birthdate</label>
            <input type="date" className="form-control" id="inputZip" onChange={(e)=>{setBirth(e.target.value)}}/>
            </div>
            <div className="form-group col-md-2">
            <label className="form-label" for="inputZip">Gender</label>
            
            <select className="form-control" onChange={(e)=>{setGender(e.target.value)}}>
                <option selected>Choose...</option>
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
            </select>
            </div>
        </div>
        <div className="form-group mb-3">
            <label className="form-label" for="inputAddress">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={(e)=>{setAdress(e.target.value)}}/>
        </div>
        <div className="row mb-2">
            <div className="form-group col-md-3">
            <label className="form-label" for="inputCity">Height</label>
            <input type="text" className="form-control" id="inputCity" onChange={(e)=>{setHeight(e.target.value)}}/>
            </div>
            <div className="form-group col-md-3">
            <label className="form-label" for="inputCity">Weight</label>
            <input type="text" className="form-control" id="inputCity" onChange={(e)=>{setWeight(e.target.value)}}/>					
            </div>
            <div className="form-group col-md-6">
            <label className="form-label" for="inputZip">Picture</label>
            <input type="file" className="form-control" id="inputZip" onChange={(e)=>{setImage(e.target.files[0])}}/>
            </div>
        </div>
        <div className='mt-4'>
            <div className='col-2 float-end'>
            <button type="submit" className="btn btn-primary me-2" onClick={(e)=>add(e)}>Add</button>
            <button type="reset" className="btn btn-secondary" id='cancel'>Cancel</button>
            </div>
        </div>
        </form>
        </div>
							</div>

    </>
  )
}

export default AddPatient