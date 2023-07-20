import React from 'react'

function Error({message}) {
  return (
    <div className='bg-red-700 mb-5 text-center block w-full px-10 py-3'>
      <p className='text-white font-bold uppercase text-2xl'>{message}</p>
    </div>
  )
}

export default Error
