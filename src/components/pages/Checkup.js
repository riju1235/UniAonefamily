import React, {useReducer, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PaginationOld from './PaginationOld';
import { collection, getDocs, } from "firebase/firestore";
import {db} from '../../firebase'
import { cartReducer } from '../../redux/cartReducer';
import { useUserAuth } from '../../contexts/UserAuthContext'

function Checkup (props) {
  const [showPerPage, setShowPerPage] = useState(4);
  const [pagination, setPagination] =useState({
      start: 0,
      end: showPerPage,
  });

  const onPaginationChange = (start,  end) =>{
      setPagination({start: start, end: end});
  };
  const [searchTerm, setsearchTerm] = useState("");
    const [bodytests, setBodytests] = useState([])
    const bodytestRef = collection(db, "Bodytests")



    useEffect(() => {
        const getbodytests = async () => {
            const data = await getDocs(bodytestRef);
            setBodytests(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
        }
        getbodytests()
    }, [])
    const {
      state: { cart },
      dispatch,
    } = useUserAuth();
    
    return (

       <>
<br/>
<div className="bodytesth">   
        <h3 style={{textAlign: "center"}}>#We want all the employees of all the corporate companies in India to be healthy,<br/> the corporate companies will boost the economy of the country.</h3>               
        </div>
<br/>

<h4 style={{textAlign: "center"}}>Popular Health Checkup Packages</h4>
<div className="album py-5">
        
        <div className="container">

  <div class="row">
  {bodytests.filter((val)=>{
      if (setsearchTerm === ""){
        return val;
      } else if (
        val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.detail.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.price.toLowerCase().includes(searchTerm.toLowerCase()) 
      ){
        return val;
      }
    }).slice(pagination.start, pagination.end).map((bodytest) => { return (
      <div className="col-md-3" key={bodytest.id}>
       
       <div className="card  mb-4  box shadow c" >
       <img className="card-img-top" src={bodytest.testImg} alt="doc1" />
       <div className="card-header">{bodytest.age}</div>
            <div className="card-body">
            <h4 className="card-text" >{bodytest.name}</h4>
              <p className="card-text">{bodytest.detail}</p>
              <h6 className="card-text" >₹{bodytest.price}</h6>
              <div className="d-flex justify-content-between align-items-center">
              {cart.some((p) => p.id === bodytest.id) ? (
             
                <button onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: bodytest,
                  })
                } className='btn btn-danger'>Remove</button>
              ):(
               
              <button onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: bodytest,
                })
                
              }  class="btn btn-primary">BOOK NOW</button>
              )}
            </div>
          </div>
        </div>
   </div>
  
    )})}

  </div>
  <PaginationOld showPerPage={showPerPage} 
                onPaginationChange={onPaginationChange}
                total={bodytests.length}
                />
  </div>
  </div>
       </> 
  );
}

export default Checkup;