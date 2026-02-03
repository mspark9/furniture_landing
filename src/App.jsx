import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Protfolio from "./components/Protfolio"
import Review from "./components/Review"
import Services from "./components/Services"

function App() {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar />
      <Hero />
      <Services />
      <Protfolio />
      <About />
      <Review />
    </main>
  )
}

export default App
