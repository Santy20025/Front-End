import {React, useState} from 'react'
import Card from './Card'
import ComentarioCalificaion from './ComentarioCalificaion'

const ComentarioForm = ({ handleAdd }) => {

    const[ text, setText] = useState('')
    const[calificacion, setCalificacion] = useState(0)

    const handleTextChange = (e) =>{
        setText( e.target.value )
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        //Crear el objeto comentario
        const newComentario = {
            comentario: text, 
            calificacion: calificacion
        }

        handleAdd(newComentario)
    }

  return (
    <Card>
        <form onSubmit={ handleSubmit }>
            <ComentarioCalificaion select={(calificacion) => 
                                        { setCalificacion(calificacion) }} />
            <div className="input-group"> 
                <input type="text" 
                        value={ text }
                        onChange={ handleTextChange }
                        placeholder='Ingrese su Comentario aqui'
                />
                <button type="submit">
                    Guardar
                </button>
            </div>
        </form>
    </Card>
  )
}

export default ComentarioForm