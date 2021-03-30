import React from "react";
import {makeStyles} from "@material-ui/styles";

const UseStyles = makeStyles({
    root: {
        width: "100%",
        height: "100vh",
        display: "flex"
    },
    leftSideBar: {
        backgroundColor: "gray",
        width: "25%",
    },

    mainPart: {
        backgroundColor: "gray",
        flex: 1
    },
    divider:{
        backgroundColor:"#7ebaff",
        width:1,
        height:"100%",
        filter:"opacity(0.8)"

    }

});
export default UseStyles