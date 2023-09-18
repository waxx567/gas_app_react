import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Search from './components/Search/Search'
import Products from './components/Products/Products'
import Value from './components/Value/Value'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <NavBar />
      <Search />
      <Products />
      <Value />
      <Footer />
    </div>
  )
}

export default App
