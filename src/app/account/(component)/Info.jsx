"use client"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { updatePhoto } from '@/redux/action/user'
import { Edit, Mail, NotepadText, Phone } from 'lucide-react'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'


const Info = ({user , btnLoading}) => {
    const inputRef = useRef()
    const handleClick =()=>{
        inputRef.current.click();
    }


    const [name , setName]=useState("")
    const [phoneNumber , setPhoneNumber]=useState("")
    const [bio , setBio]=useState("")

    const editRef = useRef()
    const handleEditClick = ()=>{
        editRef.current.click()
        setName(user.name)
        setPhoneNumber(user.phoneNumber)
        setBio(user.bio)
    }

    const dispatch = useDispatch()

    const changeHandler=(e)=>{
      const file = e.target.files[0]
      if(file){
        const formdata = new FormData()
        formdata.append("profilePic",file)
        dispatch(updatePhoto(formdata))

      }
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
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="right">
          <div className="name flex items-center gap-4">
            <p className="text-2xl">{user.name}</p>
            <Button variant="link" onClick={handleEditClick}>
              <Edit size={18} />
            </Button>
          </div>
          <br />
          {user.role === "jobseeker" && <p>Bio:{user.bio}</p>}
          <br />
          <h2 className="text-xl text-blue-600">Contact Info</h2>
          <div className="contact flex items-center gap-4 flex-wrap">
            <p className="text-xl flex items-center gap-2">
              <Mail /> {user.email}
            </p>
            <p className="text-xl flex items-center gap-2">
              <Phone /> {user.phoneNumber}
            </p>
          </div>
          {user.role === "jobseeker" && (
            <div className="resume mt-5">
              <p className="flex items-center gap-2">
                Resume -{" "}
                <Link
                  href={user.resume}
                  className="flex items-center text-blue-500 underline"
                  target="_blank"
                >
                  <NotepadText />
                </Link>
              </p>
            </div>
          )}
        </div>
      </Card>

      {/* Dialog */}

      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button ref={editRef} variant="outline" className="hidden">
              Edit Profile
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="phone">PhoneNumber</Label>
                <Input
                  id="phone"
                  type="number"
                  className="col-span-3"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="bio">Bio</Label>
                <Input
                  id="bio"
                  type="text"
                  className="col-span-3"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}

export default Info