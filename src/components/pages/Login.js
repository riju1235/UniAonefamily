import React, { useRef, useState } from 'react';
import './Login.css';
import Navbar from '../inc/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import { useUserAuth } from '../../contexts/UserAuthContext';
import { collection, getDocs, getDoc, addDoc } from "firebase/firestore";
import { db } from '../../firebase'
import Signup from './Signup';

function Login(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { logIn, googleSignIn, user } = useUserAuth();
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const userCollectionRef = collection(db, "newusers")

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await logIn(email, password)
      window.location.reload()
      navigate("/")
      // if(!user.emailVerified){
      //   alert("Please Verify Your Email First")
      // }
      
     

    }catch (err) {
      setError(err.message)
    }
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault()
    try {
      if(await googleSignIn()){
        window.location.reload()
      
        // const newUser = {
        //   "fullname": user.displayName,
        //    "email":user.email,
        //    "mobile":null,
        //    "password":null,
        //  }
        //  addDoc(userCollectionRef, newUser)

      
      navigate("/")
      }
    }catch (err) {
      setError(err.message)
    }
  }

    return (
      <>    
          <Navbar/>
         <br/><br/><br/>
    <form onSubmit={handleSubmit} className="loog">
    
 
    <br/>
   

                  
    
    <div className="album py-3">
        
        <div className="container">
 
        
            <div className="row justify-content-center">
       
            <div className="col-md-5">
            <div className="d-flex justify-content-between">
             <button className="btn btn-outline-primary">Login</button>
             <Link to="/Signup">
             <button className="btn btn-outline-primary">Signup</button>
             </Link>
         </div>
         <br/>
            <div className="card mb-4 border-primary box shadow">
           
            <div className="card-body">
   
    {error && <Alert variant='danger'><center>{error}</center></Alert>}
  <div className="card-header mb-2"> <center>{props.unaionefam}</center></div>

    <h5 className="card-text"><center>Certified doctors, NABL accredited labs and more
</center></h5>
    
      
       
    <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control mb-3" placeholder="Email ID" required/>
    
 
    
    <input onChange={(e) => setPassword(e.target.value)}type="text" className="form-control mb-3" placeholder="Password" required/>
  


<p className="card-text"> <center><small>{props.socialterm}</small></center> </p>

<div class="col-md-12 text-center">
      <button type="submit" class="btn btn-primary" style={{width:'150px'}}>{props.loginf} </button>
      </div>
    
      <center className='mt-4'>
      <GoogleButton onClick = { handleGoogleSignIn }  className='g-btn' type='dark'></GoogleButton>
       </center>
</div>
</div>
</div>
</div>
</div>
</div>


<br/>
<br/>
</form>
</>


        );
    }
    
    export default Login;