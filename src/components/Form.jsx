import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Form.css';

class ContactForm extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="userEmail">Email address</Label>
          <Input type="email" name="email" id="userEmail" placeholder="Enter email" />
          <FormText color="muted">
            We'll never share your email with anyone else.
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label for="fullName">Full name</Label>
          <Input type="tel" name="password" id="fullName" placeholder="Full name" />
        </FormGroup>
        <FormGroup>
          <Label for="phoneNumber">Phone</Label>
          <Input type="tel" name="password" id="phoneNumber" placeholder="+234" />
        </FormGroup>
        <FormGroup>
          <Label for="textArea">Message</Label>
          <Input type="textarea" name="text" id="textArea" />
        </FormGroup>
        <Button color="success">Submit</Button>
      </Form>
    );
  }
}

export default ContactForm;