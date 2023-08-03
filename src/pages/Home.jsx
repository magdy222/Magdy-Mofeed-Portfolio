import React,{ useContext } from 'react'
import { Link } from 'react-router-dom'
import dev from '../assetes/dev-2.png'
import {motion} from 'framer-motion'
import { CursorContext } from '../content/CursorContent'
import {AiOutlineDownload} from 'react-icons/ai'


const Home = () => {

  const {mouseEnterHandler, mouseLeaverHandler} = useContext(CursorContext)

  return (
    <motion.section  
      initial={{ opacity: 0}}
      animate={{ opacity: 1}} 
      exit={{ opacity: 0 }}
      transition={{ease: "linear", duration: 0.6}}   
      className='section'>
      <div className='container mx-auto h-full relative '>

        <motion.div
           initial={{ opacity: 0, y:'-50%'}}
           animate={{ opacity: 1, y: 0 }} 
           exit={{ opacity: 0 ,y:'-50%'}}
           transition={{ease: "linear", duration: 0.6}}
           onMouseEnter={mouseEnterHandler}
           onMouseLeave={mouseLeaverHandler}
         className='flex flex-col justify-center'>
          <div className='w-full pt-32 lg:pt-0 lg:pb-0 lg:w-auto z-10
           lg:absolute flex flex-col justify-center items-center lg:items-start dark:text-gray-300 '>
             <h1 className='h1 lg:text-6xl px-2'>Frontend Developer</h1>
             <p className='text-[26px] lg:text-[36px]
               font-primary mb-4 lg:mb-12'>
                Ismailia, Egypt
             </p>
             <div className='flex justify-center items-center gap-x-5'>
               <Link to={'/contact'} className='btn mb-[30px] dark:bg-white dark:text-purple-900'>Hire Me</Link>
               <a href='Magdy Mofeed Boshra CV.pdf'
                  download='Magdy Mofeed Boshra CV.pdf'>
                  <button className='btn bg-green-400 text-black mb-[30px] dark:bg-black dark:text-green-400 p-9'>CV <AiOutlineDownload className='text-xl'/> </button>
              </a>
             </div>
          </div>

          <div className='flex justify-end max-h-96 lg:max-h-max '>
            <motion.div 
               initial={{ scale: 0}}
               animate={{ scale: 1}} 
               exit={{ scale: 0 }}
               transition={{ease: "linear", duration: 0.6}}
            className='relative lg:-right-20 overflow-hidden w-[600px] h-[600px] dark:pt-20 '>
             <motion.img
               whileHover={{scale: 1.1}}
               transition={{ease: "linear", duration: 0.6}}
              alt='home-img' className=' w-[640px] h-[640px] dark:w-[640px] dark:h-[570px]' src={dev}/>
             </motion.div> 
          </div>
        </motion.div>

      </div>
    </motion.section>
  )
}

export default Home