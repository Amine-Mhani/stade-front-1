
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';

import { ReactNotifications } from 'react-notifications-component'
import Maladie from './pages/Maladie'
import Stade from './pages/Stade'
import Image from './pages/Image';
import Patient from './pages/Patient';
import Login from './pages/Login';
import AuthService from './services/AuthService';
import Registration from './pages/Registration';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Patients from './pages/Patient/Patients';
import Maladies from './pages/Maladie/Maladies';
import Profile from './pages/Patient/Profile';
import Detections from './pages/Patient/Detections';
import AddPatient from './pages/Patient/AddPatient';
import AddMaladie from './pages/Maladie/AddMaladie';
import AddStade from './pages/Maladie/AddStade';
import StadeImages from './pages/Maladie/StadeImages';


export default class App extends Component {
  state = {
    user :AuthService.getCurrentUser()
  }
  componentDidMount() {
    this.setState ({ user: AuthService.getCurrentUser()})
  }

  render(){
  return (
   
    <>
    
    <ReactNotifications />
      {this.state.user? this.state.user.roles[0]=="ROLE_MEDCIN" ? 
       <div className="main">
       <Navbar/>
       <main className="content">
           <div className="container-fluid p-0">
          
              <Routes>    
               <Route path="patient" element={<Patient/>} />
               <Route path="patient/:id" element={<Maladie/>} />
               <Route path="patient/:id/maladie/:id" element={<Stade/>} />
               <Route path="patient/:id/maladie/:id/stade/:id" element={<Image/>} />
              </Routes> 
           
           </div>
       </main>
   </div>:<>
    <Sidebar/>
    <div className="main">
        <Navbar/>
        <main className="content">
            <div className="container-fluid p-0">
              
                <Routes>    
                  <Route path="/" element={<Patients/>} />
                  <Route path="/patients/add" element={<AddPatient/>} />
                  <Route path="/patients/profile/:id" element={<Profile/>} />
                  <Route path="/patients/detections/:id" element={<Detections/>} />
                  <Route path="/maladies" element={<Maladies/>} />
                  <Route path="/maladies/add" element={<AddMaladie/>} />
                  <Route path="/maladies/add-stade/:id" element={<AddStade/>} />
                  <Route path="/maladies/stade/:id" element={<StadeImages/>} />
                </Routes> 
             
            </div>
        </main>
    </div>
            
    </>:
   
      <Routes>    
        <Route path="/" element={<Login/>} />
        <Route path="/Register" element={<Registration/>} />
      </Routes> 
    
   }
        
    </>
  
     
  );}
}

