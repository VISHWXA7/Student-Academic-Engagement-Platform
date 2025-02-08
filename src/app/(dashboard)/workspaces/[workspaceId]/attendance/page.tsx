import React from 'react';

const AttendancePage = () => {
  // Sample attendance data
  const attendanceData = [
    { id: 1, date: '2025-01-27', day: 'Sat', dayOrder: 1, hours: ['P', 'P', 'A', 'P', 'P']},
    { id: 2, date: '2025-01-26', day: 'Sun', dayOrder: null, hours: ['Holiday'] },
    { id: 3, date: '2025-01-27', day: 'Mon', dayOrder: 1, hours: ['P', 'P', 'A', 'P', 'P'] },
    { id: 4, date: '2025-01-28', day: 'Tue', dayOrder: 2, hours: ['A', 'P', 'P', 'P', 'OD'] },
    { id: 5, date: '2025-01-29', day: 'Wed', dayOrder: 3, hours: ['P', 'A', 'P', 'P', 'P'] },
    { id: 6, date: '2025-01-30', day: 'Thu', dayOrder: 4, hours: ['P', 'P', 'OD', 'P', 'A'] },
    { id: 7, date: '2025-01-31', day: 'Fri', dayOrder: 5, hours: ['P', 'A', 'P', 'P', 'P'] },
    { id: 8, date: '2025-02-01', day: 'Sat', dayOrder: null, hours: ['Holiday'] },
    { id: 9, date: '2025-02-02', day: 'Sun', dayOrder: null, hours: ['Holiday'] },
    { id: 10, date: '2025-02-03', day: 'Mon', dayOrder: 1, hours: ['A', 'P', 'P', 'A', 'P'] },
    { id: 11, date: '2025-02-04', day: 'Tue', dayOrder: 2, hours: ['P', 'P', 'OD', 'P', 'P'] },
  ];

  return (
    <div className="min-h-screen p-8">

      {/* Attendance Table */}
      <div className="max-w-6xl mx-auto overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full border border-gray-300 bg-white rounded-lg">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-left">
              <th className="px-6 py-4 font-medium border border-gray-300">S.No.</th>
              <th className="px-6 py-4 font-medium border border-gray-300">Date</th>
              <th className="px-6 py-4 font-medium border border-gray-300">Day</th>
              <th className="px-6 py-4 font-medium border border-gray-300">Day Order</th>
              {[...Array(5)].map((_, i) => (
                <th key={i} className="px-6 py-4 font-medium border border-gray-300">{`${i + 1}th Hour`}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((entry, index) => (
              <tr
                key={entry.id}
                className={`${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-blue-50 transition-colors duration-200`}
              >
                <td className="px-6 py-4 border border-gray-300 font-medium text-gray-700">
                  {index + 1}
                </td>
                <td className="px-6 py-4 border border-gray-300 text-gray-600">
                  {entry.date}
                </td>
                <td className="px-6 py-4 border border-gray-300 text-gray-600">
                  {entry.day}
                </td>
                <td className="px-6 py-4 border border-gray-300 text-gray-600">
                  {entry.dayOrder}
                </td>
                {entry.hours.map((status, hourIndex) => (
                  <td
                    key={hourIndex}
                    className={`px-6 py-4 border border-gray-300 text-center font-semibold ${
                      status === 'P'
                        ? 'text-green-600'
                        : status === 'A'
                        ? 'text-red-600'
                        : status === 'OD'
                        ? 'text-purple-600'
                        : 'text-orange-400'
                    }`}
                  >
                    {status}
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

export default AttendancePage;
