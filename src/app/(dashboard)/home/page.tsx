import CreateClassDialog from "@/components/dashboard/create-class-dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="p-8 w-full">

      {/* HEADER */}
      <h1 className="text-3xl font-semibold mb-8">
        Welcome Back, Prof. Heng
      </h1>


      {/* TOP SECTION */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        {/* CREATE CLASS DIALOG */}
        <CreateClassDialog />


        {/* TOTAL CLASSES */}
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-sm text-gray-500">
              Total Classes
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-4xl font-bold">5</p>
          </CardContent>
        </Card>


        {/* TOTAL STUDENTS */}
        <Card className="rounded-2xl shadow-sm ">
          <CardHeader>
            <CardTitle className="text-sm text-gray-500 ">
              Total Students
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-4xl font-bold">122</p>
          </CardContent>
        </Card>

      </div>



      {/* UPCOMING CLASSES */}
      <Card className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle>
            Upcoming Classes
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">

          <ClassCard
            color="bg-pink-200"
            title="Software Engineering - B13"
            time="08:30 - 10:00 AM"
            location="KIT Phnom Penh Campus"
          />

          <ClassCard
            color="bg-yellow-200"
            title="Web Development"
            time="10:30 - 12:00 PM"
            location="Room A204"
          />

          <ClassCard
            color="bg-green-200"
            title="Database Systems"
            time="01:00 - 02:30 PM"
            location="Room B101"
          />

        </CardContent>
      </Card>

    </div>
  )
}



function ClassCard({
  color,
  title,
  time,
  location,
}: {
  color: string
  title: string
  time: string
  location: string
}) {
  return (
    <div
      className={`${color} p-5 rounded-xl hover:scale-[1.02] transition`}
    >
      <p className="font-semibold text-lg">
        {title}
      </p>

      <p className="text-sm">
        {time}
      </p>

      <p className="text-sm">
        {location}
      </p>
    </div>
  )
}
