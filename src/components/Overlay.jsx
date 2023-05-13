import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Overlay = () => {
  return (
    <div className='absolute top-0 left-0 pointer-events-none w-full h-full'>
      <span className='absolute top-5 left-10 text-sm'>
        Tejido
        <br />
        Solidario
      </span>
      <Link className='absolute top-5 right-10 pointer-events-auto' href='https://www.instagram.com/solidariotesol/' target='_blank' alt='Link al instagram de tejido solidario'>
        <Image src='https://icongr.am/fontawesome/instagram.svg?size=30&color=ffffff' width={30} height={30} alt='Logo instagram' />
      </Link>
    </div>
  )
}

export default Overlay