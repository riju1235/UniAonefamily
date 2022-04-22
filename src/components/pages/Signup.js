import React, { useEffect, useState } from 'react';
import Navbar from '../inc/Navbar';
import {Link, useNavigate } from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap';
import { useUserAuth } from '../../contexts/UserAuthContext';
import { db, storage } from '../../firebase'
import { collection } from "firebase/firestore";
import { registerInitiate } from '../../redux/actions'

import { getAuth, sendEmailVerification } from "firebase/auth";
import { ref , uploadBytes, getDownloadURL } from 'firebase/storage';
import { getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, setDoc } from 'firebase/firestore'

function Signup(props) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [mobile, setMobile] = useState("")
  const [fullname, setFullName] = useState("")
  const { signUp } = useUserAuth();
  
  const [error, setError] = useState("")
  
  const navigate = useNavigate()
  
  const auth = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    const newUser = {
      // "id"
     "fullname": fullname,
      "email":email,
      "mobile":mobile,
      "password":password,
      "records":[]
    }
    try {
      if(await signUp(email, password)){
        alert("Verification Link has been sent to your mail.")
        sendEmailVerification(auth.currentUser)
          .then(() => {
            const userCollectionRef = doc(db, "newusers", email) 
            setDoc(userCollectionRef, newUser)
        navigate("/Login")
      });
      }
    }catch (err) {
      setError(err.message)
    }
  }


return (
<div>
  <Navbar/>
<br/>
<div className="album py-4">
           <div className="container">

<div className="row justify-content-center">
<div className="col-md-5">
<form onSubmit={ handleSubmit }className="card shadow">

          
            {error && <Alert variant='danger'><center>{error}</center></Alert>}
          
            <div className="card-body">

        <div className="d-flex justify-content-between">
             
             <button className="btn btn-primar" >Join Uniaonefamily</button>
             <Link to="/Registerdoctor">
             <button style={{color: "purple" }} className="btn btn-primar">Are you a doctor <br/>Register here</button>
             </Link>
         </div>
           <hr/>
           
        

    <input onChange= { (e) => setFullName(e.target.value) } type="text" className="form-control mb-3" placeholder="Full Name" value ={ fullname } required/>
  
    


    
<input onChange ={ (e) => setMobile(e.target.value) }type="text" className="form-control mb-3" placeholder="Mobile Number" value={mobile} required/>

    
    {/* <div class="forms1">
     <p>Profile Photo:</p> 
      <input onChange={ handleChange } type="file" id="userphoto" class="form-control" placeholder="Profile Photo" value={userphoto} required />
      <Button variant="success">UPLOAD</Button>
    </div> */}

  
      <input onChange= { (e) => setEmail(e.target.value) }  type="email" id = "email" className="form-control mb-3" placeholder="Email" value = {email} retuired/>
    

      <input onChange= { (e) => setPassword(e.target.value) } type="password" id = "password" class="form-control mb-3" placeholder="Create password" value={password} required/>
    
    
      <input type="password" id = "password_confirm" class="form-control mb-3" placeholder="Confirm password" required/>
    

  
  <div className="row mb-3 text-center">
    <div className="col-sm-10 offset-sm-1">
    <div classNmae="form-check">
      <input class="form-check-input"type="checkbox" value="" id="invalidCheck" required/>
      <label class ="form-check-label" for="invalidCheck">
       
       
       <small><center> I Agree with Uniaonefamily to <Link to="/terms"> terms & <br/>conditions</Link> and <Link to="/privacy">Privacy Policy</Link> agreement</center></small>
      
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
    </div>
  </div>
 
  

  <div class="col-md-12 text-center">
      <button type="submit" value="submit" class="btn btn-outline-success" style={{width:'253px'}} > {props.subm} </button>
  </div>
  </div>
  
  
    <br/>
    </form>
    
</div>
</div>
</div>

</div>
     <br/><br></br>
   
        </div>
        );
    }
    
export default Signup;