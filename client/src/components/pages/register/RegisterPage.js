import { Button, Form} from 'react-bootstrap'
import { useState } from 'react'

import styles from './RegisterPage.module.scss'

import { API_URL } from '../../../config'

import Alerts from '../../features/Alerts/Alerts'

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  
  
  const [status, setStatus] = useState(null);

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
          setTimeout(() => {
            window.location.href = '/login';
          }, 2000);
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
    <div className={styles.body}>
      <Form className="col-12 col-sm-6 mx-auto" onSubmit={handleSubmit}>

        <h1 className='my-4'>Sign up</h1>

        <Alerts status={status} context="register"/>

        <Form.Group className='mb-3' controlId='formLogin'>
          <Form.Label>Email</Form.Label>
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
      </div>
    
  )
}

export default Register