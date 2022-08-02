import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './login-view.scss';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://my1movieapi.herokuapp.com/users', {
      Username: username,
      Password: password
    })
      .then(response => {
        const data = response.data;
        console.log(data);
        //Opens window in current tab
        window.open('/', '_self');
      })
      .catch(e => {
        console.log('Error loging in');
        alert('Something wasn\'t right');
      });
  };
  return (
    <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
      <Button variant="secondary" type="button" onClick={handleSubmit}>Register</Button>
    </Form>
  );
}