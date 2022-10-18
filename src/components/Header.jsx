import React from "react";

const Header = () => {
    return (
        <div className="header-component">
            <nav className="navbar bg-green-500 rounded-md shadow-md">
                <div className="nav__logo">
                    <h1>Logo</h1>
                </div>
                <div className="nav__links">
                    <ul className="flex gap-4">
                        <li>
                            <a href="#">Link 1</a>
                        </li>
                        <li>
                            <a href="#">Link 2</a>
                        </li>
                        <li>
                            <a href="#">Link 3</a>
                        </li>
                    </ul>
                </div>

                <div className="nav__user">
                    <div className="nav__user__avatar">
                        <img src="https://picsum.photos/200" alt="avatar" />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
