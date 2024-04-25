import { Search } from 'lucide-react'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export const Navigation = () => {
    
    return (
        <nav className='justify-between flex items-center px-24 py-14 max-w-full'>
            <ul className='flex items-center gap-24'>
                <li className='hover:underline text-zinc-100 cursor-default '><img src="/image0.png" alt="logo da zapcinema" width={200}/></li>
                <Li>Home</Li>
                <Li>Filmes</Li>
                <Li>Cinema</Li>
                <Li>Eventos</Li>
                <Li>Contato</Li>
            </ul>
            <div className='flex items-center gap-12'>
                <Search className='size-6 text-zinc-400' />
                <img src="/eu.jpg" alt="imagen do usuario" className='rounded-full' width={50} height={50} />
            </div>
        </nav>
    )
}
const Li : React.FC<Props> = ({children}) => {
    return(
        <li className='text-zinc-400 text-2xl hover:underline hover:text-zinc-100 cursor-default'>{children}</li>
    )
}