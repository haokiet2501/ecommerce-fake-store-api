import Footer from './components/Footer'
import Header from './components/Header'
import useRoutesElements from './useRoutesElements'

function App() {
  const routesElements = useRoutesElements()
  return (
    <>
      <Header />
      {routesElements}
      <Footer />
    </>
  )
}

export default App
