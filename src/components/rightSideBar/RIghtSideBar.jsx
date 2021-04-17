import React, {useEffect, useState} from 'react';
import {ButtonBase, Typography} from "@material-ui/core";
import UseStyles from "./styles";
import Grid from "@material-ui/core/Grid"
import {Link} from "react-router-dom";
import axios from "axios";
import {getHashTag, getUsers} from "../../api/api_auth";

const RightSideBar = () => {
    const classes = UseStyles()
    const [hashtag,setHashtag]=useState([])


    // useEffect(() => {
    //     getHashTag((isok,data)=>{
    //         if (!isok)
    //             return alert("نام موفق در گرفتن یوزر")
    //         else setHashtag(data)
    //     })
    // }, []);

    return (

        <div className={classes.root}>
            <Link to={"/"}>
                <Grid container alignItems={"center"}>
                    <Grid item direction={"row"} alignItems={"center"} className={classes.display}>
                        <img src={"/images/logo.png"} alt=""/>
                        <Typography className={classes.logoType}>
                            توییتر فارسی
                        </Typography>
                    </Grid>
                </Grid>

            </Link>
            <Typography className={classes.hashTagTitle}>
                داغ ترین هشتگ ها
            </Typography>


            <Grid container alignItems={"center"} direction={"column"}>
                {hashtag.map(hashtag => (
                    <ButtonBase className={classes.hashTagParent}>
                        <Link to={"/hashtags/"+hashtag}>
                        <Grid item direction={"row"} alignItems={"center"} className={classes.display}>
                            <img src={"/images/hashtag.png"} alt=""/>
                            <Typography className={classes.hashTag}>{hashtag}</Typography>
                        </Grid>

                        </Link>
                    </ButtonBase>
                ))}
            </Grid>


        </div>
    );
};

export default RightSideBar;
