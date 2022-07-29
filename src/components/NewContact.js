import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function NewContact() {
  const [validated, setValidated] = useState(false);
  const [Newname, setnAame]=useState("");
  const [neweMail,seteMail]=useState("");
  const [phoneNumber, setphoneNumber]=useState("");
  const [Address, setAdress]=useState("");
  const [City, setCity]=useState("");
  const [pincode, setpincode]=useState("");
  const [Date_of_Birth, setDate_of_Birth]=useState("");
  
  const newHistory = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('NewContact-info')){
      newHistory("/SearchData")
    }
  })

  async function newContact()
  {
    console.warn(Newname,neweMail,phoneNumber,Address,City,pincode,Date_of_Birth);
    let newItem = {Newname,neweMail,phoneNumber,Address,City,pincode,Date_of_Birth};
    let newResult = await fetch("http://localhost:5000/login",{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(newItem)
    });
    newResult = await newResult.json()
    localStorage.setItem("NewContact-info",JSON.stringify(newResult))
    newHistory("/SearchandData");
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="Newname"
            required
            type="text"
            placeholder="Name.."
            onChange={(e)=> setnAame(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomemail">
          <Form.Label>email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              name="neweMail"
              type="email"
              placeholder="abc@deloitte.com"
              aria-describedby="inputGroupPrepend"
              required
              onChange={(e)=> seteMail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="phonenumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control 
            name="phoneNumber"
            type="number" 
            placeholder="Mobile Number..." 
            required 
            onChange={(e)=> setphoneNumber(e.target.value)}
            />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Pincode.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Address</Form.Label>
          <Form.Control 
          name="address"
            type="text" 
            placeholder="Address" 
            required
            onChange={(e)=> setAdress(e.target.value)} 
            />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Address.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>City</Form.Label>
          <Form.Control 
            name="City"
            type="text" 
            placeholder="City" 
            required
            onChange={(e)=> setCity(e.target.value)} 
            />
          <Form.Control.Feedback type="invalid">
            Please provide a valid City.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Pincode</Form.Label>
          <Form.Control 
            name="pincode"
            type="number" 
            placeholder="Pincode" 
            required
            onChange={(e)=> setpincode(e.target.value)} 
            />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Pincode.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} md="3" controlId="validationCustom06">
          <Form.Label>Date Of Birth</Form.Label>
          <Form.Control 
            name="Date_of_Birth"
            type="date" 
            placeholder="DOB" 
            required
            onChange={(e)=> setDate_of_Birth(e.target.value)} 
            />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Date Of Birth.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <br></br>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <center>
        <Button type="submit">Submit form</Button>
        </center>
    </Form>
  );
}
export default NewContact;
 