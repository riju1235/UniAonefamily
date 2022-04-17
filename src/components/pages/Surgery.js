import React from 'react';
import AddBook from '../AddBook';
import Navbar from '../inc/Navbar';
import Surgerycare from '../images/surgery.jpg';
import Piles from '../images/piles.jpg';
import Hernia from '../images/harnia.jpg';
import Apendictis from '../images/apendictics.jpg';
import Annalf from '../images/annalfis2.jpg';
import Venies from '../images/veins.jpg';
import VSDSURGRY from '../images/VSD Surgery.jpg';

import Hystercetomy from '../images/Hysterectomy.jpg';
import Kidney from '../images/kidney3.jpg';
import Pacemekar from '../images/HEART.jpg';
import Coronary from '../images/Coronary Angioplasty.jpg';
import Sinus from '../images/sinus.jpg';

import './Surgery.css'

import {Link} from 'react-router-dom';

const Surgery = (props) => {


    return (
        <div className="huamn">

      <Navbar/>
       

          <br/>
<br/>


         <img src={ Surgerycare} class="img-fluid" width="1349" height="600"  alt=" Surgerycare"></img>
         <br/><br/>
         <br></br>
   


<div className="album py-5">
        
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


        <br/><br/>
        <div className="surgerychoose">
             <h3>{props.whysur}</h3>
         
        
        </div>
        <br/>
        <div class="p-3 mb-2 bg-light text-black">

        <div className="belif">
          <div className="column">
        <h6>{props.surg1}<br/>{props.surg1br}</h6>
        </div>
        <div className="column">
        <h6>{props.surg2}<br/> {props.surg2br}</h6>
        </div>
        <div className="column">
        <h6>{props.surg3}<br/> {props.surg3br}</h6>
        </div>
       
        </div>
        <br></br>
        <div className="belif">
          <div className="column">
        <h6>{props.surg4}</h6>
        </div>
        <div className="column">
        <h6>{props.surg5}</h6>
        </div>
        <div className="column">
        <h6>{props.surg6}<br/>{props.surg6br}</h6>
        </div>
       
        </div>
        
        </div>
        <br></br><br></br>
        <div class="p-3 mb-2 bg-light text-black">
          <br/>
    
        <h4 style={{textAlign:"center"}}>{props.helpbooks}</h4>
        
        <br/>
        <div className="bookaa">

          <h3  style={{textAlign:"center"}} >{props.helpno}</h3>
          </div>
         
         
          <h3  style={{textAlign:"center"}} >{props.phone}</h3>
       
          
     
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