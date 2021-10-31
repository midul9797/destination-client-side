// Contact Us Component
import React from 'react';
import { FiPhone } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { HiOutlineMail} from 'react-icons/hi';
// Background Gradient CSS
const ContactUs = () => {
  const bgGradient = {
    backgroundImage: 'linear-gradient( 132.6deg,  rgba(71,139,214,1) 23.3%, rgba(37,216,211,1) 84.7% )'
  }
  return (
    <div className="container row m-lg-5 m-5">
      <div className="col-12 col-lg-6 text-center py-5 shadow text-dark" style={bgGradient}>
        <h1 className="fw-bold">Contact Us</h1>
        <div className="py-5">
          <h4><GrLocation/> Address</h4>
          <p className="text-main">Cheslyn Hay, Walsall WS6 7HX, United Kingdom</p>
          <h4><FiPhone/>  Phone</h4>
          <p className="text-main">+123 456 7989</p>
          <h4><HiOutlineMail/>  Email</h4>
          <p className="text-main">youandme@drivehub.com</p>
        </div>
      </div>
      {/* Contact Us Form */}
      <div className="col-12 col-lg-6 shadow">
        <form action="" className="p-5">
          <h1 className="text-cyan fw-bold mb-5">Send us a message</h1>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label fw-bold">Name</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Your Name" />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label fw-bold">Email</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Your Email" />
          </div>
          <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
              style={{ height: '150px' }}></textarea>
            <label htmlFor="floatingTextarea2">Your Message</label>
          </div>
          <div className="p-3">
            <button type="submit" className="button px-4 fw-bold">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;