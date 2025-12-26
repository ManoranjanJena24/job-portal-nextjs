"use client"
import { redirect } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'
import Info from './(component)/Info'

const Account = () => {
    const {isAuth , user , btnLoading} = useSelector(state=>state.user)

    if (!isAuth) return  redirect("/login")

  return (
    <div>
        {
            user && (
                <div className="w-[90%] md:w-[60%] m-auto">
                    <Info user={user} btnLoading={btnLoading} />
                </div>
            )
        }
    </div>
  )
}

export default Account