
export default function DashboardPage() {
  return (
    <div>

      {/* HEADER */}
      <h1 className="text-3xl font-semibold mb-8">
        Welcome Back, Prof.Heng
      </h1>

      {/* TOP CARDS */}
      <div className="grid grid-cols-3 gap-6 mb-10"> 

        {/* CREATE */}
       <button
         className="bg-blue-600 text-white p-6 rounded-xl text-left w-full
         hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1
         active:translate-y-0 active:shadow-md
         transition-all duration-200"
>
         <div className="text-3xl mb-3">＋</div>

         <p className="text-lg font-semibold">
           Create New Class
         </p>

         <p className="text-sm text-blue-100">
           Set up a new class
         </p>
       </button>


        {/* TOTAL CLASSES */}
        <div className="bg-blue-600 text-white p-6 rounded-xl">
          <p className="text-sm text-blue-200">Total Classes</p>
          <p className="text-3xl font-bold">5</p>
        </div>

        {/* TOTAL STUDENTS */}
        <div className="bg-blue-600 text-white p-6 rounded-xl">
          <p className="text-sm text-blue-200">Total Students</p>
          <p className="text-3xl font-bold">122</p>
        </div>

      </div>

      {/* UPCOMING CLASSES */}
      <div className="bg-white rounded-xl p-6">

        <h2 className="text-lg font-semibold border-b pb-2 mb-4">
          Upcoming Classes
        </h2>

        <div className="space-y-4">

          <ClassCard color="bg-pink-200" />
          <ClassCard color="bg-yellow-200" />
          <ClassCard color="bg-green-200" />

        </div>

      </div>

    </div>
  )
}


function ClassCard({ color }: { color: string }) {
  return (
    <div className={`${color} p-4 rounded-lg`}>
      <p className="font-semibold">
        Software Engineering - B13
      </p>

      <p className="text-sm">
        08:30 - 10:00 AM
      </p>

      <p className="text-sm">
        KIT Phnom Penh Campus
      </p>
    </div>
  )
}
