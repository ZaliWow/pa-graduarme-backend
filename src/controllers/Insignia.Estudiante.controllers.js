const pool = require('../db') 

const getAllInsigniaEstudiante = async(req,res,next)=>{
    try {
        const result = await pool.query('SELECT * FROM public."Registro_insignias"')
        res.json(result.rows)
    } catch (error) {
        next(error) 
    }
}
const getAllInsigniaOneEstudiante = async(req,res,next)=>{
    try {
        const {id} = req.params
        const result = await pool.query('SELECT * FROM public."Registro_insignias" WHERE id_estudiante =$1',[id])
        if(result.rows.length===0) return res.status(404).json({
            message:'estudiante  no encontrado'
         })
         res.json(result.rows)
    } catch (error) {
        next(error)
        
    }
    
}
const postOneInsigniaOneEstudiante = async(req,res,next)=>{
    try {
        const {
            id_registro,
            id_insignia,
            id_estudiante
        }= req.body
        const result = await pool.query('INSERT INTO public."Registro_insignias" (id_registro,id_insignia,id_estudiante) VALUES ($1,$2,$3);',
        [
            id_registro,
            id_insignia,
            id_estudiante
        ] )
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
    
}
const putOneInsnigniaOneEstudiante = async(req,res,next)=>{
    try {
        const {id} = req.params
    const {id_insignia}= req.body
    const result = await pool.query('UPDATE public."Registro_insignias" SET id_insignia=$1 WHERE id_registro=$2 RETURNING *',
    [
        id_insignia,
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
const deleteOneInsigniaOneEstudiante = async(req,res,next)=>{
    try {
        const {id}= req.params
        const result =  await pool.query('DELETE FROM public."Registro_insignias" WHERE id_registro = $1',[id])
    
        if(result.rows.length===0)return res.status(404).json({
            message:'la insignia ya no existe'
         })
          
         
         res.json(result.rows)
        } catch (error) {
            next(error)
        }
}


module.exports={
    getAllInsigniaEstudiante,
    getAllInsigniaOneEstudiante,
    postOneInsigniaOneEstudiante,
    deleteOneInsigniaOneEstudiante,
    putOneInsnigniaOneEstudiante
}