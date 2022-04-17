import React, { useState } from "react";

import { Form, Alert, InputGroup, Button, ButtonGroup, Card } from "react-bootstrap";
import BookDataService from "../services/book.services";


const AddBook = () => {
    const [title, setTitle] = useState(""); 

    const [contact, setContact] = useState(""); 
    const [location, setLocation ] = useState ("");
    const [status, setStatus] = useState("Available");
    const [flag, setFlag] = useState(true);
    const [massage, setMassage] = useState({ error: false, msg: ""});



   const handleSubmit = async  (e) => {
       e.preventDefault();
       setMassage("");
       if(title === "" || contact === "" || location === "") {
           setMassage({error: true, msg : "All field are mandator"});
           return;
       }
       const newBook = {
           title,
           contact,
           location,
           status
       }
       console.log(newBook);

       try {
           await BookDataService.addBooks(newBook);
           setMassage({ error: false, msg : "New Book Appointment added successfully!"});
       } catch (err) {
           setMassage({ error: true, msg: err.massage });
       }

       setTitle("");
       setContact("");
       setLocation("");
   };
    return (
        <>
           <br/><br/>
           <div className="updatesur">
           <Card body shadow>
        <div className="p-3 box " >
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
                    <InputGroup>
                    <InputGroup.Text id="formBookTitle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg></InputGroup.Text>
                    <Form.Control type="text"
                     placeholder="Patient Name"
                     value={ title}
                     onChange={(e) => setTitle(e.target.value)}
                     />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBookContact">
                    <InputGroup>
                    <InputGroup.Text id="formBookContact"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-plus-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5z"/>
</svg></InputGroup.Text>
                    <Form.Control type="text"
                    placeholder="Contact Number"
                    value={  contact}
                    onChange={(e) => setContact(e.target.value)}
                    />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBookLocation">
                    <InputGroup>
                    <InputGroup.Text id="formBookLocation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>
                    </InputGroup.Text>
                    <Form.Control type="text"
                     placeholder="Location "
                     value={ location}
                     onChange={(e) => setLocation(e.target.value)}
                     />
                    </InputGroup>
                </Form.Group>
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

                        <div className="d-grid gap-2">
                            <Button variant="primary" type="Submit">
                                Book Appointment
                            </Button>
                        </div>
                

            </Form>
          
        </div>
        </Card>
        </div>
      
        </>


    )
}
export default AddBook;