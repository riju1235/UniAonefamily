import React from 'react';
import Navbar from '../inc/Navbar';
import Web from '../images/web.jpg';

function Developers (props) {
    return (
            <>
            <Navbar/>
            <br/><br/><br/>
            <img src={Web}  class="img-fluid" width="1349" height="400"  alt="Web"></img>
            <div className="p-3 mb-2 bg-light text-dark">
                <br/><br/>
                <h2 style={{textAlign: "center"}}>Web Development / Web Application Development</h2>
                <br/>
    <div className="album py-5">
        
        <div className="container">

            <div className="row">
            <div className="col-md-6">
                    <div className="card mb-4 box shadow">
                    <div className="card-body">
                        
                            <h3 className="card-text">Web Development </h3><br/>
                            <p className="card-text">We have an excellent team of web development experts who are constantly experimenting and implementing innovative ideas that will transform website designs into a gold mine for your business.</p><br/>
                            
                           

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-6">
                    <div className="card mb-4 box shadow">
                    <div className="card-body">
                            <h3 className="card-text">Our Project Create</h3><br/>
                            <p className="card-text">SCHOOL WEBSITE<br/>HEALTH WEBSITE<br/>E COMMARS WEBSITE</p>
                            <br/>
                            
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
       
       export default Developers;