import React, {useRef, useState} from 'react';
import UseStyle from "./style";
import Grid from "@material-ui/core/Grid";
import {ButtonBase, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import {uploadUserPhoto} from "../api/api_auth";
import {toast} from "react-toastify";


const Tweeter = ({name, id, img}) => {
    const classes = UseStyle()
    return (

        <ButtonBase style={{width: "100%"}}>
            <Grid container direction={"row"} className={classes.tweeterParent}>
                <img src={img} alt="" width="60"/>
                <Grid item direction={"row"} className={classes.profNameText}>
                    <Typography>{name}</Typography>
                    <Typography className={classes.profId}>{id}</Typography>
                </Grid>
            </Grid>

        </ButtonBase>

    )
};


const tweeter = [
    // {
    //     name: "Xiaomi",
    //     id: "@xiaomi",
    //     img: "images/xiaomi.png"
    // },
    // {
    //     name: "Samsung",
    //     id: "@Samsung",
    //     img: "images/samsung.png"
    // },
    // {
    //     name: "بیل گیتس",
    //     id: "@bilgeyts",
    //     img: "images/bil.png"
    // },
    // {
    //     name: "Xiaomi",
    //     id: "@xiaomi",
    //     img: "images/xiaomi.png"
    // }


];


const LeftSideBar = () => {
    const [users, setUsers] = useState([])
    const [imageFile, setImageFile] = useState()
    const [imagePath, setImagePath] = useState()

    const [archoEl, setArchoEl] = useState()


    const inputRef = useRef()
    // useEffect(() => {
    //    getUsers((isok,data)=>{
    //        if (!isok)
    //            return alert("نام موفق در گرفتن یوزر")
    //        else setUsers(data)
    //    })
    // }, []);
    const handleClick = (e) => {
        if (archoEl)
            setArchoEl(null)
        else
            setArchoEl(e.currentTarget)

    }

    const getImage = () => {
        if (imagePath)
            return imagePath
        if (localStorage.getItem("image"))
            return localStorage.getItem("image")
        else
            return "/images/user-profiles.png"
    }
    const handleSetImage = (e) => {
        if (e.target.files[0] && e.target.files.length > 0)
            setImageFile(e.target.files[0])
        const reader = new FileReader()
        reader.onload = (e) => {
            setImagePath(e.target.result)
        }
      reader.readAsDataURL(e.target.files[0])
        const formData=new FormData()
        formData.append("image",e.target.files[0])

        uploadUserPhoto(formData,(isOk,data)=>{
            if (!isOk)
                return toast.error(data)
            toast.success("عکس با موفقیت ثبت شد")
            console.log(data)
            localStorage.setItem("image",data.imagePath)

        })
    }

    const classes = UseStyle()
    return (
        <div className={classes.root}>
            <Grid container direction={"row-reverse"} onClick={handleClick}>
                <img src={getImage()} alt="" width="50px" style={{borderRadius:"50%"}}/>
                <Grid item direction={"column"} className={classes.profText}>
                    <Typography>{localStorage.getItem("name")}</Typography>
                    <Typography className={classes.profId}>{localStorage.getItem("username")}</Typography>
                </Grid>
                <input type="file" ref={inputRef} style={{display: "none"}} onChange={handleSetImage}/>
                <Menu open={Boolean(archoEl)} onClose={() => setArchoEl(null)} anchorEl={archoEl}>
                    <MenuItem onClick={() => {
                        inputRef.current.click()
                    }}>ویرایش عکس</MenuItem>
                    <MenuItem onClick={() => {
                        localStorage.clear();
                        window.location.reload()
                    }}>خروج</MenuItem>

                </Menu>

            </Grid>
            <Grid container item className={classes.tweeterRoot} direction={"column"}>
                <Typography className={classes.tweeterTittle}>بهترین خبرنگاران</Typography>

                {
                    users.map(item => (
                            <Link to={`/users/${item.name}`}>
                                <Tweeter name={item.name} id={item.id} img={item.img}/>
                            </Link>

                        )
                    )}
            </Grid>


        </div>
    );
};

export default LeftSideBar;
