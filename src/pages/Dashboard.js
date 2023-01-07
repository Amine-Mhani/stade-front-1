import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import PatientService from '../services/PatientService'

function Dashboard() {

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

        <div className="card flex-fill">

        </div>
  )
}

export default Dashboard