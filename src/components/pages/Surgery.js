import React from 'react';
import AddBook from '../AddBook';
import Navbar from '../inc/Navbar';
import Surgerycare from '../images/surgery.jpg';


import './Surgery.css'

import {Link} from 'react-router-dom';

const Surgery = (props) => {


    return (
        <div className="huamn">

      <Navbar/>


         <img src={ Surgerycare} class="img-fluid" width="1349" height="600"  alt=" Surgerycare"></img>
         <br/><br/>
   


<div className="album py-2">
        
        <div className="container">

            <div className="row">
            <div className="col-md-2 ">
                    <div className="card mb-4 box shadow">
                    <div className="card-body">
                      
                            <h4 className="card-text"><center>Harnia</center></h4>
                            <p className="card-text"> <center>{props.price}</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                               
                                
                            </div>

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-2 ">
                    <div className="card mb-4 box shadow">
                    <div className="card-body">
                            <h4 className="card-text"><center>Piles</center></h4>
                            <p className="card-text"><center>{props.price2}</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                               
                                
                            </div>

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-2 ">
                    <div className="card mb-4 box shadow">
                    <div className="card-body">
                            <h4 className="card-text"><center>Anal fissure</center></h4>
                            <p className="card-text"> <center>{props.price2}</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                              
                                
                            </div>

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-2 ">
                    <div className="card mb-4 box shadow">
                    <div className="card-body">
                            <h4 className="card-text"><center>Appenictics</center></h4>
                            <p className="card-text"><center>{props.price4}</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                               
                                
                            </div>

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-2 ">
                    <div className="card mb-4 box shadow">
                    <div className="card-body">
                            <h4 className="card-text"><center>VSD</center></h4>
                            <p className="card-text"><center>{props.price5}</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                               
                                
                            </div>

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-2 ">
                    <div className="card mb-4 box shadow">
                    <div className="card-body">
                            <h4 className="card-text"><center>Lipoma</center></h4>
                            <p className="card-text"> <center>{props.price}</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                               
                                
                            </div>

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-2 ">
                    <div className="card mb-4 box shadow">
                    <div className="card-body">
                            <h4 className="card-text"><center>Hystercetomy</center></h4>
                            <p className="card-text"><center>{props.price2}</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                               
                                
                            </div>

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-2 ">
                    <div className="card mb-4 box shadow">
                    <div className="card-body">
                            <h4 className="card-text"><center>Kidney</center></h4>
                            <p className="card-text"> <center>{props.price2}</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                              
                                
                            </div>

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-2 ">
                    <div className="card mb-4 box shadow">
                    <div className="card-body">
                            <h4 className="card-text"><center>Pacemaker</center></h4>
                            <p className="card-text"><center>{props.price4}</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                               
                                
                            </div>

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-2 ">
                    <div className="card mb-4 box shadow">
                    <div className="card-body">
                            <h4 className="card-text"><center>Coronary Angoiplasty</center></h4>
                            <p className="card-text"><center>{props.price4}</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                               
                                
                            </div>

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-2 ">
                    <div className="card mb-4 box shadow">
                    <div className="card-body">
                            <h5 className="card-text"><center>Pilonidal Sinus</center></h5>
                            <p className="card-text"><center>{props.price5}</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                               
                                
                            </div>

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-2 ">
                    <div className="card mb-4 box shadow">
                    <div className="card-body">
                            <h4 className="card-text"><center>Varicose Vein</center></h4>
                            <p className="card-text"><center>{props.price6}</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                               
                                
                            </div>

                        </div>
                      
                    
                    </div>

                  
                </div>
                
                </div>
                </div>
                </div>
                <br/>

             <h3 style={{textAlign: "center"}}>{props.whysur}</h3>
         
      
        <br/>
        <div class="p-3 mb-2 bg-light text-black">
        <div className="album py-3">
        
        <div className="container">

            <div className="row">
            <div className="col-md-4 ">
                  
                    <div className="card-body">
                    <h5 className="card-text"><center>Access to 300+ surgeons from the
best hospitals</center></h5>
                            <p className="card-text"> <center>Reliable and safe process</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                               
                           

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-4 ">
                  
                    <div className="card-body">
                    <h5 className="card-text"><center>Expert Surgeons with 10+ years of
experience</center></h5>
                            <p className="card-text"><center>India's top hispital</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                               

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-4 ">
                  
                    <div className="card-body">
                    <h5 className="card-text"><center>Instant appointment with top doctors
across India</center></h5>
                            <p className="card-text"> <center>600+ surgeries done every month by
Uniaonefamily network hospitals</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                               
                           

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div>
                  </div>
                  </div>
        </div>
        </div>
      
        
        </div>
        <br></br>
        <div class="p-4 mb-2 bg-light text-dark">
          <br/>
    
        <h4 style={{textAlign:"center"}}>{props.helpbooks}</h4>
        
        <br/>
        <div className="bookaa">

          <h3  style={{textAlign:"center"}} >{props.helpno}</h3>
          </div>
         
         
          <h3  style={{textAlign:"center"}} >{props.phone}</h3>
       
          <br/>
     
           </div>
        
      
           <AddBook/>
        <br></br><br/><br/>
        <br></br>
        
        
        <div className="appio">
        {/* <div className="card shadow">
          <br/>

        <div class="form">

    <input type="text" class="form-control" placeholder="Patient Name" aria-label="First name"/>
  </div>
    

<div class="form">
    <input type="text" class="form-control" placeholder="Contact Number" aria-label="Last name"/>
  
</div>
<div class="form">

    <select id="inputState" class="form-select">
      <option selected>Location...</option>
      <option>{props.location1}</option>
      <option>{props.location2}</option>
      <option>{props.location3}</option>
      <option>{props.location4}</option>
      <option>{props.location5}</option>
      <option>{props.location6}</option>
      <option>{props.location7}</option>
      <option>{props.location8}</option>
      <option>{props.location9}</option>
      <option>{props.location10}</option>
      <option>{props.location11}</option>
      <option>{props.location12}</option>
      <option>{props.location13}</option>
      <option>{props.location14}</option>
      <option>{props.location15}</option>
      <option>{props.location16}</option>
      <option>{props.location17}</option>
      <option>{props.location18}</option>
      <option>{props.location19}</option>
      <option>{props.location20}</option>
    </select>
    </div>
    <div className="submitea">
    <button type="button" class="btn btn-outline-success">{props.bookappoint} </button>
    </div>
    <br/>
    </div> */}
    
        </div>
       
        </div>
        
    )
}
export default Surgery;