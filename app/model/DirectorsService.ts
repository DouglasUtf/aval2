import { sql } from "@vercel/postgres";

export async  function getAllDirector(){
    const { rows:directors } = await sql`SELECT * from director`   
    return directors
}

export async function addDirector(name:string, email: string){
    await sql`INSERT INTO director (name, email) VALUES (${name}, ${email})`;
}

export async function deleteDirector(id:string){
    await sql`DELETE FROM director WHERE id=${id}`;
}

export async function getDirectorById(id:string){
    const {rows: directors} = await sql`SELECT * FROM director WHERE id= ${id}`;
    return directors[0]
}

export async function updateDirectorById(id: string, name:string, email: string){
   await sql`UPDATE director SET name=${name}, email=${email} WHERE id=${id}`
}
