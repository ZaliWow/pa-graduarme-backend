const pool = require('../db') 

const getAllPreguntasExamen  =async(req,res,next)=>{
    try {
        const result = await pool.query('SELECT * FROM public."Examen"')
        res.json(result.rows)
    } catch (error) {
        next(error) 
    }
}
const postOnePreguntasExamen =async(req,res,next)=>{
    try {
        const {
            id_registro_examen,
            id_pregunta,
            id_examen,
            respuesta_estudiante
        }= req.body
        const result = await pool.query('INSERT INTO public."Examen"(id_registro_examen, id_pregunta, id_examen, respuesta_estudiante) VALUES ($1,$2,$3,$4);',
        [
            id_registro_examen,
            id_pregunta,
            id_examen,
            respuesta_estudiante
 
        ])
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}
//AQUI LAS PREGUNTAS DEL EXAMEN
const getAllPreguntasOneExamen = async(req,res,next)=>{
    try {
        const {id} = req.params
        const result = await pool.query('SELECT * FROM public."Examen" WHERE id_examen =$1',[id])
        if(result.rows.length===0) return res.status(404).json({
            message:'preguntas examen no encontrado'
         })
         res.json(result.rows)
    } catch (error) {
        next(error)
        
    }
}
const getAllInfoPreguntasOneExamen = async(req,res,next)=>{
    try {
        const {id} = req.params
        const result = await pool.query('SELECT * FROM public."Examen"  exam INNER JOIN public."datos_examen"  datos ON exam.id_examen = datos.id_examen INNER JOIN public."preguntas" pregun ON pregun.id_pregunta = exam.id_pregunta WHERE exam.id_examen = $1',[id] )
        if(result.rows.length===0) return res.status(404).json({
            message:'preguntas examen no encontrado'
         })
        res.json(result.rows)
    } catch (error) {
        next(error)
    }
}





module.exports={
    getAllPreguntasExamen,
    postOnePreguntasExamen,
    getAllPreguntasOneExamen,
    getAllInfoPreguntasOneExamen

}