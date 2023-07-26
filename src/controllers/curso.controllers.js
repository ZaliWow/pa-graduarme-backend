const pool = require('../db') 
//CONSULTAR TODOS LOS CURSOS
const getAllCurso=async(req,res,next)=>{
    try {
        const result = await pool.query('SELECT * FROM public."Curso"')
        res.json(result.rows)
    } catch (error) {
        next(error)
    }
}
//CONSULTAR UN CURSO
const getOneCurso=async(req,res,next)=>{
    try {
        const {id} = req.params
        const result = await pool.query('SELECT * FROM public."Curso" WHERE id_curso =$1', [id])
        if(result.rows.length===0) return res.status(404).json({
            message:'curso no encontrado'
         })
         res.json(result.rows)
    } catch (error) {
        next(error)
    }
}
//CREAR UN CURSO
const postOneCurso=async(req,res,next)=>{
    try {
        const {
            id_curso,
            nombre_grado,
            descripcion_grado,
            id_profesor
        } = req.body
        const result = await pool.query('INSERT INTO public."Curso" (id_curso, nombre_grado, descripcion_grado, id_profesor) VALUES($1,$2,$3,$4);',
        [
            id_curso,
            nombre_grado,
            descripcion_grado,
            id_profesor
        ] )
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}
//EDITAR UN CURSO
const putOneCurso=async(req,res,next)=>{
    try {
        const {id} = req.params
        const {
            nombre_grado,
            descripcion_grado,
            id_profesor}= req.body
        const result = await pool.query('UPDATE public."Curso" SET nombre_grado=$1 , descripcion_grado=$2,id_profesor=$3 WHERE id_curso=$4 RETURNING *',
        [
            nombre_grado,
            descripcion_grado,
            id_profesor,
            id
        ])
        if(result.rows.length===0)return res.status(404).json({
            message:'el estudiante no existe'
         })
          
         
         res.json(result.rows)
    } catch (error) {
        next(error)
    }
}
//BORRAR UN CURSO
const deleteOneCurso=async(req,res,next)=>{
    try {
        const {id} =req.params
        const result = await pool.query('DELETE FROM public."Curso" WHERE id_curso =$1',[id])
        if (result.rowCount===0)return res.status(404).json({
            message:'No se ha encontrado el alumno'
         });
         res.sendStatus(204);
    } catch (error) {
        next(error)
    }
}

module.exports={
    getAllCurso,
    getOneCurso,
    postOneCurso,
    deleteOneCurso,
    putOneCurso
}