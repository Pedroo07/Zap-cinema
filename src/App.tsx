import './App.css'
import { Navigation } from "./components/Navigation"
import { Main } from './components/Main'
import { Section } from './components/Section'


export const App = () => {
  return (
    <div>
      <Navigation />
      <Main />
      <Section />
    </div>
  )
}
