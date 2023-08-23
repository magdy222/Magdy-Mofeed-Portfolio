import React,{useContext} from 'react'
import Luxuria from "../assetes/luxuria.png"
import Hulu from "../assetes/hulu.png"
import Youtube from "../assetes/youtube.png"
import CLP from "../assetes/changeable.png"
import Landing from "../assetes/landing.png"
import Menu from "../assetes/menu.png"
import Drag from "../assetes/drag.png"
import Editor from "../assetes/photo-editor.png"
import {motion} from 'framer-motion'
import { CursorContext } from '../content/CursorContent'
import {FaCode,FaGithub} from "react-icons/fa"

const Projects = () => {
  
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
       className='container mx-auto h-full relative pb-10 scroll-container overflow-y-auto'>
        <div className='flex flex-col lg:flex-row h-full items-center 
          justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          <motion.div
             initial={{ opacity: 0, y: '-80%'}}
             animate={{ opacity: 1, y: 0}} 
             exit={{ opacity: 0 , y: '-80%'}}
             transition={{ease: "linear", duration: 0.5}} 
           className='sm:pt-8 dark:text-gray-300 lg:w-10 my-8' >
             <h1 className="h1 text-5xl flex flex-row justify-center lg:items-center lg:justify-center  " style={{ letterSpacing: '0.7rem lg:0rem' }}>
               P r o j e c t s
             </h1>
          </motion.div>
          <div className='grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-2 px-2'>
             <div className='flex justify-center items-center md:items-start max-w-[295px] md:max-w-[360px] lg:max-w-[320px] h-[240px] md:h-[280px] lg:h-[220px]
              bg-accent overflow-hidden relative group'>
                 <img alt='project-img' src={Luxuria} 
                 className='object-cover h-full lg:h-[520px] 
                 hover:scale-110 duration-500 transition-all'/>
                  <div className="absolute top-20 left-2 sm:left-3 lg:top-40  w-[230px] h-full opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                    <button className="absolute top-0 left-0 mt-2 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6
                      rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                     <a className='flex justify-center items-center gap-x-1'
                     href='https://luxuria-ecommerce-app-updated-sa7n.vercel.app/' target='_blank' rel="noopener noreferrer">
                       <FaCode />
                       <p className='hidden sm:block'>Visit</p>
                     </a>
                  </button>
                  <button className="absolute top-0 right-16 sm:right-0 mt-2 mr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 sm:px-4 
                  rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <a className='flex justify-center items-center gap-x-1'
                     href='https://github.com/magdy222/luxuria-ecommerce-app-updated' target='_blank' rel="noopener noreferrer">
                       <FaGithub/>
                       <p className='hidden sm:block'>Source</p>
                     </a>
                  </button>
                </div>
             </div>
             <div className='flex justify-center items-center md:items-start max-w-[295px] md:max-w-[360px] lg:max-w-[320px] h-[240px] md:h-[280px] lg:h-[220px]
              bg-accent overflow-hidden relative group'>
                 <img alt='project-img' src={Hulu} 
                 className='object-cover h-full lg:h-[520px] 
                 hover:scale-110 duration-500 transition-all'/>
                  <div className="absolute top-20 left-2 sm:left-3 lg:top-40  w-[230px] h-full opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                    <button className="absolute top-0 left-0 mt-2 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6
                      rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                     <a className='flex justify-center items-center gap-x-1'
                     href='https://hulu-clone-updated-4xul.vercel.app/' target='_blank' rel="noopener noreferrer">
                       <FaCode />
                       <p className='hidden sm:block'>Visit</p>
                     </a>
                  </button>
                  <button className="absolute top-0 right-16 sm:right-0 mt-2 mr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 sm:px-4 
                  rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <a className='flex justify-center items-center gap-x-1'
                     href='https://github.com/magdy222/hulu-clone-updated' target='_blank' rel="noopener noreferrer">
                       <FaGithub/>
                       <p className='hidden sm:block'>Source</p>
                     </a>
                  </button>
                </div>
             </div>
             <div className='flex justify-center items-center md:items-start max-w-[295px] md:max-w-[360px] lg:max-w-[320px] h-[240px] md:h-[280px] lg:h-[220px]
              bg-accent overflow-hidden relative group'>
                 <img alt='project-img' src={Youtube} 
                 className='object-cover h-full lg:h-[220px] 
                 hover:scale-110 duration-500 transition-all'/>
                  <div className="absolute top-20 left-2 sm:left-3 lg:top-40  w-[230px] h-full opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                    <button className="absolute top-0 left-0 mt-2 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6
                      rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                     <a className='flex justify-center items-center gap-x-1'
                     href='https://youtube-clone-nu-weld.vercel.app/' target='_blank' rel="noopener noreferrer">
                       <FaCode />
                       <p className='hidden sm:block'>Visit</p>
                     </a>
                  </button>
                  <button className="absolute top-0 right-16 sm:right-0 mt-2 mr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 sm:px-4 
                  rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <a className='flex justify-center items-center gap-x-1'
                     href='https://github.com/magdy222/youtube-clone' target='_blank' rel="noopener noreferrer">
                       <FaGithub/>
                       <p className='hidden sm:block'>Source</p>
                     </a>
                  </button>
                </div>
             </div>
             <div className='flex justify-center items-center md:items-start max-w-[295px] md:max-w-[360px] lg:max-w-[320px] h-[240px] md:h-[280px] lg:h-[220px]
              bg-accent overflow-hidden relative group'>
                 <img alt='project-img' src={CLP} 
                 className='object-cover h-full lg:h-[220px] 
                 hover:scale-110 duration-500 transition-all'/>
                  <div className="absolute top-20 left-2 sm:left-3 lg:top-40  w-[230px] h-full opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                    <button className="absolute top-0 left-0 mt-2 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6
                      rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                     <a className='flex justify-center items-center gap-x-1'
                     href='https://changeable-landing-page.vercel.app/' target='_blank' rel="noopener noreferrer">
                       <FaCode />
                       <p className='hidden sm:block'>Visit</p>
                     </a>
                  </button>
                  <button className="absolute top-0 right-16 sm:right-0 mt-2 mr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 sm:px-4 
                  rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <a className='flex justify-center items-center gap-x-1'
                     href='https://github.com/magdy222/Changeable-landing-page' target='_blank' rel="noopener noreferrer">
                       <FaGithub/>
                       <p className='hidden sm:block'>Source</p>
                     </a>
                  </button>
                </div>
             </div>
             <div className='flex justify-center items-center max-w-[295px] md:max-w-[360px] lg:max-w-[320px] h-[240px] md:h-[280px] lg:h-[220px]
              bg-accent overflow-hidden relative group'>
                 <img alt='project-img' src={Landing} 
                 className='object-cover h-full lg:h-[750px] 
                 hover:scale-110 duration-500 transition-all'/>
                  <div className="absolute top-20 left-2 sm:left-3 lg:top-40  w-[230px] h-full opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                    <button className="absolute top-0 left-0 mt-2 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6
                      rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                     <a className='flex justify-center items-center gap-x-1'
                     href='https://landing-page-ox31pmnjp-magdy222.vercel.app/' target='_blank' rel="noopener noreferrer">
                       <FaCode />
                       <p className='hidden sm:block'>Visit</p>
                     </a>
                  </button>
                  <button className="absolute top-0 right-16 sm:right-0 mt-2 mr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 sm:px-4 
                  rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <a className='flex justify-center items-center gap-x-1'
                     href='https://github.com/magdy222/landing-page' target='_blank' rel="noopener noreferrer">
                       <FaGithub/>
                       <p className='hidden sm:block'>Source</p>
                     </a>
                  </button>
                </div>
             </div>
             <div className='flex justify-center items-center md:items-start max-w-[295px] md:max-w-[360px] lg:max-w-[320px] h-[240px] md:h-[280px] lg:h-[220px]
              bg-accent overflow-hidden relative group'>
                 <img alt='project-img' src={Menu} 
                 className='object-cover h-full lg:h-[220px] 
                 hover:scale-110 duration-500 transition-all'/>
                  <div className="absolute top-20 left-2 sm:left-3 lg:top-40  w-[230px] h-full opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                    <button className="absolute top-0 left-0 mt-2 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6
                      rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                     <a className='flex justify-center items-center gap-x-1'
                     href='https://resturant-menu-lime.vercel.app/' target='_blank' rel="noopener noreferrer">
                       <FaCode />
                       <p className='hidden sm:block'>Visit</p>
                     </a>
                  </button>
                  <button className="absolute top-0 right-16 sm:right-0 mt-2 mr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 sm:px-4 
                  rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <a className='flex justify-center items-center gap-x-1'
                     href='https://github.com/magdy222/resturant-menu' target='_blank' rel="noopener noreferrer">
                       <FaGithub/>
                       <p className='hidden sm:block'>Source</p>
                     </a>
                  </button>
                </div>
             </div>
             <div className='flex justify-center items-center md:items-start max-w-[295px] md:max-w-[360px] lg:max-w-[320px] h-[240px] md:h-[280px] lg:h-[220px]
              bg-accent overflow-hidden relative group'>
                 <img alt='project-img' src={Drag} 
                 className='object-cover h-full lg:h-[220px] 
                 hover:scale-110 duration-500 transition-all'/>
                  <div className="absolute top-20 left-2 sm:left-3 lg:top-40  w-[230px] h-full opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                    <button className="absolute top-0 left-0 mt-2 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6
                      rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                     <a className='flex justify-center items-center gap-x-1'
                     href='https://drag-drop-app-bay.vercel.app/' target='_blank' rel="noopener noreferrer">
                       <FaCode />
                       <p className='hidden sm:block'>Visit</p>
                     </a>
                  </button>
                  <button className="absolute top-0 right-16 sm:right-0 mt-2 mr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 sm:px-4 
                  rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <a className='flex justify-center items-center gap-x-1'
                     href='https://github.com/magdy222/Drag-drop-app' target='_blank' rel="noopener noreferrer">
                       <FaGithub/>
                       <p className='hidden sm:block'>Source</p>
                     </a>
                  </button>
                </div>
             </div>
             <div className='flex justify-center items-center md:items-start max-w-[295px] md:max-w-[360px] lg:max-w-[320px] h-[240px] md:h-[280px] lg:h-[220px]
              bg-accent overflow-hidden relative group'>
                 <img alt='project-img' src={Editor} 
                 className='object-cover h-full lg:h-[220px] 
                 hover:scale-110 duration-500 transition-all'/>
                  <div className="absolute top-20 left-2 sm:left-3 lg:top-40  w-[230px] h-full opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                    <button className="absolute top-0 left-0 mt-2 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6
                      rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                     <a className='flex justify-center items-center gap-x-1'
                     href='https://photo-editor-nu.vercel.app/' target='_blank' rel="noopener noreferrer">
                       <FaCode />
                       <p className='hidden sm:block'>Visit</p>
                     </a>
                  </button>
                  <button className="absolute top-0 right-16 sm:right-0 mt-2 mr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 sm:px-4 
                  rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <a className='flex justify-center items-center gap-x-1'
                     href='https://github.com/magdy222/photo-editor' target='_blank' rel="noopener noreferrer">
                       <FaGithub/>
                       <p className='hidden sm:block'>Source</p>
                     </a>
                  </button>
                </div>
             </div>
            
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects