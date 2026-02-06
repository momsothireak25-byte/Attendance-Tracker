export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">

      {/* SIDEBAR */}
      <div className="w-64 bg-gradient-to-b from-blue-500 to-blue-800 text-white p-4 flex flex-col">

        {/* USER */}
        <div className="mb-10">
          <p className="font-semibold">James Fronco</p>
          <p className="text-xs text-blue-200">Teacher</p>
        </div>

        {/* MENU */}
        <nav className="flex flex-col gap-3 text-sm">

          <button className="bg-white text-black rounded-md px-3 py-2 text-left hover:bg-blue-300 hover:text-black transition-all duration-200 cursor-pointer">
            Attendance Sheet
          </button>

          <button className="bg-cyan-400 text-black rounded-md px-3 py-2 text-left hover:bg-blue-300 hover:bg-cyan-300 transition-all">
            Dashboard
          </button>

          <button className="bg-white text-black rounded-md px-3 py-2 text-left hover:bg-blue-300 hover:text-black transition-all duration-200 cursor-pointer">
            Student
          </button>

          <button className="bg-white text-black rounded-md px-3 py-2 text-left hover:bg-blue-300 hover:text-black transition-all duration-200 cursor-pointer">
            Report
          </button>

          <button className="bg-white text-black rounded-md px-3 py-2 text-left mt-6 hover:bg-blue-300 hover:text-black transition-all duration-200 cursor-pointer">
            Settings
          </button>
        </nav>

        {/* LOGOUT */}
        <button className="mt-auto bg-white text-black rounded-md px-3 py-2 hover:bg-blue-300 hover:text-black transition-all duration-200 cursor-pointer">
          Logout
        </button>

      </div>

      {/* PAGE CONTENT */}
      <div className="flex-1 bg-gray-100 p-10"> 
        {children}
      </div>

    </div>
  )
}
