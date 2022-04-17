import React, { useEffect, useState } from 'react';
import './Signup.css';
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
<br/><br></br>
<br/><br/><br/>
<div className="singups">
        
<form onSubmit={ handleSubmit }className="card shadow">
    
            <br/>
            {error && <Alert variant='danger'><center>{error}</center></Alert>}
            <div className="sty">
                <div className="col13">
                  <div className="forms1">
                    <p ><b>{props.joinuniaone}</b></p>
                  </div>
                </div>
        <div className="col13">
        <div className="forms1">
        <p style={{ color: 'blue' }} ><span>{props.youdoct}<br/> <Link to="/RegisterDoc">  {props.regis}</Link></span></p>
        </div></div>
        </div>
           <hr/>
           
        <div className="forms1">

    <input onChange= { (e) => setFullName(e.target.value) } type="text" class="form-control" placeholder="Full Name" value ={ fullname } required/>
  
  </div>
 
<div className="mcode">
<div className="forms1">
<select id="inputState" className="form-select" required>
      <option selected>{props.location}</option>
      <option>{props.location1}</option>
      <option>{props.location2}</option>
      <option>{props.location3}</option>
      <option>{props.location4}</option>
      <option>{props.location5}</option>
      <option>{props.location6}</option>
      <option>{props.location7}</option>
      <option>{props.location8}</option>
      <option>{props.location9}</option>
      <option>{props.location10}</option>
      <option>{props.location11}</option>
      <option>{props.location12}</option>
      <option>{props.location13}</option>
      <option>{props.location14}</option>
      <option>{props.location15}</option>
      <option>{props.location16}</option>
      <option>{props.location17}</option>
      <option>{props.location18}</option>
      <option>{props.location19}</option>
      <option>{props.location20}</option>
    </select>
    </div>
    <div className="msize">
    <div class="forms1">

    

<input onChange ={ (e) => setMobile(e.target.value) }type="text" class="form-control" placeholder="Mobile Number" value={mobile} required/>
</div>
</div>
    </div>
    
    {/* <div class="forms1">
     <p>Profile Photo:</p> 
      <input onChange={ handleChange } type="file" id="userphoto" class="form-control" placeholder="Profile Photo" value={userphoto} required />
      <Button variant="success">UPLOAD</Button>
    </div> */}

    <div class="forms1">
      <input onChange= { (e) => setEmail(e.target.value) } type="email" id = "email" class="form-control" placeholder="Email" value = {email} retuired/>
    </div>
    <div className='forms1'>
      <input onChange= { (e) => setPassword(e.target.value) } type="password" id = "password" class="form-control" placeholder="Create password" value={password} required/>
    </div>
    <div className='forms1'>
      <input type="password" id = "password_confirm" class="form-control" placeholder="Confirm password" required/>
    </div>

  <div className='forms1'>
  <div className="row mb-">
    <div className="col-sm-13 offset-sm-1">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label class="form-check-label" for="invalidCheck">
       
       
       <small><center> I Agree with UniaoneFamily to <Link to="/terms"> terms & <br/>conditions</Link> and <Link to="/privacy">Privacy Policy</Link> agreement</center></small>
      
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
    </div>
  </div>
  </div>
  

    <div className="submite">
      <button type="submit" value="submit" class="btn btn-outline-success" style={{width:'253px'}} > {props.subm} </button>
    </div>
  
    <br/>
    </form>
    
</div>
     <br/><br></br>
   
        </div>
        );
    }
    
export default Signup;