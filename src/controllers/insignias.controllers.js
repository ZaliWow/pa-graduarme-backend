const pool = require('../db') 


const getAllinsignia=async(req,res,next)=>{
    try {
        const result = await pool.query('SELECT * FROM public."Insignias"')
        res.json(result.rows)
    } catch (error) {
        next(error)
    }
}
const getOneinsignia=async(req,res,next)=>{
    try {
        const {id }= req.params
        const result = await pool.query('SELECT * FROM public."Insignias" WHERE id_insignia =$1',[id])
        if(result.rows.length===0) return res.status(404).json({
            message:'pregunta F/v no encontrado'
         })
         res.json(result.rows)
    } catch (error) {
        next(error)
    }

}
const postOneinsignia=async(req,res,next)=>{

    try {
        const {
            id_insignia,
            descripcion,
            forma_ganar
        } = req.body
    
        const result = await pool.query('INSERT INTO public."Insignias" (id_insignia, descripcion, forma_ganar)VALUES ($1,$2,$3);',
        [
            id_insignia,
            descripcion,
            forma_ganar 
        ])
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
    
   



}
const putOneinsignia=async(req,res,next)=>{
    try {
        const {id} = req.params
    const {
        descripcion,
        forma_ganar
    }=req.body
    const result = await pool.query('UPDATE public."Insignias" SET descripcion=$1, forma_ganar=$2 WHERE id_insignia=$3 RETURNING *',
    [   
        descripcion,
        forma_ganar,
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
const deleteOneinsignia=async(req,res,next)=>{
    try {
        const {id}= req.params
        const result =  await pool.query('DELETE FROM public."Insignias" WHERE id_insignia = $1',[id])
    
        if(result.rows.length===0)return res.status(404).json({
            message:'la relacion ya no existe'
         })
          
         
         res.json(result.rows)
        } catch (error) {
            next(error)
        }

}


module.exports={
    getAllinsignia,
    getOneinsignia,
    postOneinsignia,
    putOneinsignia,
    deleteOneinsignia
}