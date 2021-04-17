import {makeStyles} from "@material-ui/styles";

const UseStyle = makeStyles({
    root: {
        backgroundColor: "whitesmoke",
        width: "25%",
        padding: "1.1rem"
    },
    profId: {
        fontSize: ".78rem",
        color: "gray"
    },
    profText: {
        marginLeft: ".5rem",
        marginTop: "1rem",
        direction: "ltr"
    },
    tweeterRoot: {
        padding: "11px 24px",
        marginTop: "3rem",
        borderRadius: "2.5rem",
        backgroundColor: "lightgray"
    },
    tweeterTittle: {
        fontSize:"1.1rem",
        fontWeight:600,
        marginBottom:"11px"
    },
    profNameText:{
        direction:"rtl",
        width:"max-content",
        marginRight:".5rem"
    },
    tweeterParent:{
      padding:"10px 0"
    },


})
export default UseStyle