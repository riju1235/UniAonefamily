import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { collection, getDocs, } from "firebase/firestore";
import {db} from '../../firebase'
// import Navbar from '../inc/Navbar';
import './Readarticle.css';
import { Button, Badge, Navbar, Offcanvas, Dropdown, Container, Nav, Form, FormControl, NavDropdown} from 'react-bootstrap';
import ReadSkin from '../images/readskin.jpg';
import Haieloss from '../images/hairloss.jpg';
import Gum from '../images/gumd.jpg';
import Loss from '../images/weight3.jpg';
import Backp from '../images/backp2.jpg';
import Fitness from '../images/fit.jpg';
import Tooth from '../images/gum4.jpg';
import ToothAce from '../images/toothace.jpg';
import Logo from '../images/logo11.jpg';



// import FaFacebook from "react-icons/lib/fa/facebook";
// import { ShareButton } from "react-custom-share";


function Readarticle (props) {
 
  const [searchTerm, setsearchTerm] = useState("");
  const [article, setArticle] = useState([])
const navigate = useNavigate()

const articleCollectionRef = collection(db, "article");
useEffect(() => {

    const getArticle = async () => {
        const data = await getDocs(articleCollectionRef);
        setArticle(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    }

    getArticle()
}, [])


    return (
      
        <div>
          {/* width="240" height="50" */}
          {/* <Navbar/> */}
    <div class="fixed-top shadow">
<Navbar bg="white" expand="lg shadow "  >
  <Container fluid>
    <Navbar.Brand> <Link to="/"> <img src={Logo} className="img-fluid"  alt="Logos"/></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Link to="/readarticle">
        <Nav.Link href="#action1">Home</Nav.Link></Link>
        <Nav.Link href="#action2">Healthy Skin</Nav.Link>
        <Nav.Link href="#action2">Healthy Hair</Nav.Link>
         <Nav.Link href="#action2">Healthy Eating</Nav.Link>
        <Nav.Link href="#action2">Childhood Nutrition </Nav.Link>
        
        
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"  onChange ={(e) => {
            setsearchTerm(e.target.value);
          }}
        />
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>

            <div className="article1">
              
           
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container-fluid">
   
    <Link to="/" className="navbar-brand">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Healthy Skin</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Healthy Hair</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Healthy Eating</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Childhood Nutrition </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           100+ Health Tips
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
       
      </ul>
      
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


<br/>
<br/>

            <h4 style={{textAlign: "center"}}> India's Largest Helath Article Tips </h4>
            
            <p style={{textAlign: "center"}}>Trending tips from doctors and health experts</p>
          

<br/>


<div className="album py-5">
        
        <div className="container">

            <div className="row">
            {article.filter((val)=>{
      if (setsearchTerm === ""){
        return val;
      } else if (
        val.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.subcontent.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.drName.toLowerCase().includes(searchTerm.toLowerCase()) 
    
      ){
        return val;
      }
    }).map((article) => { return (
       
            <div className="col-md-4 mt-6" key={article.id} >
              <Link to="/post">
                        <div className="card mb-4 box ">
                        <img  className="card-img-top" src={article.articleImg}   alt="names" />
                            <div className="card-body">
                                <h5 className="card-text"> {article.content}</h5>
                                <p className="card-text"> <small>Dr.{article.drName}</small></p>
                                <p className="card-text"> {article.subcontent}</p>
                               
                               
                                <div className="d-flex justify-content-between align-items-center">
                                
                                </div>
                                    
                              </div>
                         
                            </div>
                             </Link>
                            </div>
                           
                           
                            )})} 
                            </div>
                            </div>
                            </div>
            </div>
            </div>
      
     
    
        

        );
    }
    
    export default Readarticle;