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

export default function FormFill({submit}) {

  // const handleChange= (e)=>{
  //   setFormData({
  //     ...formData,
  //     [e.target.name] : e.target.value
  //   })

  // }

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      class: e.target.class.value,
      universityName: e.target.universityName.value,
      fatherName: e.target.fatherName.value,
      motherName: e.target.motherName.value,
      dob: e.target.motherName.value,
      temAdd: e.target.temAdd.value,
      perAdd: e.target.perAdd.value,
      email: e.target.email.value,
      // ecoCondition: e.target.ecoCondition.value,
      bloodGroup: e.target.bloodGroup.value,
      image: e.target.image.value,
    }

    submit(data) 
  };


  return (
    <>
      <Form onSubmit={submitHandler}>
        <FormGroup as={Row}>
          <Col sm={9}> 
          <FormGroup as={Row} className="mb-2">
              <FormLabel sm={3} htmlFor="username" column>
                Name
              </FormLabel>
              <Col sm={9}>
                <FormControl type="select" name="username" />
              </Col>
            </FormGroup>
            <FormGroup as={Row} className="mb-2">
              <FormLabel sm={3} htmlFor="class" column>
                Class
              </FormLabel>
              <Col sm={9}>
                <FormControl  type="select" name="class" />
              </Col>
            </FormGroup>
            <FormGroup as={Row} className="mb-2">
              <FormLabel sm={3} htmlFor="universityName" column>
                University Name
              </FormLabel>
              <Col sm={9}>
                <FormControl  type="text" name="universityName" />
              </Col>
            </FormGroup>
            <FormGroup as={Row} className="mb-2">
              <FormLabel sm={3} htmlFor="fatherName" column>
                Father's Name
              </FormLabel>
              <Col sm={9}>
                <FormControl  type="text" name="fatherName" />
              </Col>
            </FormGroup>
            <FormGroup as={Row} className="mb-2">
              <FormLabel sm={3} htmlFor="motherName" column>
                Mother's Name
              </FormLabel>
              <Col sm={9}>
                <FormControl  type="text" name="motherName"  />
              </Col>
            </FormGroup>
            <FormGroup as={Row} className="mb-2">
              <FormLabel sm={3} htmlFor="dob" column>
                Date of Birth
              </FormLabel>
              <Col sm={5}>
                <FormControl  type="date" name="dob" />
              </Col>
            </FormGroup>

            <FormGroup as={Row} className="my-5">
              <Col sm={6}>
                <FormLabel className="text-center" htmlFor="temAdd">Temporary address</FormLabel>
                <FormControl  type="text" name="temAdd" />
              </Col>
              <Col sm={6}>
                <FormLabel htmlFor="perAdd">Permanent address</FormLabel>
                <FormControl  type="text" name="perAdd" />
              </Col>
            </FormGroup>

            <FormGroup as={Row} className="mb-2">
              <FormLabel sm={3} htmlFor="email" column>
                Email
              </FormLabel>
              <Col sm={9}>
                <FormControl  type="email" name="email" />
              </Col>
            </FormGroup>

            <FormGroup as={Row} className="mb-2">
              <FormLabel sm={7} htmlFor="condition" column>
                Do you belong to Economically poor section ?
              </FormLabel>
              <Col sm={5}>
                <FormCheck  inline type="radio" name="condition" label="yes" value="yes" />
                <FormCheck  inline type="radio" name="condition" label="no" value="no" />
              </Col>
            </FormGroup>

            <FormGroup as={Row} className="mb-2">
              <FormLabel sm={3} htmlFor="bloodGroup" column>
                Blood group
              </FormLabel>
              <Col sm={2}>
                <FormControl  type="text" name="bloodGroup" />
              </Col>
            </FormGroup>
          </Col> 
          <Col sm={3}>
            <FormControl  type="file" name="image"  />
          </Col>
        </FormGroup>

        <FormGroup className="d-flex justify-content-center mt-3">
          <Button type="submit">
            Submit
          </Button>
        </FormGroup>
      </Form>
    </>
  );
}
