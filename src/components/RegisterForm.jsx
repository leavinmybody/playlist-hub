import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import bgImg from "../assets/bg.jpg";
import { auth } from "../firebase-config";
const RegisterForm = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        // Use createUserWithEmailAndPassword to create a new user with email and password in Firebase then update the user profile with username and photoURL
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
        )
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    };

    return (
        <section>
            <div className=" register max-w-4xl w-screen flex border-2 shadow-lg border-slate-200 rounded-md bg-white gap-4">
                <div className="col-1">
                    {/* Form Heading */}

                    <h2 className="text-2xl mt-4 mb-2">Sign Up</h2>
                    <span className="text-slate-500">
                        Sign up to share your own playlists!
                    </span>
                    <form
                        className="flex  flex-col max-w-xs w-screen my-8 mx-auto"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        {/* Input Fields */}

                        <input
                            className="border-2 border-slate-500 py-4 px-4 rounded-md mb-4 focus:outline-none"
                            type="text"
                            {...register("username", {
                                required: "Username is required",
                                minLength: {
                                    value: 3,
                                    message:
                                        "Username must be at least 3 characters",
                                },
                            })}
                            placeholder="Username"
                        />
                        <input
                            className="border-2 border-slate-500 py-4 px-4 rounded-md mb-4 focus:outline-none"
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email address",
                                },
                            })}
                            placeholder="Email"
                        />
                        <input
                            className="border-2 border-slate-500 py-4 px-4 rounded-md mb-4 focus:outline-none"
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message:
                                        "Password must be at least 6 characters",
                                },
                            })}
                            placeholder="Password"
                        />
                        <input
                            className="border-2 border-slate-500 py-4 px-4 rounded-md mb-4  focus:outline-none"
                            type="password"
                            {...register("confirmPassword", {
                                required: "Confirm password is required",
                                minLength: {
                                    value: 6,
                                    message:
                                        "Password must be at least 6 characters",
                                },
                            })}
                            placeholder="Confirm Password"
                        />

                        {/* Normal Sign Up Button */}

                        <button className="border-2 border-slate-500 py-4 px-4 rounded-md bg-green-500 text-base text-white cursor-pointer">
                            Sign Up
                        </button>
                        <p className="mt-2">Or</p>

                        {/* Social Sign Up Button */}

                        <button className="border-2 border-slate-500 py-4 px-4 rounded-md bg-white text-base text-white cursor-pointer mt-2">
                            <div className="flex gap-2 items-center justify-center">
                                <div>
                                    <FcGoogle
                                        fontSize={18}
                                        className="inline-block"
                                    />
                                </div>
                                <div className="inline-block text-black">
                                    Sign Up with Google
                                </div>
                            </div>
                        </button>

                        {/* Login Refferal Link */}

                        <p className="mt-4">
                            Already a member?{" "}
                            <Link className="text-green-500" to="/login">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
                {/* Side Image */}
                <div className="col-2 brighten">
                    <img className="rounded-md" src={bgImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default RegisterForm;
