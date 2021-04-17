import React from "react";
import {makeStyles} from "@material-ui/styles";

const UseStyles = makeStyles({
    root: {
        width: "100%",
        height: "100vh",
        display: "flex",
        boxSizing:"border-box"
    },



    divider:{
        backgroundColor:"#7ebaff",
        width:1,
        height:"100%",
        filter:"opacity(0.8)"

    },
    content:{
        flex:"1",
        overflowY:"auto"
    }

});
export default UseStyles