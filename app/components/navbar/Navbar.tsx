import React from 'react';
import NavigationList from "@/app/components/navbar/NavigationList";
import Link from "next/link";

function Navbar() {
    return (
        <>
            <div className="w-11/12 h-14 bg-navBlue rounded my-5 flex justify-between">
                <div className="w-28 h-full ml-5 flex justify-center items-center">
                    <Link href="/" className="text-2xl font-extrabold italic opacity-50 text-white">
                        CiviLink
                    </Link>

                </div>
                <div className="w-96 h-full">
                <NavigationList/>
                </div>
                <div className="w-28 h-full mr-5 flex justify-center items-center">
                    <a href="/signup" className="text-white font-medium border border-white px-4 py-1 rounded">Sign-up</a>
                </div>
            </div>
        </>
    );
}

export default Navbar;