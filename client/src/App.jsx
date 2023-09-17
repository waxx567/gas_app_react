import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Search from './components/Search/Search'
import Jobs from './components/Jobs/Jobs'
import Value from './components/Value/Value'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <NavBar />
      <Search />
      <Jobs />
      <Value />
      <Footer />
    </div>
  )
}

export default App
