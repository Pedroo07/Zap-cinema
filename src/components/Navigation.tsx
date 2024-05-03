import { Search } from 'lucide-react'
import React, { useState } from 'react'

type Props = {
    children: React.ReactNode
}

export const Navigation = () => {
    const [menuBar, setMenuBar] =useState(false)

    const menuActived = () => {
        setMenuBar(!menuBar)
        console.log(menuBar)
    }
    
    return (
        <div className=' flex flex-col items-center '>
            <div className='cursor-pointer fixed z-50 lg:hidden' onClick={menuActived}>
                <div className={`${menuBar ? 'translate-y-2 rotate-45' : ''} w-10 h-1 rounded bg-slate-600 my-1 mx-auto transition-all duration-300`}></div>
                <div className={`${menuBar ? 'opacity-0' : ''} w-10 h-1 rounded bg-slate-600  mx-auto transition-all duration-300`}></div>
                <div className={`${menuBar ? '-translate-y-2 -rotate-45' : ''} w-10  h-1 rounded bg-slate-600 my-1 mx-auto transition-all duration-300`}></div>
            </div>
        <nav className={`${menuBar ? 'fixed w-full h-full z-40 bg-black flex-col' : 'max-lg:hidden'} justify-around flex items-center py-14 gap-4 w-full`}>
            <ul className={`${menuBar ? 'flex-col' : ''} flex items-center xl:gap-24 max-xl:gap-14`}>
                <img src="/Zap-cinema/image0.png" alt="logo da zapcinema"/>
                <Li>Home</Li>
                <Li>Filmes</Li>
                <Li>Cinema</Li>
                <Li>Eventos</Li>
                <Li>Contato</Li>
            </ul>
            <div className='flex items-center gap-12'>
                <Search className='size-6 text-zinc-400' />
                <img src="/Zap-cinema/eu.jpg" alt="imagen do usuario" className='rounded-full' width={50} height={50} />
            </div>
        </nav>
        </div>
    )
}
const Li : React.FC<Props> = ({children}) => {
    return(
        <li className='text-zinc-400 text-2xl hover:underline hover:text-zinc-100 cursor-default'>{children}</li>
    )
}