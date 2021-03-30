import React from 'react';
import UseStyles from "./styles"
import RightSideBar from "../rightSideBar/RIghtSideBar";
import {Divider} from "@material-ui/core";

const Layout = () => {
    const classes = UseStyles()

    return (
        <div className={classes.root}>
            <RightSideBar/>
            <Divider orientation={"vertical"} className={classes.divider}/>
            <div className={classes.mainPart}>صفحه اصلی</div>
            <div className={classes.leftSideBar}>leftSideBar</div>
        </div>

    );
};

export default Layout;
