import React from "react";

const calendar = () => {
  const days = [
    [29, 30, 31, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white rounded shadow">
        <h2 className="text-center text-gray-600 font-semibold mb-4">
          February
        </h2>
        <div className="grid grid-cols-7 gap-2 text-center">
          <div className="text-gray-400">Mo</div>
          <div className="text-gray-400">Tu</div>
          <div className="text-gray-400">We</div>
          <div className="text-gray-400">Th</div>
          <div className="text-gray-400">Fr</div>
          <div className="text-blue-600">Sa</div>
          <div className="text-blue-600">Su</div>
          {days.flat().map((day, index) => (
            <div
              key={index}
              className={`${
                day === 5 || day === 6 || day === 7 || day === 8 || day === 9 || day === 10
                  ? "bg-black text-white"
                  : "text-gray-500"
              } flex justify-center items-center h-10 w-10 rounded`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default calendar;
