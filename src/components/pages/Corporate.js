import React from 'react';
import Navbar from '../inc/Navbar';
import AddCorporate from '../AddCorporate';
import {Link} from 'react-router-dom';
import Corporate1 from '../images/Corporateimage.jpg';
import Corporate2 from '../images/rating4.5.png';
import './Corporate.css';

function Corporate(props) {
    return(
        
        <>          <Navbar/>
                  <br/>

<br/>
 <div className="fixed1">
           <img src={Corporate1}  width="1349" height="700" alt="Corporate"/>
          
           </div>


{/* <div className="forms">

<div className="form">

    <input type="text" class="form-control" placeholder="Enter Your Name" aria-label="Enter Your Name"/>
  </div>
    <div class="form">
    <input type="text" class="form-control" placeholder="Organization Name" aria-label="Organization"/>
  
</div>
<div class="form">
    <input type="text" class="form-control" placeholder="Email Id" aria-label="Email Id"/>
  
</div>
<div class="form">
    <input type="text" class="form-control" placeholder="Contact Number" aria-label="Contact Number"/>
  
</div>
<div class="form">

    <select id="inputState" class="form-select">
      <option selected>{props.emplsiz}</option>
      <option>{props.emplsiz2}</option>
      <option>{props.emplsiz3}</option>
      <option>{props.emplsiz4}</option>
      <option>{props.emplsiz5}</option>
      <option>{props.emplsiz6}</option>
      <option>{props.emplsiz7}</option>
      <option>{props.emplsiz8}</option>
      <option>{props.emplsiz9}</option>
      <option>{props.emplsiz10}</option>
    </select>
    </div>
    <div className="submited">
    <button type="button" style={{width:'355px'}} class="btn btn-primary">{props.sub} </button>
    </div>
   


<br></br>

    </div> */}
    
    <br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

   
    <AddCorporate/>
    <br/><br/>
    <div className="corporateee">
    <h1 style={{textAlign: "center"}} className=" text-black"><b>{props.heading1}</b></h1>
    </div>
<div className="privatec">

</div>
<h4 style={{textAlign: "center"}} > {props.head3}<br/>{props.head3br}</h4>

<br/><br/><br/>
    <h3 style={{textAlign: "center"}}>{props.employeesp}</h3>

    <br></br>
    <div className="employees">
    <div class="row">
  <div class="col-sm-3">
    <div class="card  border-info text-center">
      <div class="card-body ">
        <h5 class="card-title">{props.feture1}</h5>
        <p class="card-text">{props.feturec1} <br></br>{props.feturecbr1}</p>
        

       
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card border-warning text-center">
      <div class="card-body">
        <h5 class="card-title">{props.feture2}</h5>
        <p class="card-text">{props.feturec2}</p>
   
      </div>
    </div>
  </div>
  
  <div class="col-sm-3">
    <div class="card border-success text-center">
      <div class="card-body">
        <h5 class="card-title">{props.feture3}</h5>
        <p class="card-text">{props.feturec3}</p>
        
      </div>
    </div>
  </div>
  
  </div>

</div>

<br></br>
<br></br>

<div className="employees">
    <div class="row">
  <div class="col-sm-3">
    <div class="card  border-danger  text-center">
      <div class="card-body">
        <h5 class="card-title">{props.feture4}</h5>
        <p class="card-text">{props.feturec4}</p>
        

       
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card border-dark text-center">
      <div class="card-body">
        <h5 class="card-title">{props.feture5}</h5>
        <p class="card-text">{props.feturec5}</p>
   
      </div>
    </div>
  </div>
  
  <div class="col-sm-3">
    <div class="card border-primary text-center">
      <div class="card-body">
        <h5 class="card-title">{props.feture6}</h5>
        <p class="card-text">{props.feturec6}</p>
        
      </div>
    </div>
  </div>
  
  </div>

</div>
<br></br>
<br></br>
<hr/>
<div className=" chose">
  <h3>{props.whyunia} </h3>
</div>
<br></br>

<h4 style={{textAlign: "center"}}>{props.trustuser}</h4>

<div className="ratings">
<img src={Corporate2} class="img-fluid"   alt="Corporate2"></img>
</div>

      
  <div className="album py-5">
        
        <div className="container">

            <div className="row">
            <div className="col-md-4 ">
                  
                    <div className="card-body">
                    <h4 className="card-text"><center>{props.custo}</center></h4>
                            <p className="card-text"> <center>{props.last1}</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                               
                           

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-4 ">
                  
                    <div className="card-body">
                    <h4 className="card-text"><center>{props.verified}</center></h4>
                            <p className="card-text"><center>{props.last2}</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                               
                                
                          

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-4  ">
                  
                    <div className="card-body">
                    <h4 className="card-text"><center>{props.appoint}</center></h4>
                            <p className="card-text"> <center>{props.last3}</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                               
                           

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div>
                  </div>
                  </div>
                </div>
                </div>
             
                </>



        
        );
    }
    
    export default Corporate;