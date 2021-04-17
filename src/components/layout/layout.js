import React from 'react';
import UseStyles from "./styles"
import RightSideBar from "../rightSideBar/RIghtSideBar";
import {Divider,} from "@material-ui/core";
import LeftSideBar from "../../LeftSIdeBar/LeftSideBar";


const Layout = ({children}) => {
    const classes = UseStyles()

    return (
        <div className={classes.root}>


            <RightSideBar/>
            <Divider orientation={"vertical"} className={classes.divider}/>
            <div className={classes.content}>
                {children}

            </div>
            <Divider orientation={'vertical'} className={classes.divider}/>
            <LeftSideBar/>
        </div>

    );
};

export default Layout;
