import { createContext, useEffect, useState } from 'react';

// Crear contexto
const ComentariosContexto = createContext();

// Crear provider para que el contexto se reconozca en todos los componentes
export const ComentariosProvider = ({ children }) => {
  const [comments, setComments] = useState([]); // Iniciar con un array vacío

  useEffect(() => {
    fetchComentarios();
  }, []);

  // Función para obtener los comentarios desde la API
  const fetchComentarios = async () => {
    try {
      const response = await fetch('http://localhost:5000/comentarios');
      if (!response.ok) {
        throw new Error('Error al obtener los comentarios');
      }
      const comentariosAPI = await response.json();
      setComments(comentariosAPI);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  // Función para borrar un comentario por su ID
  const borrarItem = (id) => {
    if (window.confirm("¿Está seguro de borrar el comentario?")) {
      setComments(comments.filter((c) => c.id !== id));   
    }
  };

  return (
    <ComentariosContexto.Provider value={{ comments, setComments, borrarItem }}>
      {children}
    </ComentariosContexto.Provider>
  );
};

export default ComentariosContexto;