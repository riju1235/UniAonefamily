import React, { useState, useEffect } from 'react'; 
import {Link, useNavigate} from 'react-router-dom';
import { collection, getDocs, } from "firebase/firestore";
import {db} from '../../firebase'
import AddCareer from '../AddCareer';

import Career1 from '../images/jobs.jpg';
import Navbar from '../inc/Navbar';



function Career (props) {
    const [careers, setCareers] = useState([])
    const navigate = useNavigate()

    const careersCollectionRef = collection(db, "careers");
    useEffect(() => {

        const getCareers = async () => {
            const data = await getDocs(careersCollectionRef);
            setCareers(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
        }

        getCareers()
    }, [])

    return (

        <>
        <Navbar/>
        <br/><br/><br/>
          <img  src={Career1} class="img-fluid"  width="1349" height="600" alt="Health1"></img>
          <br/><br/><br/>
          <div className="careercolornwe">
          <h1 style={{textAlign: "center"}}> <b>Exited?</b></h1></div>
          <div className="careercolor">
<h2 style={{textAlign: "center"}}>Make healthcare more accessible, affordable,
Want to join our <br/>  mission to keep the health and well-being of all patients in the country?</h2>
</div>
<br/><br/>

<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">JOB FOR YOU</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">JOIN OUR TALENT NETWORK</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">CONTACT</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
  <div className="album py-5">
        
        <div className="container">

            <div className="row">
            {careers.map((career) => { return (
            <div className="col-md-4 ">
         
                    <div className="card mb-4 box shadow">
                    <div className="card-body">
                      
                            <h5 className="card-text"><center>{career.post}</center></h5>
                            <p className="card-text"> <center>{career.Experiance} years experiance</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                               
                                
                            </div>

                        </div>
                      
                    
                    </div>

                  
                </div>
                  )})}  
                </div>
                </div>
                </div>
                          
              </div>
                         
            
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
    <AddCareer/>
  </div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
  <div className="album py-5">
        
        <div className="container">

            <div className="row">
           
            <div className="col-md-4 ">
         
                   
                    <div className="card-body">
                      
                            <h5 className="card-text">OUR OFFICIAL EMAIL ID </h5>
                            <h6 className="card-text">Send us your C.V </h6>
                            <p className="card-text"> carrer@uniaonefamily.com</p>
                            <div className="d-flex justify-content-between align-items-center">
                               
                                

                        </div>
                      
                    
                    </div>

                  </div>
                  </div>
                  </div>
                </div>
  </div>
</div>

          
        </>
        );
    }
    
    export default Career;