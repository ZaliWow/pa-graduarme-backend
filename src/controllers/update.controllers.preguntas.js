const pool = require('../db') 


const getAllpreguntasFalsoVerdadero=async(req,res,next)=>{
    try {
        const {dif} = req.params
        const result = await pool.query('SELECT *  FROM public."preguntas" p INNER JOIN public."pregunta_falso_verdadero" pfv ON p.id_pregunta = pfv.id_pregunta_falso_verdadero WHERE p.dificultad_pregunta = $1',[dif])
        res.json(result.rows)
    } catch (error) {
     next(error)   
    }
}
const getAllpreguntasMultiples=async(req,res,next)=>{
    try {
        const {dif} = req.params
        const result = await pool.query('SELECT * FROM public."preguntas" p INNER JOIN public."pregunta_multiple" pm ON p.id_pregunta = pm.id_multiple WHERE p.dificultad_pregunta = $1 ',[dif])
        res.json(result.rows)
    } catch (error) {
     next(error)   
    }
}

const getAllpreguntasAbiertas=async(req,res,next)=>{
    try {
        const {dif} = req.params
        const result = await pool.query('SELECT * FROM public."preguntas" p  INNER JOIN public."pregunta_abierta" pa ON p.id_pregunta = pa.id_abierta WHERE p.dificultad_pregunta = $1 ',[dif])    
        res.json(result.rows)
    } catch (error) {
        next(error)
    } 
}

const updateFV =async(req,res,next)=>{
    try {
        const {id}=req.params
        const {respuesta_correcta}= req.body
        const result = await pool.query('UPDATE  public.pregunta_falso_verdadero SET respuesta_correcta=$1 WHERE id_pregunta_falso_verdadero=$2 RETURNING *',[respuesta_correcta, id])
        if(result.rows.length===0)return res.status(404).json({
            message:'la pregunta no existe'
         })
         res.json(result.rows)
    } catch (error) {
        next(error)
    }
}
const updateMultiple=async(req,res,next)=>{
try {
    const{id}=req.params
    const {
        opcion_a,
        opcion_b,
        opcion_c,
        opcion_d,
        respuesta_correcta
    }=req.body
    const result = await pool.query('UPDATE public."pregunta_multiple" SET opcion_a=$1, opcion_b=$2, opcion_c=$3, opcion_d=$4, respuesta_correcta=$5 WHERE id_multiple=$6 RETURNING *',
    [
        opcion_a,
        opcion_b,
        opcion_c,
        opcion_d,
        respuesta_correcta,
        id 
    ])
    if(result.rows.length===0)return res.status(404).json({
        message:'la pregunta no existe'
     })
     res.json(result.rows)
} catch (error) {
    next(error)
}
}
const obtenermultiples=async(req,res,next)=>{
    try {
       
        const result = await pool.query('SELECT * FROM public."pregunta_multiple" ')
        res.json(result.rows)
    } catch (error) {
        next(error)
    }
}
const obtenerabierta=async(req,res,next)=>{
    try {
        const {id}=req.params
        const result = await pool.query('SELECT * FROM public."pregunta_abierta" WHERE id_abierta=$1 ',[id])
        res.json(result.rows)
    } catch (error) {
        next(error)
    }
}


const updateAbierta =async(req,res,next)=>{
    try {
        const {id}=req.params
        const {respuesta_correcta}= req.body
        const result = await pool.query('UPDATE  public."pregunta_abierta" SET respuesta_correcta=$1 WHERE id_abierta=$2 RETURNING *',[respuesta_correcta, id])
        if(result.rows.length===0)return res.status(404).json({
            message:'la pregunta no existe'
         })
         res.json(result.rows)
    } catch (error) {
        next(error)
    }
}
module.exports={
getAllpreguntasFalsoVerdadero,
getAllpreguntasMultiples,
getAllpreguntasAbiertas,
updateFV,
obtenermultiples,
updateMultiple,
obtenerabierta,
updateAbierta


}