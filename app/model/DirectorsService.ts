import { sql } from "@vercel/postgres";

export async  function getAllDirector(){
    const { rows:directors } = await sql`SELECT * from director`   
    return directors
}

export async function addDirector(name:string, email: string){
    await sql`INSERT INTO director (name, email) VALUES (${name}, ${email})`;
}