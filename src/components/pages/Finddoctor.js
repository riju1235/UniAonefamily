import React, { useState, useEffect} from 'react';
import Navbar from '../inc/Navbar';
import {Link, useNavigate} from 'react-router-dom';
import { collection, getDocs, } from "firebase/firestore";
import {db} from '../../firebase'
import FindDoctor from '../images/bookdoctor.jpg';
import Newtonp from '../images/newtonpatel.jpg';
import DoctorSneha from '../images/sneha.jpg';
import Healthrecord from '../images/healthrecord.png';
import Appd from '../images/APPv2.jpg';
import Appinsta from '../images/APPINSTA.jpg';
import playstoreicon from '../images/playicon.png';
import appleicon from '../images/appleicon.png';


import './Finddoctor.css';


function Finddoctor (props) {
  
    return (

        <div>
          <Navbar/>
            <br/><br/><br/>
            <div className="findd">
      
      <img src={FindDoctor}  class="img-fluid" width="1350" height="500" alt="..."></img>
    </div>
   
    
        
        <form>
    <div className="areas5">
      <div className="col">
        <input type="text" class="form-control" placeholder="Enter Location" name="location"/>
      </div>
      <div className="col">
        
        <input type="text" class="form-control" placeholder="Search doctor, clinic, hospital, etc         " name="doctors, clinic, hospital"/>
      </div>
    </div>
    <br/><br/>
  </form>
 
  <div className="doctorimages shadow">
 
<div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src="/"  alt="General"></img>
    </div>
    <div className="col-md-8">
      <div className="card-body ">
        <h5 className="card-title">{props.topd1}</h5>
        <p className="card-text"> {props.speciality}</p>
        <h6>{props.quali}</h6>
        <p className="card-text"><small className="text-muted">{props.degree}</small></p>
         <button  class="btn btn-primary">Book Appointment</button> <Link to=""><a  class="btn btn-outline-danger">Video Consult</a> </Link> <Link to=""> <a  class="btn btn-primary">View Profile</a></Link>
      </div>
    </div>
  </div>
  </div>            

</div>
<div className="doctorimages shadow">
<div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={Newtonp}  alt="Newtonp"/>
    </div>
    <div className="col-md-8">
      <div className="card-body ">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text"> {props.degree2}</p>
        <h6>{props.quali2}</h6>
        <p className="card-text"><small className="text-muted">{props.degree3}</small></p>
        <Link to="/">  <a  class="btn btn-primary">Book Appointment </a>
        </Link> <a  class="btn btn-outline-danger">Video Consult</a><a href="/" class="btn btn-primary">View Profile</a>
      </div>
    </div>
  </div>
  </div>
</div>
<div className="doctorimages shadow">
<div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={DoctorSneha}  alt="DoctorSneha"/>
    </div>
    <div className="col-md-8">
      <div className="card-body ">
        <h5 className="card-title1">{props.topd2}
        
           <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20"  fill="currentColor " class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg> </h5>
        <p className="card-text"> {props.degree4}</p>
        <h6>{props.quali4}</h6>
        <p className="card-text"><small className="text-muted">{props.degree5}</small></p>
        <a  class="btn btn-primary">Book Appointment</a>  <Link to=""> <a  class="btn btn-outline-danger">Video Consult</a> </Link> <Link to="/"> <a  className="btn btn-primary">View Profile</a>
        </Link>
      </div>
    </div>
  </div>
  </div>

</div>
<br/><br/>
<hr/>
<div className="fino">
<div className="row featurette">
      <div className="col-md-7">
        <div className="appdown">
        <h1 className="featurette-heading">Instant appointment with  <span className="text-muted">doctor.</span></h1>
        </div>
        <br/>
        
          <div className="colo">
          <h5> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg> {props.istaapp}
</h5>
</div>

          <div className="colo">
          <h5>  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>{props.patient2} 
</h5>
</div>
<div className="colo">
          <h5>  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg> {props.patient3}
</h5>
</div>

<br></br>
<br></br>
<div className="bcolor">
<Link to="#">
<h5 className="text-center" style={{ color: 'white' }}> {props.textdoc1}</h5>
</Link>


</div>


      </div>
      
      <div className="col-md-2 order-md-5">
      <div className="downlowad">
      <img src={Appinsta}   alt="Appinsta"/>
      </div>

      </div>
    </div>

<br></br>
<br></br>
</div>

<br></br>
<br></br>

        </div>
        );
    }
    
    export default Finddoctor;