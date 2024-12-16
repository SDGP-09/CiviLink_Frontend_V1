import React from 'react';
import GrantTable from "@/app/components/grant-table/grant-table";

function Page() {


    return (
        <>
        <div className="w-full h-full flex flex-col">
            <div className="w-5/6 h-20 bg-red-800"></div>
            <div className="w-5/6 flex-1 bg-amber-400">
                <GrantTable/>
            </div>
        </div>

        </>
    );
}

export default Page;