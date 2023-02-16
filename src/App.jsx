import './App.css'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import { CategoryProvider } from './context/CategoríasProvider'
import Formulario from './components/Formulario'

function App() {
  return (
    <CategoryProvider>
      <Header />
      <Container>
        <Formulario />
      </Container>
    </CategoryProvider>
  )
}

export default App
