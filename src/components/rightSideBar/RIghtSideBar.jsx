import React from 'react';
import {ButtonBase, Typography} from "@material-ui/core";
import UseStyles from "./styles";
import Grid from "@material-ui/core/Grid"

const RightSideBar = () => {
    const classes = UseStyles()
    const hashTags=[
        "پرچمدار",
        "کروناویروس",
        "فرزین ربیعی",
        "ماندانا صفائی",
    ]


    return (

        <div className={classes.root}>
            <Grid container alignItems={"center"}>
                <Grid item direction={"row"} alignItems={"center"} className={classes.display}>
                    <img src={"images/logo.png"} alt=""/>
                    <Typography className={classes.logoType}>
                        توییتر فارسی
                    </Typography>
                </Grid>
            </Grid>
            <Typography className={classes.hashTagTitle}>
                داغ ترین هشتگ ها
            </Typography>


            <Grid container alignItems={"center"} direction={"column"}>
                {hashTags.map(hashtag=>(
                    <ButtonBase className={classes.hashTagParent} >
                        <Grid item direction={"row"} alignItems={"center"} className={classes.display}>
                            <img src={"images/hashtag.png"} alt=""/>
                            <Typography className={classes.hashTag}>{hashtag}</Typography>
                        </Grid>
                    </ButtonBase>
                ))}
            </Grid>


        </div>
    );
};

export default RightSideBar;
