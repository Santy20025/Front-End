import React from 'react';

const ComentarioStats = ({ comentarios }) => {

  const numComentarios = comentarios.length;

  const promedioCalificaciones = 
    numComentarios > 0 
      ? (comentarios.reduce((acc, comentario) => acc + comentario.calificacion, 0) / numComentarios).toFixed(1)
      : 0;

  return (
    <div className='feedback-stats'>
      <h4>Comentarios: {numComentarios}</h4>
      <h4>Calificación promedio: {promedioCalificaciones}</h4>
    </div>
  );
};

export default ComentarioStats;
