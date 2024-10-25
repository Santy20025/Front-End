import {React, useContext} from 'react'
import ComentariosContexto from '../contexto/ComentariosContexto';

const ComentarioStats = () => {

      const {comments} = useContext(ComentariosContexto)
      // Calcular el número total de comentarios
      const totalComentarios = comments.length;
    
      // Calcular la calificación promedio
      const calificacionPromedio = totalComentarios > 0
        ? comments.reduce((acumulador, comentario) => 
            acumulador + comentario.calificacion, 0) / totalComentarios
        : 0;
    
      return (
        <div className='feedback-stats'>
          <h4>Comentarios: {totalComentarios}</h4> 
          <h4>Calificación Promedio: {calificacionPromedio.toFixed(1)}</h4>
        </div>
      );
    };
    
export default ComentarioStats