
import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const useStyles = makeStyles({
    root: {
      width: 500,
    },
  });
  

export default function BottomNav ()  {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);    
    const { ref} = useWebAnimations({

        keyframes: [
                    { transform: "translateX(-10px)" },
                    { transform: "translateX(80px)" }
                    ],
        timing: { duration: 3000, iterations: Infinity, direction: "alternate", easing: "ease-in-out" },
      });
      return (
            <div ref={ref} style={{ top:"850px", position: "absolute", left: "40%", fontSize: "32px"}}>
                <div className={classes.root} >

                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className={classes.root}
                    >
                    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                    </BottomNavigation>
                

                </div>
            </div>
      );
};