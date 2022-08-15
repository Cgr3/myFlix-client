import React from 'react';
import { Form, Button } from 'react-bootstrap';

function UpdateUser({ handleSubmit, handleUpdate }) {
  return (
    <>
      <h2>Update Info</h2>
      <Form>
        <Form.Group>
          <Form.Label>Username: </Form.Label>
          <Form.Control type='text' name='Username' defaultValue={user.Username} onChange={e.handleUpdate(e)} required placeholder='Enter a username' />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password: </Form.Label>
          <Form.Control type='password' name='password' defaultValue={user.Password} onChange={e.handleUpdate(e)} required placeholder='Enter a password' />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email: </Form.Label>
          <Form.Control type='email' name='email' defaultValue={user.Email} onChane={e.handleUpdate(e)} required placeholder='Enter an email' />
        </Form.Group>
        <Button variant='primary' type='submit' onClick={handleSubmit}>Update Info</Button>
      </Form>
    </>
  )
}

export default UpdateUser 