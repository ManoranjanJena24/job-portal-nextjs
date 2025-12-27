import { connectDb } from "@/connectDb";
import { NextResponse } from "next/server";
import CheckAuth from "../../../../../../middlewares/isAuth";
import { User } from "../../../../../../models/User";
import uploadFile from "../../../../../../middlewares/upload";

export async function POST(req){
    try {
        await connectDb()
        const {searchParams} = new URL(req.url)
        const token = searchParams.get("token")
        const user = await CheckAuth(token)

        if (!user)
          return NextResponse.json(
            {
              message: "Please Login",
            },
            {
              status: 400,
            }
          );

          const loggedInUser = await User.findById(user._id)
          const formdata = await req.formData()
         
         const profilePic = formdata.get("profilePic");

         const profilePhoto = await uploadFile(profilePic);

         loggedInUser.profilePic = profilePhoto.url;
         await loggedInUser.save();

         return NextResponse.json({
            message:"Photo Updated"
         })

        
        
    } catch (error) {
        console.error("POST error:", error);
                      return NextResponse.json(
                        { message: "Something went wrong" },
                        { status: 500 }
                      );
    }
}