import { FC, ButtonHTMLAttributes } from 'react'
import buttonStyles from './style.module.css'

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return (
    <button className={buttonStyles.button} {...props}>
      {children}
    </button>
  )
}
