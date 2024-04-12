import { Search } from 'lucide-react'

export const App = () => {
  return (
    <nav className='justify-between  flex items-center p-10'>
      <ul className='flex items-center gap-12 text-zinc-700'>
        <li className='hover:underline text-zinc-100 cursor-default '><img src="/image0.png" alt="logo da zapcinema" /></li>
        <li className='hover:underline text-zinc-100 cursor-default'>Home</li>
        <li className='hover:underline text-zinc-100 cursor-default'>Filmes</li>
        <li className='hover:underline text-zinc-100 cursor-default'>Cinema</li>
        <li className='hover:underline text-zinc-100 cursor-default'>Eventos</li>
        <li className='hover:underline text-zinc-100 cursor-default'>Contato</li>
      </ul>
      <div className='flex items-center gap-3'>
        <Search className='size-5'/>
        <img src="/eu.jpg" alt="imagen do usuario" className='rounded-full' width={35} height={35} />
      </div>
    </nav>
  )
}
