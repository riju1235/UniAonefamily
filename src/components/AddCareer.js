import React, { useState } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup, Card } from "react-bootstrap";
import BookDataCareer from "../services/book.careers2";


const AddCareer = () => {
    const [title, setTitle] = useState(""); 
    const [jobcategary, setJobcategary] = useState(""); 
    const [city, setCity] = useState(""); 
    const [experience, setExperience] = useState(""); 
    const [mobile, setMobile] = useState(""); 
    const [emailaddress, setEmailaddress ] = useState ("");
    const [status, setStatus] = useState("Available");
    const [flag, setFlag] = useState(true);
    const [massage, setMassage] = useState({ error: false, msg: ""});



   const handleSubmit = async  (e) => {
       e.preventDefault();
       setMassage("");
       if(title === "" || mobile === "" || emailaddress === "" || experience === "" || city ==="" || jobcategary === "") {
           setMassage({error: true, msg : "All field are mandator"});
           return;
       }
       const newBook = {
           title,
           mobile,
           emailaddress,
           experience,
           city,
           jobcategary,
           status
       }
       console.log(newBook);

       try {
           await BookDataCareer.addBooks(newBook);
           setMassage({ error: false, msg : "Good luck with your career!"});
       } catch (err) {
           setMassage({ error: true, msg: err.massage });
       }

       setTitle("");
       setMobile("");
       setEmailaddress("");
       setExperience("");
       setCity("");
       setJobcategary("");
   };
    return (
        <>
           <br/>
           <div className="album py-5">
           <div className="container">

<div className="row">
        <div className="col-md-9">
           <Card body >
               <br/>
               
               <h5>BE THE FIRST TO SEE NEW OPPORTUNITIES</h5>
              
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
                    <InputGroup>
                   
                    <Form.Control type="text"
                     placeholder="ENTER YOUR NAME"
                     value={ title}
                     onChange={(e) => setTitle(e.target.value)}
                     />
                    </InputGroup>
                </Form.Group>

               


                <Form.Group className="mb-3" controlId="formBookMobile">
                   
                    <Form.Control type="text"
                    placeholder="MOBILE PHONE"
                    value={ mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBookEmailaddress">
                    
                    <Form.Control type="text"
                     placeholder="EMAIL ADDRESS"
                     value={ emailaddress}
                     onChange={(e) => setEmailaddress(e.target.value)}
                     />
                 
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBookExperience">
                    
            
                    <Form.Control type="text"
                     placeholder="EXPERIENCE"
                     value={ experience}
                     onChange={(e) => setExperience(e.target.value)}
                     />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBookCity">
                   
                    <Form.Control type="text"
                     placeholder="LOCATION"
                     value={ city}
                     onChange={(e) => setCity(e.target.value)}
                     />
                   
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBookJobcategary">
                    <Form.Control type="text"
                     placeholder="JOB CATEGORY"
                     value={ jobcategary}
                     onChange={(e) => setJobcategary(e.target.value)}
                     />
                   
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
                            <Button variant="outline-info" type="Submit">
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
export default AddCareer;