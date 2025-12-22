import { NextResponse } from "next/server";

// export async function GET(){
//     return NextResponse.json({
//         message:"Hello server is working"
//     })
// }


// ================================================================== 


// export async function GET(){
//     return NextResponse.json({
//         message:"Hello server is working"
//     },{status: 201})
// }



// =========================================================================
// HOW TO TAKE DATA FROM USERS 
// ========================================================================================= 


export async function POST(request) {
    const body = await request.json();
    const {email , name} = body
  return NextResponse.json(
    {
     email  
    },
    { status: 201 }
  );
}