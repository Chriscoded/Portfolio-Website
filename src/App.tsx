import { Navbar } from "./layout/Navbar"
import { Hero } from "./sections/Hero"
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Experience } from './sections/Experience'
import { Testimonials } from './sections/Testimonials'
import { Contact } from './sections/Contact'
import { Footer } from './layout/Footer'
import { useEffect, useState } from "react"
import LoadingSkeleton from "./components/LoadingSkeleton"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <LoadingSkeleton />;
  }
  return (
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Hero/>
          <About/>
          <Projects/>
          <Experience/>
          <Testimonials/>
          <Contact />
        </main>
        <Footer/>
      </div>
    )
}

export default App
