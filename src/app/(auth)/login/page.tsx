import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex font-sans">
      
      {/* LEFT SIDE */}
      <div className="w-1/2 bg-gray-100 flex flex-col justify-center px-45">
        
        {/* LOGIN CONTAINER */}
        <div className="bg-gray-200 p-8 w-[380px] outline-solid">
          
          <h1 className="text-lg font-semibold text-black mb-1">
            LOGIN
          </h1>

          <p className="text-xs text-gray-600 mb-5">
            Enter your information to login or choose another way to sign in
          </p>

          {/* USERNAME */}
          <div className="mb-4">
            <label className="text-xs text-black block mb-1">
              Username or Email
            </label>
            <Input
              placeholder="Username or Email"
              className="bg-white text-black"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-3">
            <label className="text-xs text-black block mb-1">
              Password
            </label>
            <Input
              type="password"
              placeholder="Password"
              className="bg-white text-black"
            />
          </div>

          {/* FORGOT */}
          <div className="text-right mb-4">
            <a className="text-xs text-blue-600 hover:underline cursor-pointer">
              Forget Password?
            </a>
          </div>

          {/* LOGIN BUTTON */}
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-sm">
            LOGIN
          </Button>

          {/* SIGN UP */}
          <p className="text-xs text-center text-gray-600 mt-4">
            Don&apos;t have an account?{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Sign up
            </span>
          </p>
        </div>

        {/* FOOTER */}
        <div className="text-xs text-gray-500 mt-12">
          Privacy & Terms &nbsp; Contact Us &nbsp; Change region
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 bg-gradient-to-b from-blue-400 to-blue-700 flex flex-col justify-center px-16 relative">
        
        <div className="absolute top-6 right-10 text-white font-semibold">
          LOGO
        </div>

        <div className="text-white">
          <p className="text-sm mb-1">
            Welcome to the
          </p>

          <h2 className="text-3xl font-bold mb-3">
            Attendance Tracker
          </h2>

          <p className="text-sm text-blue-100 max-w-md leading-relaxed">
            Our job is to make your educational experience more seamless
            by providing services such as……
          </p>
        </div>
      </div>
    </div>
  )
}
