import React,{useContext} from 'react';
import {
  ImFacebook,
  ImGithub,
  ImLinkedin,
  ImInstagram
} from "react-icons/im"
import { CursorContext } from '../content/CursorContent'

const Socials = () => {

  const {mouseEnterHandler, mouseLeaverHandler} = useContext(CursorContext)

  return <div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaverHandler}
              className='hidden xl:flex ml-24 '>
       <ul 
         className='flex gap-x-8 text-xl'>
        <li>
          <a href='https://github.com/magdy222' target='_blank'>
            <ImGithub/>
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/magdy-boshra-8672a8140/' target='_blank'>
            <ImLinkedin/>
          </a>
        </li>
       </ul>
  </div>;
};

export default Socials;