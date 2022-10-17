import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { auth } from "../firebase-config";
const Login = () => {
    const navigate = useNavigate();
    // Check if user is logged in
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    return <LoginForm />;
};

export default Login;
