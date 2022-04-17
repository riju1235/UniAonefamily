import React from 'react';
import Navbar from '../inc/Navbar';
import {Link} from 'react-router-dom';
import Scans from '../images/scan.jpg';
import './Xray.css';

function Xray (props) {
    return (
        <div className="cotnm">
            
          <Navbar/>
          <div className="fixed-bottom " style={{textAlign: "center"}}>
          <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
  <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off"/>
  <label class="btn btn-primary" for="btncheck1">Help line number</label>

  <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off"/>
  <label class="btn btn-outline-primary" for="btncheck2">9933798896</label>

</div>
</div>
            <br/><br/><br/>
      

<img src={Scans} class="img-fluid"  width="1349" height="600" alt="Scans"></img>


<br/>
<br/>
<br/>










<br/><br></br><br/><br/>
<div className="scans">
<h4 style={{textAlign: "center"}}>{props.scantest}</h4>
</div>
<br></br>

    <div className="album py-5">
        
            <div className="container">

                <div className="row">
                <div className="col-md-2 ">
                        <div className="card mb-4 box shadow">
                        <div className="card-body">
                                <h4 className="card-text"><center>{props.name}</center></h4>
                                <p className="card-text"> <center>{props.price}</center></p>
                                <div className="d-flex justify-content-between align-items-center">
                                   
                                    
                                </div>

                            </div>
                          
                        
                        </div>

                      
                    </div>
                    <div className="col-md-2 ">
                        <div className="card mb-4 box shadow">
                        <div className="card-body">
                                <h4 className="card-text"><center>{props.name1}</center></h4>
                                <p className="card-text"><center>{props.price2}</center></p>
                                <div className="d-flex justify-content-between align-items-center">
                                   
                                    
                                </div>

                            </div>
                          
                        
                        </div>

                      
                    </div>
                    <div className="col-md-2 ">
                        <div className="card mb-4 box shadow">
                        <div className="card-body">
                                <h4 className="card-text"><center>{props.name2}</center></h4>
                                <p className="card-text"> <center>{props.price2}</center></p>
                                <div className="d-flex justify-content-between align-items-center">
                                  
                                    
                                </div>

                            </div>
                          
                        
                        </div>

                      
                    </div>
                    <div className="col-md-2 ">
                        <div className="card mb-4 box shadow">
                        <div className="card-body">
                                <h4 className="card-text"><center>{props.name3}</center></h4>
                                <p className="card-text"><center>{props.price4}</center></p>
                                <div className="d-flex justify-content-between align-items-center">
                                   
                                    
                                </div>

                            </div>
                          
                        
                        </div>

                      
                    </div>
                    <div className="col-md-2 ">
                        <div className="card mb-4 box shadow">
                        <div className="card-body">
                                <h4 className="card-text"><center>{props.name5}</center></h4>
                                <p className="card-text"><center>{props.price5}</center></p>
                                <div className="d-flex justify-content-between align-items-center">
                                   
                                    
                                </div>

                            </div>
                          
                        
                        </div>

                      
                    </div>
                    <div className="col-md-2 ">
                        <div className="card mb-4 box shadow">
                        <div className="card-body">
                                <h4 className="card-text"><center>{props.name6}</center></h4>
                                <p className="card-text"><center>{props.price6}</center></p>
                                <div className="d-flex justify-content-between align-items-center">
                                   
                                    
                                </div>

                            </div>
                          
                        
                        </div>

                      
                    </div>
                    <div className="col-md-2 ">
                        <div className="card mb-4 box shadow">
                        <div className="card-body">
                                <h4 className="card-text"><center>{props.name7}</center></h4>
                                <p className="card-text"><center>{props.price7}</center></p>
                                <div className="d-flex justify-content-between align-items-center">
                                   
                                    
                                </div>

                            </div>
                          
                        
                        </div>

                      
                    </div>
                    <div className="col-md-2 ">
                        <div className="card mb-4 box shadow">
                        <div className="card-body">
                                <h4 className="card-text"><center>{props.name4}</center></h4>
                                <p className="card-text"><center>{props.price4}</center></p>
                                <div className="d-flex justify-content-between align-items-center">
                                   
                                    
                                </div>

                            </div>
                          
                        
                        </div>

                      
                    </div>
                    </div>
                    </div>
                    </div>
                 
  ...

{/*    
<div class="card shadow text-center">
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <p class="card-text">{props.price}</p>
    
    </div>
  </div> */}
  

<br></br><br></br>
<br></br>
   
    </div>
   
    


     );
    }
    
    export default Xray;