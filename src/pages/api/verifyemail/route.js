import connectDB from "@/lib/db";
import { NextRequest,NextResponse } from "next/server";
import Users from "@/models/Users";


    connectDB();
    

export async function POST (NextRequest){
    try {
        const reqBody = await NextRequest.json()
        const {token} = reqBody
        console.log(token);

       const user =  Users.findOne({verifyToken:token,verifyTokenExpiry:{$gt:Date.now()}})
       if(!user) {
        return NextResponse.json({error:"No User Found"},{status:400})

       }
       console.log(user)
       user.isVerified = true
       user.verifyToken = undefined
       user.verifyTokenExpiry = undefined
       await user.save();
    } catch (error) {
        return NextResponse.error({error:error.message},{status:500});
        
    }
}