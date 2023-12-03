import Facts from './components/Facts.jsx';
import Feature from './components/Feature.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Teams from './components/Teams.jsx';
import Testmonial from './components/Testimonial.jsx';
import Service from './components/Service.jsx';
import Project from './components/Project.jsx';
import './App.css'
import Contact from './components/Contact.jsx';
function App() {
  return (
    <div className="container-xxl bg-white p-0">
    <>
      <Navbar/>
      <Feature/>
      <About/>
      <Facts/>
      <Service/>
      <Project/>
      <Testmonial/>
      <Teams/>
      <Contact/>
      <Footer/>
     </>
    </div>
  )
}

export default App;
