import React from 'react';
import Navbar from '../inc/Navbar';
import AddCorporate from './../AddDoctor';

function Xray (props) {
    return (
            <>
            <Navbar/>
            <div className="p-3 mb-2 bg-light text-dark">
                <br/><br/>
                <h2 style={{textAlign: "center"}}>Media Contact</h2>
                <br/>
    <div className="album py-5">
        
        <div className="container">

            <div className="row">
            <div className="col-md-6">
                    <div className="card mb-4 box shadow">
                    <div className="card-body">
                            <h3 className="card-text">Bishakha Sarkar</h3><br/>
                            <p className="card-text">Head-Comunications<br/>care@uniaonefamily.com<br/>+91 9547676590</p><br/>
                            
                       
                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-6">
                    <div className="card mb-4 box shadow">
                    <div className="card-body">
                            <h3 className="card-text">Tanmay Sarkar</h3><br/>
                            <p className="card-text">Founder & CEO</p>
                            <br/><br/><br/>
                          

                        </div>
                      
                    
                    </div>

                  
                </div>
                </div>
                </div>
                </div>
                </div>
            <br/>
            </>
        
     );
    }
    
    export default Xray;