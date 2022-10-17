import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

const Home = () => {
    // Check if user is logged in
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogOut = () => {
        auth.signOut();
        navigate("/login");
    };

    // If user is logged in, show the home page
    if (user) {
        return (
            <div className="home-page">
                <h1>Home</h1>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                    onClick={() => auth.signOut()}
                >
                    Logout
                </button>
            </div>
        );
    } else {
        // If user is not logged in, redirect to login page
        return (
            <div class="min-h-screen flex flex-col">
                <header class="bg-red-50">Header</header>

                <div class="flex-1 flex flex-col sm:flex-row">
                    <main class="flex-1 bg-indigo-100">Content here</main>

                    <nav class="order-first sm:w-32 bg-purple-200">Sidebar</nav>

                    <aside class="sm:w-32 bg-yellow-100">Right Sidebar</aside>
                </div>

                <footer class="bg-gray-100">Footer</footer>
            </div>
        );
    }
};

//     return (
//         <div>
//             <h1>Home</h1>
//             <nav>
//                 <ul>
//                     <li>
//                         <a href="/register">Register</a>
//                     </li>
//                     <li>
//                         <a href="/login">Login</a>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     );
// };

export default Home;
