import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignupPage() {
  return (
    <div className="min-h-screen flex font-sans">

      {/* LEFT SIDE */}
      <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center">

        {/* SIGN UP CONTAINER */}
        <div className="bg-gray-200 p-8 w-[380px]">

          <h1 className="text-lg font-semibold text-black mb-1">
            Sign in
          </h1>

          <p className="text-xs text-gray-600 mb-5">
            We suggest using the email address you use at work.
          </p>

          {/* EMAIL */}
          <div className="mb-4">
            <label className="text-xs text-black block mb-1">
              Email
            </label>
            <Input
              placeholder="Email@gmail.com"
              className="bg-white text-black"
            />
          </div>

          {/* FIRST NAME */}
          <div className="mb-4">
            <label className="text-xs text-black block mb-1">
              First name
            </label>
            <Input
              placeholder="Eg. James"
              className="bg-white text-black"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-4">
            <label className="text-xs text-black block mb-1">
              Password
            </label>
            <Input
              type="password"
              placeholder="Password"
              className="bg-white text-black"
            />
          </div>

          {/* ROLE */}
          <div className="mb-4">
            <label className="text-xs text-black block mb-2">
              Declare your role:
            </label>

            <div className="flex bg-gray-300 rounded-md overflow-hidden w-full">
              <button className="flex-1 bg-blue-600 text-white text-xs py-2">
                Teacher
              </button>
              <button className="flex-1 text-xs py-2 text-gray-700">
                Student
              </button>
            </div>
          </div>

          {/* TERMS */}
          <div className="flex items-start gap-2 mb-5">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-xs text-gray-600 leading-snug"
            >
              I agree to the{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">
                Privacy Policy
              </span>
              .
            </label>
          </div>

          {/* SIGN UP BUTTON */}
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-sm">
            Sign up
          </Button>
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
