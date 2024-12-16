import React from 'react';
import PlanningRaw from "@/app/components/grant-table/planning-raw";
import ActualRaw from "@/app/components/grant-table/actual-raw";

function GrantTable() {

    const projectStartDate = new Date('2024-12-15');
    const numberOfDaysPerMonth = 31;

    let projectDate = projectStartDate.getDate();

    const rows = [];

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 7; j++) {

            rows.push(<th className='flex-1 border text-xs w-5'>{projectDate}</th>);

            projectDate++;

            if (projectDate>numberOfDaysPerMonth){
                projectDate = 1;
            }

        }

    }




    return (
        <>
            <table className='w-full border'>
                <thead>
                <tr>
                    <th className='w-20 border' rowSpan={2}>#</th>
                    <th className='w-44 border' rowSpan={2}>item</th>
                    <th className='w-44 border' rowSpan={2}>remarks</th>
                    <th className='flex-1 border' colSpan={7}>week-1</th>
                    <th className='flex-1 border' colSpan={7}>week-2</th>
                    <th className='flex-1 border' colSpan={7}>week-3</th>
                    <th className='flex-1 border' colSpan={7}>week-4</th>
                </tr>
                <tr>

                    {rows}

                </tr>
                </thead>
                <PlanningRaw
                    projectStartDate="2024-12-15"
                    startDate="2024-12-18"
                    endDate="2025-01-02"/>
                <ActualRaw/>
            </table>
        </>
    );
}

export default GrantTable;