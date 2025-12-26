"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { forgotPassword } from "@/redux/action/user";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const { isAuth, btnLoading } = useSelector((state) => state.user);

  if (isAuth) return redirect("/");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email , setEmail));
  };

  return (
    <div className="mt-20 md:mt-5 z-0">
      <div className="md:w-1/3 border border-gray-400 rounded-lg p-8 flex flex-col w-full relative shadow-md m-auto">
        <h2 className="mb-4 text-3xl">
          Forgot <span className="text-red-500">Password</span>
        </h2>

        <p className="text-sm text-gray-500 mb-4">
          Enter your registered email. We’ll send you a password reset link.
        </p>

        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <Button
            disabled={btnLoading}
            className="flex justify-center items-center gap-2"
          >
            Send Reset Link <ArrowRight size={18} />
          </Button>
        </form>

        <Link
          className="mt-3 text-blue-500 underline text-sm ml-2"
          href={"/login"}
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
