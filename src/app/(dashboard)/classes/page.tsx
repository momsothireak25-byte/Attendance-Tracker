import ClassCard from "@/components/dashboard/class-card"

const classes = [
  {
    id: "se-b13",
    name: "Software Engineering",
    address: "House No. 46, Galloe Street, Phnom Penh 120713",
    time: "Mon–Wed 08:30AM",
    students: 30,
    color: "bg-pink-200",
  },
  {
    id: "se-b14",
    name: "Software Engineering",
    address: "House No. 46, Galloe Street, Phnom Penh 120713",
    time: "Mon–Wed 08:30AM",
    students: 30,
    color: "bg-yellow-200",
  },
  {
    id: "se-b15",
    name: "Software Engineering",
    address: "House No. 46, Galloe Street, Phnom Penh 120713",
    time: "Mon–Wed 08:30AM",
    students: 30,
    color: "bg-green-200",
  },
  {
    id: "se-b16",
    name: "Software Engineering",
    address: "House No. 46, Galloe Street, Phnom Penh 120713",
    time: "Mon–Wed 08:30AM",
    students: 30,
    color: "bg-pink-200",
  },
]

export default function ClassesPage() {
  return (
    <div className="p-8">

      <h1 className="text-3xl font-semibold mb-10">
        Welcome Back,
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {classes.map((cls) => (
          <ClassCard
            key={cls.id}
            id={cls.id}
            name={cls.name}
            address={cls.address}
            time={cls.time}
            students={cls.students}
            color={cls.color}
          />
        ))}
      </div>

    </div>
  )
}
