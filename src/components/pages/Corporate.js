import React from 'react';
import Navbar from '../inc/Navbar';
import AddCorporate from '../AddCorporate';
import {Link} from 'react-router-dom';
import Corporate1 from '../images/Corporateimage.jpg';
import Corporate2 from '../images/rating4.5.png';
import Corporathealth from '../images/corportatee.jpg';
import './Corporate.css';

function Corporate(props) {
    return(
        
        <>      
      <Navbar/>
   
           <img src={Corporate1}  class="img-fluid"  width="1349" height="700" alt="Corporate"/>
           <AddCorporate/>

           <div className="album py-5">
        
        <div className="container">
        
            <div className="row">
           
            <div className="col-md-6">

                    <div className="card-body">
                   
                    <img src= {Corporathealth} className="card-img-top" alt="Corporathealth" />
                            <div className="d-flex justify-content-between align-items-center">
                               </div>
                           
                            </div>
                        </div> 
                    
                  
                <div className="col-md-6">          
             <div className="card-body">
                    <h4 className="card-text">The corporate companies will boost the economy of the country.</h4>
                            <p className="card-text"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
</svg> Health of corporate employees </p>
<p className="card-text">  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
</svg> <small>Comprehensive health checkup</small></p>
<p className="card-text">  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
</svg> All your medical records
In one secure web. </p>
<p className="card-text">  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
</svg> Records are accessible only by you </p>
<p className="card-text">  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
</svg> Access your records across 3500+ centers </p>
<p className="card-text">  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
</svg> 24X7 Support </p>
<div class="col-md-6 text-center">
                              <Link to="/labtest">
                            <button type="button" class="btn btn-outline-primary"> Full-Body Helath Checkups</button></Link> <br/><br/>
                                </div>

                            <div className="d-flex justify-content-between align-items-center">
                             
                          
                          </div>    
                      
                    </div>
                    </div>

                </div>
                </div>
                </div>
 
    <div className="corporateee">
    <h1 style={{textAlign: "center"}} ><b>{props.heading1}</b></h1>
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