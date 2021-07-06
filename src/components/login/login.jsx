import React from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import classes from './login.module.css'
import logo from './logotwitch.png'

function Login() {
    const validationSchema = yup.object().shape({
        username: yup.string().required(),
        password: yup
            .string()
            .required("Please enter your password")
            .matches(
                /(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                "Password must contain one uppercase, one number and one special case character"
            )
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });
 
    const submitForm = () =>{
        window.location.href = `https://id.twitch.tv/oauth2/authorize?client_id=nyo5pswxpqg5vuok232i6mluzmg4x7&redirect_uri=http://localhost:3000&response_type=token&scope=user:read:follows`;

    }
    return (
        <div className={classes.box}>
        <div className={classes.container}>
            <h1 className={classes.h1}><img src={logo} className={classes.img} alt=""></img>Accedi a Twitch</h1>
            <form className={classes.form} onSubmit={handleSubmit(submitForm)}>
            <span className={classes.span}>Username</span><input className={classes.input} type="text" name="username" placeholder="username" {...register('username')} />
            <p> {errors.username?.message} </p>
            <span className={classes.span}>Password</span><input className={classes.input} type="password" name="password" placeholder="password" {...register('password')} />
            <p className={classes.password}> {errors.password?.message} </p>
            <input type="submit" className={classes.submit}/>
        </form></div>
        </div>
    );
}

export default Login