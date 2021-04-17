import React from 'react';
import UseStyle from "../styles"
import Grid from "@material-ui/core/Grid";
import {Button, IconButton} from "@material-ui/core";
import classNames from "classnames";

const NewTweet = () => {


    // const [tweet, setTweet] = useState()


    // const input = useRef()

    // const renderTweet=(text)=>{
    //     return {__html: text.replace(/#\S+/g, "<span href='/tags/$&'  style='color: blue'>$&</span>")}
    //
    // }
    //


    //
    // useEffect(() => {
    //     input.current.addEventListener("input", function (e) {
    //         console.log("input event farzin")
    //         setTweet(renderTweet(e.target.innerText))
    //         window.cursorManager.setEndOfContenteditable(e.target);
    //     }, false)
    // }, [])
    const classes = UseStyle()
    return (
        <div className={classes.newTweet}>
            <Grid container>
                <img src={"/images/user img.png"} alt=""/>
                <div contentEditable placeholder={"توییت کن..."}
                     className={classNames(classes.textareaInput, "editable")} data-placeholder="توییت کن..."></div>

            </Grid>
            <Grid container direction={"row-reverse"}>
                <Button variant={"contained"} color={"primary"} className={classes.newTweeetBtn}>توییت</Button>
                <IconButton style={{padding: "0 5px", marginLeft: "10px"}}>
                    <img src={"/images/tweetpic.png"} alt="" className={classes.newTweetImg}/>
                </IconButton>
            </Grid>
        </div>
    );
};

export default NewTweet;
