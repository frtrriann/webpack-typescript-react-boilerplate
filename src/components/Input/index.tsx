import inputStyles from './style.module.css'
import { InputHTMLAttributes, FC } from 'react'

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <input className={inputStyles.input} {...props} />
}
