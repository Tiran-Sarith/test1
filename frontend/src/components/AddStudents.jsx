import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function AddStudents(){


    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [gender,setGender] = useState("");
    const [index,setReg] = useState("");


    function sendData(e){
        e.preventDefault();
        const newStudent = {
            name,
            age,
            gender,
            index

        }
        
        axios.post("http://localhost:6070/student/add", newStudent).then(()=>{
          alert("Student Added")
          setName("");
          setAge("");
          setGender("");
          setReg("");
          
        }).catch((err)=>{
          alert(err)
        })
    }

    return(
        <div className="form">
 <Form onSubmit={sendData}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Student Details</Form.Label>
        <Form.Control type="Text" placeholder="Enter Student Name" onChange={(e)=>{
            setName(e.target.value);
        }} />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="number" placeholder="Enter Student age" onChange={(e)=>{
            setAge(e.target.value);
        }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="Text" placeholder="Enter Student gender" onChange={(e)=>{
            setGender(e.target.value);
        }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="Text" placeholder="Reg No" onChange={(e)=>{
            setReg(e.target.value);
        }}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    )
}