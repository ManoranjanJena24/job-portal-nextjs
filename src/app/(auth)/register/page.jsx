"use client"
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react'

const Register = () => {
    const [role , setRole]= useState("")
    const [name, setName] = useState("")
  return (
    <div className="mt-20 md:mt-5 z-0">
      <div className="md:w-1/3 border border-gray-400 rounded-lg p-8 flex flex-col w-full relative shadow-md m-auto">
        <h2 className="mb-1">
          <span className="text-3xl">Register to </span>
          <span className="text-3xl">Hire</span>
          <span className="text-3xl text-red-500">Heven</span>
        </h2>
        <form className="flex flex-col justify-between mt-3">
          <div className="grid w-full max-w-sm items-center gap-1.5 ml-1">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 border-2 border-gray-300 rounded"
            >
              <option value="">Select Role</option>
              <option value="jobseeker"> JobSeeker</option>
              <option value="recruiter">Recruiter</option>
            </select>
            {role && (
              <>
                <Label>Name</Label>
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="Email"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="Password"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <Label>PhoneNumber</Label>
                <Input
                  type="number"
                  placeholder="PhoneNumber"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <Label>ProfilePic</Label>
                <Input type="file" accept="image/*" />
                {role === "jobseeker" && (
                  <>
                    <Label>Resume</Label>
                    <Input type="file" accept="application/pdf" />
                    <Label>Bio</Label>
                    <Input
                      type="text"
                      placeholder="Enter Bio"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </>
                )}
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register