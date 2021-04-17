import React, {useEffect, useState} from 'react';
import UseStyle from "../home/styles"
import Header from "../../components/header/Header";
import TweetList from "../home/components/TweetList";
import PersonIcon from "@material-ui/icons/Person";
import axios from "axios";
import {getAllTweets} from "../../api/api_auth";

const TweetByUser = (props) => {
    const [tweets,setTweets]=useState([])


    // useEffect(() => {
    //   getAllTweets((isOk,data)=>{
    //       if (!isOk)
    //           return alert(data.message)
    //       else setTweets(data)
    //
    //   })
    // }, []);

    const classes = UseStyle()
    return (
        <div className={classes.root}>
         <Header tittle={props.match.params.user} icon={<PersonIcon/>}/>
            <TweetList data={tweets}/>
        </div>
    );
};

export default TweetByUser;
