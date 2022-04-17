import React from 'react';
import {Link} from 'react-router-dom';
import Terms from '../pages/Terms';
import Privacy from '../pages/Privacy';
import { Button,Navbar, Container, Nav, Form, FormControl, NavDropdown} from 'react-bootstrap';


import './Contact.css';
import Logo from '../images/logocontact.jpg';

function Contact (props) {
    return(
        <>

<div className="logoconta">
<Link to="/">
  <img src={Logo} className="img-fluid" alt="Logos"/>
  </Link></div>
<nav>
  <div class="nav nav-tabs " id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Contact</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Terms & Conditions</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Privacy Policy</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
    <br/><br/>
  
        <h2 style={{textAlign: "center"}}> Contact Us</h2>
    
        <br/>
        <div className="supportno1">
        <h4 style={{textAlign: "center"}}>Have questions about our products, support services, or anything else? Let<br/> us know and our’ll expert get back to you.</h4>
        </div>        
<br/><br/><br/><br/>
<div className="section footer bg-light text-dark ">
  <div className="album py-5">
        
        <div className="container">

            <div className="row">
            <div className="col-md-5">
                  
                    <div className="card-body">
                    <h5 className="card-text">Company Profile</h5>
                            <p className="card-text"><small> UNIAONE SAVE FAMILY SERVICES PRIVATE LIMITED</small></p>
                            <h6 className="card-text"><small>   Corporate Identity Number : U85300WB2020PTC238719   <br/>Copyright © Uniaone Family <br/> Grievance Officer : Sudipta Mondal <br/>For queries and grievances, reach us at grievance@uniaonefamily.com</small></h6>
                          
                          
                            <div className="d-flex justify-content-between align-items-center">
                               
                           

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-4">
                  
                    <div className="card-body">
                    <h5 className="card-text">Contact Details</h5>
                            <p className="card-text">+91 99337 98896  <br/>+91 98001 52166<br/> Official EmailId : help@uniaonefamily.com</p>
         
                            
                            <div className="d-flex justify-content-between align-items-center">
                               
                                
                          

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-3">
                  
                    <div className="card-body">
                    <h5 className="card-text">For Doctor</h5>
                            <p className="card-text"> Email:doctors@uniaonefamily.com</p>
                            <div className="d-flex justify-content-between align-items-center">
                               
                           

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div>
                  </div>
                  </div>
                </div>
                </div>



         <br></br>
        
  </div>
  </div>

  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
  <Terms/>
  </div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
    <Privacy/>
  </div>
</div>
<br/>
       
        <br/>
        <br/>
        </>
        
        );
    }
    
    export default Contact;