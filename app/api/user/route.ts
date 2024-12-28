import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function POST(req :NextRequest){
    
    const body = await req.json();

    try{
        await client.user.create({
            data :{
                email :body.email,
                password : body.password
            }
        })

        return NextResponse.json({
          body
        })
    }
    catch(e){
        return NextResponse.json({
            message: "Error while signedup"
        },{
            status:411
        })
    }

   
}