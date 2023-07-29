const pool = require('../db') 


const getAllAbierta =async(req,res,next)=>{
    try {
        const result = await pool.query('SELECT * FROM public."pregunta_abierta"')
        res.json(result.rows)
    } catch (error) {
        next(error)
    }

}


const getOneAbierta =async(req,res,next)=>{
    try {
        const {id} = req.params
        const result = await pool.query('SELECT * FROM public."pregunta_abierta" WHERE id_abierta =$1',[id])
        if(result.rows.length===0) return res.status(404).json({
            message:'respuesta de pregunta abierta no encontrado'
         })
         res.json(result.rows)
    } catch (error) {
        next(error)
    }
}

const postOneAbierta =async(req,res,next)=>{
    try {
        const {
            id_abierta,
            respuesta_correcta
        }= req.body
        const result = await pool.query('INSERT INTO public."pregunta_abierta"(id_abierta, respuesta_correcta) VALUES ($1,$2);',
        [
            id_abierta,
            respuesta_correcta  
        ])
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}

const putOneAbierta =async(req,res,next)=>{
    try {
        const {id} = req.params
    const {
        respuesta_correcta
    }=req.body
    const result = await pool.query('UPDATE public."pregunta_abierta" SET respuesta_correcta=$1 WHERE id_abierta=$2 RETURNING *',
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

const deleteOneabierta =async(req,res,next)=>{
    try {
        const {id}= req.params
    const result =  await pool.query('DELETE FROM public."pregunta_abierta" WHERE id_abierta= $1',[id])

    if(result.rows.length===0)return res.status(404).json({
        message:'la pregunta ya no existe'
     })
      
     
     res.json(result.rows)
    } catch (error) {
        next(error)
    }
}

module.exports={
    getAllAbierta,
    getOneAbierta,
    postOneAbierta,
    putOneAbierta,
    deleteOneabierta


}