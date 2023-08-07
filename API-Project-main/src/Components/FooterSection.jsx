import React from 'react'
const footer={
    color: "white",
    backgroundColor: "black",
}
const footheading={
    color:"white",
    fontFamily: 'Arial, sans-serif',
}
export default function FooterSection() {
    return (
        <div className='container-fluid p-5 mt-5' style={footer}>
            <div className="row">
        <div className="col">
        <h3 style={footheading}>Online Store</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cumque eligendi consectetur dignissimos mollitia a reiciendis maiores, tempora dolore reprehenderit laudantium ipsam  </p>
        </div>
        <div className="col">
        <h4 style={footheading}>Useful Link</h4>
        <p style={footheading}>Home</p>
        <p style={footheading}>Catogories</p>
        <p style={footheading}>About</p>
        <p style={footheading}>Contact</p>
        </div>
        <div className="col">
        <h4 style={footheading}>Contact</h4>
        <p style={footheading}>annienasir203@gmail.com</p>
        <p style={footheading}>qurratainnasir</p>
        <p style={footheading}>annie nasir</p>
        <p style={footheading}>03123456789</p>
        </div>
        <div className="col">
        <h4 style={footheading}>Catogories</h4>
        <p style={footheading}>mans</p>
        <p style={footheading}>womens</p>
        <p style={footheading}>assecories</p>
        <p style={footheading}>grosory</p>
        </div>
            </div>
            <div className="text-light text-center pt-5">Copy right made by annie nasir@</div>
            </div>
    )
}