import React from "react";
import {makeStyles} from "@material-ui/styles";

const UseStyles = makeStyles(theme=>({
    root: {
        backgroundColor: "whitesmoke",
        width: "18%",
        padding:"1.5rem 1rem"
    },
    logoType:{
        fontSize:"1.25rem",
        fontweight:600,
        marginRight:"1rem",
        color:theme.palette.primary.main
    },
    display:{
        display:"flex",
        justifyContent:"start !important",
        alignItems:"center"

    },
    hashTagTitle:{
        fontSize:"1.1rem",
        fontWeight:600,
        margin:"3rem 0 1.5rem 0"
    },
    hashTag:{
        marginRight:"1rem"
    },
    hashTagParent:{
        width:"100%",
        display:"flex",
        justifyContent:"start !important",
        alignItems:"center",
        marginBottom:".8rem"

    }



}));
export default UseStyles