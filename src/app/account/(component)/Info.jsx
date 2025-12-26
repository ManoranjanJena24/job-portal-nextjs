"use client"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Edit, Mail, NotepadText, Phone } from 'lucide-react'
import Link from 'next/link'
import React, { useRef } from 'react'


const Info = ({user , btnLoading}) => {
    const inputRef = useRef()
    const handleClick =()=>{
        inputRef.current.click();
    }
   
  return (
    <div>
      <Card className="w-full shadow-sm mt-3 py-3 md:px-10 flex flex-col md:flex-row gap-8 items-start">
        <div className="left">
          <div className="image flex items-center">
            <img
              src={user.profilePic}
              alt=""
              className="w-[200px] h-[200px] rounded-full"
            />
            <Button variant="link" onClick={handleClick}>
              <Edit size={18} />
            </Button>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              ref={inputRef}
            />
          </div>
        </div>
        <div className="right">
          <div className="name flex items-center gap-4">
            <p className="text-2xl">{user.name}</p>
            <Button variant="link">
              <Edit size={18} />
            </Button>
          </div>
          <br />
          {user.role === "jobseeker" && <p>Bio:{user.bio}</p>}
          <br />
          <h2 className='text-xl text-blue-600'>Contact Info</h2>
          <div className="contact flex items-center gap-4 flex-wrap">
            <p className='text-xl flex items-center gap-2'>
                <Mail/> {user.email}
            </p>
            <p className='text-xl flex items-center gap-2'>
                <Phone/> {user.phoneNumber}
            </p>

          </div>
          {
            user.role ==="jobseeker" && <div className='resume mt-5'>
                <p className="flex items-center gap-2">
                    Resume - <Link href={user.resume} className='flex items-center text-blue-500 underline' target="_blank"><NotepadText/></Link>
                </p>
            </div>
          }
        </div>
      </Card>
    </div>
  );
}

export default Info