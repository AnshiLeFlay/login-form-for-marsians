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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`Email: ${state.email}, Password: ${state.password}`);
        // TODO: Send login request to server
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
                            Some site title
                        </p>
                        <p className="login-form-cover-caption">
                            caption for this title
                        </p>
                    </div>
                </div>
                <div className="login-form-outer">
                    <h2 className="login-form-title">Log In</h2>
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
