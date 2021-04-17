import React, {Fragment} from 'react';
import {Divider, Typography} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home"
import UseStyle from "./styles"


const Header = ({tittle,icon}) => {
    const classes =UseStyle()
    return (
        <Fragment>
            <div className={classes.header}>
                {icon}

                <Typography className={classes.headerHome}>{tittle}</Typography>
            </div>
            <Divider className={classes.divider}/>
        </Fragment>
    )

};

export default Header;
