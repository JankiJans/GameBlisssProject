import {Alert, Button, Form, Spinner} from 'react-bootstrap'
import { useState } from 'react'


import { API_URL } from '../../../config'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  
  
  const [status, setStatus] = useState(null) //null, loading, succes, serverError, clientError, loginError

  const handleSubmit = (e) => {
    e.preventDefault()

    const requestData = {
      email,
      password,
      passwordRepeat
    }

    const options = {
      method: 'POST',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData),
    }

    setStatus('loading')
    fetch(`${API_URL}/auth/register`, options)
      .then(res => {
        if (res.status === 201) {
          setStatus('success')
        } else if (res.status === 400) {
          setStatus('clientError')
        } else if (res.status === 409) {
          setStatus('loginError')
        } else {
          setStatus('serverError')
        }
      })
      .catch(err => {
        setStatus('serverError')
      })
  }

  return (
    
      <Form className="col-12 col-sm-3 mx-auto" onSubmit={handleSubmit}>

        <h1 className='my-4'>Sign up</h1>

        {status === "success" && (
          <Alert variant='success'>
            <Alert.Heading>Success!</Alert.Heading>
            <p>You have been successful registered</p>
          </Alert>
        )}

        {status === "serverError" && (
          <Alert variant='danger'>
            <Alert.Heading>Something went wrong!</Alert.Heading>
            <p>Unexpected error please try again</p>
          </Alert>
        )}

        {status === "clientError" && (
          <Alert variant='danger'>
            <Alert.Heading>Not enough data</Alert.Heading>
            <p>You have to fill all the fields</p>
          </Alert>
        )}

        {status === "loginError" && (
          <Alert variant='warning'>
            <Alert.Heading>Login already in use</Alert.Heading>
            <p>You have to use other login</p>
          </Alert>
        )}

        {status === "loading" && (
          <Spinner animation="border" role="status" className="block mx-auto">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}

        <Form.Group className='mb-3' controlId='formLogin'>
          <Form.Label>email</Form.Label>
          <Form.Control type='text' placeholder='Enter email' value={email} onChange={e => setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formPassword'>
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control type='password' placeholder='Repeat password' value={passwordRepeat} onChange={e => setPasswordRepeat(e.target.value)}/>
        </Form.Group>


        <Button variant='warning' type='submit' className='mb-5'>Submit</Button>
      </Form>
    
  )
}

export default Register