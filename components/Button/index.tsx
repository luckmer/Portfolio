import React, { FC } from 'react'

export interface IProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const Button: FC<IProps> = ({ children, className, onClick }) => {
  return (
    <button
      className={className}
      onClick={(e) => {
        e.preventDefault()
        onClick?.()
      }}>
      {children}
    </button>
  )
}

export default Button
