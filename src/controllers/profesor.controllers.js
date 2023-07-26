const pool = require('../db') 

const getAllProfesor =async(req,res,next)=>{
    try {
        const result = await pool.query('SELECT * FROM public."profesor"')
        res.json(result.rows)
    } catch (error) {
        next(error)
    }
}

const getOneProfesor =async(req,res,next)=>{
    try {
        const {id} = req.params
        const result = await pool.query('SELECT * FROM public."profesor" WHERE id_profesor = $1',[id])
        
        if(result.rows.length===0) return res.status(404).json({
            message:'profesor no encontrado'
         })
         res.json(result.rows)
    } catch (error) {
        next(error)
    }
}

const postOneProfesor =async(req,res,next)=>{
   try {
    const {
        id_profesor,
        nombre_profesor,
        apellido_profesor,
        correo_profesor,
        contra_profesor
    } = req.body
    const result = await pool.query('INSERT INTO public."profesor" (id_profesor,nombre_profesor,apellido_profesor,correo_profesor,contra_profesor) VALUES ($1,$2,$3,$4,$5);',
    [
        id_profesor,
        nombre_profesor,
        apellido_profesor,
        correo_profesor,
        contra_profesor 
    ])
    res.json(result.rows[0]);
   } catch (error) {
    next(error)
   }
}

const deleteOneProfesor =async(req,res,next)=>{
    try {
        const {id} =req.params
        const result = await pool.query('DELETE FROM public."profesor" WHERE id_profesor = $1',[id])

        if (result.rowCount===0)return res.status(404).json({
            message:'No se ha encontrado el profesor'
         });
         res.sendStatus(204);
    } catch (error) {
        next(error)
    }
}

const putOneProfesor =async(req,res,next)=>{
    try {
        const {id} = req.params
        const {
            nombre_profesor,
            apellido_profesor,
            correo_profesor,
            contra_profesor
        } = req.body
        const result = await pool.query('UPDATE public."profesor" SET nombre_profesor =$1, apellido_profesor =$2, correo_profesor =$3, contra_profesor =$4 WHERE id_profesor =$5 RETURNING *',
        [
            nombre_profesor,
            apellido_profesor,
            correo_profesor,
            contra_profesor,
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
module.exports={
    getAllProfesor,
    getOneProfesor,
    postOneProfesor,
    deleteOneProfesor,
    putOneProfesor
}