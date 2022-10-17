import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import bgImg from "../assets/bg-login.jpg";
import { auth } from "../firebase-config";

const LoginForm = () => {
    const { register, handleSubmit, errors } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    return (
        <div className="login-page">
            <section>
                <div className=" register max-w-4xl w-screen flex border-2 shadow-lg border-slate-200 rounded-md bg-white gap-4">
                    <div className="col-1">
                        {/* Form Heading */}

                        <h2 className="text-2xl mt-4 mb-2">Sign In</h2>
                        <p className="text-slate-500 ">
                            Welcome back <span className="text-lg">👋🏼</span>
                        </p>
                        <form
                            className="flex  flex-col max-w-xs w-screen my-8 mx-auto"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            {/* Input Fields */}
                            <input
                                className="border-2 border-slate-500 py-4 px-4 rounded-md mb-4 focus:outline-none"
                                type="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
                                })}
                                placeholder="Password"
                            />

                            {/* Normal Sign In Button */}

                            <button className="border-2 border-slate-500 py-4 px-4 rounded-md bg-green-500 text-base text-white cursor-pointer">
                                Sign In
                            </button>
                            <p className="mt-2">Or</p>

                            {/* Social Sign In Button */}

                            <button className="border-2 border-slate-500 py-4 px-4 rounded-md bg-white text-base text-white cursor-pointer mt-2">
                                <div className="flex gap-2 items-center justify-center">
                                    <div>
                                        <FcGoogle
                                            fontSize={18}
                                            className="inline-block"
                                        />
                                    </div>
                                    <div className="inline-block text-black">
                                        Sign in with Google
                                    </div>
                                </div>
                            </button>

                            {/* Sign Up Refferal Link */}

                            <p className="mt-4">
                                Not a member?{" "}
                                <Link className="text-green-500" to="/register">
                                    Sign Up
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
        </div>
    );
};

export default LoginForm;
