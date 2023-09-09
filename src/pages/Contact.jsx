import React,{useContext, useRef, useState} from 'react'
import contact from '../assetes/con-12.png'
import {motion} from 'framer-motion'
import { CursorContext } from '../content/CursorContent'
import emailjs from 'emailjs-com';
import {ImWhatsapp,ImMail2} from "react-icons/im"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    
  const {mouseEnterHandler, mouseLeaverHandler} = useContext(CursorContext)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j2meyir', 'template_95s5ks9', form.current, 'm1WIuxaQhTXbZzRjF' )
      .then((result) => {
          console.log(result.text);
          toast.success('Your message has been sent successfully!', {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error('An error occurred while sending your message. Please try again later.', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };


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
       className='container mx-auto h-full '>
        <div className='flex flex-col lg:flex-row h-full w-full items-center 
        justify-center pt-20 gap-x-48 text-center lg:text-left '>

          <motion.div
            initial={{ opacity: 0, y: '100%'}}
            animate={{ opacity: 1, y: 0}} 
            exit={{ opacity: 0 , y: '100%'}}
            transition={{ease: "linear", duration: 0.6}}
            className='hidden lg:flex bg-[#eef7f9] dark:bg-[#06202A] dark:text-gray-300 absolute 
          left-0 right-0 bottom-0 top-72 -z-10 '></motion.div>

          <div className=' dark:text-gray-300 pt-28 sm:pt-32 lg:pt-10  '>
            <h1 className='h1 text-4xl sm:text-6xl mb-8 '>contact me</h1>
            <p className='mb-12'>I would love to get your suggestions from you.</p>
            
             <form className='flex flex-col gap-y-5' ref={form} onSubmit={sendEmail}>
               <div className='flex gap-x-10'>
                 <input className='outline-none border-b border-b-primary bg-transparent font-secondary w-full pl-3 placeholder-text-[#757879] '
                  type='text' placeholder='Your name' name='user_name'/>
                 <input className='outline-none border-b border-b-primary bg-transparent font-secondary w-full pl-3 placeholder-text-[#757879] '
                  type='email' placeholder='Your email address' name='user_email'/>
                </div>
                <input className='outline-none border-b border-b-primary bg-transparent font-secondary w-full pl-3 placeholder-text-[#757879] '
                 type='text'placeholder='Your message' name='message'/>
                 <div className='flex justify-center items-center gap-5'>
                <button className='btn mb-0 md:mb-[30px] mt-5 mx-3 lg:mx-0 self-start  dark:bg-white dark:text-purple-900'
                 type="submit" value="Send" >send</button>
                 <p className='pt-3 sm:pt-0 text-cyan-500'>Fill the form please then click send, your email will be received.</p>
                 <ToastContainer className=' top-[100px]'/>
                 </div>
              </form>
              
             <div className='px-5 lg:flex lg:gap-5 lg:px-0 hidden md:block'>
              <div>
                <div className='flex justify-start items-center gap-x-1'>
                  <ImWhatsapp/>
                  <span>021286072240</span>
                </div>
                <div className='flex justify-start items-center gap-x-1'>
                  <ImWhatsapp/>
                  <span>021151677178</span>
                </div>
              </div>
              <div>
                <div className='flex justify-start items-center gap-x-1'>
                  <ImMail2/>
                  <span>magdymofeed333@gmail.com</span>
                </div>
                <div className='flex justify-start items-center gap-x-1'>
                  <ImMail2/>
                  <span>magdymofeed774@yahoo.com</span>
                </div>
              </div>
             </div> 
          </div>
           
          <motion.div
                  initial={{ opacity: 0, y: '100%'}}
                  animate={{ opacity: 1, y: 0}} 
                  exit={{ opacity: 0 , y: '100%'}}
                  transition={{ease: "linear", duration: 1.2}}>
            <img alt='contact-img' src={contact} className='lg:flex-1 w-[400px] sm:w-[600px] h-[300px] sm:h-[500px] pb-24 lg:pb-0'/>
          </motion.div>
        </div>
      </div>
    
    </motion.section>
  )
}

export default Contact