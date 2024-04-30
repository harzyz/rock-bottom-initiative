import React, { FC } from 'react'

export interface ButtonProps {
  label: string,
  className: string
}
const BrownButton:FC<ButtonProps> = ({label, className = ''}) => {
  return (
    <button className={`text-[#fff] p-[10px] rounded-[8px] hover:opacity-[40%] ${className} `}>
      {label}
    </button>
  )
}

export default BrownButton
