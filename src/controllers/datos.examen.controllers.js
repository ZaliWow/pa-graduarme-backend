const pool = require('../db') 



const getAllExamen =async(req,res,next)=>{
    try {
        const result = await pool.query('SELECT * FROM public."datos_examen"')
        res.json(result.rows)
    } catch (error) {
        next(error)
    }
}
const getOneExamen =async(req,res,next)=>{
    try {
        const {id} = req.params
        const result = await pool.query('SELECT * FROM public."datos_examen" WHERE id_examen =$1',[id])
        if(result.rows.length===0) return res.status(404).json({
            message:'examen no encontrado'
         })
         res.json(result.rows)
    } catch (error) {
        next(error)
        
    }
}
const postOneExamen =async(req,res,next)=>{
    try {
        const {
            id_examen,
            fecha_examen,
            id_estudiante
        }= req.body
        const result = await pool.query('INSERT INTO public."datos_examen"(id_examen, fecha_examen, id_estudiante) VALUES ($1,$2,$3);',
        [
            id_examen,
            fecha_examen,
            id_estudiante
        ])
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }

}

const deleteOneExamen =async(req,res,next)=>{
    try {
        const {id}= req.params
        const result =  await pool.query('DELETE FROM public."datos_examen" WHERE id_examen = $1',[id])
    
        if(result.rows.length===0)return res.status(404).json({
            message:'el examen ya no existe'
         })
          
         
         res.json(result.rows)
        } catch (error) {
            next(error)
        }
}

const getExamenOneEstudiante =async(req,res,next)=>{
    try {
        const {id} = req.params
        const result = await pool.query('SELECT * FROM public."datos_examen" WHERE id_estudiante =$1',[id])
        if(result.rows.length===0) return res.status(404).json({
            message:'examen no encontrado'
         })
         res.json(result.rows)
    } catch (error) {
        next(error)
        
    }
}

module.exports={
    getAllExamen,
    getOneExamen,
    postOneExamen,
    getExamenOneEstudiante,
    deleteOneExamen

}