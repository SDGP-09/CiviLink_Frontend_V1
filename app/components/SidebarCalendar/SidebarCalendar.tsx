import React from "react";

const SidebarCalendar = () => {
  const days = [
    [29, 30, 31, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
  ];

  return (
    <div className="flex justify-center items-center h-auto bg-gray-100">
      <div className="p-2 bg-white rounded shadow">
        <h2 className="text-center text-gray-600 font-semibold text-sm mb-2">
          February
        </h2>
        <div className="grid grid-cols-7 gap-1 text-center">
          <div className="text-gray-400 text-xs">Mo</div>
          <div className="text-gray-400 text-xs">Tu</div>
          <div className="text-gray-400 text-xs">We</div>
          <div className="text-gray-400 text-xs">Th</div>
          <div className="text-gray-400 text-xs">Fr</div>
          <div className="text-blue-600 text-xs">Sa</div>
          <div className="text-blue-600 text-xs">Su</div>
          {days.flat().map((day, index) => (
            <div
              key={index}
              className={`${
                day === 5 || day === 6 || day === 7 || day === 8 || day === 9 || day === 10
                  ? "bg-black text-white"
                  : "text-gray-500"
              } flex justify-center items-center h-6 w-6 text-xs rounded`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarCalendar;
