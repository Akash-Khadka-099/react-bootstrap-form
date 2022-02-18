import React from "react";
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
  const submitHandler = (e) => {
    e.preventDefault();

    console.log("submit button clicked");
  };
  return (
    <>
      <Form>
        <FormGroup as={Row}>
          <Col sm={9}>
            <FormGroup as={Row} className="mb-2">
              <FormLabel sm={3} htmlFor="class" column>
                Class
              </FormLabel>
              <Col sm={9}>
                <FormControl type="select" />
              </Col>
            </FormGroup>
            <FormGroup as={Row} className="mb-2">
              <FormLabel sm={3} htmlFor="class" column>
                University Name
              </FormLabel>
              <Col sm={9}>
                <FormControl type="text" />
              </Col>
            </FormGroup>
            <FormGroup as={Row} className="mb-2">
              <FormLabel sm={3} htmlFor="class" column>
                Father's Name
              </FormLabel>
              <Col sm={9}>
                <FormControl type="text" />
              </Col>
            </FormGroup>
            <FormGroup as={Row} className="mb-2">
              <FormLabel sm={3} htmlFor="class" column>
                Mother's Name
              </FormLabel>
              <Col sm={9}>
                <FormControl type="text" />
              </Col>
            </FormGroup>
            <FormGroup as={Row} className="mb-2">
              <FormLabel sm={3} htmlFor="class" column>
                University Name
              </FormLabel>
              <Col sm={5}>
                <FormControl type="date" />
              </Col>
            </FormGroup>

            <FormGroup as={Row} className="my-5">
              <Col sm={6}>
                <FormLabel className="text-center">Temporary address</FormLabel>
                <FormControl type="text" />
              </Col>
              <Col sm={6}>
                <FormLabel>Permanent address</FormLabel>
                <FormControl type="text" />
              </Col>
            </FormGroup>

            <FormGroup as={Row} className="mb-2">
              <FormLabel sm={3} htmlFor="class" column>
                Email
              </FormLabel>
              <Col sm={9}>
                <FormControl type="email" />
              </Col>
            </FormGroup>

            <FormGroup as={Row} className="mb-2">
              <FormLabel sm={7} htmlFor="class" column>
                Do you belong to Economically poor section ?
              </FormLabel>
              <Col sm={5}>
                <FormCheck inline type="radio" name="condition" label="yes" />
                <FormCheck inline type="radio" name="condition" label="no" />
              </Col>
            </FormGroup>

            <FormGroup as={Row} className="mb-2">
              <FormLabel sm={3} htmlFor="class" column>
                Blood group
              </FormLabel>
              <Col sm={2}>
                <FormControl type="text" />
              </Col>
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormControl type="image"  />
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
