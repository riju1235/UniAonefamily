import React from 'react';
import Navbar from '../inc/Navbar';
import AddDoctor from '../AddDoctor';
import DoctorP from '../images/DOCTORPROFILE.jpg';
import Secure from '../images/datas.jpg';
import {Link} from 'react-router-dom';
import '../../RegisterDoc.css'
import { getFirestore, collection, getDocs, doc, addDoc } from "firebase/firestore";
function RegisterDoc(props) {
    // init services
    const db = getFirestore();

    //collection ref
    const colRef = collection(db, 'doctors');

    //get collection data
    getDocs(colRef)
        .then((snapshot) => {
            let doctors = []
            snapshot.docs.forEach((doc) => {
                doctors.push({...doc.data(), id: doc.id })
            })
            console.log(doctors)
        })
        .catch(err => {
            console.log(err.message)
        })

    const addDoctorForm = document.getElementById('form-div')
    if(addDoctorForm){
        addDoctorForm.addEventListener('submit', (e)  => {
            e.preventDefault()
            addDoc(colRef, {
                fName: addDoctorForm.f_name.value,
                lName: addDoctorForm.l_name.value,
                email: addDoctorForm.email.value,
                specialization: addDoctorForm.specialization.value,
            })
            .then(() => {
                addDoctorForm.reset()
            })
        })
    }
  return (
      
    <div className="main">
        <Navbar/>
        <br/><br/>
        {/* <div className="fixed8"> */}
            
        <img src={DoctorP} class="img-fluid"  width="1900" height="400" alt="DoctorP"></img>
        {/* </div> */}
        <AddDoctor/>
        <br/>
<hr/>
<div className="section footer bg-light text-dark">
         <br></br>
         <br/>

         <div className="album py-5">
        
        <div className="container">
        <div className="card mb-4 box-shadow">
            <div className="row">
           
            <div className="col-md-6 ">
            
                    <div className="card-body">
                    
                       <img src= {Secure} className="card-img-top" alt="doc1" />
                            <div className="d-flex justify-content-between align-items-center">
                               </div>
                           
                            </div>
                        </div> 
                    
                  
                <div className="col-md-6 ">
              
                    <div className="card-body">
                    <h4 className="card-text">Your data is 100% secure here</h4>
                            <p className="card-text"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
</svg> Uniaone Family does not sell or share your data with any third party </p>
<p className="card-text"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
</svg> <small> Uniaone Family follows stringent policies so that data isn’t compromised at any step</small></p>
<p className="card-text"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
</svg>  We have a responsibility to make your data secure</p>
                            <div className="d-flex justify-content-between align-items-center">
                               
                                
                          </div>

                   
                      
                    </div>
                    </div>

                  
                </div>
                </div>
                </div>
                </div>
       </div>
               
            
                
  

{/* 
        <form className='form-div' id='form-div'>
            <span><b>Personal Details</b></span>
            <div className="personal">
                <form className="personal-form">              
                    <div className="form-items">
                        First Name : 
                        <input type="text" className="" placeholder="First name" name="f_name" />
                    </div>
                    <div className="form-items">
                        Last Name : 
                        <input type="text" className="" placeholder="Last name" name="l_name" />
                    </div>
                    <div className="form-items">
                        Phone : 
                        <input type="text" className="" placeholder="Mobile" name="mobile" />
                    </div>
                    <div className="form-items">
                        Email : 
                        <input type="email" className="" placeholder="Email" name="email" />
                    </div>
                    <div className="form-items">
                        Password : 
                        <input type="password" className="" placeholder="Password" name="password" />
                    </div>
                </form>
            </div>
            
            <hr></hr>

            <span><b>Profile Details</b></span>
            <div className="profile">
                <form className="profile-form">             
                    <div className="form-items">
                        Profile Name : 
                        <input type="text" className="" placeholder="Profile name" name="profile_name" />
                    </div>
                    <div className="form-items">
                        Specialization : 
                        <input type="text" className="" placeholder="Specialization" name="specialization" />
                    </div>
                    <div className="form-items">
                        Gender : 
                        Male <input className="" type="radio" name="gender" />
                        Female <input className="" type="radio" name="gender" />
                    </div>
                    <div className="form-items">
                        Address : 
                        <input type="text" className="" placeholder="Address" name="address" />
                    </div>
                </form>
            </div>

            <hr></hr>

            <span><b>Medical Details</b></span>
            <div className="medical">
                <form className="medical-form">             
                    <div className="form-items">
                        Registration Number : 
                        <input type="text" className="" placeholder="Registration Number" name="registration_number" />
                    </div>
                    <div className="form-items">
                        Registration Council : 
                        <input type="text" className="" placeholder="Registration Council" name="registration_council" />
                    </div>
                    <div className="form-items">
                        Registration Year : 
                        <input type="text" className="" placeholder="Registration Year" name="registration_year" />
                    </div>
                </form>
            </div>

            <hr></hr>

            <span><b>QUALIFICATION</b></span>
            <div className="qualification">
                <form className="qualification-form">             
                    <div className="form-items">
                        Degree : 
                        <input type="text" className="" placeholder="Degree" name="degree" />
                    </div>
                    <div className="form-items">
                        College/Institute : 
                        <input type="text" className="" placeholder="College/Institute" name="institute" />
                    </div>
                    <div className="form-items">
                        Year of completion : 
                        <input type="text" className="" placeholder="Year of completion" name="year_of_completion" />
                    </div>
                    <div className="form-items">
                        Year of experience : 
                        <input type="text" className="" placeholder="Year of experience" name="year_of_experience" />
                    </div>
                </form>
            </div>

            <hr></hr>

            <span><b>ESTABLISHMENT BASIC DETAILS</b></span>
            <div className="establishment">
                <form className="establishment-form">             
                    <div className="form-items">
                        Establishment name : 
                        <input type="text" className="" placeholder="Establishment name" name="establishment_name" />
                    </div>
                    <div className="form-items">
                        City : 
                        <input type="text" className="" placeholder="City" name="city" />
                    </div>
                    <div className="form-items">
                        Locality/Landmark : 
                        <input type="text" className="" placeholder="Locality/Landmark" name="landmark" />
                    </div>
                </form>
            </div>
            
         
            <button className="btn btn-outline-success btn-lg" type='submit'>SUBMIT</button>

        </form> */}

      
       
    </div>

    
    
    );
}

export default RegisterDoc;
