"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const data = [
  { day: "Mon", present: 15, absent: 1, late: 7, excused: 0 },
  { day: "Tue", present: 10, absent: 5, late: 6, excused: 2 },
  { day: "Wed", present: 9, absent: 6, late: 4, excused: 3 },
  { day: "Thu", present: 10, absent: 5, late: 2, excused: 1 },
  { day: "Fri", present: 7, absent: 8, late: 3, excused: 1 },
]

export default function ReportPage() {
  return (
    <div className="p-10 w-full">

      {/* HEADER */}
      <h1 className="text-3xl font-semibold mb-6">
        Attendance Report
      </h1>

      {/* STATS */}
      <div className="grid grid-cols-4 gap-6 mb-10">

        <StatCard title="Present" number="145" />
        <StatCard title="Absent" number="32" />
        <StatCard title="Late" number="18" />
        <StatCard title="Attendance" number="92%" />

      </div>

      {/* CHART */}
      <div className="bg-white p-6 rounded-xl shadow-sm">

        <h2 className="text-lg font-semibold mb-4">
          Attendance Stats
        </h2>

        <div className="h-[400px] w-full">
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="day" />
              <YAxis />

              <Tooltip />
              <Legend />

              <Line
                type="monotone"
                dataKey="present"
                stroke="#6366f1"
                strokeWidth={3}
              />

              <Line
                type="monotone"
                dataKey="absent"
                stroke="#ef4444"
                strokeWidth={3}
              />

              <Line
                type="monotone"
                dataKey="late"
                stroke="#06b6d4"
                strokeWidth={3}
              />

              <Line
                type="monotone"
                dataKey="excused"
                stroke="#f59e0b"
                strokeWidth={3}
              />

            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>

    </div>
  )
}

function StatCard({
  title,
  number,
}: {
  title: string
  number: string
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <p className="text-gray-500 text-sm">{title}</p>

      <p className="text-3xl font-bold mt-2">
        {number}
      </p>

      <p className="text-green-600 text-sm mt-1">
        ↑ 12% increase
      </p>
    </div>
  )
}
