const pool = require('../db') 

const getAllPreguntas=async(req,res,next)=>{
    try {
        const result = await pool.query('SELECT * FROM public."preguntas"')
        res.json(result.rows)
    } catch (error) {
        next(error)
    }
}

const getOnePreguntas=async(req,res,next)=>{
    try {
        const {id}= req.params
        const result = await pool.query('SELECT * FROM public."preguntas" WHERE id_pregunta =$1',[id])
        if(result.rows.length===0)return res.status(404).json({
            message:'el estudiante no existe o no cuenta con un grado asignado'
         })
          
         
         res.json(result.rows)
    } catch (error) {
        next(error)
    }
}

const postOnePreguntas=async(req,res,next)=>{
    try {
        const {
            id_pregunta,
            text_pregunta,
            dificultad_pregunta,
            tipo,
            puntaje_pregunta,
            link_foto_pregunta
        } = req.body
        const result = await pool.query('INSERT INTO public."preguntas" (id_pregunta,text_pregunta,dificultad_pregunta,tipo,puntaje_pregunta,link_foto_pregunta) VALUES($1,$2,$3,$4,$5,$6);',
        [
            id_pregunta,
            text_pregunta,
            dificultad_pregunta,
            tipo,
            puntaje_pregunta,
            link_foto_pregunta 
        ])
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}

const putOnePreguntas=async(req,res,next)=>{
    try {
        const {id}=req.params
        const {
            text_pregunta,
            dificultad_pregunta,
            tipo,
            puntaje_pregunta,
            link_foto_pregunta}= req.body
        const result = await pool.query('UPDATE public."preguntas" SET text_pregunta =$1, dificultad_pregunta =$2, tipo=$3,puntaje_pregunta=$4,link_foto_pregunta=$5 WHERE id_pregunta=$6 RETURNING *',
        [
            text_pregunta,
            dificultad_pregunta,
            tipo,
            puntaje_pregunta,
            link_foto_pregunta,
            id
        ])
        if(result.rows.length===0)return res.status(404).json({
            message:'la pregunta no existe'
         })
          
         
         res.json(result.rows)

    } catch (error) {
        
    }
}

const deleteOnePreguntas=async(req,res,next)=>{
    try {
        const {id}= req.params
        const result = await pool.query('DELETE FROM public."preguntas" WHERE id_preguntas=$',[id])
        if(result.rows.length===0)return res.status(404).json({
            message:'el curso o el estudiante no existe'
         })
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}




module.exports={
    getAllPreguntas,
    getOnePreguntas,
    postOnePreguntas,
    putOnePreguntas,
    deleteOnePreguntas
}