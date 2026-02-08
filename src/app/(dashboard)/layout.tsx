"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const linkClass = (path: string) =>
    `flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition
     ${
       pathname.startsWith(path)
         ? "bg-cyan-400 text-white"
         : "text-white hover:bg-white/20"
     }`

  return (
    <div className="flex min-h-screen">

      {/* SIDEBAR */}
      <aside className="w-64 bg-gradient-to-b from-blue-400 to-blue-800 p-4 text-white">

        <div className="mb-8">
          <p className="font-semibold">James Fronco</p>
          <p className="text-xs opacity-80">Teacher</p>
        </div>

        <nav className="space-y-2">

          <Link href="/home" className={linkClass("/home")}>
            Dashboard
          </Link>

          <Link href="/classes" className={linkClass("/classes")}>
            Classes
          </Link>

          <Link href="/student" className={linkClass("/student")}>
            Student
          </Link>

          <Link href="/report" className={linkClass("/report")}>
            Report
          </Link>

        </nav>

        <div className="absolute bottom-6 left-4 right-4">
          <button className="mt-auto bg-white text-black rounded-md px-20 py-2 hover:bg-blue-300 hover:text-black transition-all duration-200 cursor-pointer"> Logout </button>
        </div>
      </aside>

      {/* PAGE CONTENT */}
      <main className="flex-1 bg-gray-50">
        {children}
      </main>

    </div>
  )
}
