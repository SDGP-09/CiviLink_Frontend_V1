import React from 'react';



function SidebarBox({name}: {name:string | null}) {
    return (
        <>
        
            <div className="w-full h-12 bg-sideBoxBlack bg-opacity-15 mb-1 rounded-r-lg flex justify-start items-center pl-8">
                <p className="text-xl text-black">{name}</p>
            </div>
        
        </>
    );
}

export default SidebarBox;