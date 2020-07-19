import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";



export default function Animation1 ()  {
    const { ref, playState, getAnimation } = useWebAnimations({

        keyframes: [
                    { transform: "translateX(0px)" },
                    { transform: "translateX(100px)" }
                    ],
        timing: { duration: 3000, iterations: 4, direction: "alternate", easing: "ease-in-out" },
      });

    
      return (
        <div style={{backgroundColor: "gray", backgroundSize:"100%", height:"925px"}}>
          <div>
            Play status {playState}
          </div>
          <div ref={ref} style={{ width: "100px", height: "50px", alignItems: "center", top:"200px", position: "absolute"}}>
            <a href="/" aria-current="page" class="nav__link w-nav-link w--current">Home</a>
          </div>
          <button onClick ={()=> {
            getAnimation().play();
          }}> Play </button>
          <button onClick ={()=> {
            getAnimation().pause();
          }}> Pause </button>      
        </div>
      );
};

//        timing: { duration: 3000, iterations: Infinity, direction: "alternate", easing: "steps(10,end)" },
//        timing: { duration: 3000, iterations: Infinity, direction: "alternate", easing: "ease-in" },
//                    { transform: "translateX(0px)" , background: "red"},
//      { transform: "translateX(500px)", background: "green" }