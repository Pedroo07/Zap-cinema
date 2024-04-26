import './App.css'
import { CirclePlay } from "lucide-react"
import { Navigation } from "./components/Navigation"
import { Main } from './components/Main'

export const App = () => {
  return (
    <div>
      <Navigation />
      <section>
        <img src="./Oppenheimer-fundo.png" alt="oppenheimer-fundo" className='opacity-80 z-0 absolute top-14 right-12' />
      </section>
      <Main/>
    </div>
  )
}
