import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FiSearch } from "react-icons/fi";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { themeChange } from "theme-change";
import Card from "../components/Card";
import { auth, getUserDocument } from "../firebase-config";

const Home = () => {
    // Check if user is logged in
    const [user] = useAuthState(auth);
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    const handleBurgerMenu = () => {
        const menu = document.querySelector("#menu");
        if (menu.classList.contains("hidden")) {
            menu.classList.remove("hidden");
        } else {
            menu.classList.add("hidden");
        }
    };

    useEffect(() => {
        const getUserData = async () => {
            const userDoc = await getUserDocument(user?.uid);
            setUserData(userDoc);
        };
        getUserData();
    }, [user]);

    useEffect(() => {
        themeChange(false);
    }, []);

    return (
        <div className="grid md:grid-cols-3">
            <div className="md:col-span-1 md:flex md:justify-end">
                <nav className="text-right">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                            <a href="/" className="hover:text-gray-700">
                                Playlist Hub
                            </a>
                        </h1>
                        <div
                            className="px-4 cursor-pointer md:hidden"
                            id="burger"
                            onClick={handleBurgerMenu}
                        >
                            <MdMenu className="text-2xl" />
                        </div>
                    </div>
                    <ul className="text-sm mt-6 hidden md:block" id="menu">
                        <li className="py-1">
                            <a
                                className="flex flex-row-reverse px-4 items-center gap-2 border-r-4 border-green-500"
                                href="#"
                            >
                                <IoHomeOutline fontSize={20} />
                                <span className="mr-3.5">Home</span>
                            </a>
                        </li>
                        <li className="py-1">
                            <a
                                href="#"
                                className="flex flex-row-reverse px-4 items-center gap-2 border-r-4 border-transparent"
                            >
                                <IoSettingsOutline fontSize={20} />
                                <span>Settings</span>
                            </a>
                        </li>
                        {/* If user is authenticated, add an item to the sidebar called "Account" and an avatar next to it */}
                        {user && (
                            <li className="py-1">
                                <Link
                                    to="/profile"
                                    className="flex flex-row-reverse px-4 items-center gap-2 border-r-4 border-transparent"
                                >
                                    <img
                                        src={userData?.photoURL}
                                        alt="avatar"
                                        className="w-5 h-5 rounded-full"
                                    />
                                    <span className="mr-3.5">Profile</span>
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>

            <main className="px-16 py-6 md:col-span-2">
                <div className="flex justify-center items-center md:justify-end">
                    {/* if not authenticated show the login and sign up buttons */}
                    {!user && (
                        <div className="flex gap-4">
                            <Link
                                to="/login"
                                className="border border-green-500 hover:bg-green-400 transition ease-out duration-500 hover:text-white text-white px-4 py-2 rounded-md"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="border border-green-500 hover:bg-green-400 transition ease-out duration-500 hover:text-white text-white px-4 py-2 rounded-md"
                            >
                                Sign Up
                            </Link>
                        </div>
                    )}
                </div>

                <div>
                    <h4 className="mt-12 pb-2 border-b border-gray-200">
                        Latest Playlists
                    </h4>
                    {/* Search bar */}
                    <div className="flex justify-between items-center mt-6">
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                className="input bg-gray-100 p-2 rounded-md"
                                placeholder="Search..."
                            />
                            <button className="btn w-14">
                                <FiSearch fontSize={20} />
                            </button>
                        </div>
                        <div className="flex flex-row gap-2">
                            <button className="btn hidden sm:block">
                                Filter
                            </button>
                            <button className="btn hidden sm:block">
                                Sort
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 grid lg:grid-cols-3 gap-10">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>

                <div className="btn flex justify-center mt-4">
                    <div>Load more</div>
                </div>
            </main>
        </div>
    );
};

export default Home;
