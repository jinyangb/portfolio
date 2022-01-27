import './App.css'
import Home from './pages/Home'
import Nav from './Nav'

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <div>
        <body>
          <Home />
        </body>
      </div>
    </div>
  )
}

export default App
