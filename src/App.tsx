import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import LayOut from './layout/Layout'

function App() {

  return <div className="">

    <LayOut>

    <section id="hero"><Hero /></section>
    <section id='about' className="panel about"><About /></section>
    <section id='experience' className="panel experience"><Experience /></section>
    <section id='skills' className="panel skills"><Skills /></section>
    <section id='projects' className="panel projects"><Projects /></section>
    <section id='contact' className="panel contact"><Contact /></section>
    </LayOut>
  </div>;
}

export default App;
