import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { collection, getDocs, } from "firebase/firestore";
import {db} from '../../firebase'
import { Form, Alert, InputGroup, Button, ButtonGroup, Card } from "react-bootstrap";
import Health1 from '../images/health1.jpg';

import Ceo1 from '../images/ceo1.jpg';
import RegisterDoc from '../pages/RegisterDoc';
import Navbar from '../inc/Navbar';
import Job from '../pages/Job';
import './About.css';

function About (props) {

  const [employees, setEmployees] = useState([])
  const navigate = useNavigate()
  const employeesCollectionRef = collection(db, "employees");
  useEffect(() => {

      const getEmployees = async () => {
          const data = await getDocs(employeesCollectionRef);
          setEmployees(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
      }

      getEmployees()
  }, [])

    return(
      <>
        <Navbar/>
     
      <ul class="nav nav-pills mb-3 bg-light shadow"  id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">About uniAonefamily</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Leadership</button>
  </li>

</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
  <div className="abouthead">
      <br/><br/>
      <h1 style={{textAlign: "center",}}> <b>High quality secure healthcare platform</b></h1>
      <br/>
      <h2 style={{textAlign: "center", }}>Our Mission</h2>
      
      <br/><br/>

      
  </div>

  <h5 style={{textAlign: "center"}}> Uniaone Family aims to make quality healthcare affordable and accessible for people in 110+ countries. People <br/>in all countries can easily consult with the right doctor about their health</h5>
  <br/><br/><br/><br/>
 
  <img  src={Health1} class="img-fluid"  width="1349" height="700" alt="Health1"></img>
 


<div className="album py-5">
        
        <div className="container">
        <div className="card mb-4 box-shadow">
            <div className="row">
           
            <div className="col-md-6 ">
            
                    <div className="card-body">
                    
                      
                    <h2 className="card-text"><center>#We want to keep all people healthy</center></h2><br/>
                    <p className="card-text"><center>Our mission is to keep everyone healthy and to reach the right doctor easily.</center></p>
                    <p className="card-text"> <center>The Uniaone family will be on duty 24 hours a day for the healthcare of 1.4 billion people in India..</center></p>



    <br/>
 

  <Link to="/allDoctors">
  <div class="col-md-12 text-center">
  <Button variant="outline-primary">#India's Top Doctor List</Button>
  </div>
  </Link>
 
 <br/>
</div>
  

                            <div className="d-flex justify-content-between align-items-center">
                               </div>
                           
                    </div>
                    
                  
                <div className="col-md-6 ">
              
                    <div className="card-body">
                    <h4 className="card-text"></h4>
                    <br/>
                    <Link to="/labtest">
                    <button type="button" class="btn btn-outline-primary">#World Class Diagnostic Test  NABL & CAP CERTIFIED</button></Link><br/><br/>
                    <Link to="/clinci">
                    <button type="button" class="btn btn-outline-primary">#India's Top Varified Clinic  5000+ Patient Outstabding Feedback</button></Link><br/><br/>
                    <Link to="/xray">
                    <button type="button" class="btn btn-outline-primary"> #India's Advance Scan Technology    Fast Scan & Xray Technology</button></Link><br/><br/>
                  

                            <div className="d-flex justify-content-between align-items-center">
                               
                                
                          </div>

                   
                      
                    </div>
                    </div>

                  
                </div>
                </div>
                </div>
                </div>
 
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><br/>

    <br/>
    
    <div className="album py-5">
        
            <div className="container">

                <div className="row">
                <div className="col-md-10">
                    
                        <div className="card-body">
                                <h1 className="card-text"><b>Leadership at Uniaonefamily</b></h1>
                                <br/>
                                <h5 className="card-text"> Uniaone Family Company has been established to keep all the families of the world healthy.</h5>
                                <h5 className="card-text"> We will try to do better every day to keep the health of every human being healthy.</h5>
                                <h5 className="card-text"> Uniaone family wants to make people's lives easier by solving people's problems.</h5>
                                <h5 className="card-text"> Health problems, computer education has taken a pledge to solve the problem.</h5>
                                {/* <h5 className="card-text">20% of this business will be spent on women's protection and women's technology education</h5>
                                <h5 classNamne="card-text"> Technology education for blind, handicapped and orphans will be provided free of cost at 10% of the cost of this business.
We started this work, we taught blind, handicapped computers. I want to teach updated technology to all the blind, handicapped, orphaned boys and girls in India.</h5> */}
                                <div className="d-flex justify-content-between align-items-center">
                                   
                                    
                         

                        
                        </div>

                      
                    </div>
                    </div></div>
                    </div>
    

 <br/><br/><br/>
 </div>
 <br/><br/>
 <div className="album py-5">
        
        <div className="container">
       
            <div className="row">
           
            <div className="col-md-6 ">
            
                    <div className="card-body">
                    
                       {/* <img src="/"  className="card-img-top" alt="doc1" /> */}
                            <div className="d-flex justify-content-between align-items-center">
                               </div>
                           
                            </div>
                        </div> 
                    
                  
                <div className="col-md-6 ">
              
                    <div className="card-body">
                    <h4 className="card-text">Tanmay Sarkar</h4>
                            <p className="card-text"> CO-FOUNDER & CEO</p>
<p className="card-text"> 'I am learning every day to keep every person healthy''</p>

                            <div className="d-flex justify-content-between align-items-center">
                               
                                
                          </div>

                   
                      
                  
                    </div>

                  
                </div>
                </div>
                </div>
              
                 
 <br/><br/><br/><br/>
 <br/>
 <hr/>
 <div className="album py-5">
        
        <div className="container">

            <div className="row">
            {employees.map((employee) => { return (
            <div className="col-md-3 mt-6" >
                        <div className="card mb-4 box shadow">
                        <img  className="card-img-top"  src={employee.empImg} alt="names" />
                            <div className="card-body">
                                <h3 className="card-text">  {employee.detail}</h3>
                                <h5 className="card-text">{employee.post}</h5>
                                <div className="d-flex justify-content-start align-items-center">
                                    
                                    
                                </div>
                            </div>
                            </div>
                            </div>
                                )})} 
                            </div>
</div>
                            </div>
  </div>
  </div>
 
 
</div>
<br/><br/><br/>

        </>


);
}

export default About;