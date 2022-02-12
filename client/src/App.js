import './App.css'
import Home from './pages/Home'
import Nav from './Nav'

function App() {
  return (
    <div>
      <div className="nav">
        <Nav />
      </div>
      <div>
        <main>
          <Home />
        </main>
      </div>
    </div>
  )
}

export default App
