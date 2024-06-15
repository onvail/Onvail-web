'use client'
import Logo from '@/components/Logo'
import SubmitButton from '@/components/button/SubmitButton'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(4, 'must be at least 3 characters long')
      .required(),
  })
  .required()

const LoginPage = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) =>{
     console.log(data)
     return router.push('/home?v=true')
  }

  return (
    <>
      <div className='w-full mb-10'>
        <Logo />
      </div>
      <div className='w-[90%] md:w-[397px] mx-auto md:px-0'>
        <div className='text-white text-[38px] md:text-[43px] leading-[48px] md:leading-[64.5px] mb-12'>
          Login to start or join a party
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-2 flex flex-col'>
            <label htmlFor='email' className='mb-1'>
              Username or Email
            </label>
            <input
              {...register('email')}
              className='h-[30px] border border-white rounded-[6px] px-2 outline-none bg-dark_bg'
            />
            <span className='mt-1 text-xs text-[#FF0000]'>
              {errors?.email && errors?.email.message}
            </span>
          </div>
          <div className='mb-8 flex flex-col'>
            <label htmlFor='email' className='mb-1'>
              Password
            </label>
            <input
              {...register('password')}
              className='h-[30px] border border-white rounded-[6px] px-2 outline-none bg-dark_bg'
            />
            <span className='mt-1 text-xs text-[#FF0000]'>
              {errors?.password && errors?.password.message}
            </span>
          </div>
          <SubmitButton
            type='submit'
            onClick={handleSubmit(onSubmit)}
            label='Login'
          />
        </form>
        <div className='text-[13px] text-center mt-10 font-hanken_grotesk font-500'>
          {`Don\'t`} have an account?{' '}
          <Link href={'/register'} className='text-purple_2 ml-1'>
            Register
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

export default LoginPage
