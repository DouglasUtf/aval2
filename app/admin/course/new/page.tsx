import { addCourse } from "@/app/model/CourseService"


export default function NewCourses() {
    async function saveCourse(formData: FormData){
        'use server'
        const name = formData.get("name") as string
        const description = formData.get("description") as string
        await addCourse(name, description)
    }
    
    return (
        <>
            <h1 className="bg-slate-600 md:bg-red-700 xl:bg-green-600">Cadastro de Cursos</h1>
            <form action={saveCourse}>
                <input type="text" name="name" placeholder="Digite o nome do Curso" />
                <input type="text" name="description" placeholder="Digite o Descrição do Curso" />
                <button type="submit" className="bg-slate-600 text-white px-3 py-2 rounded-sm">Salvar</button>
            </form>
        </>

    )
}