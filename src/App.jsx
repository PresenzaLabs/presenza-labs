import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import Projetos from "./components/Projetos";
import Avaliacoes from "./components/Avaliacoes";
import Faq from "./components/Faq";
import Processo from "./components/Processo";
import SmoothScroll from "./components/SmoothScroll";

function App() {

  return (
    <SmoothScroll>
      <Navbar />
      <div>
        <Hero />
        <Sobre />
        <Processo />
        <Projetos />
        <Avaliacoes />
        <Faq />
        <Contato />
      </div>
      <Footer />
    </SmoothScroll>
  )
}

export default App
