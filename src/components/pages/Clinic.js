import React, { useState, useEffect } from 'react';
import Navbar from '../inc/Navbar';

import {Link, useNavigate} from 'react-router-dom';
import { collection, getDocs, } from "firebase/firestore";
import {db} from '../../firebase'
import { Form, Alert, InputGroup, Button, ButtonGroup, Card } from "react-bootstrap";

function Clinic (props) {
  const [searchTerm, setsearchTerm] = useState("");
  const [clinics, setClinics] = useState([])
  const navigate = useNavigate()
  const clinicsCollectionRef = collection(db, "clinics");
  useEffect(() => {

      const getClinics = async () => {
          const data = await getDocs(clinicsCollectionRef);
          setClinics(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
      }

      getClinics()
  }, [])

    return(
        <>
        <Navbar/>
<br/><br/>
<div className="album py-5">
        
        <div className="container">

            <div className="row">
            <div className="col-md-6">
                    
                    <div className="card-body">
                    <input type="text" class="form-control" placeholder="Search Clinics" name="location" 
                    onChange ={(e) => {
                      setsearchTerm(e.target.value);
                    }}
                    />
                            <div className="d-flex justify-content-between align-items-center">
                               
                                
                        

                        </div>
                      
                    
                    </div>

                  
                </div>
            
                </div>
                </div>
                </div>
<div className="album py-1">
        
        <div className="container">

            <div className="row">
            {clinics.filter((val)=>{
      if (setsearchTerm === ""){
        return val;
      } else if (
        val.clinicname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.timeslot.toLowerCase().includes(searchTerm.toLowerCase()) 
    
      ){
        return val;
      }
    }).map((clinic) => { return (
            <div className="col-md-4">
                    <div className="card mb-4 border-primary box shadow">
                    <img className="card-img-top" src={clinic.clinicImg} alt="doc1" />
                    <div className="card-body">
                            <h3 className="card-text" >  {clinic.clinicname} <svg xmlns="http://www.w3.org/2000/svg" style={{color: "blue"}} width="22" height="22" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg>  <svg xmlns="http://www.w3.org/2000/svg" style={{color: "purple"}} width="22" height="22" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg></h3>
                            <h6 className="card-text"> {clinic.address}</h6>
                            <h6 className="card-text"> {clinic.totaldoctor}  <div class="spinner-grow spinner-grow-sm text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div></h6>
                            <img  src={clinic.ratingImg} alt="doc1" />
                            <h5 className="card-text"> {clinic.timeslot}</h5>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                  
                                    
                                <a href="tel:{clinic.mobile}"  className="btn btn- btn-outline-info">Call Now</a>
                                    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
 {clinic.mobile}
</button>


                                </div>
                                
                            </div>
                        </div>
                     
                        
                    </div>   
                   
                </div>
                 )})}
                </div>
                </div></div>
               
              
            
        
        </>
        
    );
}

export default Clinic;