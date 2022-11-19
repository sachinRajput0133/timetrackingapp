import { useContext } from "react";
import { TimerContext } from "../context/AppStore";

export function useTime(){
    const {
     
        seconds,
      
        minutes,
      
        hours,
     
      } = useContext(TimerContext);
    return (
    <>
          {hours < 10 ? '0' + hours : hours} :{' '}
          {minutes < 10 ? '0' + minutes : minutes} :{' '}
          {seconds < 10 ? '0' + seconds : seconds}
        </>
    )
    
    
    }