import React from 'react';
import Navbar from '../inc/Navbar';

function Xray (props) {
    return (
            <>
            <Navbar/>
            <br/><br/><br/>
            <br/>
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
                            <h3 className="card-text">Sudipta Mondal</h3><br/>
                            <p className="card-text">Head-Comunications<br/>sudipta@uniaonefamily.com<br/>+917431048084</p><br/>
                            
                       
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
            
            </>
        
     );
    }
    
    export default Xray;