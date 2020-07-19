import React from "react";
import useWebAnimations, {bounce} from "@wellyshen/use-web-animations";



export default function Wedeliver ()  {
    const { ref } = useWebAnimations({...bounce , 
        keyframes: [
            { transform: "translateX(25px)" },
            { transform: "translateX(100px)" }
            ],
timing: { duration: 3000, iterations: Infinity, direction: "alternate", easing: "steps(10,end)"  },
      });

   
      return (
        <div style={{backgroundColor: "gray", backgroundSize:"100%", height:"925px"}}>
       
          
          <div ref={ref} style={{ width: "600px", height: "100px", alignItems: "right", top:"300px", position: "absolute", left: "10%", fontSize: "32px"}}>

            <h1 animated="true" class="heading--intro">We deliver digital products &amp; strategies that help you grow</h1>
          </div>


   
        </div>
      );

      
};