import {makeStyles} from "@material-ui/styles";

const UseStyle = makeStyles({
    root: {
        backgroundColor: "#e7e6e6",
        flex: 1,
        overflowY:"auto"
    },

    newTweet: {
        padding: "18px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column"
    },
    tweetItem: {
        padding: "18px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        marginTop:".5rem"
    },

    divider: {
        backgroundColor: "#7ebaff",
        width: "100%",
        height: "1px",
        filter: "opacity(0.8)"

    },
    textareaInput: {
        flex: 1,
        border: "none",
        marginRight:'15px',
        "&:focus": {
            outline: "none"
        }
    },
    newTweeetBtn: {
        color: "white",
        minWidth: "5rem",
        height: "30px",
        justifyContent: "flex-end",
        minHeight:"30px",
        lineHeight:"1rem",
        borderRadius:".8rem",
        display:"block",
        fontFamily:"Shabnam"
    },
    newTweetImg:{
        border:"1px solid gray",
        padding:".2rem",
        borderRadius:"50%"
    },
    tweetItemName:{
        fontWeight:"600",
        marginRight:"1rem"
    },
    tweetItemId:{
        color:"gray",
        fontSize:".9rem",
        marginRight:".6rem"
    },
    likeOCount:{
        fontSize:"12px",
        color:"gray"
    }


})
export default UseStyle