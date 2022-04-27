// import React, { useEffect, useState } from 'react'
// import { collection, getDoc, getDocs, doc } from 'firebase/firestore'
// import { db } from '../../firebase'
// import { useParams } from 'react-router-dom'
// import Image from "react-bootstrap/Image";
// import { useUserAuth } from '../../contexts/UserAuthContext'
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
// import { TimePickerComponent } from "@syncfusion/ej2-react-calendars"
// import { Button } from 'bootstrap';



// function DocConsult() {
//     const { user } = useUserAuth()
//     const [selectedDate, setSelectedDate] = useState(null)
//     const [selectedTime, setSelectedTime] = useState(null)

//     const minTime: Date = new Date("10/03/2021 10:00 AM")
//     const maxTime: Date = new Date("10/03/2021 05:00 PM")

//     const [doctor, setDoctor] = useState()
//     const params = useParams()
//     useEffect(() => {
//         getData()
//     }, [])
//     async function getData() {
//         try {
//             const doctorTemp = await getDoc(doc(db,'doctors',params.docId))
//             setDoctor(doctorTemp.data())
            
//         } catch(error) {
//             console.log(error.message)
//         }
//     }

//     const bookappointment = (e) => {
//         e.preventDefault()
//         alert("Appointment Submitted Successfully")
//         setSelectedTime("")
//         setSelectedDate("")

//     }

//     return (
//     <>
//     <br/><br/><br/>
//         <div className='doc-div' style={{ display: "flex", justifyContent: "space-between"}}>

//             <div className='DocConsultant' style={{ display: "block",margin:50 }}>
//                 <Image style={{ display: "block", width: 400, height: 400 }} src={doctor && doctor.docImg} rounded/>
//                 <h2>{doctor && doctor.fName} {doctor && doctor.lName}</h2>
//                 <h4>{doctor && doctor.specialization}</h4>         
//             </div>
//             {user ? (
//             <form onSubmit={bookappointment} className='consult' style={{ display: "block", margin:50 }}>
//                 <h3>Book An Appointment</h3>
                
//                 <DatePicker className='date-picker mt-3' selected={selectedDate}
//                 placeholderText="Select a Date" 
//                 onChange= {date => setSelectedDate(date)}
//                 dateFormat='dd/MM/yyyy'
//                 minDate={new Date()}
//                 isClearable
//                 required>
//                 </DatePicker>
//                 <div className='time-picker mt-3'>
//                     <TimePickerComponent onChange= {(e) => setSelectedTime(e.target.value)} placeholder='Select a timer' min={minTime} max={maxTime} value= { selectedTime }>

//                     </TimePickerComponent>
//                 </div>
//                 <center className='mt-4'>
//                     <button type="submit" class="btn btn-outline-success">Book Appointment</button>
//                 </center>
                
//             </form>

//             ):<>
            
//             </>
//             }
            

//         </div>
        
//     </>
//     )
// }

// export default DocConsult




import React, { useEffect, useState } from 'react'
import Navbar from '../inc/Navbar';

import { collection, getDoc, getDocs, doc, addDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import { useParams } from 'react-router-dom'
import Image from "react-bootstrap/Image";
import { useUserAuth } from '../../contexts/UserAuthContext'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars"
import { Button } from 'bootstrap';



function DocConsult() {
    const { user } = useUserAuth()
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime ,setSelectedTime] = useState(null)
    const userinfoRef = collection(db, "Appointments") 
    const minTime: Date = new Date("10/03/2021 08:00 AM")
    const maxTime: Date = new Date("10/03/2021 09:00 PM")
    const [patientName, setPatientName] = useState(null)
    const [patientCall, setPatientCall] = useState(null)

    const [doctor, setDoctor] = useState()
    const params = useParams()
    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        try {
            const doctorTemp = await getDoc(doc(db,'doctors',params.docId))
            setDoctor(doctorTemp.data())
            
        } catch(error) {
            console.log(error.message)
        }
    }

    const bookappointment = (e) => {
        e.preventDefault()
        const userinfo = {
            
            "Email": user.email,
            "Appointment_with": doctor.fName,
            "Time": selectedTime,
            "Date": selectedDate,
            "PatientN": patientName,
            "PatientCall": patientCall
        }
        
        addDoc(userinfoRef, userinfo)

        alert("Appointment Submitted Successfully")
        setSelectedTime("")
        setSelectedDate("")
        setPatientName("")
        setPatientCall("")

    }
    const emailVerified = user.emailVerified;
    return (
    <>
   <Navbar/>
<br/><br/><br/>
       <div className='container-sm' >

            <div className='DocConsultant' style={{ margin: 0 }}>
        {/* <div className='doc-div' style={{ display: "flex", justifyContent: "space-between"}}>

            <div className='DocConsultant' style={{ display: "block",margin:50 }}> */}
    <div className="album py-3">
        
        <div className="container">

            <div className="row">
            <div className="col-md-4">
                        <div className="card mb-4 box shadow">
                        <img className="card-img-top"  src={doctor && doctor.docImg} alt="doc1" />
                        <div className="card-body">
                {/* <Image style={{ display: "block", width: 350, height: 250 }} src={doctor && doctor.docImg} rounded/> */}
                <h2 className="card-text">{doctor && doctor.fName} {doctor && doctor.lName}</h2>
                <h6 className="card-text">{doctor && doctor.specialization}</h6>  
                <h6 className="card-text">{doctor && doctor.experiance} years of experience</h6>    

                <div class="btn-group">
                                <div class="dropdown">
  <button class="btn btn-sm btn-info dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Time Slot
  </button>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><button class="dropdown-item" ><small><center>Today {doctor && doctor.slots}</center></small></button></li>
    <li><button class="dropdown-item btn btn-primary"> <small><center> {doctor && doctor.todaytime}</center></small></button></li>
    <li><button class="dropdown-item"><small><center>Tomorrow {doctor && doctor.tomorrowslot}</center></small></button></li>
    <li><button class="dropdown-item"><small><center>{doctor && doctor.tomorrowtime}</center></small></button></li>
  </ul>
</div>
<div class="dropdown">
  <a class="btn btn-sm btn-o dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Clinic
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><p class="dropdown-item"><small>{doctor && doctor.ClinicName}</small></p></li>
    <li><button class="dropdown-item"> <small>{doctor && doctor.ClinicLocation}</small></button></li>
    <li> <a class="dropdown-item btn btn-btn-outline-info" href="tel: +91 9933798896"><small> {doctor && doctor.ClinicCall}</small></a></li>
  </ul>
</div>
</div>   
</div>
</div>
</div>
</div>
</div>
</div> 
            </div>
            <div className="">
            {emailVerified ? (
            <form onSubmit={bookappointment} className='consult' style={{ margin: 20 }}>
              
                <h2>Book An Appointment</h2>
              
                 <div class="col-md-8">
    <label for="validationCustom03" class="form-label"></label>
    <input type="text" class="form-control" placeholder="Patient Name *" 
    onChange= {(e) => setPatientName(e.target.value)}
    id="validationCustom03" selected={patientName} required/>
    <div class="invalid-feedback">
      Please provide patient name.
    </div>
  </div>
  <div class="col-md-8 ">
    <label for="validationCustom03" class="form-label"></label>
    <input type="text" class="form-control" placeholder="Patient Mobile Number *" 
     onChange= {(e) => setPatientCall(e.target.value)}
     id="validationCustom03" selected={patientCall} required/>
    <div class="invalid-feedback">
      Please provide patient mobile number.
    </div>
  </div>
                <DatePicker className='date-picker mt-4' selected={selectedDate}
                placeholderText="Select a Date" 
                onChange= {date => setSelectedDate(date)}
                dateFormat='dd/MM/yyyy'
                minDate={new Date()}
                isClearable
                required>
                </DatePicker>
                <div className='time-picker mt-3'>
                    <TimePickerComponent onChange= {(e) => setSelectedTime(e.target.value)} placeholder='Select a time' min={minTime} max={maxTime} value ={ selectedTime }>

                    </TimePickerComponent>
                </div>
               
                <center className='mt-4'>
                    <button type="submit" class="btn btn-outline-success">Book Appointment</button>
                </center>
                
            </form>

            )
            :(<>
             <h2 style={{ display: "block",margin:50 }}>You Need to Verify your Email to appointment a Doctor</h2>
            </>
            )
            }
            
      </div>
      </div>
        
    </>
    )
}

export default DocConsult