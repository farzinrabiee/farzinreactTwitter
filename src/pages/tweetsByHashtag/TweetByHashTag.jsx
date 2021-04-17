import React, {useEffect, useState} from 'react';
import UseStyles from "./styles"
import Header from "../../components/header/Header";
import TweetList from "../home/components/TweetList";
import axios from "axios";
import {getAllTweets} from "../../api/api_auth";

const TweetByHashTag = (props) => {
    const [tweets,setTweets]=useState([])


    // useEffect(() => {
    //
    //     getAllTweets((isok,data)=>{
    //         if (!isok)
    //             return alert(data.message)
    //         else setTweets(data)
    //     })
    // }, []);


    const classes = UseStyles()
    return (
        <div className={classes.hashtag}>
         <Header tittle={props.match.params.id} icon={<img src={"images/hashtag.png"} alt=""/>}/>
            <TweetList data={tweets}/>
        </div>
    );
};

export default TweetByHashTag;
