export default async function EditCourse(){
    return(
        <>
        <h1>Editar Curso</h1>
        <form action="">
                <input type="text" name="name" placeholder="Digite o nome do Curso" />
                <input type="text" name="descricao" placeholder="Digite a Descrição do Curso" />
                <button type="submit" className="bg-slate-600 text-white px-3 py-2 rounded-sm">Salvar</button>
                <button type="submit" className="bg-red-600 text-white px-3 py-2 rounded-sm">Excluir</button>
        </form>
        </>
    )
}