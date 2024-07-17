import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import '../public/style.css'
// import './App.css'
import TopBar from './components/TopBar.jsx'
import Footer from './components/Footer.jsx'
import SearchBar from './components/SearchBar.jsx'
import Body from './components/Body.jsx'

function App() {
  const [count, setCount] = useState(0)

  return <div>
    <TopBar />
    <SearchBar />
    <Body />
    <Footer />
  </div>
}

export default App
