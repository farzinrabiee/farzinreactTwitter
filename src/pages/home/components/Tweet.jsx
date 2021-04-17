import React from 'react';
import Grid from "@material-ui/core/Grid";
import {IconButton, Typography} from "@material-ui/core";
import UseStyle from "../styles"
import FavoriteIcon from "@material-ui/icons/Favorite"

const Tweet = ({dataa}) => {

    const renderTweet=(text)=>{
        return {__html: text.replace(/#\S+/g, "<a href='/tags/$&'  style='color: blue'>$&</a>")}

    }
    const classes = UseStyle()
    return (
        <div className={classes.tweetItem}>
            <Grid container>
                <img src={dataa.sender.img} alt="" style={{height: 'max-content'}}/>
                <Grid item container style={{flex: "1"}}>
                    <Grid item container>
                        <Typography className={classes.tweetItemName}>{dataa.sender.name}</Typography>
                        <Typography className={classes.tweetItemId}>{dataa.sender.id}</Typography>
                    </Grid>
                    <Typography dangerouslySetInnerHTML={renderTweet(dataa.text)} style={{marginTop: ".8rem", marginRight: "1.5rem"}}>


                    </Typography>
                </Grid>
            </Grid>
            <Grid container direction={"row-reverse"} alignItems={"center"}>

                <IconButton style={{padding: "0 5px", marginLeft: "10px"}}>
                    <img src={"images/tweetpic.png"} alt="" className={classes.newTweetImg}/>
                </IconButton>
                <IconButton style={{padding: "0 5px", marginLeft: "10px"}}>
                    <FavoriteIcon className={classes.newTweetImg}/>
                </IconButton>
                <Typography className={classes.likeOCount}>{dataa.like}</Typography>
            </Grid>
        </div>
    );
};

export default Tweet;
