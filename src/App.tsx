import './App.css'
import { Navigation } from "./components/Navigation"
import { Main } from './components/Main'
import { Label, Select, Option } from './components/Select'

export const App = () => {
  return (
    <div>
      <Navigation />
      <Main />
      <section className='bg-zinc-800 flex items-center w-full h-44 my-10 justify-around'>
        <div className='flex flex-col gap-1'>
          <Label>Escolha o Filme</Label>
          <Select>
           <Option>Kung fu Panda</Option>
           <Option>Madame Web</Option>
           <Option>Oppenheimer</Option>
           </Select>
        </div>
        <div className='flex flex-col gap-1'>
          <Label>Escolha o Cinema</Label>
          <Select>
           <Option>Avenida Shopping</Option>
           <Option>Shopping  Center</Option>
           </Select>
        </div>
        <div className='flex flex-col gap-1'>
          <Label>Data</Label>
          <input type="date" className='text-zinc-400 bg-zinc-700 font-light py-4 rounded-sm px-6'/>
        </div>
        <div className='flex flex-col gap-1'>
          <Label>Sessão</Label>
          <Select>
           <Option>19:00-Sala Vip</Option>
           <Option>21:00-Sala Comum</Option>
           </Select>
        </div>
        <button>Reserve Já</button>
      </section>
      <section>
        <img src="./Oppenheimer-fundo.png" alt="oppenheimer-fundo" className='opacity-80 z-0 absolute top-14 right-12' />
      </section>
    </div>
  )
}
