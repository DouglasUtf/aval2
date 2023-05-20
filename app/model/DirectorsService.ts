import { sql } from "@vercel/postgres";

export async  function getAllDirector(){
    const { rows:directors } = await sql`SELECT * from director`   
    return directors
}