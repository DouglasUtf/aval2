import { getAllDirector } from "@/app/model/DirectorsService"
import { NextResponse } from "next/server"

export async function GET(){
    console.log("acessou GET")
    const directors = await getAllDirector()
    return NextResponse.json(directors)
    
}