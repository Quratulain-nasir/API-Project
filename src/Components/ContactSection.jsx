import React from 'react'
import UserForm from './UserForm'

export default function ContactSection() {
    return (
        <div className='container'>
            <h2 className='text-center mt-5 mb-1'>Contact Us</h2>
            <h5 className="text-center mb-5 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugit!</h5>
            <div className="row">
                <div className="col-md-6">
                    <img className='img-fluid' src="https://images.pexels.com/photos/4968386/pexels-photo-4968386.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset="" />
                </div>
                <div className="col-md-6"><UserForm /></div>
            </div>
        </div>
    )
}