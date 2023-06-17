import { getAllCourse } from "@/app/model/CourseService";

export default async function CoursePage(){
     const courses = await getAllCourse();


    return (
        <>
         <h1> Lista de Cursos</h1>
         <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                {courses.map(course => (  

                <tr key={course.id}> <td>{course.name}</td> <td>{course.description}</td> <td><a href="/admin/course/edit">Editar</a></td> </tr>

                ))}
            </tbody>
         </table>
        </>

    )
}