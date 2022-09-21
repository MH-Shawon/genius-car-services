import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Register = () => {

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    
    const handleNavigateLogin= () =>{
        navigate('/login');
    }
    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);

    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-primary pt-3 text-center'>Please Register</h2>
            <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Your Name" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Register
      </Button>
      <p>Already have an account? <Link to='/login'onClick={handleNavigateLogin} className='text-danger text-decoration-none pe-auto'>Please Login</Link></p>
    </Form>
        </div>
    );
};

export default Register;