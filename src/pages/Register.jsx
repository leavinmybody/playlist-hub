import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import { auth } from "../firebase-config";
const Register = () => {
    const navigate = useNavigate();
    // Check if user is logged in
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <div className="register-page">
            <RegisterForm />
        </div>
    );
};

export default Register;
