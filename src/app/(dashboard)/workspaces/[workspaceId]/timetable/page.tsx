"use client";

import React from "react";

const TimeTablePage = () => {
  return (
    <div className="min-h-screen p-8">

      {/* Time Table */}
      <div className="max-w-6xl mx-auto overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full border-collapse border border-gray-300">
          {/* Table Header */}
          <thead className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase border-b border-gray-300">
                Days/Hours
              </th>
              {[1, 2, 3, 4, 5].map((hour) => (
                <th
                  key={hour}
                  className="px-6 py-4 text-left text-sm font-semibold uppercase border-b border-gray-300"
                >
                  {`Hour ${hour}`}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {["D1", "D2", "D3", "D4", "D5", "D6"].map((day, rowIndex) => (
              <tr
                key={rowIndex}
                className={`hover:bg-gray-50 transition duration-200 ${
                  rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="px-6 py-4 text-gray-800 font-medium border-b border-gray-300">
                  {day}
                </td>
                {[
                  { id: "COS-3236", subject: "Network Security - SILVANUS MANUEL" },
                  { id: "COS-3200", subject: "Environmental Studies - SILVANUS MANUEL" },
                  { id: "COS-3682", subject: ".NET Programming - NOORIYA BEGAM" },
                  { id: "COS-3686", subject: "Mobile Technologies - BERLIN" },
                  { id: "COS-3588", subject: "Business Integration & Data Analysis - SUBIKSHA" },
                ].map((item, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-6 py-4 text-gray-700 border-b border-gray-300"
                  >
                    <span className="block font-semibold text-red-500">{item.id}</span>
                    <span>{item.subject}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimeTablePage;
