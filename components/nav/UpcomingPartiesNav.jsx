'use client'
import React, { useEffect, useState } from 'react'
import Logo from '../Logo'
import Link from 'next/link'
import Image from 'next/image'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import {
  usePathname,
  useParams,
  useSearchParams,
  useRouter,
} from 'next/navigation'

const UpcomingPartiesNav = () => {
  const pathname = usePathname()
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()
  const [searchText, setSearchText] = useState('')
  const [debouncedInputValue, setDebouncedInputValue] = useState('')
  const [mis] = useState(1000)
  const [users, setUsers] = useState([])
  const [showUsers, setShowUsers] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const vParamVal = searchParams.toString().split('=')[1]
    if (vParamVal == 'yes') {
      setIsLoggedIn(true)
    }
  }, [searchParams])

  useEffect(() => {
    if (debouncedInputValue != '') {
      searchArtistUsername(debouncedInputValue)
    }
  }, [debouncedInputValue, searchText])

  useEffect(() => {
    if (searchText.length < 1) {
      setShowUsers(false)
    }
  }, [searchText])

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedInputValue(searchText)
    }, 900)
    return () => clearTimeout(delayInputTimeoutId)
  }, [searchText, mis])

  const searchArtistUsername = (val) => {
    const userSearch = [
      {
        id: 1,
        photo: '/icons/users/hanitaharry.svg',
        username: '@hanitaharry',
      },
      {
        id: 2,
        photo: '/icons/users/hanitaharry2.svg',
        username: '@hanitaharry',
      },
      {
        id: 3,
        photo: '/icons/users/hanitaharry3.svg',
        username: '@hanitaharry',
      },
    ]
    setShowUsers(true)
    setUsers(userSearch)
  }

  return (
    <nav className='w-full relative md:h-[82px] flex flex-row justify-between items-center lg:pt-2 pl-[1%] pr-[3%]'>
      <Logo />
      <button
        className='absolute right-3 top-7 z-40 lg:hidden'
        onClick={() => setNavOpen(!navOpen)}>
        {!navOpen ? (
          <MenuOutlined className='text-[24px]' />
        ) : (
          <CloseOutlined className='text-[24px]' />
        )}
      </button>
      <div
        className={`${
          navOpen
            ? 'top-14 opacity-100'
            : 'opacity-0 lg:opacity-100 top-[-320px]'
        } flex flex-col bg-dark_bg shadow-lg lg:flex-row lg:flex-1 lg:justify-between py-4 lg:py-0 px-5 lg:px-0 absolute top-[60px] lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto transition-all duration-500 ease-in`}>
        <ul className='w-full lg:w-[65%] flex flex-col lg:flex-row lg:justify-end mb-4 lg;mb-0'>
          <li className='relative'>
            <div className='absolute top-2.5 left-3'>
              <Image
                src='/icons/search.svg'
                alt='search'
                width={10}
                height={10}
                priority
              />
            </div>
            <input
              type='text'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder='You can search by username or party title'
              className='w-full lg:w-[535px] h-[30px] border-2 border-[#656565] rounded-[6px] pl-8 text-[11px] pr-2 outline-none text-[#191919] bg-[#0E0E0E]'
            />
            <div
              className={`${
                !showUsers && 'hidden'
              } absolute top-7.9 lg:left-2 rounded-b-[10px] w-full lg:w-[520px]  bg-[#191919] z-20`}>
              <ul className='flex flex-col'>
                {showUsers &&
                  users?.map((user) => (
                    <li
                      key={user?.id}
                      className='cursor-pointer w-full px-6 hover:bg-primary h-[47px]'>
                      <Link
                        href={`/account/${user?.username.split('@')[1]}`}
                        className='w-full h-full flex items-center justify-start'>
                        <Image
                          src={user?.photo}
                          alt='user'
                          width={25}
                          height={25}
                          priority
                        />
                        <span className='text-white text-[11px] font-hanken_grotesk font-400 ml-5'>
                          {user?.username}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default UpcomingPartiesNav
