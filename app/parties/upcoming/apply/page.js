import Image from 'next/image'
import Link from 'next/link'
// import { useRouter } from 'next/navigation'
import React from 'react'

const UpcomingParties = ({ params }) => {
  // const router = useRouter()
  // console.log(params.user)

  const upcoming_parties = [
    {
      id: 1,
      image: '/icons/liveparties/2.svg',
      user: 'Qing Madi',
    },
    {
      id: 2,
      image: '/icons/liveparties/2.svg',
      user: 'Stovia',
    },
    {
      id: 3,
      image: '/icons/liveparties/2.svg',
      user: 'Awesome HC',
    },
    {
      id: 4,
      image: '/icons/liveparties/2.svg',
      user: 'Pocolee',
    },
    {
      id: 5,
      image: '/icons/liveparties/2.svg',
      user: 'Ayra Starr',
    },
  ]

  return (
    <div className='px-[3%]'>
      <div className='mb-12'>
        <Link
          href={'/home'}
          className='cursor-pointer inline-flex items-center gap-x-2'>
          <Image
            width={24}
            height={24}
            src={'/icons/backbutton.svg'}
            alt='backbutton'
          />
          <span className='text-white text-[20px] font-poppins font-500'>
            Back
          </span>
        </Link>
      </div>
      <div className='min-h-[664px] bg-[radial-gradient(#323131,#1F1F1F)] rounded-[8px] px-10 py-10 mb-32'>
        <div className='text-white text-[18px] lg:text-[24px] font-400 font-poppins font-medium mb-3'>
          You are allowed to upload just 2 songs
        </div>
        <div className='mb-5 w-full h-[295px] flex items-center justify-between rounded-[10px] border border-dashed border-[#FFFFFF50] px-10 py-6'>
          <div className='flex flex-col items-center text-white'>
            <span className='font-poppins text-[30px] font-medium'>
              Drag your songs here
            </span>
            <span className='font-poppins text-[20px] font-medium'>
              .mp3, .wav, max 100MB
            </span>
          </div>
          <div className='font-poppins text-[20px] font-medium'>or</div>
          <button className='bg-[#ffffff] w-[291px] h-[64.07px] rounded-[42px] flex items-center justify-center text-[#000000] text-[20px]'>
            SELECT FILES
          </button>
        </div>
        <div className='flex flex-1'>
          <div className='flex flex-col'>
            <span className='text-[14px] font-poppins mb-1'>bad to the bone</span>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingParties
