import Link from "next/link"

type ClassCardProps = {
  id: string
  name: string
  address: string
  time: string
  students: number
  color: string
}

export default function ClassCard({
  id,
  name,
  address,
  time,
  students,
  color,
}: ClassCardProps) {
  return (
    <div className={`${color} p-6 rounded-xl shadow-sm`}>

      <h3 className="font-semibold text-lg mb-2">
        {name}
      </h3>

      <div className="text-sm text-gray-700 space-y-1 mb-4">
        <p>📍 {address}</p>
        <p>⏰ {time}</p>
        <p>👥 {students} Students</p>
      </div>

      <Link href={`/classes/${id}`}>
        <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-600 transition">
          View Details →
        </button>
      </Link>

    </div>
  )
}
