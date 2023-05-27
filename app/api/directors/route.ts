import { getAllDirector, addDirector } from "@/app/model/DirectorsService"
import { NextResponse } from "next/server"

export async function GET(){
    const directors = await getAllDirector()
    return NextResponse.json(directors)
    
}



export async function POST(request: Request) {
    const director= await request.json()
    addDirector(director.name, director.email)
    return NextResponse.json({sucess:"ok"})
    
}

