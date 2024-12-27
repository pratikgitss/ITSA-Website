import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaCamera, FaUniversity, FaCalendarAlt } from 'react-icons/fa';
import member_img from './assets/member_img-bg.png'

const Member = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    photo: '',
    regNumber: '',
    year: '',
    committee: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(form);
  };

  return (
    <div className="flex items-center justify-center max-w-screen min-h-screen bg-blue-50">
      {/* <img src={member_img} alt="" /> */}
      <form className="bg-white shadow-lg rounded-lg p-8 max-w-md w-2/5" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Become a Member</h2>
        <div className="mb-4">
          <label className="flex items-center text-gray-600 mb-1"><FaUser className="mr-2" />Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="flex items-center text-gray-600 mb-1"><FaEnvelope className="mr-2" />Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="flex items-center text-gray-600 mb-1"><FaPhone className="mr-2" />Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="flex items-center text-gray-600 mb-1"><FaCamera className="mr-2" />Upload Photo</label>
          <input
            type="file"
            name="photo"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setForm({ ...form, photo: e.target.files[0] })}
            required
          />
        </div>

        <div className="mb-4">
          <label className="flex items-center text-gray-600 mb-1"><FaUniversity className="mr-2" />Registration Number</label>
          <input
            type="text"
            name="regNumber"
            placeholder="Enter your registration number"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={form.regNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="flex items-center text-gray-600 mb-1"><FaCalendarAlt className="mr-2" />Year</label>
          <select
            name="year"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={form.year}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select year</option>
            <option value="1">First Year</option>
            <option value="2">Second Year</option>
            <option value="3">Third Year</option>
            <option value="4">Fourth Year</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="flex items-center text-gray-600 mb-1"><FaUser className="mr-2" />Interested Committee</label>
          <select
            name="committee"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={form.committee}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a committee</option>
            <option value="Technical">Technical</option>
            <option value="Sports">Sports</option>
            <option value="Cultural">Cultural</option>
            <option value="Alumni Relations">Alumni Relations</option>
            <option value="Anchor">Anchor</option>
            <option value="Media">Media</option>
            <option value="Finance">Finance</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Apply Now
        </button>
        
      </form>
      <div className="w-fit" >
        
      </div>
    </div>
  );
};

export default Member;
