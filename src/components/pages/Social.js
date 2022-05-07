import React from 'react';
import Navbar from '../inc/Navbar';
import Women from '../images/education.jpg';
import Orphan from '../images/orphan.jpg';
import STOPCRIME from '../images/stop3.jpg';
import Rape from '../images/stoprape.jpg';
import Digital from '../images/digitalhealth.jpg';
import Update from '../images/update1.jpg';
import Education3 from '../images/educationvarsha.jpg';
import {  Dropdown, NavDropdown  } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Social (props) {
    return (
            <>
            <Navbar/>
           
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={STOPCRIME} class="d-block w-100" alt="STOPCRIME"/>
    </div>
    <div class="carousel-item">
      <img src={Rape} class="d-block w-100" alt="Rape"/>
    </div>
    <div class="carousel-item">
      <img src={Education3}class="d-block w-100" alt="Education3"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<br/><br/>
<div className="technology">
<h2 style={{textAlign: "center"}}> "Our company has started this technology education from 2020 year"</h2>
</div>
            <div className="album py-5">
        
        <div className="container">
       
            <div className="row">
           
            <div className="col-md-6 ">
            
                    <div className="card-body">
                    
                       <img src= {Women} className="card-img-top" alt="Women" />
                            <div className="d-flex justify-content-between align-items-center">
                               </div>
                           
                            </div>
                        </div> 
                    
                  
                <div className="col-md-6 ">
              
                    <div className="card-body">
                    <h4 className="card-text">Women Technology Education</h4>
                            <p className="card-text">OUR COMPANY MISSION</p>
     <p className="card-text"> ''20% of Uniaone Save Family services Private Limited Company will be spent on women's technology education. 
     This initiative is to empower women from 195 countries.''</p>

                            <div className="d-flex justify-content-between align-items-center">
                               
                                
                          </div>

                   
                      
                  
                    </div>

                  
                </div>
                </div>
                </div>
                </div>
             
                <div className="album py-5">
        
        <div className="container">
       
            <div className="row">
           
            <div className="col-md-6 ">
            
                    <div className="card-body">
                    
                    <h4 className="card-text">Handicape, Blind, Orphan Technology Education</h4>
                            <p className="card-text"> OUR COMPANY MISSION</p>
                            <p className="card-text"> ''Technology Education for the Handicapped, Blind and Orphans will be provided at 10% of Uniaone Save Family Private Limited Company.
                            Blind, handicapped, orphans have high aspirations to grow up, and if they are guided, they will start something new to take the country's economy forward.''</p>
                            <div className="d-flex justify-content-between align-items-center">
                            <h5 className="card-text">OUR EDUCATION WEBSITE : <a className='btn btn-outline-info' href ="http://www.ufceindia.in/Default/Pages/Default.aspx" >  www.ufceindia.in</a></h5>
                               </div>
                           
                            </div>
                        </div> 
                    
                  
                <div className="col-md-6 ">
              
                    <div className="card-body">
                    <img src= {Orphan} className="card-img-top" alt="Orphan" />
                    

                            <div className="d-flex justify-content-between align-items-center">
                               
                                
                          </div>

                   
                      
                  
                    </div>

                  
                </div>
                </div>
                </div>
                
                </div>
                <hr/>
                <div className="technology">
<h2 style={{textAlign: "center"}}> "Areas of work"</h2>
</div>

<div className="album py-5">
        
        <div className="container">
       
            <div className="row">
           
            <div className="col-md-6 ">
            
                    <div className="card-body">
                    
                       <img src= {Digital} className="card-img-top" alt="Digital" />
                            <div className="d-flex justify-content-between align-items-center">
                               </div>
                           
                            </div>
                        </div> 
                    
                  
                <div className="col-md-6 ">
              
                    <div className="card-body">
                    <h4 className="card-text">Digital HealthCare</h4>
                            <p className="card-text">OUR COMPANY MISSION</p>
     <p className="card-text"> ''Patients will easily find the right doctor book and consult. Keep your own health records on the website.
     Uniaone Family aims to make quality healthcare affordable and accessible for people in 110+ countries. People
in all countries can easily consult with the right doctor about their health
''</p>

                            <div className="d-flex justify-content-between align-items-center">
                               
                                
                          </div>

                   
                      
                  
                    </div>

                  
                </div>
                </div>
                </div>
                </div>


                <div className="album py-5">
        
        <div className="container">
       
            <div className="row">
           
            <div className="col-md-6 ">
            
                    <div className="card-body">
                    
                    <h4 className="card-text">Latest & Advance Technology Education</h4>
                            <p className="card-text"> OUR COMPANY MISSION</p>
                            <p className="card-text"> ''Advanced Keyboard, Excel, Word, PowerPoint Smart Shortcut Keys, Photoshop are taught.
 Advanced coding language is taught.'' </p>
                            <div className="d-flex justify-content-between align-items-center">
                           
                               </div>
                           
                            </div>
                        </div> 
                    
                  
                <div className="col-md-6 ">
              
                    <div className="card-body">
                    <img src= {Update} className="card-img-top" alt="Update" />
                    

                            <div className="d-flex justify-content-between align-items-center">
                               
                                
                          </div>

                   
                      
                  
                    </div>

                  
                </div>
                </div>
                </div>
                
                </div>
            
            </>
        
     );
    }
    
    export default Social;