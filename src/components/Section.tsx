import { Label, Select, Option } from './Select'
import { CalendarDays } from 'lucide-react'

export const Section = () => {
    return (
        <section className='bg-zinc-800 flex items-center w-full h-44 mt-10  justify-around '>
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
                <input type="date" className='text-zinc-400 bg-zinc-700 font-light py-4 rounded-sm px-6' />
            </div>
            <div className='flex flex-col gap-1'>
                <Label>Sessão</Label>
                <Select>
                    <Option>19:00-Sala Vip</Option>
                    <Option>21:00-Sala Comum</Option>
                </Select>
            </div>
            <button className='px-6 py-4 bg-slate-50 shadow-sm brightness-125 text-zinc-950  flex font-semibold  rounded-sm mt-7'><CalendarDays /> RESERVE JÁ</button>
        </section>
    )
}


