import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

const Profile = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogOut = () => {
        auth.signOut();
        navigate("/login");
    };
    return (
        <div>
            <h1>Profile</h1>
            <button
                className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-md"
                onClick={handleLogOut}
            >
                Logout
            </button>
        </div>
    );
};

export default Profile;
