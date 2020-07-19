import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

export default function Panda ()  {
    const { ref} = useWebAnimations({

        keyframes: [
                    { transform: "translateX(0px)" },
                    { transform: "translateX(1px)" }
                    ],
        timing: { duration: 4000, iterations: Infinity, direction: "alternate", easing: "ease-in-out" },
      });

   
      return (
        <div ref={ref} >
          <div >
          
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cd587aac-9ad4-44c8-8db3-d6bf4bc42045/d9jnqx4-b43f0a53-1085-41fe-a53e-1e961d47deb5.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvY2Q1ODdhYWMtOWFkNC00NGM4LThkYjMtZDZiZjRiYzQyMDQ1XC9kOWpucXg0LWI0M2YwYTUzLTEwODUtNDFmZS1hNTNlLTFlOTYxZDQ3ZGViNS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.xnu5OAXuOQ84IS7Di9pkgoAfEH7PM3vsl5ZeChm5ekw" alt="" style={{ width: "300px", height: "300px",  top:"50px", position: "absolute", left:"230px"}} /> 
          </div>

        </div>


      );

      
};
 //  