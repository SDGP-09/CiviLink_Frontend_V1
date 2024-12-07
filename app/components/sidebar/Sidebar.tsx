import React from 'react';
import SidebarBox from "@/app/components/sidebar/SidebarBox";



function Sidebar() {

    const links:string[] = ["Create Account","Login","Consultants","Contractors","Calender","Pricing"];

    return (
        <>
            <div className="w-full h-auto">

                {links.map((link, index) => (
                    <li key={index} className="list-none">
                        <a href="/contractors">
                            <SidebarBox  name={link} />
                        </a>
                    </li>
                ))}

            </div>
        </>
    );
}

export default Sidebar;