import React, { useState } from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars"
import { Form, Alert, InputGroup, Button, ButtonGroup, Card, Row, Col } from "react-bootstrap";
import BookDataLabbook from "../services/book.labbooks";


const AddLabbook = () => {
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime ,setSelectedTime] = useState(null)
    const minTime: Date = new Date("10/03/2021 10:00 AM")
    const maxTime: Date = new Date("10/03/2021 05:00 PM")
    const [title, setTitle] = useState(""); 
    const [dated, setDated] = useState(""); 
    const [times, setTimes] = useState(""); 
    const [landmark, setLandmark] = useState(""); 
    const [house, setHouse] = useState(""); 
    const [gender, setGender] = useState(""); 
    const [pincode, setPincode] = useState(""); 
    const [date, setDate] = useState(""); 
    const [mobile, setMobile] = useState(""); 
    const [emailaddress, setEmailaddress ] = useState ("");
    const [status, setStatus] = useState("Available");
    const [flag, setFlag] = useState(true);
    const [massage, setMassage] = useState({ error: false, msg: ""});



   const handleSubmit = async  (e) => {
       e.preventDefault();
       setMassage("");
       if(title === "" || mobile === "" || emailaddress === "" || date === "" || pincode ==="" || house ==="" || landmark === "" || gender === "" || dated === "" || times === "") {
           setMassage({error: true, msg : "All fields are mandatory!"});
           return;
       }
       const newBook = {
           title,
           times,
           dated,
           landmark,
           house,
           mobile,
           emailaddress,
           date,
           pincode,
           gender,
           status
       }
       console.log(newBook);

       try {
           await BookDataLabbook.addBooks(newBook);
           setMassage({ error: false, msg : "Your information submited successfully!"});
       } catch (err) {
           setMassage({ error: true, msg: err.massage });
       }

       setTitle("");
       setLandmark("");
       setHouse("");
       setMobile("");
       setEmailaddress("");
       setDate("");
       setPincode("");
       setGender("");
       setDated("");
       setTimes("");
   };
    return (
        <>
           <br/>
           <div className="album py-1">
           <div className="container">

<div className="row">
        <div className="col-md-14">
           <Card body >
               <br/>
               
               <h5 style={{textAlign: "center"}}> ADD PATIENT DETAILS </h5>
              
               <br/>
         <div className="card mb-4 box">
        {massage?.msg && (<Alert variant={massage?.error ? "danger": "success"}
         dismissible 
         onClose={() => setMassage("")}
         >
             {""}
             {massage?.msg}
         </Alert>
         )}
    
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBookTitle">
                    
                    <Form.Control type="text"
                     placeholder="Patient Name *"
                     value={ title}
                     onChange={(e) => setTitle(e.target.value)}
                     />
                    
                </Form.Group>

               


                <Form.Group className="mb-3" controlId="formBookMobile">
                  <Form.Control type="text"
                    placeholder="Contact Number *"
                    value={ mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    />
                   
                </Form.Group>

                
     
                <Form.Group className="mb-3" controlId="formBookEmailaddress">
                  <Form.Control type="text"
                     placeholder="Email Id *"
                     value={ emailaddress}
                     onChange={(e) => setEmailaddress(e.target.value)}
                     />
                
                </Form.Group>
               
                <Form.Group className="mb-3" controlId="formBookDate">
               
            
                    <Form.Control type="text"
                     placeholder="Date of Birth *"
                     value={date}
                     onChange={(e) => setDate(e.target.value)}
                     />
                
                </Form.Group>

               


                <Form.Group className="mb-3" controlId="formBookGender">
            
                    <Form.Control type="text"
                     placeholder="Gender *"
                     value={gender}
                     onChange={(e) => setGender(e.target.value)}
                     />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBookPincode">
                   
                   <Form.Control type="text"
                    placeholder="Pincode *"
                    value={ pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    />
                  
               </Form.Group>

               
<Form.Group className="mb-3" controlId="formBookHouse">
                   
                    <Form.Control type="text"
                     placeholder="House/Flat No,Building Name & Area Name *"
                     value={ house}
                     onChange={(e) => setHouse(e.target.value)}
                     />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBookLandmark">
                   
                    <Form.Control type="text"
                     placeholder="Landmark *"
                     value={ landmark}
                     onChange={(e) => setLandmark(e.target.value)}
                     />
                   
                </Form.Group>
                <DatePicker className='date-picker  mt-8' selected={dated} 
                placeholderText="Select a Date" 
                onChange= {date => setDated(date)}
               
                dateFormat='dd/MM/yyyy'
                minDate={new Date()}
                isClearable
                required>
                </DatePicker>
                <div className='time-picker mt-3'>
                    <TimePickerComponent onChange= {(e) => setTimes(e.target.value)} placeholder='Select a time' min={minTime} max={maxTime} value ={ times } isClearable required>

                    </TimePickerComponent>
                </div>
               
               
                {/* <ButtonGroup aria-lable="Basic example" className="mb-3">
                    <Button 
                    disabled={flag} variant="success" 
                    onClick={(e) => {
                    setStatus("Available");
                    setFlag(true);
                    }}
                    >
                        Available
                        </Button>
                        <Button variant="danger" 
                        onClick={(e) => {
                        setStatus("Not Available");
                        setFlag(false);
                        }}
                        >Not Available</Button>
        
                </ButtonGroup> */}
<br/>
                        <div className="d-grid gap-3">
                            <Button variant="outline-primary" type="Submit">
                           Submit
                            </Button>
                        </div>
                

            </Form>
          
        </div>
        </Card>
        </div>
        </div>
        </div>
        </div>
    
      
        </>


    )
}
export default AddLabbook;