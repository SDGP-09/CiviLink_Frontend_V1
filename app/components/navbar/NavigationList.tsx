import React from 'react';
import Link from "next/link";

function NavigationList() {
    return (
        <>
            <nav className="flex items-center h-full ">
                <ul className=" flex justify-between w-full text-white font-medium">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/login">Login</Link></li>


                </ul>
            </nav>
        </>
    );
}

export default NavigationList;