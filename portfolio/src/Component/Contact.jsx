import React, { useState } from 'react'


import { motion } from 'framer-motion'

const Contact = () => {
  const [message, setMessage] = useState(false)

  return (
    <motion.section
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
      <div className="relative z-10">
        <h1 className="text-3xl md:text-5xl text-center text-[#00b8ff] font-Winky mb-10">
          Get In Touch
        </h1>

        <form
        
          className="flex flex-col gap-4 p-5 max-w-md mx-auto backdrop-blur-md bg-white/10 border border-white/20 rounded-md shadow-lg"
          onSubmit={(e) => {
            e.preventDefault()
            setMessage(true)
            setTimeout(() => setMessage(false), 3000)
          }}
        >
          <input
            type="text"
            placeholder="Name"
            className="p-2 border focus:ring-2 outline-none border-[#00b8ff] rounded text-base"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border focus:ring-2 outline-none border-[#00b8ff] rounded text-base"
          />
          <textarea
            placeholder="Message"
            rows="5"
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
