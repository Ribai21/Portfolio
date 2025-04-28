import React, { useState } from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

import { motion } from 'framer-motion'

const Contact = () => {
  const [message, setMessage] = useState(false)
  const[date , setDate] = useState({
    name: "",
    email: "",
    message: ""
  })
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_kn9ogpe', // from EmailJS
      'template_zcmjgy6', // from EmailJS
      form.current,
      '_hXO2TuQIMP_SoDvc' // from EmailJS (public key)
    )
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
    }, (error) => {
      console.log(error.text);
      alert('An error occurred. Please try again.');
    });
  };

  return (
    <motion.section
    id='contact'
    initial={{ opacity: 0, scale: 0.7 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    className="relative w-full p-3 md:p-0 overflow-hidden">
      {/* 🧲 Background Magnetic Lines */}
      {/* <MagnetLines
        rows={12}
        columns={12}
        containerSize="100vw"
        lineColor="#001f2b"
        lineWidth="0.8vmin"
        lineHeight="5vmin"
        baseAngle={0}
        className="absolute inset-0 z-0"
        style={{ width: '100%', height: '100%' }}
      /> */}
      

      {/* ✍️ Content (on top of magnetic lines) */}
      <div className="relative">
        <h1 className="text-3xl md:text-5xl text-center text-[#00b8ff] font-lobster mb-10">
          Get In Touch
        </h1>

        <form
        ref={form}  
  className="flex flex-col gap-4 p-5 max-w-md mx-auto backdrop-blur-md bg-white/10 border border-white/20 rounded-md shadow-lg"
  onSubmit={(e) => {
    e.preventDefault();
    if (!date.name || !date.email || !date.message) {
      alert("All fields are required!");
      return;
    }
    sendEmail(e); // Call the sendEmail function to send the email
    // All fields filled — proceed
    setMessage(true);
    console.log(date);

    // Reset form fields after successful submission
    setDate({ name: "", email: "", message: "" });

    setTimeout(() => setMessage(false), 3000);
  }}
>
  <input
    type="text"
    placeholder="Name"
    name='user_name'
    value={date.name}
    onChange={(e) => setDate({ ...date, name: e.target.value })}
    className="p-2 border focus:ring-2 outline-none border-[#00b8ff] rounded text-base"
  />
  <input
    type="email"
    placeholder="Email"
    name='user_email'
    value={date.email}
    onChange={(e) => setDate({ ...date, email: e.target.value })}
    className="p-2 border focus:ring-2 outline-none border-[#00b8ff] rounded text-base"
  />
  <textarea
    placeholder="Message"
    rows="5"
    name='message'
    value={date.message}
    onChange={(e) => setDate({ ...date, message: e.target.value })}
    className="p-2 border border-[#00b8ff] outline-none focus:ring-2 rounded text-base"
  ></textarea>
  <button
    type="submit"
    className="p-3 bg-[#00b8ff] text-white font-bold border border-[#00b8ff] rounded text-xl hover:bg-transparent hover:text-[#00b8ff] transition duration-300"
  >
    Submit
  </button>
  {message && <p className="text-center text-green-500">Message Sent!!</p>}
</form>

      </div>
    </motion.section>
  )
}

export default Contact
