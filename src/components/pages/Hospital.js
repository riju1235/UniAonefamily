import React, { useState, useEffect } from 'react';
import Navbar from '../inc/Navbar';
import './Hospital.css';

import Care from '../images/logohere.jpg';
import Rating from '../images/rating1.png';
import Photo1 from '../images/photo1.jpg';
import Photo2 from '../images/photo2.jpg';
// import Photom from '../images/photom.jpg';
import Hosim from '../images/hosim.jpg';
import Hospitali from '../images/hospitali.jpg';

import {Link, useNavigate} from 'react-router-dom';
import { collection, getDocs, } from "firebase/firestore";
import {db} from '../../firebase'

function Hospital () {
  const [searchTerm, setsearchTerm] = useState("");
  const [open, setOpen] = useState(false);
    
  const [hospitals, setHospitals] = useState([])
  const navigate = useNavigate()

  const hospitalsCollectionRef = collection(db, "hospitals");
  useEffect(() => {

      const getHospitals = async () => {
          const data = await getDocs(hospitalsCollectionRef);
          setHospitals(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
      }

      getHospitals()
  }, [])

    return(
        
<div>
  <Navbar/>
 
<div className="album py-3">
        
        <div className="container">

            <div className="row">
            <div className="col-md-6">
                    
                    <div className="card-body">
                    <input type="text" class="form-control" placeholder="Search Hospitals" name="location" 
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
     
        {hospitals.filter((val)=>{
      if (setsearchTerm === ""){
        return val;
      } else if (
        val.timing.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.detail.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.locationh.toLowerCase().includes(searchTerm.toLowerCase()) 
        
    
      ){
        return val;
      }
    }).map((hospital) => { return (
            <div className="card mb-5 border-primary box-shadow">
            <div className="row">
            
            <div className="col-md-4">
          
                    <div className="card-body">
                    
                       <img  className="card-img-top"  src={hospital.hospitalImg} alt="doc1" />
                            <div className="d-flex justify-content-between align-items-center">
                               </div>
                           
                            </div>
              
                </div>
             
                  
                <div className="col-md-8">
                    <div className="card-body">
                    <h5 className="card-text"><b>{hospital.detail} {hospital.blueicon}</b> <svg xmlns="http://www.w3.org/2000/svg" style={{color: "blue"}} width="22" height="22" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg> <svg xmlns="http://www.w3.org/2000/svg" style={{color: "purple"}} width="22" height="22" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg></h5>
                            <p className="card-text"> {hospital.totaldoctor} Doctor </p>
                            <img  src={hospital.ratingstar} alt="doc1" />
<h5 className="card-text">{hospital.timing} </h5>
<p className="card-text"> {hospital.locationh} </p>
                            
<div className="btn-group">
<a href="tel: +91 9933798896"  className="btn btn- btn-outline-info">Call Now</a>
                                        <button type="button" className="btn btn-sm btn-outline-primary">
                                        {hospital.CallNow}
                                        </button>
                                      
                                    </div>
                           </div>
                   </div>
                   </div>
                   </div>
                
                  
                   )})}  
                    </div>
               
                  
                  </div>
              
       
              




</div>

    );
}

export default Hospital;