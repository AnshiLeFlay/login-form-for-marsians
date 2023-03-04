import React, { useState } from "react";
import "./LoginForm.css";

interface LoginFormState {
    email: string;
    password: string;
}

function LoginForm() {
    const [state, setState] = useState<LoginFormState>({
        email: "",
        password: "",
    });
    //const [error, setError] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        /* if we need a custom error handle for emails
        const emailRegex =
            // eslint-disable-next-line no-useless-escape
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (state.email !== "") {
            if (state.email.match(emailRegex)) {
                setError("");

                //
            } else {
                setError("Invalid email format");
            }
        } else setError("Please enter your mail");
        */
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, email: e.target.value });
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, password: e.target.value });
    };

    return (
        <div className="login-form-wrapper">
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="login-form-cover">
                    <div>
                        <p className="login-form-cover-title">
                            MARS
                        </p>
                        <p className="login-form-cover-caption">
                            Explore the Red Planet: Join us on our mission to colonize Mars
                        </p>
                    </div>
                </div>
                <div className="login-form-outer">
                    <h2 className="login-form-title">Sign in</h2>
                    <div className="login-form-group">
                        <label className="login--label inp" htmlFor="email">
                            <input
                                className="login--input"
                                type="email"
                                id="email"
                                placeholder="Email"
                                value={state.email}
                                onChange={handleEmailChange}
                            />
                        </label>
                    </div>
                    <div className="login-form-group">
                        <label className="login--label inp" htmlFor="password">
                            <input
                                className="login--input"
                                type="password"
                                id="password"
                                placeholder="Password"
                                value={state.password}
                                onChange={handlePasswordChange}
                            />
                        </label>
                    </div>
                    <div className="login-form-button-wrapper">
                        <button className="login-form-button" type="submit">
                            Log In
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
