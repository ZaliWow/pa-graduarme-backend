const pool = require('../db') 

const getAllMultiple =async(req,res,next)=>{
    try {
        const result = await pool.query('SELECT * FROM public."pregunta_multiple"')
        res.json(result.rows)
    } catch (error) {
        next(error)
    }

}

const getOneMultiple =async(req,res,next)=>{
    try {
        const {id }= req.params
        const result = await pool.query('SELECT * FROM public."pregunta_multiple" WHERE id_multiple =$1',[id])
        if(result.rows.length===0) return res.status(404).json({
            message:'insignia no encontrada'
         })
         res.json(result.rows)
    } catch (error) {
        next(error)
    }
}

const postOneMultiple =async(req,res,next)=>{
    try {
        const{
            id_multiple,
            opcion_a, 
            opcion_b,
            opcion_c, 
            opcion_d,  
            respuesta_correcta
        } = req.body
        const result = await pool.query('INSERT INTO public."pregunta_multiple" (id_multiple, opcion_a, opcion_b,opcion_c, opcion_d,  respuesta_correcta) VALUES ($1,$2,$3,$4,$5,$6);',
        [
            id_multiple,
            opcion_a, 
            opcion_b,
            opcion_c, 
            opcion_d,  
            respuesta_correcta
        ] )
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}

const putOneMultiple =async(req,res,next)=>{
    try {
        const {id} = req.params
        const{
            opcion_a, 
            opcion_b,
            opcion_c, 
            opcion_d,  
            respuesta_correcta}= req.body
        const result = await pool.query('UPDATE public."pregunta_multiple" SET opcion_a =$1, opcion_b =$2,opcion_c =$3, opcion_d =$4,  respuesta_correcta=$5 WHERE id_multiple=$6 RETURNING *',
        [
            opcion_a, 
            opcion_b,
            opcion_c, 
            opcion_d,  
            respuesta_correcta,
            id
          
        ])
        if(result.rows.length===0)return res.status(404).json({
            message:'la pregunta no existe no existe'
         })
          
         
         res.json(result.rows)
    } catch (error) {
        next(error)
    }
}

const deleteOneMultiple=async(req,res,next)=>{
    try {
        const {id}= req.params
        const result =  await pool.query('DELETE FROM public."pregunta_multiple" WHERE id_multiple = $1',[id])
    
        if(result.rows.length===0)return res.status(404).json({
            message:'la pregunta ya no existe'
         })
          
         
         res.json(result.rows)
    } catch (error) {
        next(error)
    }
}



module.exports={
    getAllMultiple,
    getOneMultiple,
    postOneMultiple,
    putOneMultiple,
    deleteOneMultiple
}