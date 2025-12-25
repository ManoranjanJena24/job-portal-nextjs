import { connectDb } from "@/connectDb";
import { NextResponse } from "next/server";
import { User } from "../../../../../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// export async function POST(request) {
//   try {
//     await connectDb();

//     // const formdata = await request.formData();
//     // const email = formdata.get("email");
//     // const password = formdata.get("password");

//     // if (!email || !password) {
//     //   return NextResponse.json(
//     //     { message: "Email and password are required" },
//     //     { status: 400 }
//     //   );
//     // }

//     const body = await request.json()

//     const [email , password] = body

//     const user = await User.findOne({ email });

//     if (!user) {
//       return NextResponse.json(
//         { message: "Invalid email or password" },
//         { status: 401 }
//       );
//     }

//     const isPasswordMatch = await bcrypt.compare(password, user.password);

//     if (!isPasswordMatch) {
//       return NextResponse.json(
//         { message: "Invalid email or password" },
//         { status: 401 }
//       );
//     }

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SEC, {
//       expiresIn: "5d",
//     });

//     return NextResponse.json(
//       {
//         message: `Login successful!! welcome back ${user.name}`,
//         user,
//         token,
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("LOGIN error:", error);
//     return NextResponse.json(
//       { message: "Something went wrong" },
//       { status: 500 }
//     );
//   }
// }






export async function POST(request) {
  try {
    await connectDb();

    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SEC, {
      expiresIn: "5d",
    });

    return NextResponse.json(
      {
        message: `Login successful! Welcome back ${user.name}`,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
        token,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("LOGIN error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

