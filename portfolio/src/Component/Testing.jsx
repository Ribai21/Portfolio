import React from 'react'
import { Ripple } from './library/Ripple'
const Testing = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='text-white w-full h-full text-5xl font-bold'>
        {/* <h1>Testing</h1> */}
        <div className="relative h-full  w-full overflow-hidden">
  <Ripple />
</div>
      </div>
    </div>
  )
}

export default Testing