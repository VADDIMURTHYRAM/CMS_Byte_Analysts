import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';

function NewContact() {

  const [Name, setnAame]=useState("");
 
  const [Mobile, setMobile]=useState("");
  const [Address, setAdress]=useState("");
  const [City, setCity]=useState("");
  const [Pincode, setPincode]=useState("");
  const [Date_of_Birth, setDate_of_Birth]=useState("");
  
  const newHistory = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('NewContact-info')){
      newHistory("/SearchData")
    }
  })

  async function newContact()
  {
    console.warn(Name,Mobile,Address,City,Pincode,Date_of_Birth);
    let newItem = {Name,Date_of_Birth,Address,City,Pincode,Mobile};
    let newResult = await fetch("http://localhost:5000/add",{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(newItem)
    });
    newResult = await newResult.json()
    localStorage.setItem("NewContact-info",JSON.stringify(newResult))
    newHistory("/SearchandData")
  }

  

  return (
    <Form >
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="Name"
            required
            type="text"
            placeholder="Name.."
            onChange={(e)=> setnAame(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} md="3" controlId="Mobile">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control 
            name="Mobile"
            type="number" 
            placeholder="Mobile Number..." 
            required 
            onChange={(e)=> setMobile(e.target.value)}
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
            name="Pincode"
            type="number" 
            placeholder="Pincode" 
            required
            onChange={(e)=> setPincode(e.target.value)} 
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
        <Button onClick={newContact} type="submit">Submit form</Button>
        </center>
    </Form>
  );
}
export default NewContact;
 