import Navbar from "./components/layout/Navbar"
import Hero from "./features/hero/Hero"
import About from "./features/about/About"
import Experience from "./features/experience/Experience"
function App() {
  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-bg text-text">
      <Hero/>
      <About/>
      <Experience/>
    </main>
    </>
  )
}

export default App