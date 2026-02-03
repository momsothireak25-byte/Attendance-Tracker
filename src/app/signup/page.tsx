export default function SignUpPage() {
  return (
    <div className="min-h-screen flex font-sans">
      {/* LEFT SIDE – SIGN UP FORM */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <div className="bg-white w-[400px] p-8 rounded-2xl shadow-xl">
          <h2 className="text-xl font-bold text-black mb-1">
            Sign in
          </h2>

          <p className="text-sm text-gray-700 mb-6">
            We suggest using the email address you use at work.
          </p>

          {/* Email */}
          <label className="block text-sm font-medium text-black mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Email@gmail.com"
            className="
              w-full mb-4
              rounded-md
              border border-gray-400
              bg-white
              px-4 py-3
              text-gray-900
              placeholder-gray-500
              focus:outline-none
              focus:ring-2
              focus:ring-blue-600
            "
          />

          {/* First name */}
          <label className="block text-sm font-medium text-black mb-1">
            First name
          </label>
          <input
            type="text"
            placeholder="Eg. James"
            className="
              w-full mb-4
              rounded-md
              border border-gray-400
              bg-white
              px-4 py-3
              text-gray-900
              placeholder-gray-500
              focus:outline-none
              focus:ring-2
              focus:ring-blue-600
            "
          />

          {/* Password */}
          <label className="block text-sm font-medium text-black mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="
              w-full mb-5
              rounded-md
              border border-gray-400
              bg-white
              px-4 py-3
              text-gray-900
              placeholder-gray-500
              focus:outline-none
              focus:ring-2
              focus:ring-blue-600
            "
          />

          {/* Role selector */}
          <p className="text-sm font-medium text-black mb-2">
            Declare your role:
          </p>

          <div className="flex bg-gray-200 rounded-md mb-4 p-1">
            <button className="flex-1 bg-blue-600 text-white py-2 rounded-md text-sm font-medium">
              Teacher
            </button>
            <button className="flex-1 text-gray-700 py-2 rounded-md text-sm font-medium">
              Student
            </button>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2 mb-5">
            <input type="checkbox" className="mt-1" />
            <p className="text-sm text-gray-700">
              I agree to the{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">
                Privacy Policy
              </span>
              .
            </p>
          </div>

          {/* Sign up button */}
          <button className="w-full bg-blue-700 text-white py-3 rounded-md font-semibold hover:bg-blue-800 transition">
            Sign up
          </button>
        </div>
      </div>

      {/* RIGHT SIDE – INFO PANEL */}
      <div className="w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center px-16">
        <div>
          <p className="uppercase tracking-wide text-sm mb-2">
            Welcome to the
          </p>

          <h1 className="text-4xl font-bold mb-4">
            Attendance Tracker
          </h1>

          <p className="text-blue-100 max-w-md leading-relaxed">
            Our job is to make your educational experience more seamless by
            providing services such as attendance tracking, reporting, and
            class management.
          </p>
        </div>
      </div>
    </div>
  );
}
