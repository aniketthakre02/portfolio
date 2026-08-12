import Navbar from "./components/layout/Navbar"
import Hero from "./features/hero/Hero"
import About from "./features/about/About"
function App() {
  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-bg text-text">
      <Hero/>
      <About/>
    </main>
    </>
  )
}

export default App