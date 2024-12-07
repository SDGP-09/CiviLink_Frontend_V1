import React from 'react';
import Link from "next/link";

function NavigationList() {
    return (
        <>
            <nav className="flex items-center h-full ">
                <ul className=" flex justify-between w-full text-white font-medium">
                    <li><Link href="/">Home</Link></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/login">Login</a></li>


                </ul>
            </nav>
        </>
    );
}

export default NavigationList;