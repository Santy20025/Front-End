import {createContext, useState} from 'react'

//crear contexto 
const ComentariosContexto = createContext()
//Crear provider: para que el contexto 
//se reconozca en todo componente
export const ComentariosProvider = ({ children }) =>{

    const [comments, setComments] = useState([
            {
                id: 1,
                comentario: "ESTE ES EL COMENTARIO",
                calificaion: 3  

            }
        ])

        const borrarItem= (id) =>{
            if(window.confirm
                    ("Esta seguro de borrar el comentario?")){
                //asignar nuevo estado a comments:
                //Filter: para quitar los comentarios
                //cuyo id concuerde con el parametro    
                setComments(comments.filter((c)=> c.id !== id ) )   
            }
        }


    return (
        <ComentariosContexto.Provider value={{comments, 
                                                setComments, 
                                                borrarItem}}>
            { children }  
        </ComentariosContexto.Provider>)
}

export default ComentariosContexto