import React, {useState} from 'react';
import {Button, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import UseStyle from "./styles"
import {toast} from "react-toastify";
import {loginApi, registerApi} from "../../api/api_auth";

const LOGIN_TAB_VALUE = 1
const REG_TAB_VALUE = 2

const AuthPage = ({history}) => {
    const classes = UseStyle()


    const [tab, setTab] = useState(LOGIN_TAB_VALUE)


    //state login
    const [usernameLogin, setUsernameLogin] = useState()
    const [passwordLogin, setPasswordLogin] = useState()

    //state register
    const [usernameRegister, setUsernameRegister] = useState()
    const [passwordRegister, setPasswordRegister] = useState()
    const [fullNameRegister, setFullNameRegister] = useState()
    const [confPasswordRegister, setConfPasswordRegister] = useState()



    const handleChange = (e, newValue) => {
        setTab(newValue)
    }

    const handleLogin = () => {
        const user = {
            username: usernameLogin,
            password: passwordLogin
        }

       const error=validLogin(user)
        if (error)
            return toast.warn(error)
        loginApi(user,(isok,data)=>{
            if (!isok)
                return toast.error(data)
            toast.success("ورود با موفقیت انجام شد")
            // console.log(data)
            localStorage.setItem("name",data.name)
            localStorage.setItem("image",data.image)
            localStorage.setItem("username",data.username)
            localStorage.setItem("x-auth-token",data["x-auth-token"])
       // history.replace("/")
            window.location.reload()
        })


    }

    const handleRegister=()=>{
        const user={
            name:fullNameRegister,
            username:usernameRegister,
            password:passwordRegister,
            confPassword:confPasswordRegister
        }
        const error=validRegister(user)
        if (error)
            return toast.error(error)

        user.confPassword=undefined


        registerApi(user,(isOk,data)=>{
            if (!isOk)
                return toast.error(data)
            toast.success("ثبت نام با موفقیت انجام شد ")


            localStorage.setItem("name",user.name)
            localStorage.setItem("username",user.username)
            localStorage.setItem("password",user.password)
            window.location.reload()

        })

    }


    const validRegister=(user)=>{
        if (!user.name)
            return toast.error("نام خود را وارد کنید")
        if (!user.username)
            return toast.error("نام کاربری وارد کنید ")
        if (!user.password)
            return toast.error("پسورد را وارد کنید ")
        if (user.password !==user.confPassword)
            return toast.error("پسوردها مشابه نیستند")

    }


    const validLogin=(user)=>{
        if (!user.username){
            return"باید درست وار کنید "
        }
        if (!user.password){
            return "باید پسورد وارد کنید "
        }

    }


    return (
        <Paper className={classes.root}>
            <Typography className={classes.headerText}>خوش امدید</Typography>
            <Tabs

                value={tab}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab label="ورود" value={LOGIN_TAB_VALUE} className={classes.tab}/>
                <Tab label="ثبت نام" value={REG_TAB_VALUE} className={classes.tab}/>
            </Tabs>
            {tab === LOGIN_TAB_VALUE &&
            <div className={classes.conInput}>
                <Typography>نام کاربری</Typography>
                <input type="text" value={usernameLogin} onChange={e => setUsernameLogin(e.target.value)}/>
                <Typography>رمز عبور </Typography>
                <input type="text" value={passwordLogin} onChange={e => setPasswordLogin(e.target.value)}/>
                <Button variant={"contained"} onClick={handleLogin}>ورود</Button>
            </div>
            }
            {tab === REG_TAB_VALUE &&
            <div className={classes.conInput}>
                <Typography>نام کامل</Typography>
                <input type="text" value={fullNameRegister} onChange={e=>setFullNameRegister(e.target.value)}/>
                <Typography>نام کاربری</Typography>
                <input type="text" value={usernameRegister} onChange={e=>setUsernameRegister(e.target.value
                )}/>
                <Typography>رمز عبور</Typography>
                <input type="text" value={passwordRegister} onChange={e=>setPasswordRegister(e.target.value)}/>
                <Typography>تکرار رمز عبور </Typography>
                <input type="text" value={confPasswordRegister} onChange={e=>setConfPasswordRegister(e.target.value)}/>
                <Button variant={"contained"} onClick={handleRegister}>ثبت نام</Button>

            </div>
            }
        </Paper>

    );
};

export default AuthPage;
