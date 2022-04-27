import React, {useReducer, useState, useEffect} from 'react';
import PaginationOld from './PaginationOld';
import { collection, getDocs, } from "firebase/firestore";
import {db} from '../../firebase'
import { cartReducer } from '../../redux/cartReducer';
import { useUserAuth } from '../../contexts/UserAuthContext'

import Navbar from '../inc/Navbar';
import './Consult.css';
// import Reactplayer from 'react-player'
import Consultation from '../images/cons.jpg';

function Consult(props) {
  const [showPerPage, setShowPerPage] = useState(4);
  const [pagination, setPagination] =useState({
      start: 0,
      end: showPerPage,
  });

  const onPaginationChange = (start,  end) =>{
      setPagination({start: start, end: end});
  };
  const [searchTerm, setsearchTerm] = useState("");
  
    

  const [pconsults, setPconsults] = useState([])
  const pconsultRef = collection(db, "Pconsults")
  const [consults, setConsults] = useState([])
  const consultRef = collection(db, "Consults")

//   useEffect(() => {
//     const getpconsults = async () => {
//         const data = await getDocs(pconsultRef);
//         setPconsults(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
//     }
//     getpconsults()
// }, [])




  useEffect(() => {
    const getpconsults = async () => {
      const data = await getDocs(pconsultRef);
      setPconsults(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
  }
  getpconsults()
    const getconsults = async () => {
        const data = await getDocs(consultRef);
        setConsults(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    }
    getconsults()
}, [])
const {
  state: { cart },
  dispatch,
} = useUserAuth();

  return (
     
    <div className="special">
      <Navbar/>
      <br/><br/><br/>
      
           
           <img src={Consultation} class="img-fluid"   width="1349" height="500" alt="..."></img>
        

           <div className="album py-2">
        
        <div className="container">

            <div className="row">
            <div className="col-md-4 ">
              
                    <div className="card-body">
                            <h3 className="card-text mb-4">20+ Speciality</h3>
                            <p className="card-text">Consult with top Doctors across specialities</p>
                    
                    </div>

                  
                </div>
                </div>
                </div>
                </div>

           <div className="album py-1">
        
            <div className="container">

                <div className="row">
                <div className="col-md-6">
                        
                        <div className="card-body">
                        <input type="text" class="form-control" placeholder="Ex. Fever, Sexology" name="location" 
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

           <div className="album py-3">
        
            <div className="container">

                <div className="row">

                {consults.filter((val)=>{
                  if (setsearchTerm === ""){
                    return val;
                  } else if (
                  
                    val.detail.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    val.price.toLowerCase().includes(searchTerm.toLowerCase()) 
                  ){
                    return val;
                  }
                }).map((consult) => { return (
                    <div className="col-md-2" key={consult.id}>
                        <div className="card mb-4 box-shadow">
                            <img className="card-img-top "  src={consult.consultImg}  alt="doc1" />
                            <div className="card-body">
                                <h6 className="card-text"><center>{consult.detail}</center></h6>
                                <p className="card-text"><center> ₹{consult.price}</center></p>
                            
                               
                                {cart.some((p) => p.id === consult.id) ? (
                         <div class="col-md-12 text-center">        
                <button onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: consult,
                  })
                } className='btn btn-danger'>Remove</button></div>
              ):(
                <div class="col-md-12 text-center">
              <button onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: consult,
                })
                
              } class="btn btn-primary">Consult</button></div>
              )}
            </div>
          </div>
         
        </div>
 
    )})}
                                   

        
        
    </div>
    </div>    


    </div>

{/* 
          //  <div className="roundc">
          //  <div class="d-flex  flex-wrap">
          //  {consults.map((consult) => { return ( */}
          {/* //    <div className="column" key={consult.id}> */}
         
  
  {/* <div className="card-body">
  <div className="card text-center">
  <img  className="rounded-circle" src={consult.consultImg} alt="Gynology"/>
    <h6 className="card-title">{consult.detail}</h6>
    <p className="card-text">₹{consult.price}</p>
   

    {cart.some((p) => p.id === consult.id) ? (
                <button onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: consult,
                  })
                } className='btn btn-danger'>Remove</button>
              ):(
              <button onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: consult,
                })
                
              } class="btn btn-primary">Consult</button>
              )}
            </div>
          </div>
          <br/><br/>
        </div>
    
    )})} */}

    {/* <button type="button" class="btn btn-primary">Consult Now</button>
    </div>
  </div>
  </div>
  <div className="column">
  
  <div className="card text-center">
  
  <img src={Sexology} className="rounded-circle" alt="Sexology"/>
  <div className="card-body">
    <h6 className="card-title">{props.consult2}</h6>
    <p className="card-text">₹{props.rupees2}</p>
    
    <button type="button" className="btn btn-primary">Consult Now</button>
    
    </div>
    
  </div>
  </div>
  <div className="column">
  <div className="card text-center">
  <img src={Stomac} className="rounded-circle" alt="Stomac"/>
  <div className="card-body">
    <h6 className="card-title"><small>{props.consult3}</small></h6> 
    <p className="card-text">₹{props.rupees3}</p>
    <button type="button" class="btn btn-primary">Consult Now</button>
    </div>
  </div>
  </div>
  <div className="column">
  <div className="card text-center">
  <img src={Pediatrics} className="rounded-circle" alt="Pediatrics"/>
  <div className="card-body">
    <h5  className="card-title" > {props.consult4}</h5>
    <p className="card-text">₹{props.rupees4}</p>
    <button type="button" class="btn btn-primary">Consult Now</button>
    </div>
  </div>
  </div>
  <div className="column">
  <div className="card text-center">
  <img src={Dermotology} className="rounded-circle" alt="Dermotology"/>
  <div className="card-body">
    <h6 className="card-title">{props.consult5}</h6>
    <p className="card-text">₹{props.rupees5}</p>
    <button type="button" class="btn btn-primary">Consult Now</button>
    </div>
  </div>
  </div>
  </div>
  <br></br> */}
  
  {/* </div>
  </div> */}
  
  <div className="album py-1">
        
        <div className="container">

            <div className="row">
            <div className="col-md-6 ">
              
                    <div className="card-body">
                            <h3 className="card-text mb-4">Common Health Concerns</h3>
                            <p className="card-text">Consult a doctor online for any health issue</p>
                       
                      
                    
                    </div>

                  
                </div>
                </div>
                </div>
                </div>
  
  <div className="album py-4">
        
        <div className="container">

            <div className="row">

            {pconsults.slice(pagination.start, pagination.end).map((pconsult) => { return (
                <div className="col-md-3" key={pconsult.id}>
                    <div className="card mb-4 box-shadow ">
                        <img className="card-img-top "  src={pconsult.conImg}  alt="doc1" />
                        <div className="card-body">
                        <h6 className="card-text">24X7 HOURS</h6><br/>
                            <h5 className="card-text">{pconsult.detail}</h5>
                            <p className="card-text"> ₹{pconsult.price}</p>
                        
                           
                            {cart.some((p) => p.id === pconsult.id) ? (
                     <div class="col-md-12 text">        
            <button onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: pconsult,
              })
            } className='btn btn-danger'>Remove</button></div>
          ):(
            <div class="col-md-12 text">
          <button onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              payload: pconsult,
            })
            
          } class="btn btn-outline-primary">Consult Now</button></div>
          )}
        </div>
      </div>
    
    </div>

)})}
                               

    
    
</div>
<PaginationOld showPerPage={showPerPage} 
                onPaginationChange={onPaginationChange}
                total={pconsults.length}
                />
</div>    

</div>



  <br></br>


<h4 style={{textAlign:"center"}}>{props.itwork}</h4>

<br></br>


<div className="album py-5">
        
        <div className="container">

            <div className="row">
            <div className="col-md-4 ">
                  
                    <div className="card-body">
                         
                            <p className="card-text"> <center>{props.works1}</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                               
                           

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-4 ">
                  
                    <div className="card-body">
                        
                            <p className="card-text"><center>{props.works2}</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                               
                                
                          

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-4 ">
                  
                    <div className="card-body">
                         
                            <p className="card-text"> <center>{props.works1}</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                               
                           

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div>
                  </div>
                  </div>
                </div>
                </div>


<div class="p-3 mb-1 bg-info text-dark">
  <br></br>

  <div className="album py-3">
        
        <div className="container">

            <div className="row">
            <div className="col-md-4 ">
                  
                    <div className="card-body">
                    <h4 className="card-text"><center>{props.user}</center></h4>
                            <p className="card-text"> <center>{props.userhap}</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                               
                           

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-4 ">
                  
                    <div className="card-body">
                    <h4 className="card-text"><center>{props.userb}</center></h4>
                            <p className="card-text"><center>{props.verifieddoc}</center></p>
                            <div className="d-flex justify-content-between align-items-center">
                               

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-4 ">
                  
                    <div className="card-body">
                    <h4 className="card-text"><center>{props.userd}</center></h4>
                            <p className="card-text"> <center>{props.ratings}</center></p>
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
{/* <div className="vid">
  <Reactplayer width='480px'
  height='240px'
   controls url='https://www.youtube.com/watch?v=kUBHB5yvSz4&t=157s'/>
</div> */}
</div>




  
  
           
        
          
             

      
     
  );
}

export default Consult;
