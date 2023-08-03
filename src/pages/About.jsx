import React,{ useContext }  from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import { CursorContext } from '../content/CursorContent'
import one from '../assetes/html.png'
import two from '../assetes/css-2.png'
import three from '../assetes/js.png'
import four from '../assetes/react.png'
import five from '../assetes/tailwind.png'
import six from '../assetes/bootstrap.png'
import seven from '../assetes/next.png'

const About = () => {

  const {mouseEnterHandler, mouseLeaverHandler} = useContext(CursorContext)

  return (
    <motion.section  
    initial={{ opacity: 0, y: '100%'}}
    animate={{ opacity: 1, y: 0}} 
    exit={{ opacity: 0 , y: '100%'}}
    transition={{ease: "linear", duration: 0.6}} 
    className='section'>
      <div
       onMouseEnter={mouseEnterHandler}
       onMouseLeave={mouseLeaverHandler}
       className='container mx-auto xl:h-full relative pt-20'>
        <div className='flex flex-col lg:flex-row h-full
         items-center justify-center xl:gap-10 text-center lg:text-left lg:pt-left'>
            <div className=''>
               <ul className='flex flex-wrap justify-center  xl:max-w-[500px] pt-14 gap-5'>
                   <li><img alt='icon' src={one} className='w-20 h-20 lg:w-32 lg:h-32 '/></li>
                   <li><img alt='icon' src={two} className='w-20 h-20 lg:w-32 lg:h-32 '/></li>
                   <li><img alt='icon' src={three} className='w-20 h-20 lg:w-32 lg:h-32 '/></li>
                   <li><img alt='icon' src={four} className='w-20 h-20 lg:w-32 lg:h-32 '/></li>
                   <li><img alt='icon' src={six} className='w-20 h-20 lg:w-32 lg:h-32 '/></li>
                   <li><img alt='icon' src={five} className='w-20 h-20 lg:w-32 lg:h-32 '/></li>
                   <li><img alt='icon' src={seven} className='w-20 h-20 lg:w-32 lg:h-32 '/></li>
                 </ul>
            </div>
            <motion.div 
                  initial={{ opacity: 0, y: '-80%'}}
                  animate={{ opacity: 1, y: 0}} 
                  exit={{ opacity: 0 , y: '-80%'}}
                  transition={{ease: "linear", duration: 0.6}} 
              className='flex-1 pt-10 lg:pt-0 pb-24 lg:w-auto
             z-10 flex flex-col justify-center items-center lg:items-center
              lg:justify-center dark:text-gray-300'>
              <h1 className='h1 pt-24 mb-5 xl:text-7xl'>About me</h1>
              <p className='mb-12 max-w-sm '>
              I'm a passionate junior frontend developer with a talent for creating intuitive,
               seamless web experiences. I bring expertise in <b>HTML, CSS, and JavaScript, React.js,Next.js , Tailwind Css, Bootstrap ,  </b> 
                and I'm committed to writing clean, optimized code. I thrive in collaborative environments
                 and look forward to contributing to innovative web solutions that delight users.
              </p>
              <Link to={"/projects"} className='btn  dark:bg-white dark:text-purple-900'>View my work</Link>
            </motion.div>
        </div>

      </div>
    </motion.section>
  )
}

export default About