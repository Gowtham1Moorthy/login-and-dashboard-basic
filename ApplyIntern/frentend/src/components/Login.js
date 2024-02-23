import React, {useState} from "react";
import axios from 'axios';
import "./Login.css";
import {useNavigate} from "react-router-dom"
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login(){

    const navigate = useNavigate();
    const [username, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const [status, setstatus] = useState("");
    const [result, setresult] = useState("");

    function usernameGetting(e){
        setuserName(e.target.value);
    }

    function passwordGetting(e){
        setPassword(e.target.value);
    }

    function submit(){
        if(username && password){
            axios.get("/login/", { params: { username, password } })
            .then(response => setresult(response.data))
            .then(()=>{
                if(result.status === true){
                    navigate("dashboard")
                }
            })
            .catch(err =>{
                console.log(err);
            });
        }else{
            setstatus("input not null");
        }
    }

    return(
        <div className="login-body">
            <div className="login-form-container">
                <div className="login-form-each-div login-form-title-parent">
                    <div className="login-form-title">Welcome to Vuexy!</div>
                    <div>Please sign-in to your account and start the adventure</div>
                </div>
                <div className="login-form-each-div login-form-background-change">
                    <div>
                    <div>Admin Email: <span className="bold">admin@demo.com</span> / Pass: <span className="bold">admin</span></div>
                    <div>Client Email: <span className="bold">client@demo.com</span> / Pass: <span className="bold">client</span></div>
                    </div>
                </div>
                <div className="login-form-each-div login-form-input">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" onChange={usernameGetting}/>
                </div>
                <div className="login-form-each-div login-form-input">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" onChange={passwordGetting}/>
                    <div className="login-form-status">{status}</div>
                </div>
                <div className="login-form-each-div login-form-forgot">
                    <div>
                        <input type="radio" id="remaind"/>
                        <label for="remaind">Remember me</label>
                    </div>
                    <a href="#">Forgot Password?</a>
                </div>
                <div className="login-form-each-div login-form-button-parent">
                    <button className="login-form-button" onClick={submit}>Login</button>
                </div>
                <div className="login-form-each-div login-form-last-div">
                    <div>New on our platform?</div>
                    <div className="login-form-space-div"></div>
                    <a href="#">Create an account</a>
                </div>
            </div>
        </div>
    );
}