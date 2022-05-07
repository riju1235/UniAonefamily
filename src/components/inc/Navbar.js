// import React, { useEffect, useState } from 'react';
// import {Link, useNavigate } from 'react-router-dom';
// import Logo from '../images/LOGOV6.jpg';
// import './Navbar.css';
// import { Button, Dropdown } from 'react-bootstrap';
// import { useUserAuth } from '../../contexts/UserAuthContext'

// function Navbar (props) {
//   const navigate = useNavigate()
//   const { user, logOut } = useUserAuth()
//   const [photoURL, setPhotoURL] = useState()
//   const handleLogOut = async () => {
//     try {
//       await logOut()
//       navigate("/")
//     } catch (err) {

//     }
//   }
  
//   useEffect(() => {
//     if(user?.photoURL){
//       setPhotoURL(user.photoURL)
//     }
    
//   },[user])

//     return (
//             <div>
//                  <div class="fixed-top">
//                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
                   
//   <div className="container-fluid">
//     <Link to="" className="navbar-brand">
//         <div className="headlogo">
//     <img src={Logo} className="img-fluid" alt="Logos"/></div>
//     </Link>
    
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link to="/finddoctor" className="nav-link active" aria-current="page" href="#"><b>Find Doctor</b><br/><small>Book an appointment</small></Link>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#"><b>Video Consult</b><br></br><small>Consult top doctors</small></a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#"><b>Lab Test</b><br></br><small>Book Test & checkup</small></a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#"><b> Surgeries</b><br></br><small>Book Top Quality Surgeries </small></a>
//         </li>
//         <li className="nav-item">
//           <Link to="/allDoctors" className="nav-link active" aria-current="page" href="#"><b>All Doctors</b><br/><small>List of all Doctors</small></Link>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             For Providers
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a className="dropdown-item" href="#">Corporate Wellness</a></li><br/>
//             <li><a className="dropdown-item" href="#">Book scan & xray</a></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
        
//       </ul>
//       <div className="text-end d-grid gap-2 d-md-flex justify-content-md-end"> 
//       {!user ? (
//      <div className="logandsign">
//       <Link to="/Login">
//                   <button type="button" className="btn btn-outline-info me-md-2 btn-sm">LOGIN</button>
//                 </Link>
//                 <Link to="/Signup">
//                   <button type="button" className="btn btn-warning btn-sm">SIGN UP</button>
//                 </Link>
//                 </div>
                
//                 ):
//                 <>
//                   <Dropdown className='dropdown'>
//                     <Dropdown.Toggle variant="none" id="dropdown-basic">
//                       <img className='userphoto' src={ user.photoURL } alt="" />
//                     </Dropdown.Toggle>
    
//                     <Dropdown.Menu>
//                       <center>
//                       <Dropdown.Item>
//                         <Button onClick={() => {navigate(`/UserDashboard/${user.uid}`)}} variant='info'>Dashboard</Button>
//                       </Dropdown.Item>
//                       <Dropdown.Item>
//                         <Button variant='danger' onClick={handleLogOut}>LOG OUT</Button>
//                       </Dropdown.Item>
//                       </center>
//                     </Dropdown.Menu>
                    
//                   </Dropdown>
//                 </>
              
//               }
//               </div>
//     </div>
//   </div>
  
// </nav>
// </div>
//             </div>


//         );
//     }
    
//     export default Navbar;


import React, { useEffect, useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import Logo from '../images/logo13.jpg';
import './Navbar.css'
// import { Button,Dropdown} from 'react-bootstrap';
import { Button, Navbar, Dropdown, Container, Nav, Form, FormControl, NavDropdown} from 'react-bootstrap';
import { useUserAuth } from '../../contexts/UserAuthContext'


function NavBar (props) {
  const navigate = useNavigate()
  const { user, logOut } = useUserAuth()
  const [photoURL, setPhotoURL] = useState()
   //const emailVerified = user.emailVerified;
  const handleLogOut = async () => {
    try {
      await logOut()
      window.location.reload()
      navigate("/")
    } catch (err) {

    }
  }
  
  useEffect(() => {
    if(user?.photoURL){
      setPhotoURL(user.photoURL)
    }
    
  },[user])


  return (
    <>
{/* <div className="mains container-fluid"> */}
   
     <Navbar bg="light shadow"  expand="lg">
          <Container fluid>
         <Navbar.Brand>
        <Link to="/">
       <img src={Logo} className="img-fluid"  width="190" height="60" alt="Logos"/></Link></Navbar.Brand>
       <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '290px' }}
        navbarScroll
      >
        
        <Nav.Link><Link to="/allDoctors"><b>All Doctors</b><br/><small>List of all Doctors</small></Link></Nav.Link>
        <Nav.Link> <Link to="/consult"><b>Video Consult</b><br></br><small>Consult top doctors</small></Link> </Nav.Link>
        <Nav.Link> <Link to="/Labtest"><b>Lab Test</b><br></br><small>Book Test & checkup</small></Link></Nav.Link>
        <Nav.Link><Link to="/xray"><b>Scan & Xray</b><br/><small>Book scan & xray</small></Link></Nav.Link>
        <Nav.Link><Link to="/clinic"><b>Clinic</b><br/><small>India's Varified Clinic</small></Link></Nav.Link>
        <Nav.Link><Link to="/hospital"><b>Hospital</b><br/><small>Search Top Hospital</small></Link></Nav.Link>
        <NavDropdown title="For Providers" id="navbarScrollingDropdown">
          <NavDropdown.Item ><Link to="/corporate" > Corporate Wellness</Link></NavDropdown.Item> <br/>
          <NavDropdown.Item><Link to="/surgery">Book Top Quality Surgeries</Link></NavDropdown.Item> <br/>
          <NavDropdown.Item><Link to="/hospital">Search for hospitals</Link></NavDropdown.Item> <br/>
          <NavDropdown.Item><Link to="/Registerdoctor">Manage doctor profile</Link></NavDropdown.Item> <br/>
          <NavDropdown.Item><Link to="/socialwork">Social Work</Link></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
          Software for provider
          </NavDropdown.Item>
        </NavDropdown>
        
      </Nav>
      <div className="text-end d-grid gap-2 d-md-flex justify-content-md-end"> 

          {!user ? (

              <div>
                <Link to="/Login">
                  <button type="button" className="btn btn-outline-info me-md-2 btn-sm">LOGIN</button>
                </Link>
                <Link to="/Signup">
                  <button type="button" className="btn btn-warning btn-sm">SIGN IN</button>
                </Link>
              </div>
            ):
            <>
            
              <Dropdown className='dropdown'>
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                  <img className='userphoto' src={ user.photoURL } alt="" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <center>
                  <Dropdown.Item>
                    <Button onClick={() => {navigate(`/UserDashboard/${user.uid}`)}} variant='info btn-sm'><small>Dashboard</small></Button>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Button onClick={() => {navigate(`/UserDashboard/${user.uid}`)}} variant='primary btn-sm'><small>Appointment</small></Button>
                  </Dropdown.Item>
                 
                  <Dropdown.Item>
                    <Button variant='danger btn-sm' onClick={handleLogOut}><small>LOG OUT</small></Button>
                  </Dropdown.Item>
                  </center>
                </Dropdown.Menu>
                
              </Dropdown>
            </>
          
          }

          </div>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    
    
    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <div className="container-fluid">
        
        <Link to="/" className="navbar-brand">
        <div className="logosider">
            <img src={Logo} className="img-fluid" alt="Logos"/></div>
        </Link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item first">
              <Link to="/allDoctors"className="nav-link active"><b>All Doctors</b><br/><small>List of all Doctors</small></Link>
            </li>
            <li className="nav-item first">
              <Link to="/consult"className="nav-link active"><b>Video Consult</b><br></br><small>Consult top doctors</small></Link>
            </li>
            <li className="nav-item first">
              <Link to="/Labtest"className="nav-link active"><b>Lab Test</b><br></br><small>Book Test & checkup</small></Link> 
            </li>
            <li className="nav-item first">
              <Link to="/Xray"className="nav-link active"><b>Scan & Xray</b><br/><small>Book scan & xray</small></Link> 
            </li>
            <li className="nav-item first">
              <Link to="/clinic"className="nav-link active"><b>Clinic</b><br/><small>India's Varified Clinic</small></Link> 
            </li>
          
          
            <li className="nav-item dropdown for_providers">
            
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                For Providers
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">              
                <li><Link to="/Corporate"><a className="dropdown-item">Corporate Wellness</a></Link></li><br></br>
                <li><Link to="/Surgery"><a className="dropdown-item" href="/"> Book Top Quality Surgeries</a></Link></li>
                <br/>
                <li><Link to="/hospital"><a className="dropdown-item" href="/"> Search for hospital</a></Link></li>
                <br/>
                <Link to="/registerdoc">
                <li><a className="dropdown-item" href="/">Manage your profile</a></li></Link><br></br>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="/">Software for provider</a></li>
              
              </ul>
            </li>
            
          </ul>

          <div className="text-end d-grid gap-2 d-md-flex justify-content-md-end"> 

          {!user ? (

              <div>
                <Link to="/Login">
                  <button type="button" className="btn btn-outline-info me-md-2 btn-sm">LOGIN</button>
                </Link>
                <Link to="/Signup">
                  <button type="button" className="btn btn-warning btn-sm">SIGN IN</button>
                </Link>
              </div>
            ):
            <>
            
              <Dropdown className='dropdown'>
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                  <img className='userphoto' src={ user.photoURL } alt="" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <center>
                  <Dropdown.Item>
                    <Button onClick={() => {navigate(`/UserDashboard/${user.uid}`)}} variant='info btn-sm'>Dashboard</Button>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Button onClick={() => {navigate(`/UserDashboard/${user.uid}`)}} variant='primary btn-sm'>My Appointment</Button>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Button variant='danger btn-sm' onClick={handleLogOut}>LOG OUT</Button>
                  </Dropdown.Item>
                  </center>
                </Dropdown.Menu>
                
              </Dropdown>
            </>
          
          }

          </div>

        </div>
        
      </div>
      
    </nav> */}
  
 

  {/* </div> */}

</>
 
  );
}

export default NavBar;