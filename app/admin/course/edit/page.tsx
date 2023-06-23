import { deleteCourseById, getCourseById, updateCourseById } from "@/app/model/CourseService";
import {redirect} from 'next/navigation'

export default async function EditCourse(params:any){
    const id = params.searchParams.id;
    const course = await getCourseById(id)

    async function deleteCourse(){
        'use server';
        await deleteCourseById(id)
        redirect('/admin/course')
    }
    async function updateCourse(formData: FormData){
        'use server'
        const name = formData.get("name") as string;
        const description = formData.get("description") as string;
        await updateCourseById(id, name, description)
        redirect('/admin/course')
    }


    return(
        <>
        <h1>Editar Curso</h1>
        <form action="">
               <input type="text" name="name" defaultValue={course.name} placeholder="Digite o nome do Curso" />
                <input type="text" name="description" defaultValue={course.description}  placeholder="Digite o Descrição do Curso" />
                <button formAction={updateCourse} className="bg-slate-600 text-white px-3 py-2 rounded-sm">Salvar</button>
                <button formAction={deleteCourse} className="bg-red-600 text-white px-3 py-2 rounded-sm">Excluir</button>
        </form>
        </>
    )
}