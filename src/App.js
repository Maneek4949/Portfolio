import './App.css';
import Header from './component/Header/Header.jsx';
import Banner from "./component/Banner/Banner.jsx";
import About from "./component/About/About.jsx";
import Skills from "./component/Skills/Skills.jsx"
import Project from "./component/Project/Project.jsx"
import Contact from "./component/Contact/Contact.jsx"
import Footer from "./component/Footer/Footer.jsx"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Header />
    <Banner/>
    <About/>
    <Skills/> 
    <Project/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
