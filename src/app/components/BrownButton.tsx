import React, { FC } from 'react'

export interface ButtonProps {
  label: string,
  className: string
}
const BrownButton:FC<ButtonProps> = ({label, className = ''}) => {
  return (
    <button className={`text-[#fff] p-[10px] rounded-[8px] transform transition-transform hover:scale-110 ${className} `}>
      {label}
    </button>
  )
}

export default BrownButton
