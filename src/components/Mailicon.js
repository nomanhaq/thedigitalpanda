import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

import PhoneEnabledSharpIcon from '@material-ui/icons/PhoneEnabledSharp';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function Mailicon ()  {
    const classes = useStyles();
    const { ref} = useWebAnimations({

        keyframes: [
                    { transform: "translateX(0px)" },
                    { transform: "translateX(10px)" }
                    ],
        timing: { duration: 4000, iterations: Infinity, direction: "alternate", easing: "ease-in-out" },
      });
      return (
            <div ref={ref} style={{ width: "600px", height: "100px", alignItems: "right", top:"65px", position: "absolute", left: "90%", fontSize: "32px"}}>
                <div className={classes.root} >
                <Badge badgeContent={0} color="primary" >
                    <MailIcon />
                </Badge>

                <Badge badgeContent={0} color="primary" >
                    <PhoneEnabledSharpIcon />
                </Badge>
                </div>
            </div>
      );
};