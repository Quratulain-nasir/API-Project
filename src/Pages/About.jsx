import HeaderSection from "../Components/HeaderSection";

import React from 'react'

const About = () => {
    return (
        <>
        <HeaderSection/>
        
      <h1 className="text-center mt-5">About Us</h1>

      <div className="container">
      <div className="row">
      <div className="col">
      <h2 className="mt-5">About Our Company</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quisquam corporis ex exercitationem consectetur, temporibus quae eius consequatur quo dolorum accusantium libero doloribus voluptates placeat provident facilis dignissimos doloreLorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quisquam corporis ex exercitationem consectetur, temporibus quae eius consequatur quo dolorum accusantium libero doloribus voluptates placeat provident facilis dignissimos dolores quasiium libero doloribus voluptates placeat provident facilis dignissimos dolores quasi.</p>
      <button>read more</button>
      </div>
      <div className="col">
      <img src="https://images.pexels.com/photos/4968386/pexels-photo-4968386.jpeg?auto=compress&cs=tinysrgb&w=600" className="mt-4" />
      </div>
      </div>
      </div>
        
        <section>
          <h2 className="mt-5 text-center">Our Team Members</h2>
          <div className="container">
      <div className="row">
      <div className="col-lg-3">
      <img src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=600" width={250}/>
      <h4 className="text-center">john dow</h4>
      <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit!</p>
      </div>
      <div className="col-lg-3">
      <img src="https://images.pexels.com/photos/13801614/pexels-photo-13801614.jpeg?auto=compress&cs=tinysrgb&w=600" width={250}/>
      <h4 className="text-center">john dow</h4>
      <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit!</p>
      </div>
      <div className="col-lg-3">
      <img src="https://images.pexels.com/photos/3777564/pexels-photo-3777564.jpeg?auto=compress&cs=tinysrgb&w=600" width={250}/>
      <h4 className="text-center">john dow</h4>
      <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit!</p>
      </div>
      <div className="col-lg-3">
      <img src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=600" width={250}/>
      <h4 className="text-center">john dow</h4>
      <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit!</p>
      </div>
      </div>
          </div>
        </section>
    </>
  )
}

export default About