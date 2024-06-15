import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  const popular_artists = [
    {
      id: 1,
      image: '/icons/banners/1.svg',
      user: 'Qing Madi',
    },
    {
      id: 2,
      image: '/icons/banners/2.svg',
      user: 'Stovia',
    },
    {
      id: 3,
      image: '/icons/banners/3.svg',
      user: 'Awesome HC',
    },
    {
      id: 4,
      image: '/icons/banners/4.svg',
      user: 'Pocolee',
    },
    {
      id: 5,
      image: '/icons/banners/5.svg',
      user: 'Ayra Starr',
    },
    {
      id: 6,
      image: '/icons/banners/6.svg',
      user: 'Novemba',
    },
    {
      id: 7,
      image: '/icons/banners/7.svg',
      user: 'Shallipopi',
    },
  ]

  const live_parties = [
    {
      id: 1,
      image: '/icons/liveparties/1.svg',
      user: 'Qing Madi',
    },
    {
      id: 2,
      image: '/icons/liveparties/2.svg',
      user: 'Stovia',
    },
    {
      id: 3,
      image: '/icons/liveparties/3.svg',
      user: 'Awesome HC',
    },
    {
      id: 4,
      image: '/icons/liveparties/4.svg',
      user: 'Pocolee',
    },
    {
      id: 5,
      image: '/icons/liveparties/5.svg',
      user: 'Ayra Starr',
    },
  ]

  const upcoming_parties = [
    {
      id: 1,
      image: '/icons/upcp/1.svg',
      user: 'Qing Madi',
    },
    {
      id: 2,
      image: '/icons/upcp/2.svg',
      user: 'Stovia',
    },
    {
      id: 3,
      image: '/icons/upcp/3.svg',
      user: 'Awesome HC',
    },
    {
      id: 4,
      image: '/icons/upcp/4.svg',
      user: 'Pocolee',
    },
    {
      id: 5,
      image: '/icons/upcp/5.svg',
      user: 'Ayra Starr',
    },
    {
      id: 6,
      image: '/icons/upcp/6.svg',
      user: 'Awesome HC',
    },
    {
      id: 7,
      image: '/icons/upcp/7.svg',
      user: 'Pocolee',
    },
    {
      id: 8,
      image: '/icons/upcp/8.svg',
      user: 'Ayra Starr',
    },
    {
      id: 9,
      image: '/icons/upcp/9.svg',
      user: 'Awesome HC',
    },
    {
      id: 10,
      image: '/icons/upcp/10.svg',
      user: 'Pocolee',
    },
  ]

  return (
    <div className='flex flex-col lg:flex-row mb-8 lg:mb-0 px-[3%]'>
      <div className='lg:w-1/12 mb-6 lg:mb-0'>
        <ul>
          <li>
            <Link
              href={'/home'}
              className='h-[40px] w-[92px] rounded-[8px] bg-gray_2 flex items-center justify-evenly'>
              <Image
                src='/icons/home.svg'
                alt='home'
                width={15}
                height={15}
                priority
              />
              <span className='font-400 font-hanken_grotesk text-[15px]'>
                Home
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className='w-full lg:w-11/12 pb-12 bg-[radial-gradient(#323131,#1F1F1F)] rounded-t-[8px]'>
        <div className='w-full h-12 bg-[#191919] rounded-t-[8px] flex items-center pl-10'>
          <span className='text-white text-[18px] font-500 font-hanken_grotesk'>
            Popular artists on Onvail
          </span>
        </div>
        <div className='flex flex-row mb-4 justify-around lg:justify-normal px-5 lg:px-16 py-8 gap-x-6 lg:gap-x-14 overflow-x-scroll lg:overflow-x-hidden'>
          {popular_artists?.map((artist) => (
            <div
              key={artist?.id}
              className='flex flex-col items-center justify-center'>
              <div className='w-[109px] h-[109px] flex items-center justify-center rounded-full mb-2'>
                <Image
                  src={artist?.image}
                  alt='Onvail Logo'
                  width={109}
                  height={109}
                  className='rounded-full'
                />
              </div>
              <span className='text-white text-[12px] font-400 font-poppins'>
                {artist?.user}
              </span>
            </div>
          ))}
        </div>
        <div className='px-5 lg:px-16 pb-4 mb-6'>
          <div className='w-full flex flex-row justify-between items-center'>
            <div className='flex flex-row items-center'>
              <span className='text-white text-[14px] md:text-[18px] font-500 font-hanken_grotesk'>
                Live listening parties
              </span>
              <div className='w-[47px] h-[25px] flex items-center justify-center ml-2 rounded-[20.5px] bg-[radial-gradient(#CC6161,#731616)]'>
                <span className='text-white text-[10px] md:text-[12px] font-poppins font-400'>
                  Live
                </span>
              </div>
            </div>
            <span className='text-white text-[12px] font-500 font-poppins'>
              View all
            </span>
          </div>
          <div className='flex flex-row pb-14 justify-start py-6 gap-x-4 lg:gap-x-12 overflow-x-scroll lg:overflow-x-hidden'>
            {live_parties?.map((party) => (
              <div
                key={party?.id}
                className='flex flex-col items-start justify-start'>
                <div className='w-[184px] h-[159px] flex items-center justify-center rounded-[4px] mb-2'>
                  <Image
                    src={party?.image}
                    alt='Onvail party'
                    width={184}
                    height={159}
                    className='rounded-[4px]'
                  />
                </div>
                <div className='flex flex-col'>
                  <div className='flex items-center mb-0.3'>
                    <Image
                      src={party?.image}
                      alt='Onvail party'
                      width={13}
                      height={13}
                      className='rounded-full mr-1'
                    />
                    <span className='text-[#848484] text-[12px] font-400 font-poppins'>
                      Planned by
                    </span>
                    <span className='text-white text-[12px] font-400 font-poppins ml-1'>
                      Radiocheff
                    </span>
                  </div>
                  <span className='text-[#D5D5D5] text-[12px] font-400 font-poppins'>
                    Battle of the mic for all
                  </span>
                  <span className='text-[#848484] text-[10px] font-400 font-poppins'>
                    2.1k listeners
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='px-5 lg:px-16 pb-4'>
          <div className='w-full flex flex-row justify-between items-center'>
            <span className='text-white text-[16px] md:text-[18px] font-500 font-hanken_grotesk'>
              Upcoming Parties
            </span>
            <span className='text-white text-[12px] font-500 font-poppins'>
              View all
            </span>
          </div>
          <div className='flex flex-row flex-wrap pb-14 justify-start py-8 gap-x-[3%] lg:gap-x-12 gap-y-10'>
            {upcoming_parties?.map((up) => (
              <Link href={'/parties/upcoming/details/title'} key={up?.id}>
                <div className='w-[47%] lg:w-[184px]'>
                  <div className='w-full relative lg:h-[159px] rounded-[4px] bg-primary'>
                    <Image
                      src={up?.image}
                      width={10000}
                      height={100}
                      alt='Onvail party'
                      className='rounded-[4px] object-cover'
                    />
                  </div>
                  <div className='mt-3 flex flex-col'>
                    <div className='flex items-center mb-0.3'>
                      <Image
                        src={'/icons/upcp/1.svg'}
                        alt='Onvail party'
                        width={13}
                        height={13}
                        className='rounded-full mr-1'
                      />
                      <span className='text-[#848484] text-[10px] lg:text-[12px] font-400 font-poppins'>
                        Planned by
                      </span>
                      <span className='text-white text-[10px] lg:text-[12px] font-400 font-poppins ml-1'>
                        Radiocheff
                      </span>
                    </div>
                    <span className='text-[#D5D5D5] text-[10px] lg:text-[12px] font-400 font-poppins'>
                      Battle of the mic for all
                    </span>
                    <span className='text-[#848484] text-[8px] lg:text-[10px] font-400 font-poppins'>
                      Wednesday 24th • 4:00pm
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
