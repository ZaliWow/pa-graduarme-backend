const pool = require('../db') 

const getAllFalsoVerdadero =async(req,res,next)=>{
    try {
        const result = pool.query('SELECT * FROM public."pregunta_falso_verdadero"')
        res.json(result)
    } catch (error) {
        next(error)
    }
}

const getOneFalsoVerdadero =async(req,res,next)=>{
    try {
        const {id} = req.params
        const result = await pool.query('SELECT * FROM public."pregunta_falso_verdadero" WHERE id_pregunta_falso_verdadero =$1',[id])
        if(result.rows.length===0) return res.status(404).json({
            message:'pregunta F/v no encontrado'
         })
         res.json(result.rows)
    } catch (error) {
        next(error)
        
    }
}

const postFalsoVerdadero =async(req,res,next)=>{
    try {
        const {
            id_pregunta_falso_verdadero,
            respuesta_correcta
        }= req.body
        const result = await pool.query('INSERT INTO public."pregunta_falso_verdadero"(id_pregunta_falso_verdadero, respuesta_correcta) VALUES ($1,$2);',
        [
            id_pregunta_falso_verdadero,
            respuesta_correcta  
        ])
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
    
}

const putFalsoVerdadero =async(req,res,next)=>{
    try {
        const {id} = req.params
    const {
        respuesta_correcta
    }=req.body
    const result = await pool.query('UPDATE public."pregunta_falso_verdadero" SET respuesta_correcta=$1 WHERE id_pregunta_falso_verdadero=$2 RETURNING *',
    [
        respuesta_correcta,
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

const deleteFalsoVerdadero =async(req,res,next)=>{
    try {
        const {id}= req.params
    const result =  await pool.query('DELETE FROM public."pregunta_falso_verdadero" WHERE id_pregunta_falso_verdadero = $1',[id])

    if(result.rows.length===0)return res.status(404).json({
        message:'la pregunta ya no existe'
     })
      
     
     res.json(result.rows)
    } catch (error) {
        next(error)
    }
    
}


module.exports={
    getAllFalsoVerdadero,
    getOneFalsoVerdadero,
    postFalsoVerdadero,
    putFalsoVerdadero,
    deleteFalsoVerdadero
}