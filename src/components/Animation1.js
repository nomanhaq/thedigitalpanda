import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import Home1 from './Home1'; 
import Aboutus from './Aboutus'; 
import Contactus from './Contactus'; 
import Wedeliver from './Wedeliver';
import Panda from './Panda';
import Panda1 from './Panda1';
import Mailicon from './Mailicon'; 
import View from './View'; 
import BottomNav from './BottomNav'; 
import Drawer from './Drawer';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export default function Animation1 ()  {
    const classes = useStyles();
    const { ref} = useWebAnimations({

        keyframes: [
                    { transform: "translateX(25px)" },
                    { transform: "translateX(100px)" }
                    ],
        timing: { duration: 3000, iterations: Infinity, direction: "alternate", easing: "ease-in-out" },
      });

   
      return (
        <div style={{backgroundColor: "gray", backgroundSize:"100%", height:"925px"}}>
           <View />  
          <div ref={ref} style={{ width: "100px", height: "50px", alignItems: "center", top:"200px", position: "absolute"}}>
            <a href="/" aria-current="page" class="nav__link w-nav-link w--current">Home</a>
          </div>                  
          <Panda /> 
          <Panda1 /> 
          <Home1 /> 
          <Aboutus /> 
          <Contactus   /> 
          <Wedeliver   /> 
          <Mailicon />
          <BottomNav />
          <Drawer />


          <div className={classes.root} style={{ top:"800px", position: "absolute", left:"400px"}}>

            <Button variant="outlined" color="secondary">
              Check out our Work
            </Button>

          </div>


        </div>
      );

      
};

//        timing: { duration: 3000, iterations: Infinity, direction: "alternate", easing: "steps(10,end)" },
//        timing: { duration: 3000, iterations: Infinity, direction: "alternate", easing: "ease-in" },
//                    { transform: "translateX(0px)" , background: "red"},
//      { transform: "translateX(500px)", background: "green" }