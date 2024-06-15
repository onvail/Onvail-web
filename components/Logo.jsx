import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='p-1'>
      <Image
        src='/logo.svg'
        alt='Onvail Logo'
        width={130}
        height={81}
        priority
      />
    </div>
  )
}

export default Logo