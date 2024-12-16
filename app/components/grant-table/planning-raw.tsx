import React from 'react';


function getDaysBetweenProjectDateAndTaskDate(projectStartDate:Date, taskStartDate:Date):number  {
    const diffInMS = taskStartDate.getTime() - projectStartDate.getTime();

    const diffInDays = diffInMS / (1000*60*60*24);

    return Math.abs(diffInDays);
}

interface PlanningRawProps {
    projectStartDate: string;
    startDate: string;
    endDate: string;
}


function PlanningRaw(props: PlanningRawProps | null) {

    const projectStartDate = new Date(props?.projectStartDate ||'2024-12-15');
    const startDate = new Date(props?.startDate||'2024-12-18');
    const endDate = new Date(props?.endDate||'2025-01-02');

    const totalDays = 28;
    // const duration = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    const duration = getDaysBetweenProjectDateAndTaskDate(endDate,startDate)+1;

    const start = getDaysBetweenProjectDateAndTaskDate(projectStartDate, startDate);

    const rows = [];

    for (let i = 0; i < totalDays-duration; i++) {

        if (i === start) {
            rows.push(<td key={i} className='flex-1 border px-2' colSpan={duration}>
                <div className="bg-red-800 w-full h-4 rounded-r-full rounded-l-full"></div>
            </td>)
        } else {
            rows.push(<td key={i} className='flex-1 border'></td>)
        }


    }


    return (
        <>

        <tr className='h-8'>
                <td className='w-20 border pl-2 text-sm' rowSpan={2}>L.1.W.20</td>
                <td className='w-44 border pl-2 text-sm' rowSpan={2}>Excavation and Site Preparation</td>
                <td className='w-44 border pl-2 text-sm' rowSpan={2}>remarks</td>

            {rows}

            </tr>

        </>
    );
}

export default PlanningRaw;