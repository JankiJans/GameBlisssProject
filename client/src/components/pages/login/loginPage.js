import {Button, Form, Container} from 'react-bootstrap'
import { useState } from 'react'
import { API_URL } from '../../../config'

import { useDispatch } from 'react-redux'
import { logIn } from '../../../redux/usersRedux'

import styles from './loginPage.module.scss'

import Alerts from '../../features/Alerts/Alerts'


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState(null)
  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password})
    }
    setStatus('loading')
    fetch(`${API_URL}/auth/login`, options)
    .then(res => res.json())
    .then(data => {
      if(data.message === 'success') {
        const { email, id } = data.user;
        dispatch(logIn({ email, id }));
        setStatus('success');
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      } else {
        setStatus('serverError');
      }
    })
    .catch(err => {
      setStatus('serverError');
    });
}


  return (
    <div className={styles.body}>
      <Container>
    <Form className="col-12 col-sm-6 mx-auto" onSubmit={handleSubmit}>
      <h1 className='py-5'>login</h1>

      <Alerts status={status} context="login"/>

      <Form.Group className='mb-3' controlId='formEmail'>
        <Form.Label>Email</Form.Label>
        <Form.Control type='text' placeholder='Enter email' value={email} onChange={e => setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
      </Form.Group>

      <Button variant='warning' type='submit' className='mb-5'>Log in</Button>

    </Form>
    </Container>
    </div>
    )
}

export default Login