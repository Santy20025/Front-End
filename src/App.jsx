import {React, useState} from 'react'
import Header  from './componentes/Header.jsx';
import ComentarioItem from './componentes/ComentarioItem.jsx';
import comentarios from './data/Comentarios.js';

function App() {

    const [comments ,
        setComments] = useState(comentarios)

    const titulo = "App de Comentarios";
    const Autor = "Santiago Borda";
    const ficha = "2902093";
    const centro = "CGMLTI"
    

    const loading = false;
    const showComments = true;
    if(loading === true ) return (<h1>Cargando comentarios</h1>)
  return (
    <div className='container'>
    <Header titulo={titulo} autor={Autor} ficha={ficha} centro={centro}/>
    {showComments && 
    (
        <div classname='comments'>
        <h3>Comentarios: {comentarios.length }</h3>
        <ul>
            {
                comments.map(comentario => 
                    <ComentarioItem
                         key={comentario.id} 
                         comentario={comentario.comentario}
                         calificacion={comentario.calificacion}
                    />
                )
            }
        </ul>
    </div>
    ) }
    </div>
  )
}

export default App