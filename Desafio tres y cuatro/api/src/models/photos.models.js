import pool from '../../database/config.js'

export const obtenerPostsModel = async () => {
    const SQLquery = {text: 'SELECT * from posts'};

    try{
        const result = await pool.query(SQLquery)
        console.log(result.rows);
        return result.rows;
    } catch(error){
        console.error(error);
    }   
};

export const crearPostModel = async ({id, titulo, img, descripcion}) => {
    const SQLquery = {
        text: 'INSERT INTO posts (id, titulo, img, descripcion) VALUES (DEFAULT, $1, $2, $3) RETURNING *',
        values: [titulo, img, descripcion]
    }
    try{
        const result = await pool.query(SQLquery);
        return result.rows[0];
    } catch(error){
        console.log(error);
    }
};

export const borrarPostModel = async (id) => {
    const SQLquery = {text: 'DELETE likes FROM posts WHERE id = $1'};
    const datos = [id];
    await pool.query(consulta, datos);
};


