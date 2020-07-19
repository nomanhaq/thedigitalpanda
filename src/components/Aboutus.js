import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";



export default function Aboutus ()  {
    const { ref } = useWebAnimations({

        keyframes: [
                    { transform: "translateX(25px)" },
                    { transform: "translateX(100px)" }
                    ],
        timing: { duration: 3000, iterations: Infinity, direction: "alternate", easing: "ease-in-out" },
      });

   
      return (
        <div style={{backgroundColor: "gray", backgroundSize:"100%", height:"925px"}}>
       
          
          <div ref={ref} style={{ width: "100px", height: "50px", alignItems: "center", top:"300px", position: "absolute"}}>
            <a href="/" aria-current="page" class="nav__link w-nav-link w--current">About us</a>
          </div>


   
        </div>
      );

      
};