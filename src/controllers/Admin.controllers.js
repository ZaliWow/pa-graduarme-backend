const pool = require('../db') 
//CONSULTAR  ADMINs
const getAllAdmin =async(req,res,next)=>{
    try {
        const result = await pool.query('SELECT * FROM public."Admin"')
        res.json(result.rows)
     } catch (error) {
        next(error)
     }
}
//CREAR UN ADMIN
const postOneAdmin = async(req,res,next)=>{
    try {
        const{id_admin,
            nombre_admin,
            apellido_admin,
            correo_admin,
            contra_admin
        } = req.body
        const result = await pool.query('INSERT INTO public."Admin"(id_admin, nombre_admin, apellido_admin, correo_admin, contra_admin) VALUES ($1,$2,$3,$4,$5);',
        [
            id_admin,
            nombre_admin,
            apellido_admin,
            correo_admin,
            contra_admin
        ]);
        res.json(result.rows[0]);


    } catch (error) {
        next(error)
    }
}
//ELIMINAR UN ADMIN
const deleteAdmin =async(req,res,next)=>{

    try {
        const {id}= req.params
        const result = await pool.query('DELETE FROM public."Admin" WHERE id_admin = $1',[id])
        if (result.rowCount===0)return res.status(404).json({
            message:'No se ha encontrado el alumno'
         });
         res.sendStatus(204);
    } catch (error) {
        next(error)
    }
}
// CONSULTAR UN ADMIN
const getOneAdmin=async(req,res,next)=>{
    try {
        const {id} = req.params
        const result = await pool.query('SELECT * FROM public."Admin" WHERE id_admin = $1',[id])
        
        if(result.rows.length===0) return res.status(404).json({
            message:'admin no encontrado'
         })
         res.json(result.rows)
         
         
    } catch (error) {
        next(error)
    }
}
module.exports={
    getAllAdmin,
    postOneAdmin,
    deleteAdmin,
    getOneAdmin

}