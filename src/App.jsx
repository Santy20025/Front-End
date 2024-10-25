import {React, useState} from 'react'
import Header from './componentes/Header';
import ComentarioItem from './componentes/ComentarioItem';
import Comentarios from './data/Comentarios';
import ComentarioLista from './componentes/ComentarioLista';
import Card from './componentes/Card';
import ComentarioStats from './componentes/ComentarioStats';
import ComentarioForm from './componentes/ComentarioForm';

function App() {

    const [comments, 
            setComments] = useState(Comentarios);

    const borrarItem=id=>{
        if(window.confirm
                ("Esta seguro de borrar el comentario?")){
            //asignar nuevo estado a comments:
            //Filter: para quitar los comentarios
            //cuyo id concuerde con el parametro    
            setComments(comments.filter((c)=> c.id !== id ) )   
        }
    }

    const titulo = "App de Comentarios";
    const Autor = "Santiago Borda"
    const ficha = "2902093"
    const centro = "CGMLTI"

    const addComentario = ( newComentario ) => {
        //Utiliaze el operador spread
        //para añadir el newComentario
        //a la lista de comentarios(state: comments)
        setComments(prevComments => [ ...prevComments, newComentario ]);
    }
    
  return (
    <div className='container'>

        <Header 
            titulo={titulo} 
            autor={Autor} 
            centro={centro} 
            ficha={ficha}/>
        <ComentarioForm handleAdd={ addComentario } />
        <ComentarioStats comentarios={comments}/>
        <ComentarioLista 
            comments={comments}
            handleDelete={borrarItem} /> 
            
    </div>

  )
}

export default App