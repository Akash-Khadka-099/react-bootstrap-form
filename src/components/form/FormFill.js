import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Col,
  FormCheck,
  Button,
} from "react-bootstrap";

export default function FormFill() {
  const[formData, setFormData] = useState({
    username : "",
    class : "",
    universityName : "",
    fatherName : "",
    motherName : "",
    dob : "",
    temAdd : "",
    perAdd : "",
    email : "",
    ecoCondition : "",
    bloodGroup : "",
    image : ""

  })

  const handleChange= (e)=>{
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })

  }

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("submit button clicked");
    console.log(formData)
  };


  return (
    <>
      <Form>
        <FormGroup as={Row}>
          <Col sm={9}> 
          <FormGroup as={Row} className="mb-2">
              <FormLabel sm={3} htmlFor="username" column>
                Name
              </FormLabel>
              <Col sm={9}>
                <FormControl onChange={handleChange} type="select" name="username" />
              </Col>
            </FormGroup>
            <FormGroup as={Row} className="mb-2">
              <FormLabel sm={3} htmlFor="class" column>
                Class
              </FormLabel>
              <Col sm={9}>
                <FormControl onChange={handleChange} type="select" name="class" />
              </Col>
            </FormGroup>
            <FormGroup as={Row} className="mb-2">
              <FormLabel sm={3} htmlFor="universityName" column>
                University Name
              </FormLabel>
              <Col sm={9}>
                <FormControl onChange={handleChange} type="text" name="universityName" />
              </Col>
            </FormGroup>
            <FormGroup as={Row} className="mb-2">
              <FormLabel sm={3} htmlFor="fatherName" column>
                Father's Name
              </FormLabel>
              <Col sm={9}>
                <FormControl onChange={handleChange} type="text" name="fatherName" />
              </Col>
            </FormGroup>
            <FormGroup as={Row} className="mb-2">
              <FormLabel sm={3} htmlFor="motherName" column>
                Mother's Name
              </FormLabel>
              <Col sm={9}>
                <FormControl onChange={handleChange} type="text" name="motherName"  />
              </Col>
            </FormGroup>
            <FormGroup as={Row} className="mb-2">
              <FormLabel sm={3} htmlFor="dob" column>
                Date of Birth
              </FormLabel>
              <Col sm={5}>
                <FormControl onChange={handleChange} type="date" name="dob" />
              </Col>
            </FormGroup>

            <FormGroup as={Row} className="my-5">
              <Col sm={6}>
                <FormLabel className="text-center" htmlFor="temAdd">Temporary address</FormLabel>
                <FormControl onChange={handleChange} type="text" name="temAdd" />
              </Col>
              <Col sm={6}>
                <FormLabel htmlFor="perAdd">Permanent address</FormLabel>
                <FormControl onChange={handleChange} type="text" name="perAdd" />
              </Col>
            </FormGroup>

            <FormGroup as={Row} className="mb-2">
              <FormLabel sm={3} htmlFor="email" column>
                Email
              </FormLabel>
              <Col sm={9}>
                <FormControl onChange={handleChange} type="email" name="email" />
              </Col>
            </FormGroup>

            <FormGroup as={Row} className="mb-2">
              <FormLabel sm={7} htmlFor="condition" column>
                Do you belong to Economically poor section ?
              </FormLabel>
              <Col sm={5}>
                <FormCheck onChange={handleChange} inline type="radio" name="condition" label="yes" value="yes" />
                <FormCheck onChange={handleChange} inline type="radio" name="condition" label="no" value="no" />
              </Col>
            </FormGroup>

            <FormGroup as={Row} className="mb-2">
              <FormLabel sm={3} htmlFor="bloodGroup" column>
                Blood group
              </FormLabel>
              <Col sm={2}>
                <FormControl onChange={handleChange} type="text" name="bloodGroup" />
              </Col>
            </FormGroup>
          </Col> 
          <Col sm={3}>
            <FormControl onChange={handleChange} type="image" name="image"  />
          </Col>
        </FormGroup>

        <FormGroup className="d-flex justify-content-center mt-3">
          <Button type="submit" onClick={submitHandler}>
            Submit
          </Button>
        </FormGroup>
      </Form>
    </>
  );
}
