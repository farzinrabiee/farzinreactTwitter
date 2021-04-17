import React, {useEffect, useState} from 'react';
import UseStyles from "./styles.js";
import Header from "../../components/header/Header";
import NewTweet from "./components/NewTweet";
import TweetList from "./components/TweetList";
import HomeIcon from "@material-ui/icons/Home";
import axios from "axios";
import {getAllTweets} from "../../api/api_auth";


const Home = () => {
    const [tweets,setTweets]=useState([])


    // useEffect(() => {
    //
    //     getAllTweets((isok,data)=>{
    //         if (!isok)
    //             return alert(data.message)
    //         else setTweets(data)
    //     })
    // }, []);



    //
    // const tweets = [
    //     {
    //         sender: {
    //             name: "Xiaomi",
    //             id: "@xiaomi",
    //             img: "images/xiaomi.png"
    //         },
    //         text: "#صبحانه ",
    //         like:5
    //     },
    //     {
    //         sender: {
    //             name: "Xiaomi",
    //             id: "@xiaomi",
    //             img: "images/xiaomi.png"
    //         },
    //         text: "فرزین #دوست داشه است توویتر فراسی بسبزد",
    //         like:8
    //
    //     }
    // ]
    const classes = UseStyles()
    return (
        <div className={classes.root}>
            <Header tittle={"خانه"} icon={<HomeIcon/>}/>
            <NewTweet/>
            <TweetList data={tweets}/>
        </div>
    );
};

export default Home;
