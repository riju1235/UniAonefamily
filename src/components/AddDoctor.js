import React, { useState } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup, Card } from "react-bootstrap";
import BookDataDoctor from "../services/book.doctorprofile";


const AddCorporate = () => {
    const [title, setTitle] = useState(""); 
    const [consultfees, setConsultfees] = useState(""); 
    const [city, setCity] = useState(""); 
    const [specialization, setSpecialization] = useState(""); 
    const [experience, setExperience] = useState(""); 
    const [mobile, setMobile] = useState(""); 
    const [emailid, setEmailid ] = useState ("");
    const [status, setStatus] = useState("Available");
    const [flag, setFlag] = useState(true);
    const [massage, setMassage] = useState({ error: false, msg: ""});



   const handleSubmit = async  (e) => {
       e.preventDefault();
       setMassage("");
       if(title === "" || mobile === "" || emailid === "" || specialization === "" || experience === "" || city ==="" || consultfees === "") {
           setMassage({error: true, msg : "All fields are mandatory!"});
           return;
       }
       const newBook = {
           title,
           mobile,
           emailid,
           specialization,
           experience,
           city,
           consultfees,
           status
       }
       console.log(newBook);

       try {
           await BookDataDoctor.addBooks(newBook);
           setMassage({ error: false, msg : "Our expert team will call you within two days!"});
       } catch (err) {
           setMassage({ error: true, msg: err.massage });
       }

       setTitle("");
       setMobile("");
       setEmailid("");
       setSpecialization("");
       setExperience("");
       setCity("");
       setConsultfees("");
   };
    return (
        <>
           <br/>
           
           <div className="album py-4">
           <div className="container">

<div className="row justify-content-center">
        <div className="col-md-6">
           <Card body >
           <div className="card mb-4 box-shadow">
               <br/>
              
               <h5 style={{textAlign: "center", color: "blue"}}>Doctor Profile Details</h5>
              
               <br/>
        <div className="p-3 box shadow " >
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

                <Form.Group className="mb-3" controlId="formBookSpecialization">
                    <InputGroup>
                    <InputGroup.Text id="formBookSpecialization"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-plus" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
</svg></InputGroup.Text>
                    <Form.Control type="text"
                     placeholder="Specialization"
                     value={ specialization}
                     onChange={(e) => setSpecialization(e.target.value)}
                     />
                    </InputGroup>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBookMobile">
                    <InputGroup>
                    <InputGroup.Text id="formBookMobile"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-plus-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5z"/>
</svg></InputGroup.Text>
                    <Form.Control type="text"
                    placeholder="Contact Number"
                    value={ mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBookEmailid">
                    <InputGroup>
                    <InputGroup.Text id="formBookEmailid">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg>
                    </InputGroup.Text>
                    <Form.Control type="text"
                     placeholder="Official Email ID "
                     value={ emailid}
                     onChange={(e) => setEmailid(e.target.value)}
                     />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBookExperience">
                    <InputGroup>
                    <InputGroup.Text id="formBookExperience">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
</svg>
              </InputGroup.Text>
                    <Form.Control type="text"
                     placeholder="Experience"
                     value={ experience}
                     onChange={(e) => setExperience(e.target.value)}
                     />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBookCity">
                    <InputGroup>
                    <InputGroup.Text id="formBookCity"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg></InputGroup.Text>
                    <Form.Control type="text"
                     placeholder="City"
                     value={ city}
                     onChange={(e) => setCity(e.target.value)}
                     />
                    </InputGroup>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBookConsultfees">
                    <InputGroup>
                    <InputGroup.Text id="formBookConsultfees"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-medical" viewBox="0 0 16 16">
  <path d="M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317V5.5zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
</svg></InputGroup.Text>
                    <Form.Control type="text"
                     placeholder="Consultation fees"
                     value={ consultfees}
                     onChange={(e) => setConsultfees(e.target.value)}
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
                            <Button variant="outline-success" type="Submit">
                           Submit
                            </Button>
                        </div>
                

            </Form>
          
        </div>
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