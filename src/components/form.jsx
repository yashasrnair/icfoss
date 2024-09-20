import React, { useState } from 'react';
import axios from 'axios';
import './form.css'; 

function MembershipForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    semester: '',
    batch: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.firstName || !formData.lastName || !formData.phoneNumber || !formData.email || !formData.semester || !formData.batch) {
      setError('All fields are required');
      return;
    }

    setError('');
    
    // Send the form data to Google Apps Script
    try {
      const response = await axios.post('https://script.google.com/macros/s/AKfycbya67NTUqIgMqrg8aHWpNRGF1e7pU7Zhxx_msx1cFlt1tCbOKQ6c4w8RQo0oHSmvfHP/exec', formData);
      
      if (response.data.status === 'success') {
        setSuccess('Registration successful');
        setFormData({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          semester: '',
          batch: '',
        });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setError('Error submitting the form. Please try again later.');
    }
  };

  return (
    <div className="container">
      <h2>Membership Registration</h2>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Semester</label>
          <input
            type="text"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Batch</label>
          <input
            type="text"
            name="batch"
            value={formData.batch}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default MembershipForm;
