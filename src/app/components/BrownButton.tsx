import React, { FC } from 'react'

export interface ButtonProps {
  label: string,
  className: string
}
const BrownButton:FC<ButtonProps> = ({label, className = ''}) => {
  return (
    <button className={`bg-[#8B0000] text-[#fff] p-[10px] rounded-[8px] ${className} `}>
      {label}
    </button>
  )
}

export default BrownButton
