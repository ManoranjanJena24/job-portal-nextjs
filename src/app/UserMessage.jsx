"use client"
import { getUser } from '@/redux/action/user';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

const UserMessage = () => {
  const dispatch = useDispatch(); // Initialize dispatch
  const { error, message } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      toast.error("Uh oh! Something went wrong.", {
        description: error,
        action: {
          label: "Try again",
          onClick: () => console.log("Retry logic here"),
        },
      });
    }
    if (message) {
      toast.success(message);
    }
  }, [error, message, dispatch]);

  useEffect(() => {
    dispatch(getUser());
  }, []);
  return null;
}

export default UserMessage