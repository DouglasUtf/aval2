import { NextResponse } from "next/server"
import { deleteDirector, getDirectorById, updateDirectorById} from "@/app/model/DirectorsService"


export async function DELETE (request:Request, {params}:any){
    console.log(params.id)
    deleteDirector(params.id)
    return NextResponse.json({sucess:"ok"})
}
export async function GET (request:Request, {params}:any){
    const director = await getDirectorById(params.id)
    return NextResponse.json(director)
}
export async function PUT (request: Request, {params}:any){
    
    try {
        const director= await request.json()
        await updateDirectorById(params.id, director.name, director.email)
        return NextResponse.json(director)
    } catch (error) {
        console.log("PUT" + error)
    }
}