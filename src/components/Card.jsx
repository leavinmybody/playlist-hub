import React from "react";
import { IoIosTime, IoMdMusicalNote } from "react-icons/io";

const Card = () => {
    return (
        <div className="card hover:shadow-lg">
            <img
                src="https://i.scdn.co/image/ab67706f0000000353a7da1fd148fd6f8f15dd04"
                alt="stew"
                className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
                <span className="font-bold text-secondary">Gold School</span>
                <span className="block text-gray-500 text-sm">
                    by <span className="text-secondary">Spotfiy</span>
                </span>
            </div>
            <div className="badge">
                <IoMdMusicalNote fontSize={14} className="inline-block mr-1" />{" "}
                <span>50 Tracks</span>
            </div>
            <div className="badge lg:top-8 lg:left-0 md:top-0 md:left-28 sm:top-0 sm:left-28 xl:left-28 xl:top-0 xs:top-0 xs:left-28 top-0 left-28 ">
                <IoIosTime fontSize={14} className="inline-block mr-1" />{" "}
                <span>3 hr 39 min</span>
            </div>
        </div>
    );
};

export default Card;
