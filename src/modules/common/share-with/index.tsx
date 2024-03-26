import React from 'react'

const ShareWith = () => {
  return (
    <div className='w-44 flex flex-col gap-2 rounded-md shadow shadow-neutral-300 px-5 py-3 text-xs font-semibold text-neutral-700'>
      <p>Share with...</p>
      <hr className='border-[1px] border-neutral-100 w-full'/>
      <ul className='flex flex-col gap-2'>
        <a href='#' className='hover:text-black'>Lincoln Curtis</a>
        <hr className='border border-neutral-100 w-full'/>
        <a href='#' className='hover:text-black'>Brandon Dokidis</a>
        <hr className='border border-neutral-100 w-full'/>
        <a href='#' className='hover:text-black'>Ashlynn Levin</a>
        <hr className='border border-neutral-100 w-full'/>
        <a href='#' className='hover:text-black'>Jaxson Schleifer</a>
        <hr className='border border-neutral-100 w-full'/>
        <a href='#' className='hover:text-black'>Zaire Schleifer</a>
      </ul>
    </div>
  )
}

export default ShareWith