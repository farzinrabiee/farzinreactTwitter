import {makeStyles} from "@material-ui/styles";

const UseStyle = makeStyles({
    root: {
        backgroundColor: "#e7e6e6",
       width:"30rem",
        margin:"10rem auto",
        display:"flex",
        flexDirection:"column",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;"

    },
    headerText:{
        margin:"1rem",
        alignSelf:"center"

    },
    tab:{
        flex:"1"
    },
    conInput:{
        padding:"1rem .8rem",
        display:"flex",
        flexDirection:"column"
    }



})
export default UseStyle