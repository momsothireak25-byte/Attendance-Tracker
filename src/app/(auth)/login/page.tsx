export default function LoginPage() {
  return (
    <div className="min-h-screen flex font-sans">
      {/* LEFT SIDE – LOGIN */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <div className="bg-white w-[380px] p-8 rounded-2xl shadow-xl">
          <h2 className="text-xl font-bold text-black mb-1">
            LOGIN
          </h2>

          <p className="text-sm text-gray-700 mb-6">
            Enter your information to login
          </p>

          {/* Username */}
          <input
            type="text"
            placeholder="Username or Email"
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
          <input
            type="password"
            placeholder="Password"
            className="
              w-full mb-3
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

          {/* Forgot password */}
          <div className="text-right mb-5">
            <a
              href="#"
              className="text-sm text-blue-600 font-medium hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login button */}
          <button className="w-full bg-blue-700 text-white py-3 rounded-md font-semibold hover:bg-blue-800 transition">
            LOGIN
          </button>

          {/* Sign up */}
          <p className="text-sm text-center mt-4 text-gray-700">
            Don’t have an account?{" "}
            <span className="text-blue-600 font-medium cursor-pointer hover:underline">
              Sign up
            </span>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE – INFO */}
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
