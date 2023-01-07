import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import StadeServices from '../../services/StadeService'
import MaladieServices from '../../services/MaladieServices'
import Swal from 'sweetalert2'


function AddStade() {
    const {id} = useParams()
    

    const[maladie, setMaladie] = React.useState({nom: "", code: ""})

    var buffer

    const [level, setLevel] = React.useState("")
    const [description, setDescription] = React.useState("")

    const images = []

 

    const getMalad = async() =>{
        return MaladieServices.getMaladie(id)
    }

    const popUp= ()=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Stage has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    }

    React.useEffect(()=>{
        getMalad().then((res)=>{
            setMaladie(res.data)
            console.log(res.data)
            
        })
    }, [])

    const upload = async (e) => {
        
        // Convert the FileList into an array and iterate
        let files = Array.from(e.target.files).map(file => {
            
            // Define a new file reader
            let reader = new FileReader();
            
            // Create a new promise
            return new Promise(resolve => {
                
                // Resolve the promise after reading file
                reader.onload = () => resolve(reader.result);
                
                // Reade the file as a text
                reader.readAsText(file);
                
            });
            
        });
        
        // At this point you'll have an array of results
        let res = await Promise.all(files);
        res.map(async(image)=>{
            console.log('here')
            const data = new FormData()
            data.append('file', image)
            data.append('upload_preset', 'web_upload')
            console.log('here2')
            const res = await fetch("https://api.cloudinary.com/v1_1/dvwugomay/image/upload/",
            {
                method: "POST",
                body: data
            })
            console.log('here3')
            const file = await res.json()
            console.log(file)

        })
        //console.log(res)
        
    }

    const makeid = (length) => {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }


    const fill = async(e) => {
        images.length = 0
        Array.from(e.target.files).map(async(file) => {

            /*const data = new FormData()
            data.append('file', file)
            data.append('upload_preset', 'web_upload')

            const res = await fetch("https://api.cloudinary.com/v1_1/dvwugomay/image/upload/",
            {
                method: "POST",
                body: data
            })
  
            const back = await res.json()

            console.log(back)*/
            images.push(file)
        })
        console.log(images)

    }

    const handleCreation = (e) => {
        e.preventDefault()
        const stage = {level: level, description: description, code: makeid(20), maladie: maladie}
        const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoYW16YWV6emFoaUBnbWFpbC5jb20iLCJpYXQiOjE2NzMwNDgzMzksImV4cCI6MTY3MzEzNDczOX0.h5PiXCzt194nBpna1pZfh3mFZPh0-dhySHTkRTOzBaKfJvt1oGk1liAsut-32cRbQ6CXSe9AQRcmmpeVdDksvQ"


       axios({url: "http://localhost:8083/stades/add", 
        data: stage,
        method: "POST", 
        headers: {"Authorization" : `Bearer ${token}`}}).then((res)=>{
            buffer = res.data

 
            console.log(buffer)
          }, [])

        images.map(async(image)=>{
            const data = new FormData()
            data.append('file', image)
            data.append('upload_preset', 'web_upload')

            const res = await fetch("https://api.cloudinary.com/v1_1/dvwugomay/image/upload/",
            {
                method: "POST",
                body: data
            })
  
            const back = await res.json()
            const url = back.secure_url
            console.log(back)
            console.log(url)

            const imag = {code: makeid(20), photo: url, stade: buffer}

            axios({url: "http://localhost:8083/image/add", 
            data: imag,
            method: "POST", 
            headers: {"Authorization" : `Bearer ${token}`}})

        })
        popUp()
        document.getElementById('cancel').click()

    }

    

  return (
    <>

    <h1 className="h3 mb-3"><strong>Pages/</strong> Add Stage</h1>

        <div className="card">
            <div className="card-header">
                <h5 className="card-title mb-0">Stage form</h5>
            </div>
        <div className="card-body">
        <div className="d-flex align-items-start border-bottom p-5">
            <div className="flex-grow-1">
                {/*<small className="float-end text-navy">{maladie.nom}</small>*/}
                <strong>{maladie.nom}</strong>  <br />
                <small className="text-muted">{maladie.code}</small><br />

            </div>
        </div>
    							

        <form>


        <div className="form-group mb-3">
            <label className="form-label" for="inputAddress">Level</label>
            <input type="text" className="form-control" name='nom' id="nom" placeholder="Stage level" onChange={(e)=>setLevel(e.target.value)}/>
        </div>
        <div className="form-group mb-3">
            <label className="form-label" for="inputAddress">Description</label>
            <input type="text" className="form-control" name='nom' id="nom" placeholder="Stage description" onChange={(e)=>setDescription(e.target.value)}/>
        </div>
        <div className="form-group mb-3">
            <label className="form-label" for="inputAddress">Images</label>
            <input type="file" className="form-control" name='images' id="images" placeholder="Stage images" multiple onChange={(e)=>fill(e)}/>
        </div>
        <div className='mt-4'>
            <div className='col-2 float-end'>
            <button type="button" className="btn btn-primary me-2" onClick={(e)=>handleCreation(e)}>Add</button>
            <button type="reset" className="btn btn-secondary" id='cancel'>Cancel</button>
            </div>
        </div>
        </form>
        </div>
							</div>

    </>
  )
}

export default AddStade