import React, { useRef, useState } from 'react';
import './Login.css';
import Navbar from '../inc/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import { useUserAuth } from '../../contexts/UserAuthContext';
import { collection, getDocs, getDoc, addDoc } from "firebase/firestore";
import { db } from '../../firebase'

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
    <form onSubmit={handleSubmit} className="loog">
                    
    <hr/>
    <br/><br/><br/>
    <div className="mainl">
      <div className="column">
        
    <h4>{props.log}</h4>
    
    </div>
    <div className="column">
      <Link to="/Signup">
    <h4>{props.sup}</h4>
    </Link>
    </div>
    </div>
    <div className="missionl">
    
    <div className="card border-primary mb-3 card text-center shadow">
    {error && <Alert variant='danger'><center>{error}</center></Alert>}
  <div className="card-header"> {props.unaionefam}</div>
  
  <div class="card-body text-primary">
    <h5 class="card-title">{props.nabl}</h5>
    <div classname="contsi">
        
        <div className="form">
       
    <input onChange={(e) => setEmail(e.target.value)} type="text" class="form-control" placeholder="Email ID" required/>
  </div>
    <div class="form">
    <input onChange={(e) => setPassword(e.target.value)}type="text" class="form-control" placeholder="Password" required/>
  
</div>
<div className="colors">

<p>{props.forgate}</p>
</div>
<p className="small">{props.socialterm} </p>

    <div className="submite2">
      <button type="submit" class="btn btn-primary" style={{width:'150px'}}>{props.loginf} </button>
    </div>
    <div className="submite3">
      <GoogleButton onClick = { handleGoogleSignIn } className='g-btn' type='dark'></GoogleButton>
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