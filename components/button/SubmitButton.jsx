import React from 'react'

const SubmitButton = ({
  width = 'w-full',
  height = 'h-[43px]',
  type = 'submit',
  label = 'Login',
  onClick=null
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${width} ${height} rounded-[27px] bg-primary text-white text-[14px] flex items-center justify-center outline-none hover:opacity-[0.9]`}>
      {label}
    </button>
  )
}

export default SubmitButton
