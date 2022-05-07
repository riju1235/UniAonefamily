// import React from 'react';
// import {Link} from 'react-router-dom';
// import Labtest from '../images/LABHEAD1.jpg';
// import Fever from '../images/fevers.jpg';
// import Skin from '../images/skin.jpg';
// import Cancer from '../images/cancer.jpg';
// import Kidney from '../images/kidney.jpg';
// import Bone from '../images/bone.jpg';
// import Sexual from '../images/sexchual.jpg';
// import WomenHealth from '../images/womenhealthcheck.jpg';
// import Basichealth from '../images/basiccheckup.jpg';
// import Advancecheck from '../images/Advancecheckup.jpg';
// import Surakha from '../images/SURAKHA.jpg';
// import Header from '../inc/Header';

// import './Labtest.css';

// function LabTest(props) {
//   return (
//      <div className="diagno">
       
//          <br/><br/><br/><br/>
//          <Header/>
//          <form>
//     <div className="areas">
//       <div className="col">
//         <input type="text" class="form-control" placeholder="Select any city or locality" name="location"/>
//       </div>
//       <div className="col">
//         <input type="text" class="form-control" placeholder="Search for tests and Profiles         " name="doctors, clinic, hospital"/>
//       </div>
//     </div>
//   </form>
  
//   <img src={Labtest} width="1349" height="500" alt="LabTest"/>
//   <br></br>
//   <br></br>
//   <br></br>
  
//   <div className="diag1">
//   <h4>{props.mainl}</h4>
//   </div>
//   <br></br>
//   <div className="labs">
//     <div className="col">
//   <div className="test1">
//   <div className="card text-center" >
//   <div className="card-body">
//     <h5 className="card-title">{props.testn1}</h5>
//     <p className="card-text">{props.testc1}</p>
//     <h6 >₹{props.rupees}</h6>
    
//     <a href="#" class="btn btn-primary">ADD</a>
//     </div>
//   </div>
// </div>
// </div>
// <div className="col">
// <div className="test1">
//   <div className="card text-center" >
//   <div className="card-body">
//     <h5 className="card-title">{props.testn2}</h5>
//     <p className="card-text">{props.testc2}</p>
//     <h6 >₹{props.rupees2}</h6>
   
//     <a href="#" class="btn btn-primary">ADD</a>
//     </div>
//   </div>
// </div>
// </div>
// <div className="col">
// <div className="test1">
//   <div className="card text-center" >
//   <div className="card-body">
//     <h5 className="card-title">{props.testn3}</h5>
//     <p className="card-text">{props.testc3}</p>
//     <h6 >₹{props.rupees3}</h6>
  
//     <a href="#" class="btn btn-primary">ADD</a>
//     </div>
//   </div>
// </div>
// </div>
// <div className="col">
// <div className="test1">
//   <div className="card text-center" >
//   <div className="card-body">
//     <h5 className="card-title">{props.testn4}</h5>
//     <p className="card-text">{props.testc4}</p>
//     <h6 >₹{props.rupees4}</h6>
  
//     <a href="#" class="btn btn-primary">ADD</a>
//     </div>
//   </div>
// </div>
// </div>
// <div className="col">
// <div className="test1">
//   <div className="card text-center" >
//   <div className="card-body">
//     <h5 className="card-title">{props.testn5}</h5>
//     <p className="card-text">{props.testc5}</p>
//     <h6 >₹{props.rupees5}</h6>
  
//     <a href="#" class="btn btn-primary">ADD</a>
//     </div>
//   </div>
// </div>
// </div>
// </div>
// <br></br>
// <br></br>

// <div className="diag2">
// <h4>{props.Screening}</h4>
// </div>
// <br></br>
// <div className="diagbook">
//   <div className="col">
// <div className="test2">
//   <div className="card text-center" >
//   <div className="card-body">
//   <img src={Fever} class="card-img-top rounded-circle "alt="Fever"/>
//   <br></br>
//     <a href="#" class="btn btn-outline-primary">Fever</a>
//     </div>
//   </div>
// </div>
// </div>
// <div className="col">
// <div className="test2">
//   <div className="card text-center" >
//   <div className="card-body">
//   <img src={Skin} class="card-img-top rounded-circle "alt="Skin"/>
//   <br></br>
//     <a href="#" class="btn btn-outline-primary">Skin</a>
//     </div>
//   </div>
// </div>
// </div>
// <div className="col">
// <div className="test2">
//   <div className="card text-center" >
//   <div className="card-body">
//   <img src={Cancer} class="card-img-top rounded-circle "alt="Cancer"/>
//   <br></br>
//     <a href="#" class="btn btn-outline-primary">Cancer</a>
//     </div>
//   </div>
// </div>
// </div>
// <div className="col">
// <div className="test2">
//   <div className="card text-center" >
//   <div className="card-body">
//   <img src={Kidney} class="card-img-top rounded-circle "alt="Kidney"/>
//   <br></br>
//     <a href="#" class="btn btn-outline-primary">Kidney</a>
//     </div>
//   </div>
// </div>
// </div>
// <div className="col">
// <div className="test2">
//   <div className="card text-center" >
//   <div className="card-body">
//   <img src={Bone} class="card-img-top rounded-circle "alt="Kidney"/>
//   <br></br>
//     <a href="#" class="btn btn-outline-primary">Bone</a>
//     </div>
//   </div>
// </div>
// </div>
// <div className="col">
// <div className="test2">
//   <div className="card text-center" >
//   <div className="card-body">
//   <img src={Sexual} class="card-img-top rounded-circle "alt="Sexual"/>
//   <br></br>
//     <a href="#" class="btn btn-outline-primary">Sexual</a>
//     </div>
//   </div>
// </div>
// </div>
// </div>
// <br></br>
// <br></br>
// <div className="bodyhealth">
// <h4>Popular Health Checkup Packages</h4>
// <div className="btn-group" role="group" aria-label="Basic outlined example">
//   <button type="button" class="btn btn-outline-primary">Featured Checkups</button>
//   <button type="button" class="btn btn-outline-primary">Women's Health</button>
//   <button type="button" class="btn btn-outline-primary">Men's Health</button>
// </div>
// </div>

// <br></br>
// <br></br>
// <div className="bodyhealths">
//   <div className="column">
// <div className="fullbody">
// <div className="card border-dark mb-3">
// <img src={WomenHealth} class="card-img-top" alt="WomenHealth"/>
//   <div className="card-header">{props.age}</div>
//   <div className="card-body text-dark">
//     <h5 className="card-title">{props.checkupn}</h5>
//     <h6>{props.testno}</h6>
//     <p className="card-text">₹{props.rupeesb1}</p>
//     <a href="#" class="btn btn-primary">BOOK NOW</a>
//     </div>
//   </div>
// </div>
// </div>
// <div className="column">
// <div className="fullbody">
// <div className="card border-dark mb-3">
// <img src={Basichealth} class="card-img-top" alt="Basichealth"/>
//   <div className="card-header">{props.age2}</div>
//   <div className="card-body text-dark">
//     <h5 className="card-title">{props.checkup2}</h5>
//     <h6>{props.testno2}</h6>
//     <p className="card-text">₹{props.rupeesb2}</p>
//     <a href="#" class="btn btn-primary">BOOK NOW</a>
//     </div>
//   </div>
// </div>
// </div>
// <div className="column">
// <div className="fullbody">
// <div className="card border-dark mb-3">
// <img src={Advancecheck} class="card-img-top" alt="Advancecheck"/>
//   <div className="card-header">{props.age3}</div>
//   <div className="card-body text-dark">
//     <h5 className="card-title">{props.checkupn3}</h5>
//     <h6>{props.testno3}</h6>
//     <p className="card-text">₹{props.rupeesb3}</p>
//     <a href="#" class="btn btn-primary">BOOK NOW</a>
//     </div>
//   </div>
//   </div>
// </div>

// </div>
// <hr/>

// <br></br>
// <div className="partnerlab1">
// <h4 className="text-blue">{props.partnerlab}</h4>
// <p>{props.partnerl1} <br>
// </br>{props.partnerl2br}</p>

// <img src={Surakha}  alt="Surakha"/>
// </div>
// <br></br>
// <br></br>
// <hr/>
// <br></br>
// <div className="due">
// <h2>{props.whylab}</h2>
// </div>
// <br></br>
// <br></br>
// <div className="uniaoneservices">
//   <div className="col">
// <h4><small>{props.sample}</small></h4>
// <p>{props.whyl1}<br></br>{props.whyl1br}</p>
// </div>
// <div className="col">
// <h4><small>{props.sample2}</small></h4>
// <p>{props.whyl2}</p>
// </div>
// <div className="col">
// <h4><small>{props.sample3}</small></h4>
// <p>{props.whyl3}</p>
// </div>
// </div>
// <br></br>
// <br></br>
// <br/>

// <div class="p-3 mb-2 bg-light text-black"><br/>
// <div className="work">
// <h3>{props.itworkl}</h3>
// </div>
// <br/>
// <br/>
// <br></br>
// <div className="icons">
//   <div className="column">
// <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-thermometer-half" viewBox="0 0 16 16">
//   <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z"/>
//   <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
// </svg>
// </div>
// <div className="column">
// <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16">
//   <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
//   <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
// </svg>
// </div>
// <div className="column">
// <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-file-earmark-medical-fill" viewBox="0 0 16 16">
//   <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-3 2v.634l.549-.317a.5.5 0 1 1 .5.866L7 7l.549.317a.5.5 0 1 1-.5.866L6.5 7.866V8.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L5 7l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V5.5a.5.5 0 1 1 1 0zm-2 4.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm0 2h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"/>
// </svg>
// </div>
// </div>
// <div className="labtestbook">
//   <div className="column">
// <p className=" text-center">{props.itwork1}</p>
// </div>
// <div className="column">
// <p className=" text-center">{props.itwork2}</p>
// </div>
// <div className="column">
// <p className=" text-center">{props.itwork3}</p>

// </div>
// </div>
// <br/>
// <br/>
// </div>
// <br/>
// <br/>
// <be/>
// <div className="customer">
// <h3>{props.titlehappy}</h3>
// </div>

// <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div class="carousel-inner">
//     <div class="carousel-item active" data-bs-interval="10000">
//     <div className="px-4 py-5 my-12 text-center">
//         <h4>{props.customertell}</h4>
//         <p className="btn btn btn-lg px-4 gap-3">{props.customername}</p>
//         </div>
     
//     </div>
//     <div class="carousel-item" data-bs-interval="2000">
//     <div className="px-4 py-5 my-12 text-center">
//         <h5> {props.customertell2}</h5>
//         <p className="btn btn btn-lg px-4 gap-3">{props.customername2}</p>
//         </div>
      
//     </div>
//     <div class="carousel-item">
//     <div className="px-4 py-5 my-12 text-center">
//         <h5>{props.customertell3}</h5>
//         <p  className="btn btn btn-lg px-4 gap-3">{props.customername3}</p>
//         </div>
     
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>

// <br/>

// </div>


    
     
     

     
//   );
// }

// export default LabTest;



import React, {useReducer, useState, useEffect} from 'react';

import Navbar from '../inc/Navbar';
import Checkup from '../pages/Checkup';

import './Labtest.css';
import {Link} from 'react-router-dom';
import Labtest from '../images/LABHEAD1.jpg';



import Surakha from '../images/SURAKHA.jpg';

import { collection, getDocs, } from "firebase/firestore";
import {db} from '../../firebase'
import { cartReducer } from '../../redux/cartReducer';
import { useUserAuth } from '../../contexts/UserAuthContext'

function LabTest(props) {
  const [showPerPage, setShowPerPage] = useState(4);
  const [pagination, setPagination] =useState({
      start: 0,
      end: showPerPage,
  });

  const onPaginationChange = (start,  end) =>{
      setPagination({start: start, end: end});
  };
  const [searchTerm, setsearchTerm] = useState("");
  const [labtests, setLabtests] = useState([])
  const labtestRef = collection(db, "Labtests")
  const [checkups, setCheckups] = useState([])
  const checkup1Ref = collection(db, "Checkups")





  useEffect(() => {
    const getlabtests = async () => {
        const data = await getDocs(labtestRef);
        setLabtests(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    }
    getlabtests()
}, [])
const {
  state: { cart },
  dispatch,
} = useUserAuth();

useEffect(() => {
  const getcheckups = async () => {
      const data = await getDocs(checkup1Ref);
      setCheckups(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
  }
  getcheckups()
}, [])

  // const products = [...Array(2)].map(() => ({
  //   name: {props.testn1},
  //   price: price,
  // }));
  // const [state, dispatch] = useReducer(cartReducer, {
  //   Labtests: labtestRef,
  //   cart: [],
  // });

return (
<div >
  <Navbar/>

  <img src={Labtest}  class="img-fluid"   width="1349" height="500" alt="..."></img>
  {/* <img src={Labtest} width="1349" height="500"  alt="LabTest"/> */}
  <br></br>
  <br></br>
  <div className="album py-2">
        
            <div className="container">

                <div className="row">
                <div className="col-md-4 ">
                        
                        <div className="card-body">
                        <input type="text" class="form-control" placeholder="Search for tests and Profiles" name="location" 
                        onChange ={(e) => {
                          setsearchTerm(e.target.value);
                        }}
                        />
                                <div className="d-flex justify-content-between align-items-center">
                                   
                                    
                            

                            </div>
                          
                        
                        </div>

                      
                    </div>
                  
             
                    </div>
                    </div>
                    </div>
                    <div className="album py-1">
        
        <div className="container">

            <div className="row">
            <div className="col-md-9 ">
              
                    <div className="card-body">
                            <h3 className="card-text mb-4">Top Booked Diagnostic Tests</h3>
                    
                    </div>
                </div>
                </div>
                </div>
                </div>
  <div className="album py-3">
        
        <div className="container">

  <div class="row">
    {labtests.filter((val)=>{
      if (setsearchTerm === ""){
        return val;
      } else if (
        val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.detail.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.price.toLowerCase().includes(searchTerm.toLowerCase())
      ){
        return val;
      }
    }).map((labtest) => { return (
      <div className="col-md-3" key={labtest.id}>
       
       <div className="card  mb-4 border-dark box shadow ">
            <div className="card-body">
            <h5 className="card-text">{labtest.name}</h5>
              <p className="card-text">{labtest.detail}</p>
              <h6 className="card-text" >₹{labtest.price}</h6>
              <div className="d-flex justify-content-between align-items-center">
              {cart.some((p) => p.id === labtest.id) ? (
             
                <button onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: labtest,
                  })
                } className='btn btn-danger'>Remove</button>
              ):(
               
              <button onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: labtest,
                })
                
              } class="btn btn-primary">ADD</button>
              )}
            </div>
          </div>
        </div>
   </div>
  
    )})}

  </div>

  </div>
 
  </div>




{/* <div className="test2">
  <div className="card text-center" >
  <div className="card-body">
  <img src={Fever} class="card-img-top rounded-circle "alt="Fever"/>
  <br></br>
    <button type="button" class="btn btn-outline-primary">Fever</button>
    </div>
  </div>
</div> */}





<div className="album py-1">
        
        <div className="container">

            <div className="row">

            {checkups.map((checkup1) => { return (
                <div className="col-md-3"  key={checkup1.id}>
                    <div className="card mb-4  box-shadow">
                        <img src="/" className="card-img-top"   alt="doc1"/>
                        <div className="card-body">
                        <h6 className="card-text">24X7 HOURS</h6><br/>
                            <h5 className="card-text">{checkup1.detail}</h5>
                            <p className="card-text">₹{checkup1.price}</p>
                        
                            <div className="d-flex justify-content-between align-items-center">
              {cart.some((p) => p.id === checkup1.id) ? (
             
                <button onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload:checkup1,
                  })
                } className='btn btn-danger'>Remove</button>
              ):(
               
              <button onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: checkup1,
                })
                
              } class="btn btn-primary">ADD</button>
              )}
            </div>
          </div>
        </div>
   </div>
  
    )})}

  </div>
 
  </div>
  </div>
                      


<Checkup/>
<br></br>





<hr/>

<br></br>
<div className="album py-1">
        
        <div className="container">

            <div className="row">
            <div className="col-md-6 ">
              
                    <div className="card-body">
                            <h5 className="card-text mb-3">Our Partner Labs</h5>
                            <p className="card-text">Your tests will be conducted in one of our partner labs
to ensure highest accurachy of your reports.</p>
                    </div>

                  
                </div>
                </div>
                </div>
                </div>

                <div className="album py-1">
        
        <div className="container">

            <div className="row">
            <div className="col-md-6">
            <div className="mb-2">
            <img src={Surakha}  class="img-fluid"  alt="Surakha"/>
                </div>
                </div>
                </div>
                </div>
                </div>
<br></br>
<hr/>
<br></br>

<h2 style={{textAlign: "center"}}>{props.whylab}</h2>

<br></br>
<br></br>


<div className="album py-3">
        
        <div className="container">

            <div className="row">
            <div className="col-md-4 ">
                  
                    <div className="card-body">
                    <h5 className="card-text"><center>Home sample collection for free</center></h5>
                            <p className="card-text"> <center>A certified professional will collect your sample
from your preferred location</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                               
                           

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-4 ">
                  
                    <div className="card-body">
                    <h5 className="card-text"><center>Get digital report within a day</center></h5>
                            <p className="card-text"><center>Our labs ensure turn-around-time of 24 hours from specimen pickup</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                               

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-4 ">
                  
                    <div className="card-body">
                    <h5 className="card-text"><center>Offers and affordable prices</center></h5>
                            <p className="card-text"> <center>Get great discounts and offers on tests and packages</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                               
                           

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div>
                  </div>
                  </div>
        </div>
        </div>

<br/>
<div class="p-3 mb-2 bg-light text-black"><br/>

<h3 style={{textAlign: "center"}}>{props.itworkl}</h3>

<br></br>
<br></br>

<div class="d-flex justify-content-around">
<div className="labtestbook">
  {/* <div className="column"> */}
<p className=" text-center">{props.itwork1}</p>
{/* </div> */}
{/* <div className="column"> */}
<p className=" text-center">{props.itwork2}</p>
{/* </div> */}
{/* <div className="column"> */}
<p className=" text-center">{props.itwork3}</p>


{/* </div> */}
</div>
</div>
<br/>

</div>
<br/>
<br/><br/>

<h3 style={{textAlign: "center"}}>{props.titlehappy}</h3>


<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
    <div className="px-4 py-5 my-12 text-center">
        <h5>{props.customertell}</h5>
        <p className="btn btn btn-lg px-4 gap-3">{props.customername}</p>
        </div>
     
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <div className="px-4 py-5 my-12 text-center">
        <h5> {props.customertell2}</h5>
        <p className="btn btn btn-lg px-4 gap-3">{props.customername2}</p>
        </div>
      
    </div>
    <div class="carousel-item">
    <div className="px-4 py-5 my-12 text-center">
        <h5>{props.customertell3}</h5>
        <p  className="btn btn btn-lg px-4 gap-3">{props.customername3}</p>
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

<br/>
<br/>
</div>


    
     
     

     
  );
}

export default LabTest;