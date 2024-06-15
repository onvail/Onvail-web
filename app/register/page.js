'use client'
import Logo from '@/components/Logo'
import SubmitButton from '@/components/button/SubmitButton'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Link from 'next/link'

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(4, 'must be at least 3 characters long')
      .required(),
  })
  .required()

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div className='w-full mb-10'>
        <Logo />
      </div>
      <div className='w-[90%] md:w-[397px] mx-auto md:px-0'>
        <div className='text-white text-[38px] md:text-[43px] leading-[48px] md:leading-[64.5px] mb-12'>
          Sign up to start or join a party
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-row justify-between items-center mb-5'>
            <div className='flex flex-col w-[48%]'>
              <input
                {...register('first_name')}
                id='first_name'
                placeholder='First name'
                className='h-[30px] border border-white rounded-[6px] px-2 outline-none bg-dark_bg'
              />
              <span className='mt-1 text-xs text-[#FF0000]'>
                {errors?.first_name && errors?.first_name.message}
              </span>
            </div>
            <div className='flex flex-col w-[48%]'>
              <input
                {...register('last_name')}
                placeholder='Last name'
                className='h-[30px] border border-white rounded-[6px] px-2 outline-none bg-dark_bg'
              />
              <span className='mt-1 text-xs text-[#FF0000]'>
                {errors?.last_name && errors?.last_name.message}
              </span>
            </div>
          </div>
          <div className='flex flex-col mb-5'>
            <input
              {...register('username')}
              placeholder='Username'
              className='h-[30px] border border-white rounded-[6px] px-2 outline-none bg-dark_bg'
            />
            <span className='mt-1 text-xs text-[#FF0000]'>
              {errors?.username && errors?.username.message}
            </span>
          </div>
          <div className='flex flex-col mb-5'>
            <input
              {...register('email')}
              placeholder='Email'
              className='h-[30px] border border-white rounded-[6px] px-2 outline-none bg-dark_bg'
            />
            <span className='mt-1 text-xs text-[#FF0000]'>
              {errors?.email && errors?.email.message}
            </span>
          </div>
          <div className='flex flex-col mb-5'>
            <input
              {...register('password')}
              placeholder='Password'
              className='h-[30px] border border-white rounded-[6px] px-2 outline-none bg-dark_bg'
            />
            <span className='mt-1 text-xs text-[#FF0000]'>
              {errors?.password && errors?.password.message}
            </span>
          </div>
          <div className='flex flex-col mb-5'>
            <input
              {...register('confirm_password')}
              placeholder='Confirm Password'
              className='h-[30px] border border-white rounded-[6px] px-2 outline-none bg-dark_bg'
            />
            <span className='mt-1 text-xs text-[#FF0000]'>
              {errors?.confirm_password && errors?.confirm_password.message}
            </span>
          </div>
          <div className='flex flex-col mb-5'>
            <select
              {...register('gender')}
              placeholder='Gender'
              className='h-[30px] border border-white text-[#9B9B9B] rounded-[6px] px-2 outline-none bg-dark_bg'>
              <option disable hidden>
                Gender
              </option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
            <span className='mt-1 text-xs text-[#FF0000]'>
              {errors?.gender && errors?.gender.message}
            </span>
          </div>
          <div className='flex flex-col mb-5'>
            <select
              {...register('role')}
              placeholder='Gender'
              className='h-[30px] border border-white text-[#9B9B9B] rounded-[6px] px-2 outline-none bg-dark_bg'>
              <option disable hidden>
                Role
              </option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
            <span className='mt-1 text-xs text-[#FF0000]'>
              {errors?.role && errors?.role.message}
            </span>
          </div>
          <div className='flex flex-row justify-between items-center mb-8'>
            <div className='flex flex-col w-[48%]'>
              <select
                {...register('country')}
                className='h-[30px] border border-white text-[#9B9B9B] rounded-[6px] px-2 outline-none bg-dark_bg'>
                <option disable hidden>
                  Country
                </option>
              </select>
              <span className='mt-1 text-xs text-[#FF0000]'>
                {errors?.country && errors?.country.message}
              </span>
            </div>
            <div className='flex flex-col w-[48%]'>
              <select
                {...register('state')}
                className='h-[30px] border border-white text-[#9B9B9B] rounded-[6px] px-2 outline-none bg-dark_bg'>
                <option disable hidden>
                  State
                </option>
              </select>
              <span className='mt-1 text-xs text-[#FF0000]'>
                {errors?.state && errors?.state.message}
              </span>
            </div>
          </div>
          <SubmitButton type='submit' label='Login' />
        </form>
        <div className='text-[13px] text-center mt-10 font-hanken_grotesk font-500'>
          Already have an account?{' '}
          <Link href={'/login'} className='text-purple_2 ml-1'>
            Login
          </Link>
        </div>
      </div>
      <div className='px-[4%] md:px-0 text-[13px] text-[#808080] text-center mt-24 mb-8 font-hanken_grotesk font-500'>
        This site is protected by reCAPTCHA. Google Privacy Policy and Terms of
        Service apply.
      </div>
    </>
  )
}

export default RegisterPage
