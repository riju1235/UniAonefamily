import React, { useState, useEffect } from 'react'
import Navbar from '../inc/Navbar';
import PaginationOld from './PaginationOld';
import FindDoctor from '../images/bookdoctor.jpg';
import {Link, useNavigate} from 'react-router-dom';
import { collection, getDocs, } from "firebase/firestore";
import {db} from '../../firebase'

function AllDoctors (props) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [showPerPage, setShowPerPage] = useState(6);
    const [pagination, setPagination] =useState({
        start: 0,
        end: showPerPage,
    });

    const onPaginationChange = (start,  end) =>{
        setPagination({start: start, end: end});
    };
    const [searchTerm, setsearchTerm] = useState("");
    const [doctors, setDoctors] = useState([])
    const navigate = useNavigate()

    const doctorsCollectionRef = collection(db, "doctors");
    useEffect(() => {

        const getDoctors = async () => {
            const data = await getDocs(doctorsCollectionRef);
            setDoctors(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
        }

        getDoctors()
    }, [])
  return (
    <div>     
          <Navbar/>
             
             <img src={FindDoctor}  class="img-fluid" width="1350" height="500" alt="..."></img>
             <br/>
             
  <br/>
  <h1 style={{textAlign: "center", color: "purple"}}><b>#India's Most Trusted Doctors</b></h1>
  <div className="album py-2">
        
            <div className="container">

                <div className="row">
                <div className="col-md-6">
                        
                        <div className="card-body">
                        <input type="text" class="form-control" placeholder="Dr. Name, Speciality, year of experiance" name="location" 
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

                    {doctors.filter((val)=>{
      if (setsearchTerm === ""){
        return val;
      } else if (
        val.fName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.experiance.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.lName.toLowerCase().includes(searchTerm.toLowerCase()) 
      ){
        return val;
      }
    }).slice(pagination.start, pagination.end).map((doctor) => { return (
                    <div className="col-md-4">
                        <div className="card mb-4 box-shadow">
                            <img className="card-img-top" src={doctor.docImg} alt="doc1" />
                            <div className="card-body">
                                <h3 className="card-text">Dr. {doctor.fName} {doctor.lName}</h3>
                                <h6 className="card-text"> {doctor.specialization}</h6>
                                <h6 className="card-text" style={{color: "blue"}}> {doctor.experiance} years of experience</h6>
                                <div class="btn-group">
                                <div class="dropdown">
  <button class="btn btn-sm btn-info dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Time Slot
  </button>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><button class="dropdown-item" ><center>Today {doctor.slots}</center></button></li>
    <li><button class="dropdown-item btn btn-primary"> <center> {doctor.todaytime}</center></button></li>
    <li><button class="dropdown-item"><center>Tomorrow {doctor.tomorrowslot}</center></button></li>
    <li><button class="dropdown-item"><center>{doctor.tomorrowtime}</center></button></li>
  </ul>
</div>
<div class="dropdown">
  <a class="btn btn-sm btn-o dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Clinic
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><p class="dropdown-item">{doctor.ClinicName}</p></li>
    <li><button class="dropdown-item">{doctor.ClinicLocation}</button></li>
    <li> <a class="dropdown-item btn btn-btn-outline-info" href="tel: {doctor.ClinicCall}"> {doctor.ClinicCall}</a></li>
  </ul>
</div>
</div>
<br/><br/>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        
                                        <div class="dropdown">
  <button class="btn btn-sm btn-outline-primary dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  View Profile
  </button>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><button class="dropdown-item" ><b>Medical Degrees:</b> {doctor.degree}</button></li>
    <li><button class="dropdown-item" ><b>Registration No:</b> {doctor.registration}</button></li>
    <li><button class="dropdown-item" ><b>Year of Registration:</b> {doctor.year} </button></li>
    <li><button class="dropdown-item"><b>State of Registration:</b> {doctor.state}</button></li>
  </ul>
</div>
                                        <button onClick={() => {navigate(`/DocConsult/${doctor.id}`)}} type="button" className="btn btn-sm btn-outline-success">
                                           Book Appointment
                                        </button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    )})}              

                </div>
                <PaginationOld showPerPage={showPerPage} 
                onPaginationChange={onPaginationChange}
                total={doctors.length}
                />
            </div>
            

        </div>
        
        
      


    </div>
  );
}

export default AllDoctors