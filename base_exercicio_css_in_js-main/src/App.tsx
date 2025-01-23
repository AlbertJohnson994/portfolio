import React from 'react'
import GlobalStyles from './Global' // Estilos globais com styled-components
import CabecalhoStyled from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

function App() {
  return (
    <>
      <CabecalhoStyled />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
      <GlobalStyles /> {/* Aplicando os estilos globais */}
    </>
  )
}

export default App
