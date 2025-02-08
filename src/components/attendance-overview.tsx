"use client";

import React from "react";

const AttendanceOverview = () => {
  const attendanceData = [
    {
      subjectCode: "COS 3588-SAT",
      presentHour: 30,
      odHour: 0,
      absentHour: 1,
      totalHour: 31,
      percentage: "97%",
    },
    {
      subjectCode: "COS 3682-SAT",
      presentHour: 17,
      odHour: 0,
      absentHour: 2,
      totalHour: 19,
      percentage: "89%",
    },
    {
      subjectCode: "COS 3684-SAT",
      presentHour: 34,
      odHour: 0,
      absentHour: 0,
      totalHour: 34,
      percentage: "100%",
    },
    {
      subjectCode: "COS 3686-SAT",
      presentHour: 27,
      odHour: 0,
      absentHour: 5,
      totalHour: 32,
      percentage: "84%",
    },
    {
      subjectCode: "COS 3286-SAT",
      presentHour: 12,
      odHour: 0,
      absentHour: 0,
      totalHour: 12,
      percentage: "100%",
    },
    {
      subjectCode: "COS 3200-SAT",
      presentHour: 16,
      odHour: 0,
      absentHour: 0,
      totalHour: 16,
      percentage: "100%",
    },
  ];

  return (
    <div className="bg-white p-6 shadow-md rounded-xl max-w-7xl mx-auto">
      <h2 className="text-xl font-bold mb-6 text-gray-800">
        Attendance Overview
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300 rounded-md overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
              <th className="p-3 text-left text-sm font-semibold">Subject Code</th>
              <th className="p-3 text-center text-sm font-semibold">Present Hour</th>
              <th className="p-3 text-center text-sm font-semibold">OD Hour</th>
              <th className="p-3 text-center text-sm font-semibold">Absent Hour</th>
              <th className="p-3 text-center text-sm font-semibold">Total Hour</th>
              <th className="p-3 text-center text-sm font-semibold">Percentage</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((record, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-blue-100 transition duration-200`}
              >
                <td className="p-3 text-sm text-gray-700">{record.subjectCode}</td>
                <td className="p-3 text-center text-sm text-gray-700">{record.presentHour}</td>
                <td className="p-3 text-center text-sm text-gray-700">{record.odHour}</td>
                <td className="p-3 text-center text-sm text-gray-700">{record.absentHour}</td>
                <td className="p-3 text-center text-sm text-gray-700">{record.totalHour}</td>
                <td
                  className={`p-3 text-center text-sm font-bold ${
                    parseInt(record.percentage) < 75
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {record.percentage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceOverview;
