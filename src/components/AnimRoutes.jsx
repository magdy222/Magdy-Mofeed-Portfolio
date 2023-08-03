import {Routes, Route, useLocation} from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"
import {AnimatePresence} from 'framer-motion'

const AnimRoutes = () => {
  const location = useLocation()
  return(
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/projects" element={<Projects/>}/>
         <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </AnimatePresence>
  )
};

export default AnimRoutes;