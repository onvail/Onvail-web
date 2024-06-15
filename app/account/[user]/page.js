import Image from 'next/image'
import Link from 'next/link'
// import { useRouter } from 'next/navigation'
import React from 'react'

const AccountDetails = ({ params }) => {
  // const router = useRouter()
  // console.log(params.user)

  const upcoming_parties = [
    {
      id: 1,
      image: '/icons/liveparties/2.svg',
      user: 'Qing Madi',
      party: 'party-name'
    },
    {
      id: 2,
      image: '/icons/liveparties/2.svg',
      user: 'Stovia',
      party: 'party-name'
    },
    {
      id: 3,
      image: '/icons/liveparties/2.svg',
      user: 'Awesome HC',
      party: 'party-name'
    },
    {
      id: 4,
      image: '/icons/liveparties/2.svg',
      user: 'Pocolee',
      party: 'party-name'
    },
    {
      id: 5,
      image: '/icons/liveparties/2.svg',
      user: 'Ayra Starr',
      party: 'party-name'
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
      <div className='flex gap-x-8 mb-12'>
        <div className='w-[163px] h-[163px] rounded-full'>
          <Image
            src={'/icons/users/accountphoto.svg'}
            width={10000}
            height={100}
            alt='Onvail party'
            className='rounded-[4px] object-cover'
          />
        </div>
        <div className='flex flex-col w-7/12'>
          <span className='text-white text-[25px] font-poppins font-semibold mb-1'>
            hanitaharry
          </span>
          <div className='flex items-center gap-x-1'>
            <Image
              src={'/icons/location.svg'}
              width={13}
              height={15}
              alt='location'
              className='relative bottom-[2px]'
            />
            <span className='text-white text-[14px] font-poppins font-400 mb-1'>
              29, Port Harcourt, Nigeria
            </span>
          </div>
          <div className='text-[20px] font-poppins font-400 text-white'>
            As disco evolved into the many-headed dance stylings of the ’80s,
            Will Socolov and cosmic cellist Arthur Russell founded a label to
            match - the always influential Sleeping Bag Records. During the
            house era
          </div>
        </div>
      </div>
      <div className='min-h-[664px] bg-[radial-gradient(#323131,#1F1F1F)] rounded-[8px] px-10 py-10 mb-32'>
        <div className='mb-14'>
          <div className='text-white text-[18px] font-500 font-hanken_grotesk mb-8'>
            Planned parties
          </div>
          <div className='flex gap-x-4 lg:gap-x-[25px] mb-12'>
            <div className='w-[184px] h-[159px] flex items-center justify-center rounded-[4px] mb-2'>
              <Image
                src={'/icons/liveparties/2.svg'}
                alt='Onvail party'
                width={184}
                height={159}
                className='rounded-[4px]'
              />
            </div>
            <div className='flex flex-col'>
              <div className='flex items-center mb-0.3'>
                <Image
                  src={'/icons/upcp/2.svg'}
                  alt='Onvail party'
                  width={24}
                  height={24}
                  className='rounded-full mr-1'
                />
                <span className='text-[#848484] text-[10px] lg:text-[12px] font-400 font-poppins'>
                  Planned by
                </span>
                <span className='text-white text-[10px] lg:text-[12px] font-400 font-poppins ml-1'>
                  hanitaharry
                </span>
              </div>
              <span className='text-[#EDEDED] text-[20px] lg:text-[22px] font-400 font-poppins'>
                Battle of the mic for all
              </span>
              <span className='text-[#808080] text-[8px] lg:text-[13px] font-400 font-poppins'>
                Wednesday 24th • 4:00pm
              </span>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='text-white text-[18px] font-500 font-hanken_grotesk mb-8'>
            Upcoming Parties
          </div>
          <div className='flex flex-row flex-wrap pb-14 gap-x-[3%] lg:gap-x-[41px] gap-y-10'>
            {upcoming_parties?.map((up) => (
              <Link
                key={up?.id}
                href={`/upcoming-parties/${up?.party}`}
                className='w-[47%] lg:w-[184px]'>
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountDetails
