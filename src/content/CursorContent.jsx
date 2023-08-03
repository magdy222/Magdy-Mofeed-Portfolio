import React,{useState, useEffect, createContext} from 'react';

export const CursorContext = createContext()

const CursorProvider = ({children}) => {
  //cursor position state
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0
  })
  // cursor bg state
  const [cursorBG, setCursorBG] = useState('default')

  // remove cursor from mobile 
  const mobileViewportIsActive = window.innerWidth < 768;

  useEffect(() => {

  if(!mobileViewportIsActive){
    const move = (e) =>{
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    }
    // add event
    window.addEventListener("mousemove", move)

    return () => {
      // remove the event
      window.removeEventListener("mousemove", move)
    } 
  }else{
    setCursorBG('none')
  }
  })
  // cursor variants
  const cursorVariants = {
    default:{
      x : cursorPos.x - 16,
      y : cursorPos.y - 16,
      backgroundColor : '#0e1112',
    },
    text:{
      width : '150px',
      height : '150px',
      x : cursorPos.x - 72,
      y : cursorPos.y - 72,
      backgroundColor : '#fff',
      mixBlendMode : 'difference',
    },
    none:{
      height : 0,
      width : 0,
      backgroundColor : 'rgba(255,255,255,1)'
    }
  }
  // mouse enter handler
  const mouseEnterHandler = () =>{
    setCursorBG('text')
  }
  // mouse leaver handler
  const mouseLeaverHandler = () =>{
    setCursorBG('default')
  }

  return <CursorContext.Provider value={{cursorVariants, cursorBG,
   mouseEnterHandler, mouseLeaverHandler}}>
            {children}
         </CursorContext.Provider>;
};

export default CursorProvider;