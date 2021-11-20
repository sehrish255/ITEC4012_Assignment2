import {useState} from 'react';
import { useForm } from 'react-hook-form';

function Login() {
    const [mode, setMode] = useState("login");

    const {register, handleSubmit} =useForm();

    const loginUser = (formVals) =>{
        console.log("Login Submitted", formVals)
    }

    const  signUpUser = (formVals) => {
        console.log("Sign Up Submitted", formVals)
    }

    return (
        <div className="login">
            <Link to='/'>
            <img 
            className="login_logo"
            src="http://www.userlogos.org/files/logos/ArkAngel06/Amazon.png" />
            </Link>

            <div className="login_container"/>
                <h1>Sign-in</h1>
                {mode === "login" && (
                <form className="form-layout" onSubmit={handleSubmit(loginUser)}>
                    <h2>Welcome back, please sign in</h2>
                    <br/>
                    <label htmlFor="user">Username</label>
                    <input type="email" name="user" required {...register('user')}/>

                    <label htmlFor ="password">Password</label>
                    <input type="password" name="password" required {...register('password')}/>

                    <input type="submit" value="Login"/>
                    <br/>
                    <p> Don't have an account with us yet? Create a new account with email and password</p>
                    <button onClick={()=> setMode("signup")}> Sign Up</button>
                </form>
    )
}

            {mode === "signup" && (
                <form className="form_layout" onSubmit={handleSubmit(signUpUser)}>
                    <h2>Create a new account</h2>
                    <br/>
                    <label htmlFor="user">Email</label>
                    <input type="email" name="user" required {...register('user')}/>

                    <label htmlFor ="password">Password</label>
                    <input type="password" name="password" required {...register('password')}/>

                    <label htmlFor ="passwordConfirm">Confirm Password</label>
                    <input type="password" name="passwordConfirm" required {...register('passwordConfirmed')}/>

                    <input type="submit" value="Sign Up"/>
                    <br/>
                    <p> Have an account already?</p>
                    <button onClick={()=> setMode("login")}> Sign Up</button>
                </form>
            )
            }
        </div>

export default Login
