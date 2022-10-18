import React from "react";

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar flex flex-col gap-4">
                <div className="sidebar__header text-xl">
                    <h1>Sidebar</h1>
                </div>
                <div className="sidebar__content">
                    <div className="sidebar__content__item">
                        <h2>Item 1</h2>
                    </div>
                    <div className="sidebar__content__item">
                        <h2>Item 2</h2>
                    </div>
                    <div className="sidebar__content__item">
                        <h2>Item 2</h2>
                    </div>
                    <div className="sidebar__content__item">
                        <h2>Item 2</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
