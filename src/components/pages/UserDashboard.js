// import React, {useEffect, useState, } from 'react'
// import { Button } from 'react-bootstrap';
// import { useNavigate, useParams } from 'react-router-dom'
// import { useUserAuth } from '../../contexts/UserAuthContext'
// import { collection, getDocs, getDoc, doc } from "firebase/firestore";
// import { db } from '../../firebase'
// import './Dashboard.css';

// function UserDashboard(props) {
//   const navigate = useNavigate() 
//   const { user, logOut } = useUserAuth();
//   const [newusers, setNewsers] = useState([])
//   const userCollectionRef = collection(db, "newusers")


//   const [userr, setUserr] = useState()
//     const params = useParams()
//     useEffect(() => {
//         getData()
//     }, [])
//     async function getData() {
//         try {
//             const userrTemp = await getDoc(doc(db,'newusers',params.userId))
//             setUserr(userrTemp.data())
            
//         } catch(error) {
//             console.log(error.message)
//         }
//     }


//   // useEffect(() => {
//   //   getNewusers()
//   // }, [])

//   // const getNewusers = async() => {
//   //   const data = await getDocs(userCollectionRef);
//   //   setNewsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
//   // }

//   const handleLogOut = async () => {
//     try {
//       await logOut()
//       navigate("/")
//     } catch (err) {

//     }
//   }

//   return (
//     <>
//     <br/><br/><br/>
//       <div className='dashboard'>
//           <br/><br/><br/>
// <div className="dashboardhead">
//         <h3> Welcome {user.email}</h3>
      
//         </div>
//         <br></br> 
//         <h2>Your Orders</h2>       
            
        
//         <br></br>
      
//       </div>
    
    
    
    
//     </>
//   )
// }

// export default UserDashboard










import React, {useEffect, useState, } from 'react'
import AddLabbook from '../AddLabbook';
// import Medical from '../pages/Medical';

import Navbar from '../inc/Navbar';
import { Badge, Dropdown, Container, Nav, Form, FormControl, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { storage } from '../../firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'
import { useUserAuth } from '../../contexts/UserAuthContext'
import { collection, getDocs, getDoc, doc, query, where, onSnapshot, addDoc,arrayUnion, setDoc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase'
import Logo from '../images/logo4.png'
import Logo2 from '../images/logo13.jpg';








function UserDashboard(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const { logOut } = useUserAuth()
  const [photoURL, setPhotoURL] = useState()
  const navigate = useNavigate()
  const { user, state:{cart} } = useUserAuth();
  const userCollectionRef = collection(db, "newusers")
  const [labtests, setLabtests] = useState([])
  const labtestRef = collection(db, "Labtests")
  const [consults, setConsults] = useState([])
  const consultRef = collection(db, "Consults")
  const [userinfo, setUserInfo] = useState([]);
  const [appointmentinfo, setAppointmentInfo] = useState([]);
  const [labtestbookinfo, setLabtestbookinfo] = useState([]);
  const userLabtestBookingRef = collection(db, "LabtestBookings")
  const [consultbookinfo, setConsultbookinfo] = useState([]);
  const userConsultBookingRef = collection(db, "ConsultBookings")

  const [userss, setUser]=useState([])
  
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const f =collection(db,"newusers");
    const pp  = query(f, where("email", "==", user.email));
    onSnapshot(pp,(snapshot) => {
      let u=[]
      snapshot.docs.forEach((doc)=>{
        u.push({...doc.data(),id:doc.id})
      })
      // console.log(users)
      setUser(u)
    })
  }, []);
  var photoRef
  userss.map((uinfo) => { 
  const f = doc (db, "newusers",uinfo.email)
  photoRef=f
  })
  let p=[];
  userinfo.map ((url) =>{
    p= url.records
  })
  console.log(p)

  const imageListRef = ref (storage, "images/")
  const uploadImage =() => {
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name +v4 ()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) =>{

        updateDoc(photoRef, {
           records: arrayUnion(url)
         });
      

        setImageList ((prev) => [...prev, url])
      alert ("Image Uploaded Successful");
      })
      
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) =>{
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  // const q = query(userCollectionRef, where("email", "==", user.email));
  // const querySnapshot = getDocs(q);
  
  // if (!querySnapshot.empty){
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.id, " => ", doc.data());
  //   });
  // }


  useEffect(() => {
    const ref =collection(db,"newusers");
    const q = query(ref, where("email", "==", user.email));
    onSnapshot(q,(snapshot) => {
      let users=[]
      snapshot.docs.forEach((doc)=>{
        users.push({...doc.data(),id:doc.id})
      })
      // console.log(users)
      setUserInfo(users)
    })
  },[])
  
  useEffect(() => {
    const newref =collection(db,"Appointments");
    const q = query(newref, where("email", "==", user.email));
    onSnapshot(q,(snapshot) => {
      let appointments=[]
      snapshot.docs.forEach((doc)=>{
        appointments.push({...doc.data(),id:doc.id})
      })
      
      setAppointmentInfo(appointments)
      //  console.log(appointments)
    })
  },[])

  useEffect(() => {
    const ref =collection(db,"LabtestBookings");
    const b = query(ref, where("email", "==", user.email));
    onSnapshot(b,(snapshot) => {
      let labtestbooking=[]
      snapshot.docs.forEach((doc)=>{
        labtestbooking.push({...doc.data(),id:doc.id})
      })
      // console.log(labtestbooking)
      setLabtestbookinfo(labtestbooking)
    })
  },[])

  useEffect(() => {
    const ref =collection(db,"ConsultBookings");
    const g = query(ref, where("email", "==", user.email));
    onSnapshot(g,(snapshot) => {
      let consultbooking=[]
      snapshot.docs.forEach((doc)=>{
        consultbooking.push({...doc.data(),id:doc.id})
      })
      // console.log(consultbooking)
      setConsultbookinfo(consultbooking)
    })
  },[])

    const [userr, setUserr] = useState()
    const params = useParams()
    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        try {
            const userrTemp = await getDoc(doc(db,'newusers',params.userId))
            setUserr(userrTemp.data())
            
        } catch(error) {
            console.log(error.message)
        }
    }
    
    const { dispatch } = useUserAuth();
    useEffect(() => {
      const getlabtests = async () => {
          const data = await getDocs(labtestRef);
          setLabtests(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
      }
      getlabtests()
  }, [])

  useEffect(() => {
    const getconsults = async () => {
        const data = await getDocs(consultRef);
        setConsults(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    }
    getconsults()
}, [])


  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  
  
  //Razorpay integration
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }
  async function displayRazorpay(amount) {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

    const options = {
			// key: 'rzp_test_m1pxa5JKJbAV4p',
      key: 'rzp_live_dsnDbV7kqj8n52',
			currency: 'INR',
			amount: total*100,
			name: 'Uniaone Family Payment',
			description: 'Razorpay Payment Gateway',
			image: {Logo},
			handler: function (response) {
				alert(response.razorpay_payment_id)
        alert("Payment Succesfull")
        if(response.razorpay_payment_id){
          cart.map ((i)=>{
            const usertestinfo = {
              "email": user.email,
              "detail": i.detail,
              "name": i.name,
              "price": i.price
            }
            addDoc(userLabtestBookingRef, usertestinfo)
          })
        
      }

    //   if(response.razorpay_payment_id){
    //     cart.map ((k)=>{
    //       const userconinfo = {
    //         "email": user.email,
    //         "detail": k.detail,
            
    //         "price": k.price
    //       }
    //       addDoc(userConsultBookingRef, userconinfo)
    //     })
      
    // }

	
			},
      // if(response.razorpay_payment_id){
      
      // }
			prefill: {
				email: user.email,
			}
		}
    const paymentObject = new window.Razorpay(options)
		paymentObject.open()
  }
  const emailVerified = user.emailVerified;

  const handleLogOut = async () => {
    try {
      await logOut()
      window.location.reload()
      navigate("/")
    } catch (err) {

    }
  }



  return (
    <>

<Navbar/>
<ul class="nav nav-pills mb-3 text-ligh shadow  " id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Dashborad</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">My Health Record</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Consult</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-myappointment-tab" data-bs-toggle="pill" data-bs-target="#pills-myappointment" type="button" role="tab" aria-controls="pills-myappointment" aria-selected="false">Labtest</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-numberupdate-tab" data-bs-toggle="pill" data-bs-target="#pills-numberupdate" type="button" role="tab" aria-controls="pills-numberupdate" aria-selected="false">Help Desk </button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
   <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
  
  <div className='userinfo'>
        
        {userinfo.map((uinfo) => { return (
          <div key={userinfo.id} style={{margin:30}}>
            <h3> <center> Welcome Mr. {uinfo.fullname} </center></h3>
            <h4>
              <center>
                Your email : {uinfo.email}
              </center>
            </h4>
            <h3>
              <center>
                Your mobile : {uinfo.mobile}
              </center>
            </h3>
          </div>
        )})}
        </div>
            

        <h4 style={{margin:30, color: "purple"}}>Your Orders</h4>
              
              {cart.length > 0 ?(
                <> 
                 {emailVerified ?(
                  <div className="album py-3">
          
                  <div className="container">
      
                      <div className="row">
                      {cart.map((labtest) => { return (
                          <div className="col-md-3" key={labtest.id}>
                            <div className="card mb-4 border-dark box-shadow">
                           
                                <div className="card-body">
                                  <h5 className="card-text">{labtest.name}</h5>
                                  <p className="card-text">{labtest.detail}</p>
                                  <h6 className="card-text">₹{labtest.price}</h6>
                                  <div className="d-flex justify-content-between align-items-center">
                               
                                  <button onClick={ () =>
                                    dispatch({
                                      type: "REMOVE_FROM_CART",
                                      payload: labtest,
                                    })} className='btn btn-danger'>Remove</button>
                         
                                </div>
                           </div>
                           </div>
                         
                           </div>
                           
                         
                   
                        )})}
                       <AddLabbook/>
                       
                        </div>
                        
                      </div>
  
                    
                   
                      <div className='checkout' style={{margin:10, textAlign: "center"}}>
                        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
                        <Button  onClick={displayRazorpay} style={{margin:30}} type="button" disabled={cart.length === 0}>
                          Proceed to Checkout
                        </Button>
                      </div>
                  </div>
                  ):(
                    <h3 style={{ display: "block",margin:50 }}>You Need to Verify your Email to see Your Orders</h3>
                  )
                }
                
                </>
  
  
  
              ):(
                <h3 style={{margin:30}}>Cart is Empty!!!</h3>
              )}

            {emailVerified ?(
            
              <div className='right'>
                <h3 style={{margin:30}}>Yours Appointments</h3>
                {appointmentinfo.map((ainfo) => { return (
                  <div key={appointmentinfo.id} style={{margin:30}}>
                    
                    <h3 style={{margin:30}}>You Have Appointment With Dr. {ainfo.Appointment_with}</h3>
                    <h3 style={{margin:30}}>At : {ainfo.Time} </h3>
                    <h3 style={{margin:30}}>Date: {ainfo.Date}</h3>
                  </div>
                )})}
                
                 
              <h2 style={{margin:30}}>Yours LabtestBookings :- </h2>
             
        <div className="album py-3"> 
        <div className="container">
              <div className="row" >
               {labtestbookinfo.map((labinfo) => { 
                
                return (
                  <div className="col-3" key={labinfo.id}>
                      <div className="card mb-4 border-primary box shadow ">
                  
                        <div className="card-body">
                          <h5 className="card-text">{labinfo.name}</h5>
                          <p className="card-text">{labinfo.detail}</p>
                          <h6 className="card-text">₹{labinfo.price}</h6>
                          <div className="d-flex justify-content-between align-items-center">
                            </div>
                        </div>
                      </div>
                    </div>
                 
                )})}
                </div>
                </div>
                </div>


                {/* <h2 style={{margin:30}}>Yours ConsultBookings :- </h2>
              <div className="row" style={{margin:5}}>
               {consultbookinfo.map((consainfo) => { 
                
                return (
                  <div className="col" key={consainfo.id}>
                    <div className="test1">
                      <div className="card text-center" >
                        <div className="card-body">
                       
                          <p className="card-text">{consainfo.detail}</p>
                          <h6 >₹{consainfo.price}</h6>
              
                        </div>
                      </div>
                    </div>
                  </div>
                )})}
                </div> */}
                


              </div>
              ):(
                <div className='right'>
                <h2 style={{ display: "block",margin:50 }}>You Need to Verify your Email to see the Appointments</h2>
  
              </div>
              )
            }
        
  </div> 

  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
    <div className='userinfo'>
        
        {userinfo.map((uinfo) => { return (
          <div key={userinfo.id} style={{margin:14}}>
            <h4> <center> Welcome Mr. {uinfo.fullname} </center></h4>

            <h5>
              <center>
                Your mobile : {uinfo.mobile}
              </center>
            </h5>
          </div>
        )})}
        </div>
    <h3 style={{ color: "purple", textAlign: "center" }}>YOUR HEALTH RECORD SECURE  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" style={{color: "blue"}} fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg></h3><br/>
  {emailVerified ?(
<div className="App">
  <input type="file" style={{  margin:10 }}onChange={(event) => {
   setImageUpload(event.target.files[0])}}/>
  <button onClick ={uploadImage} class="btn btn-outline-success"> UPLOAD HEALTH RECORD</button><br/><br/>
 {p.map((n)=> {
    return (
     
          
    <img src={n} style={{  margin:15 }} class="img-fluid " width="200" height="260" alt=''></img>
   
   
  )
 })}
   
  
</div>

):(
  <div className='right'>
  <h4 style={{ display: "block",margin:50, color: "purple"}}>You Need to Verify your Email to see the Helath Records</h4>

</div>
)
}


  </div>
  <br/><br/>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">

  
  

{/*   
  {/* <h4 style={{margin:30, color: "purple"}}>Your Orders</h4>
              
              {cart.length > 0 ?(
                <> 
                 {emailVerified ?(
                  <div className="album py-3">
          
                  <div className="container">
      
                      <div className="row">
                      {cart.map((consult) => { return (
                          <div className="col-md-3" key={consult.id}>
                            <div className="card mb-4 border-dark box-shadow">
                            <img className="card-img-top" src={consult.conImg} alt="doc1" />
                                <div className="card-body">
                                  <h5 className="card-text">{consult.name}</h5>
                                  <p className="card-text">{consult.detail}</p>
                                  <h6 className="card-text">₹{consult.price}</h6>
                                  <div className="d-flex justify-content-between align-items-center">
                               
                                  <button onClick={ () =>
                                    dispatch({
                                      type: "REMOVE_FROM_CART",
                                      payload: consult,
                                    })} className='btn btn-danger'>Remove</button>
                         
                                </div>
                           </div>
                           </div>
                         
                           </div>
                           
                         
                   
                        )})}
                        
                
                       
                        </div>
                        
                      </div>
  
                    
                   
                      <div className='checkout' style={{margin:10}}>
                        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
                        <Button  onClick={displayRazorpay} style={{margin:30}} type="button" disabled={cart.length === 0}>
                          Proceed to Checkout
                        </Button>
                      </div>
                  </div>
                  ):(
                    <h3 style={{ display: "block",margin:50 }}>You Need to Verify your Email to see Your Orders</h3>
                  )
                }
                
                </>
  
  
  
              ):(
                <h3 style={{margin:30}}>Cart is Empty!!!</h3>
              )} */}
            {/* </div> */}
            {/* {user.emailVerified ?(
            
              <div className='right'>
                <h3 style={{margin:30}}>Yours Appointments</h3>
                {appointmentinfo.map((ainfo) => { return (
                  <div key={appointmentinfo.id} style={{margin:30}}>
                    
                    <h3 style={{margin:30}}>You Have Appointment With Dr. {ainfo.Appointment_with}</h3>
                    <h3 style={{margin:30}}>At : {ainfo.Time} </h3>
                    <h3 style={{margin:30}}>Date: {ainfo.Date}</h3>
                  </div>
                )})}
              
                
              </div>
              ):(
                <div className='right'>
                <h2 style={{ display: "block",margin:50 }}>You Need to Verify your Email to see the Appointments</h2>
  
              </div>
              )
            // } */} 
  </div>
  <div class="tab-pane fade" id="pills-myappointment" role="tabpanel" aria-labelledby="pills-myappointment-tab"> 
  <h2 style={{margin:30}}>Yours LabtestBookings :- </h2>
             
             <div className="album py-3"> 
             <div className="container">
                   <div className="row" >
                    {labtestbookinfo.map((labinfo) => { 
                     
                     return (
                       <div className="col-3" key={labinfo.id}>
                           <div className="card mb-4 border-primary box shadow ">
                       
                             <div className="card-body">
                               <h5 className="card-text">{labinfo.name}</h5>
                               <p className="card-text">{labinfo.detail}</p>
                               <h6 className="card-text">₹{labinfo.price}</h6>
                               <div className="d-flex justify-content-between align-items-center">
                                 </div>
                             </div>
                           </div>
                         </div>
                      
                     )})}
                     </div>
                     </div>
                     </div>
  </div>
  <div class="tab-pane fade" id="pills-numberupdate" role="tabpanel" aria-labelledby="pills-numberupdate-tab">
 <h3 style={{textAlign: "center"}}> Anywhere, At any time Email or call if you have a health related problem.</h3><br/>
 
 <div className="album py-5">
        
        <div className="container">

            <div className="row">
            <div className="col-md-6 ">
                    <div className="card mb-4 box shadow">
                    <div className="card-body">
                    <h5  style={{textAlign: "center"}}>Official Email Id: <button className="btn btn-outline-primary"> care@uniaonefamily.com </button></h5>
                            <div className="d-flex justify-content-between align-items-center">
                               
                                
                            </div>

                        </div>
                      
                    
                    </div>

                  
                </div>
                <div className="col-md-6 ">
                    <div className="card mb-4 box shadow">
                    <div className="card-body">
                    
                    <h5  style={{textAlign: "center"}}>Help Line Number <a href="tel:+91 9933798896"  className="btn btn- btn-outline-">+91 9933798896</a></h5>
                            <div className="d-flex justify-content-between align-items-center">
                               
                                
                            </div>

                        </div>
                      
                    
                    </div>

                  
                </div>
                </div>
                </div>
                </div>
 
  </div>
</div>

     
 
        
   

  {/* <div className='doc-div' style={{ display: "flex", justifyContent: "space-between"}}>
          <div className='left'> */}



          
         
        {/* </div>
      
      </div> */}


{/* 
      <div className='dashboard'>
        
    
        <h4 style={{textAlign: "center"}}> Welcome {user.email}</h4>
       
        <br></br> 

    

        <div className='doc-div' style={{ display: "flex", justifyContent: "space-between"}}>
          <div className='left'>
            <h4 style={{margin:30}}>Your Orders</h4>  
            {cart.length > 0 ?(
              <> 
                <div className='cart'>
                  <div className="labs">
                  {cart.map((labtest) => { return (
                      <div className="col" key={labtest.id}>
                        <div className="test1">
                          <div className="card text-center" >
                            <div className="card-body">
                              <h5 className="card-title">{labtest.name}</h5>
                              <p className="card-text">{labtest.detail}</p>
                              <h6 >₹{labtest.price}</h6>
                              <button onClick={ () =>
                                dispatch({
                                  type: "REMOVE_FROM_CART",
                                  payload: labtest,
                                })} className='btn btn-danger'>Remove</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )})}
                    </div>
                    <div className='checkout' style={{margin:30}}>
                      <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
                      <Button  onClick={displayRazorpay} style={{margin:30}} type="button" disabled={cart.length === 0}>
                        Proceed to Checkout
                      </Button>
                    </div>
                  
                </div>
                
              </>
            ):(
              <h2 style={{margin:30}}>Cart is Empty!!!</h2>
            )}
          </div>
          <div className='right'>
            <h4 style={{margin:30, color: "blue"}}>Yours Appointments</h4>

          </div>
        </div>

     
       


      
      </div>
     */}
    
    
    
    </>
  )
}

export default UserDashboard