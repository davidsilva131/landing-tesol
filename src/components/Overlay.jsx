import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import tesolLogo from '/public/favicon.ico'
const Overlay = () => {
  return (
    <div className='absolute top-0 left-0 w-full h-full'>
      <Image className='absolute top-5 left-10 rounded-full' src={tesolLogo} width={75} height={75} alt='Logo Tejido solidario' />
      <span className='absolute top-9 left-36 text-sm'>
        Tejido
        <br />
        Solidario
      </span>
      <Link className='absolute top-9 right-10 z-10' href='https://www.instagram.com/solidariotesol/' target='_blank' alt='Link al instagram de tejido solidario'>
        <Image src='https://icongr.am/fontawesome/instagram.svg?size=30&color=ffffff' width={30} height={30} alt='Logo instagram' />
      </Link>
    </div>
  )
}

export default Overlay