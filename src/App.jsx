import Navbar from "./components/layout/Navbar"
import Hero from "./features/hero/Hero"
function App() {
  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-bg text-text">
      <Hero/>
    </main>
    </>
  )
}

export default App