import {React, useContext} from 'react'
import ComentariosContexto from '../contexto/ComentariosContexto';

const ComentarioStats = () => {

      const {comments} = useContext(ComentariosContexto)
      const comentario = comments
      const totalComentarios = comentario.length;
    
      // Calcular la calificación promedio
      const calificacionPromedio = totalComentarios > 0
        ? comments.reduce((acumulador, comentario) => 
            acumulador + comentario.calificacion, 0) / totalComentarios
        : 0;
    
      return (
        <div className='feedback-stats'>
          <h4>Comentarios: {totalComentarios}</h4> 
          <h4>Calificación Promedio: {calificacionPromedio}</h4>
        </div>
      );
    };
    
export default ComentarioStats