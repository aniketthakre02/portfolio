import Navbar from "./components/layout/Navbar"
import Hero from "./features/hero/Hero"
import About from "./features/about/About"
import Experience from "./features/experience/Experience"
import Skills from "./features/skills/Skills"
import Projects from "./features/projects/Projects"
import Certificates from "./features/certificates/Certificates"
import Footer from "./components/layout/Footer"
function App() {
  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-bg text-text">
      <Hero/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Certificates/>
    </main>
    <Footer/>
    </>
  )
}

export default App