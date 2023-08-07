import React from 'react'
import { Link } from 'react-router-dom';
import '../../styling/style.css'
import Loader from './Loader';

export default function HeaderSection() {
    return (
        <>
                <div className="#a099b0">
                <div>
                <div className="card text-bg-light" data-aos="zoom-in-up">
                    <div className='bnrimg'>
                        <h1 className='bnrtxt'>Its Online Shopping</h1>
                        <p className='bnrtxt2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolore <br></br> quae veniam soluta ex quibusdam odio laLaborum dolore quae veniam soluta ex quibusdam odio la</p>
                        <center>
                        <button className='btn' style={{backgroundColor:'white'}}><Link to="/login" className='linkbtn'>Login</Link></button>
                        <button className="btn" style={{backgroundColor:'white'}}><Link to="/signup" className='linkbtn'>SignUp</Link></button>
                        </center>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
