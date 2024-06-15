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
        <div className='flex gap-x-8 mb-12'>
          <div className='w-3/12 dew-[372px] h-[321px] rounded-[4px]'>
            <Image
              src={'/icons/liveparties/2.svg'}
              width={10000}
              height={100}
              alt='Onvail party'
              className='rounded-[4px] object-cover'
            />
          </div>
          <div className='flex flex-col w-8/12'>
            <div className='flex items-center'>
              <Image
                src={'/icons/upcp/1.svg'}
                alt='Onvail party'
                width={13}
                height={13}
                className='rounded-full mr-1'
              />
              <span className='text-[#848484] text-[16px] lg:text-[12px] font-400 font-poppins'>
                Planned by
              </span>
              <span className='text-white text-[18px] lg:text-[12px] font-400 font-poppins ml-1'>
                hanitaharry
              </span>
            </div>
            <span className='text-white text-[42px] font-poppins font-500'>
              Battle of the mic for all
            </span>
            <div className='text-[17px] font-poppins font-[400] text-white mb-2'>
              As disco evolved into the many-headed dance stylings of the ’80s,
              Will Socolov and cosmic cellist Arthur Russell founded a label to
              match - the always influential Sleeping Bag Records. During the
              house era. <b>Read more</b>
            </div>
            <span className='text-[#808080] text-[23px] font-poppins font-400'>
              Wed, June 24th 2024 • 4:00pm
            </span>
            <Link href={'/parties/upcoming/apply'} className='bg-primary hover:opacity-[0.9] flex items-center justify-center h-[54px] w-[516px] mt-5 rounded-[27px] text-white text-[20px] font-poppins font-[500]'>
              Apply as an artist
            </Link>
          </div>
        </div>
        <div className=''>
          <div className='text-white text-[18px] font-500 font-hanken_grotesk mb-8'>
            Upcoming Parties
          </div>
          <div className='flex flex-row flex-wrap pb-14 gap-x-[3%] lg:gap-x-[41px] gap-y-10'>
            {upcoming_parties?.map((up) => (
              <div key={up?.id} className='w-[47%] lg:w-[184px]'>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingParties
