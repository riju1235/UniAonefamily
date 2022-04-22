import React, { useState } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup, Card } from "react-bootstrap";
import BookDataCorporate from "../services/book.corporates";


const AddCorporate = () => {
    const [title, setTitle] = useState(""); 
    const [organization, setOrganization] = useState(""); 
    const [employee, setEmployee] = useState(""); 
    const [phone, setPhone] = useState(""); 
    const [email, setEmail ] = useState ("");
    const [status, setStatus] = useState("Available");
    const [flag, setFlag] = useState(true);
    const [massage, setMassage] = useState({ error: false, msg: ""});



   const handleSubmit = async  (e) => {
       e.preventDefault();
       setMassage("");
       if(title === "" || phone === "" || email === "" || organization === "" || employee === "") {
           setMassage({error: true, msg : "All field are mandator"});
           return;
       }
       const newBook = {
           title,
           phone,
           email,
           organization,
           employee,
           status
       }
       console.log(newBook);

       try {
           await BookDataCorporate.addBooks(newBook);
           setMassage({ error: false, msg : "New Book Appointment added successfully!"});
       } catch (err) {
           setMassage({ error: true, msg: err.massage });
       }

       setTitle("");
       setPhone("");
       setEmail("");
       setOrganization("");
       setEmployee("");
   };
    return (
        <>
           <br/>
          <br/>
           <div className="album py-4">
           <div className="container">

<div className="row  justify-content-center">
        <div className="col-md-6">
           <Card body >
               <br/>
               <div className="card mb-4 box-shadow">
               
               <h5 style={{textAlign: "center"}}>Schedule a Demo</h5>
             
               <br/>
            
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
                     placeholder="Enter Your Name"
                     value={ title}
                     onChange={(e) => setTitle(e.target.value)}
                     />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBookOrganization">
                    <InputGroup>
                    <InputGroup.Text id="formBookOrganization"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
  <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
</svg></InputGroup.Text>
                    <Form.Control type="text"
                     placeholder="Organization Name"
                     value={ organization}
                     onChange={(e) => setOrganization(e.target.value)}
                     />
                    </InputGroup>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBookPhone">
                    <InputGroup>
                    <InputGroup.Text id="formBookPhone"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-plus-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5z"/>
</svg></InputGroup.Text>
                    <Form.Control type="text"
                    placeholder="Contact Number"
                    value={  phone}
                    onChange={(e) => setPhone(e.target.value)}
                    />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBookEmail">
                    <InputGroup>
                    <InputGroup.Text id="formBookEmail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-check" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
</svg>
                    </InputGroup.Text>
                    <Form.Control type="text"
                     placeholder="Official Email ID "
                     value={ email}
                     onChange={(e) => setEmail(e.target.value)}
                     />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBookEmployee">
                    <InputGroup>
                    <InputGroup.Text id="formBookEmployee">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
</svg>
              </InputGroup.Text>
                    <Form.Control type="text"
                     placeholder="Total Employee"
                     value={ employee}
                     onChange={(e) => setEmployee(e.target.value)}
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
{/* 
                        */}
                        
                         <div className="d-grid gap-2">
                            <Button variant="outline-secondary" type="Submit">
                            Schedule a Demo
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
export default AddCorporate;