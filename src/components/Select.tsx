import React from 'react'
import { Props } from '../types'

export const Select: React.FC<Props> = ({ children }) => {
    return (
        <select name="movies" id="movies" className='text-zinc-400 bg-zinc-700 font-light py-4 rounded-sm px-6'> {children}</select>
    )
}
export const Option: React.FC<Props> = ({ children }) => {
    return <option>{children}</option>
}
export const Label: React.FC<Props> = ({ children }) => {
    return <label htmlFor="movies" className='text-zinc-200 font-light'>{children}</label>
}
