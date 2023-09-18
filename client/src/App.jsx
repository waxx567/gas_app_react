import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Search from './components/Search/Search'
import Products from './components/Products/Products'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <NavBar />
      <Search />
      <Products />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
