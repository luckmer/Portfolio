import React, { FC } from 'react'

export interface IProps {
  children: React.ReactNode
  className?: string
}

const Button: FC<IProps> = ({ children, className }) => {
  return <button className={className}>{children}</button>
}

export default Button
