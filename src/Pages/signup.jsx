import React  from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

export default function Signup() {
    
  
  return (
    <>
    <div className="container  mt-3">
      <section className='d-flex justify-content-between'>
        <div className="left_data mt-3" style={{width:"100%"}}>
        <h3 className='text-center col-lg-6'>Sign Up</h3>
        <Form>
      <Form.Group className="mt-3 col-lg-6" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Your Name" />
        
      </Form.Group>
      <Form.Group className="mt-3 col-lg-6" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email"/>
        
      </Form.Group>
      <Form.Group className="mt-3 col-lg-6" controlId="formBasicEmail">
        <Form.Control  type="date"  />
        
      </Form.Group>

      <Form.Group className="mt-3 col-lg-6" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" className="col-lg-6 mt-3 "style={{backgroundColor:"black"}}  type="submit">
        Submit
      </Button>
    </Form>
    <p className='mt-3'>Already Have An Account? <span><NavLink to="/login">SignIn</NavLink></span></p>

</div>
        <div className="right_data ">
          <div className="download_img " style={{width:"100%"}}>
            <img  src="https://images.pexels.com/photos/4968386/pexels-photo-4968386.jpeg?auto=compress&cs=tinysrgb&w=600" style={{maxWidth:400 , maxHeight:550}} alt="" />

          </div>
        </div>
        </section>
        </div>
      </>

  )
}