const pool = require('../db') 
//CONSULTAR TODOS LOS ESTUDIANTES
const getAllStudents =async(req,res,next)=>{
   try {
      const result = await pool.query('SELECT * FROM public."Estudiante"')
      res.json(result.rows)
   } catch (error) {
      next(error)
   }
    
 }
const getOneStudent= async(req,res,next)=>{
   
   try {
      const {id} = req.params
      const result =await pool.query('SELECT * FROM public."Estudiante" WHERE id_estudiante= $1',[id])
      if(result.rows.length===0) return res.status(404).json({
         message:'alumno no encontrado'
      })
      res.json(result.rows)
      } catch (error) {
         next(error) 
      }
}
//CREAR UN ESTUDIANTE
const postOneStudent = async(req,res,next)=>{
   try {
      const {
         id_estudiante,
         nombre_estudiante,
         apellido_estudiante,
         correo_estudiante,
         contra_estudiante
   
      } = req.body
      const result = await pool.query('INSERT INTO public."Estudiante"(id_estudiante, nombre_estudiante, apellido_estudiante, correo_estudiante, contra_estudiante) VALUES ($1,$2,$3,$4,$5);',
      [
         id_estudiante,
         nombre_estudiante,
         apellido_estudiante,
         correo_estudiante,
         contra_estudiante
      ]);
     res.json(result.rows[0]);
   } catch (error) {
      next(error)
   }
}
//BORRAR UN ESTUDIANTE
const deleteOneStudent = async(req,res,next)=>{
   try {
      const {id}=req.params
      const result = await pool.query('DELETE  FROM public."Estudiante" WHERE id_estudiante = $1',[id])
      
      if (result.rowCount===0)return res.status(404).json({
         message:'No se ha encontrado el alumno'
      });
      res.sendStatus(204);
   } catch (error) {
      next(error)
   }
}
//ACTUALIZAR UN ESTUDIANTE
const putOneStudent= async (req,res,next)=>{
 try {
   const {id}=req.params
   const{nombre_estudiante,apellido_estudiante,correo_estudiante}=req.body
   const result = await pool.query(
      'UPDATE public."Estudiante" SET nombre_estudiante=$1, apellido_estudiante=$2, correo_estudiante=$3 WHERE id_estudiante =$4 RETURNING *' ,
   [nombre_estudiante,
   apellido_estudiante,
   correo_estudiante,
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
const getLoguinStudent= async (req,res,next)=>{
   try {
      const{correo_estudiante}=req.params
      const result =await pool.query('SELECT * FROM public."Estudiante" WHERE correo_estudiante= $1',[correo_estudiante])
      if(result.rows.length===0) return res.status(404).json({
         message:'alumno no encontrado'
      })
      res.send('logueando un estudiante')

   } catch (error) {
      next(error)
   }
  
}
  

 module.exports={
    getAllStudents,
    getOneStudent,
    postOneStudent,
    deleteOneStudent, 
    putOneStudent,
    getLoguinStudent
 }