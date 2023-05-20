import { deleteDirector } from "@/app/model/DirectorsService"
import { NextResponse } from "next/server"

export async function DELETE (request:Request, {params}:any){

    console.log(params.id)
    deleteDirector(params.id)
    return NextResponse.json({sucess:"ok"})

}