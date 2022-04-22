import React from 'react';
import {Link} from 'react-router-dom';
import Slider from '../inc/Slider';
import Navbar from '../inc/Navbar';
import './Mainpage.css';
import Lab from '../images/labs.jpg';
import Finddoctor from '../images/findd.jpg';
import Consult from '../images/consa.jpg';
import Surgerym from '../images/surgeryyyy.jpg';
import Periods from '../images/preg.jpg';
import Acne from '../images/acne9.jpg';
import Bedissue from '../images/bediss.jpg';
import Fever from '../images/feverflue.jpg';
import Depration from '../images/depre.jpg';
import Feeling from '../images/childnotfelling.jpg';
import Pregnency from '../images/pregne.jpg';
import Dentist from '../images/dentist12.jpg';
import Genral from '../images/genaa.jpg';
import Coronavirus from '../images/corona1.jpg';
import Health from '../images/dailyh.jpg';



function Mainpage (props) {
    return (

            <div>
              
             <Navbar/>

               <Slider />
               <br/>
               <div className="india">
              <h1 style={{textAlign:"center"}}><b>#India wants to see people
of all countries healthy</b></h1></div>
                <br/>
               
       

              
  

                <div className="album py-2">
        
        <div className="container">

            <div className="row">
       
            <div className="col-md-3 mt-6" >
                        <div className="card mb-4 border-primary box shadow">
                        <img src={Finddoctor} className="card-img-top"   alt="names" />
                            <div className="card-body">
                                <h6 className="card-text"> <b>{props.finddoctors}</b></h6>
                                <p className="card-text"> {props.appoint}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                <Link to="/allDoctors">
                                        <button type="button" className="btn btn btn-primary">
                                        Click Appoinment
                                        </button>
                                        </Link>
                                    
                              
                            </div>
                            </div>
                            </div>
                               
                            </div>
                            <div className="col-md-3 mt-6" >
                        <div className="card mb-4 border-dark box shadow">
                        <img src={Consult} className="card-img-top"   alt="names" />
                            <div className="card-body">
                                <h6 className="card-text"><b>{props.vconsult}</b></h6>
                                <p className="card-text">  {props.consult}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                <Link to="/consult">
                                        <button type="button" className="btn btn btn-primary">
                                            Click Consult
                                        </button></Link>
                                
                            </div>
                            </div>
                            </div>
                               
                            </div>
                            <div className="col-md-3 mt-6" >
                        <div className="card mb-4 border-success box shadow">
                        <img src={Lab}className="card-img-top"   alt="names" />
                            <div className="card-body">
                                <h6 className="card-text"><b>{props.lab1}</b></h6>
                                <p className="card-text">  {props.athome}</p>
                                <div className="d-flex justify-content-between align-items-center">
                               <Link to="/labtest">
                                        <button type="button" className="btn btn btn-primary">
                                            Click Labtest
                                        </button></Link>
                                 
                            </div>
                            </div>
                            </div>
                               
                            </div>
                            <div className="col-md-3" >
                        <div className="card mb-4 border-danger box shadow">
                        <img src={Surgerym} className="card-img-top"   alt="names" />
                            <div className="card-body">
                                <h6 className="card-text"><b>{props.best1}</b></h6>
                                <p className="card-text">  {props.best2}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                <Link to="/surgery">
                                        <button type="button" className="btn btn btn-primary">
                                            Click Surgeries
                                        </button></Link>
                              
                            </div>
                            </div>
                            </div>
                               
                            </div>
                            </div>
                            </div>
                            </div>
                            
        
  
               
{/*        
          <div className="col-md-10">
            <div className="card shadow  ">
                <div className="headi">
              
              <img src={Finddoctor} class="img-fluid" alt="Finddoctor"></img>
              </div>
              <div className="card-body">
                <div className="underline"></div>
                <h6><b>{props.finddoctors}</b></h6>
                <p>
                {props.appoint}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                <Link to="/allDoctors">
                <button type="button" class="btn btn-primary">{props.click1}</button>
                </Link>
              </div>
          
          </div>
          </div>
        </div> */}
       
       
       
       
        <br></br>
        <div class="p-3 mb-2 bg-primary text-white">
        <div className="album py-2">
        
        <div className="container">

            <div className="row">
            <div className="col-md-7">
              
                    <div className="card-body">
                            <h4 className="card-text mb-2">Consult top doctors online for any health concern</h4>
                            <p className="card-text">Private online consultation with verified doctors in all specialist</p>
                    
                    </div>

                  
                </div>
                </div>
                </div>
                </div>
        </div>
<br></br>



  
<div className="album py-5">
        
        <div className="container">
            <div className="row">
           
            <div className="col-md-2 mt-6" >
              <Link to="/consult">
                        <div className="card mb-4 box shadow">
                        <img src={Periods}className="card-img-top"   alt="Periods" />
                            <div className="card-body">
                                <h5 className="card-text"><small>{props.period}</small></h5>
                          
                                <div className="d-flex justify-content-between align-items-center">
                                <a href="/consult" className="CONSULT NOW">CONSULT NOW</a>
             <div className="spinner-grow text-primary spinner-grow-sm"  role="status">
              <span className="visually-hidden"> Loading...</span>
            </div>
                                    
                              
                            </div>
                            </div>
                            </div>
                            </Link>
                            </div>
                            
            <div className="col-md-2 mt-6" >
              <Link to="/consult">
                        <div className="card mb-4 box shadow">
                        <img src={Acne} className="card-img-top"   alt="Acne" />
                            <div className="card-body">
                                <h5 className="card-text"><small>{props.acne}</small></h5>
                          
                                <div className="d-flex justify-content-between align-items-center">
                                <a href="/" className="CONSULT NOW">CONSULT NOW</a>
             <div className="spinner-grow text-primary spinner-grow-sm"  role="status">
              <span className="visually-hidden"> Loading...</span>
            </div>
                                    
                              
                            </div>
                            </div>
                            </div>
                            </Link>
                            </div>
                            
            <div className="col-md-2 mt-6" >
              <Link to="/consult">
                        <div className="card mb-4 box shadow">
                        <img src={Bedissue} className="card-img-top"   alt="Bedissue"/>
                            <div className="card-body">
                                <h5 className="card-text"><small>{props.bed}</small></h5>
                          
                                <div className="d-flex justify-content-between align-items-center">
                                <a href="/" className="CONSULT NOW">CONSULT NOW</a>
             <div className="spinner-grow text-primary spinner-grow-sm"  role="status">
              <span className="visually-hidden"> Loading...</span>
            </div>
                                    
                              
                            </div>
                            </div>
                            </div>
                            </Link>
                            </div>
                            
            <div className="col-md-2 mt-6" >
              <Link to="/consult">
                        <div className="card mb-4 box shadow">
                        <img src={Fever}className="card-img-top"   alt="Periods" />
                            <div className="card-body">
                                <h5 className="card-text"><small>{props.cold}</small></h5>
                          
                                <div className="d-flex justify-content-between align-items-center">
                                <a href="/" className="CONSULT NOW">CONSULT NOW</a>
             <div className="spinner-grow text-primary spinner-grow-sm"  role="status">
              <span className="visually-hidden"> Loading...</span>
            </div>
                                    
                              
                            </div>
                            </div>
                            </div>
                            </Link>
                            </div>
                            <div className="col-md-2 mt-6" >
                              <Link to="/consult">
                        <div className="card mb-4 box shadow">
                        <img src={Feeling}className="card-img-top"   alt="Bedissue"/>
                            <div className="card-body">
                                <h5 className="card-text"><small>{props.child}</small></h5>
                          
                                <div className="d-flex justify-content-between align-items-center">
                                <a href="/" className="CONSULT NOW">CONSULT NOW</a>
             <div className="spinner-grow text-primary spinner-grow-sm"  role="status">
              <span className="visually-hidden"> Loading...</span>
            </div>
                                    
                              
                            </div>
                            </div>
                            </div>
                            </Link>
                            </div>
                            <div className="col-md-2 mt-6" >
                              <Link to="/consult">
                        <div className="card mb-4 box shadow">
                        <img src={Depration} className="card-img-top"   alt="Bedissue"/>
                            <div className="card-body">
                                <h5 className="card-text"><small>{props.depression}</small></h5>
                          
                                <div className="d-flex justify-content-between align-items-center">
                                <a href="/" className="CONSULT NOW">CONSULT NOW</a>
             <div className="spinner-grow text-primary spinner-grow-sm"  role="status">
              <span className="visually-hidden"> Loading...</span>
            </div>
                                    
                              
                            </div>
                            </div>
                            </div>
                            </Link>
                            </div>
                            </div>
                            </div>
                           
            </div>
     
      <div className="p-3 mb-2 bg-info text-dark">
      <div className="album py-2">
        
        <div className="container">

            <div className="row">
            <div className="col-md-7">
              
                    <div className="card-body">
                            <h4 className="card-text mb-2">Book an appointment for an in-clinic consultation</h4>
                            <p className="card-text">Find experienced doctors across all specialists</p>
                    
                    </div>

                  
                </div>
                </div>
                </div>
                </div>

      </div>
      <br></br>
     

      <div className="album py-3">
        
        <div className="container">

            <div className="row">
       
            <div className="col-md-4 mt-6" >
                        <div className="card mb-4 box ">
                        <img src={Pregnency} className="card-img-top"   alt="names" />
                            <div className="card-body">
                                <h6 className="card-text"> {props.Pregnancy}</h6>
                               
                                <div className="d-flex justify-content-between align-items-center">
                                <Link to="/allDoctors">
                                        <button type="button" className="btn btn btn-outline-primary">
                                        {props.gyno}
                                        </button>
                                        </Link>
                                    
                              
                            </div>
                            </div>
                            </div>
                               
                            </div>
                            <div className="col-md-4 mt-6" >
                        <div className="card mb-4 box">
                        <img src={Dentist} className="card-img-top"   alt="Dentist" />
                            <div className="card-body">
                                <h6 className="card-text"> {props.dent}</h6>
                               
                                <div className="d-flex justify-content-between align-items-center">
                                <Link to="/allDoctors">
                                        <button type="button" className="btn btn btn-outline-primary">
                                        {props.dentname}
                                        </button></Link>
                                
                            </div>
                            </div>
                            </div>
                               
                            </div>

                            <div className="col-md-4 mt-6" >
                        <div className="card mb-4 box ">
                        <img src={Genral}className="card-img-top"   alt="General" />
                            <div className="card-body">
                                <h6 className="card-text"> {props.rightdoct}</h6>
                               
                                <div className="d-flex justify-content-between align-items-center">
                                <Link to="/allDoctors">
                                        <button type="button" className="btn btn btn-outline-primary">
                                        {props.general}
                                        </button>
                                        </Link>
                                    
                              
                            </div>
                            </div>
                            </div>
                               
                            </div>
                            </div>
                            </div>
                            </div>



        {/* <div className="column">
        <div className="col-md-10">
        <div className="card mb-4 box-shadow">
            <img src={Pregnency}  className="card-img-top" alt="Doctor"></img>
            <div className="card-body">
              <div className="underline"></div>
             
              <p className="card-text">
             {props.Pregnancy}
              </p>
              <button type="button"  class="btn btn-outline-primary">{props.gyno}</button>
            </div>
          </div>
        </div>
        </div>
     */}
  <hr></hr>
  <br></br>
 
  <h4 style={{textAlign:"center"}}>{props.article}
</h4>
<p style={{textAlign:"center"}}>{props.toparticle}</p>
<Link to="/readarticle">
<div class="col-md-12 text-center">
<button  type="button"  class="btn btn-primary">{props.read}</button></div>
</Link>

<br/>
<br></br>


<div className="album py-7 ">
        
        <div className="container">

            <div className="row">
            <div className="col-md-6 px-8">
                    <div className="card mb-4 box shadow">
                    <img src={Coronavirus}  className="card-img-top"   alt="names" />
                    <div className="card-body">
                            <h4 className="card-text"><center>{props.articlename}</center></h4>
                            <p className="card-text"> <center>{props.title1}</center></p>
                            <p className="card-text"><b> <small><center>{props.drname}</center></small></b></p>
                            <div className="d-flex justify-content-between align-items-center">
                               
                                
                            </div>

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-6 ">
                    <div className="card mb-4 box shadow">
                    <img src={Health}  className="card-img-top"   alt="Health" />
                    <div className="card-body">
                            <h4 className="card-text"><center>{props.healtht}</center></h4>
                            <p className="card-text"> <center>{props.title2}</center></p>
                            <p className="card-text"> <b><small><center>{props.drname2}</center></small></b></p>
                            <div className="d-flex justify-content-start align-items-center">
                               
                                
                            </div>

                        </div>
                      
                    
                    </div>

                  
                </div>
                </div></div>
                </div>

<hr></hr>
<br></br>
<br></br>


<h3 style={{textAlign: "center"}}>{props.millionpatient}</h3>


<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
    <div className="px-4 py-5 my-12 text-center">
        <h5>{props.testimonial}</h5>
        <p className="btn btn btn-lg px-4 gap-3">{props.pname1}</p>
        </div>
     
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <div className="px-4 py-5 my-12 text-center">
        <h5>{props.testimonial2}</h5>
        <p className="btn btn btn-lg px-4 gap-3">{props.pname2}</p>
        </div>
      
    </div>
    <div class="carousel-item">
    <div className="px-4 py-5 my-12 text-center">
        <h5>{props.testimonial3}</h5>
        <p  className="btn btn btn-lg px-4 gap-3">{props.pname3}</p>
        </div>
     
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


  <br></br>
  <br></br>
  
            </div>
        );
    }
    
    export default Mainpage;