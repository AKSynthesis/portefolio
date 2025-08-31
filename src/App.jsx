import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Technologies from "./components/Technologies.jsx"
import Experiences from "./components/Experiences.jsx"
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx"

function App() {

  return (
    <div className="overflow-x-hidden text-stone-300 antialiased scroll-smooth">
      <div className="fixed inset-0 -z-10 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_100%_100%_at_50%_-10%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Page content */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Experiences />
        <Contact />
      </div>
    </div>
  )
}

export default App
