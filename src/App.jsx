import Navbar from "./components/layout/Navbar"
import Hero from "./features/hero/Hero"
import About from "./features/about/About"
import Experience from "./features/experience/Experience"
import Skills from "./features/skills/Skills"
function App() {
  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-bg text-text">
      <Hero/>
      <About/>
      <Experience/>
      <Skills/>
    </main>
    </>
  )
}

export default App