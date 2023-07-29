const pool = require('../db') 

const getAllCursoEstudiante=async(req,res,next)=>{

    try {
        const result = await pool.query('SELECT * FROM public."Grado_estudiante"')
        res.json(result.rows)
    } catch (error) {
        next(error)
    }

}

const getOneCursoEstudiante=async(req,res,next)=>{

    try {
        const {id} = req.params
        const result = await pool.query('SELECT * FROM public."Grado_estudiante" WHERE id_estudiante = $1',[id])
        if(result.rows.length===0)return res.status(404).json({
            message:'el estudiante no existe o no cuenta con un grado asignado'
         })
          
         
         res.json(result.rows)

    } catch (error) {
        next(error)
    }
   
}

const putOneCursoEstudiante=async(req,res,next)=>{
    try {
        const {id} = req.params
        const {
            id_curso
        }= req.body
        const result = await pool.query('UPDATE public."Grado_estudiante" SET id_curso=$1 WHERE id_estudiante =$2 RETURNING *', 
        [
            id_curso,
            id
        ])
        if(result.rows.length===0)return res.status(404).json({
            message:'el curso no existe'
         })
          
         
         res.json(result.rows)
    } catch (error) {
        next(error)
    }
   
}

const postOneCursoEstudiante=async(req,res,next)=>{

    try {
        const {
            id_relacion_g_e_p,
            id_estudiante,
            id_curso
        } = req.body
        const result = await pool.query('INSERT INTO public."Grado_estudiante"(id_relacion_g_e_p, id_estudiante, id_curso) VALUES ($1,$2,$3);',
        [
            id_relacion_g_e_p,
            id_estudiante,
            id_curso
        ])
        
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
    
}

const deleteCursoEstudiante=async(req,res,next)=>{
    try {
        const {id} = req.params
    const result = await pool.query('DELETE FROM public."Grado_estudiante" WHERE id_estudiante=$1',[id])
    if(result.rows.length===0)return res.status(404).json({
        message:'el curso o el estudiante no existe'
     })
    res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
    
}


module.exports={getAllCursoEstudiante,
    getOneCursoEstudiante,
    putOneCursoEstudiante,
    postOneCursoEstudiante,
    deleteCursoEstudiante}