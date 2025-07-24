import React, { useState } from 'react';
import { useEffect } from 'react';
import InquiryForm from '../components/InquiryForm';

const ContactUs= () => {

  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            We're here to help. Reach out to us with any questions or inquiries.
          </p>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Phone</h3>
              <p className="text-gray-700">Main Office: (+91 ) 9876543210</p>
              <p className="text-gray-700">Admissions: (+91 ) 9517538520</p>
              <p className="text-gray-700">Financial Aid: (+91 ) 7539514560</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Email</h3>
              <p className="text-gray-700">General Inquiries: bvss.edu@gmail.com</p>
              <p className="text-gray-700">Admissions: bvssadmissions.edu@gmail.com</p>
              <p className="text-gray-700">Financial Aid: bvssfinaid.edu@gmail.com</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Address</h3>
              <p className="text-gray-700">Bharat Vikas Shikshan  </p>
              <p className="text-gray-700">Sanstha Chinchwad,</p>
              <p className="text-gray-700">Pune 411019</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
<section className="py-8">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Our Location</h2>
    <div className="bg-white rounded-lg shadow-md p-4 overflow-hidden">
      <div className="relative w-full" style={{ height: "400px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.820462856699!2d73.7996323149097!3d18.60050798737389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bef3c7c3d99f%3A0x7321c7375336d7e8!2sBharat%20Vikas%20Shikshan%20Sanstha!5e0!3m2!1sen!2sin!4v1633024278767!5m2!1sen!2sin"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
    <div className="mt-4 text-center">
      <a
        href="https://www.google.com/maps/place/Bharat+Vikas+Shikshan+Sanstha/@18.6005079,73.7996323,17z/data=!4m5!3m4!1s0x3bc2bef3c7c3d99f:0x7321c7375336d7e8!8m2!3d18.6005079!4d73.801821"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 font-medium"
      >
        Get Directions →
      </a>
    </div>
  </div>
</section>


      {/* Contact Form Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Send Us a Message</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
            {formSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" role="alert">
                <p className="font-bold">Thank you for your message!</p>
                <p>We'll get back to you as soon as possible.</p>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <select 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Admissions">Admissions</option>
                    <option value="Financial Aid">Financial Aid</option>
                    <option value="Academic Support">Academic Support</option>
                    <option value="Campus Visit">Campus Visit</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  ></textarea>
                </div>
                
                <div className="md:col-span-2">
                  <button type="submit" className="bg-blue-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Office Hours Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Office Hours</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Department</th>
                  <th className="py-3 px-4 text-left">Weekdays</th>
                  <th className="py-3 px-4 text-left">Weekend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-gray-700 font-medium">Main Office</td>
                  <td className="py-3 px-4 text-gray-700">8:00 AM - 5:00 PM</td>
                  <td className="py-3 px-4 text-gray-700">Closed</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700 font-medium">Admissions</td>
                  <td className="py-3 px-4 text-gray-700">9:00 AM - 6:00 PM</td>
                  <td className="py-3 px-4 text-gray-700">10:00 AM - 2:00 PM (Sat)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700 font-medium">Financial Aid</td>
                  <td className="py-3 px-4 text-gray-700">8:30 AM - 4:30 PM</td>
                  <td className="py-3 px-4 text-gray-700">Closed</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700 font-medium">Library</td>
                  <td className="py-3 px-4 text-gray-700">7:00 AM - 11:00 PM</td>
                  <td className="py-3 px-4 text-gray-700">9:00 AM - 8:00 PM</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700 font-medium">Student Services</td>
                  <td className="py-3 px-4 text-gray-700">8:00 AM - 5:00 PM</td>
                  <td className="py-3 px-4 text-gray-700">Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-600 mt-4">
            Holiday schedules may vary. Please check our announcements for special hours.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">How do I schedule a campus tour?</h3>
              <p className="text-gray-700">
                Campus tours are available Monday through Friday at 10:00 AM and 2:00 PM, and select Saturdays at 11:00 AM. 
                You can schedule a tour through our Admissions Office by calling (555) 234-5678 or using our online scheduling system.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Where can I find information about financial aid?</h3>
              <p className="text-gray-700">
                Financial aid information is available through our Financial Aid Office. Visit their page on our website for 
                details about scholarships, grants, and loans, or contact them directly at finaid@college.edu.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">How do I apply for admission?</h3>
              <p className="text-gray-700">
                Application procedures vary by program. Visit our Admissions page for detailed instructions or contact 
                the Admissions Office at admissions@college.edu for personalized guidance through the application process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Connect With Us</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Follow us on social media for campus updates, events, and news.
          </p>
          <div className="flex justify-center space-x-6">
            {/* Social Media Icons */}
            <a href="#" className="text-white hover:text-yellow-400 transition duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.026 10.026 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.16a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </section>    
    </div>
  );
}

export default ContactUs;