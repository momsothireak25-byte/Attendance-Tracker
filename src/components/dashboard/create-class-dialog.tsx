"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function CreateClassDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
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
      </DialogTrigger>

      <DialogContent className="sm:max-w-[520px] rounded-xl">

        {/* HEADER */}
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            Create New Class
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5 mt-4">

          {/* CLASS NAME */}
          <div className="space-y-2">
            <Label>Class Name</Label>
            <Input placeholder="Eg. Software Engineering" />
          </div>

          {/* CLASS PASSCODE */}
          <div className="space-y-2">
            <Label>Class Passcode</Label>
            <Input placeholder="Eg. SE66846648" />
          </div>

          {/* DIVIDER */}
          <div className="border-t pt-4">

            <p className="font-semibold mb-3">
              Class Location
            </p>

            {/* ADDRESS */}
            <div className="space-y-2 mb-4">
              <Label>Address</Label>
              <Input placeholder="Eg. Street 578, Chom Chao, Phnom Penh" />
            </div>

            {/* LOCATION BUTTONS */}
            <div className="space-y-2">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                📍 Current Location
              </Button>

              <Button
                variant="secondary"
                className="w-full"
              >
                🗺️ Choose From Map
              </Button>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="border-t pt-4">

            <p className="font-semibold mb-3">
              Clock In / Clock Out Times
            </p>

            <div className="flex gap-4">
              <div className="w-full space-y-2">
                <Label>Clock In Time</Label>
                <Input type="time" />
              </div>

              <div className="w-full space-y-2">
                <Label>Clock Out Time</Label>
                <Input type="time" />
              </div>
            </div>
          </div>

          {/* CREATE BUTTON */}
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg h-11">
            Create Class
          </Button>

        </div>
      </DialogContent>
    </Dialog>
  )
}
