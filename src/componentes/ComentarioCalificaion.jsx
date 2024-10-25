import {React, useState} from 'react'

function ComentarioCalificaion ({ select }) {

    //Estado para almacenar la nota elegida
    const [ slected, setSelected]
                = useState(10); 

    //funcion para click en un radio butto
    const handleChange = (e) => {
            setSelected( +e.target.value )
            select( +e.target.value )
    }

  return (
    <ul className='rating'>
        <li key="1"> 
            <input
                type="radio"
                id="num1"
                name="calificacion"
                onChange={ handleChange }
                checked={ slected === 1 }
                value="1"
            />
            <label htmlFor='num1'>1</label>
        </li>
        <li key="2">
            <input
                type="radio"
                id="num2"
                name="calificacion"
                onChange={ handleChange }
                checked={ slected === 2 }
                value="2"
            />
            <label htmlFor='num2'>2</label>
        </li>
        <li key="3">
            <input
                type="radio"
                id="num3"
                name="calificacion"
                onChange={ handleChange }
                checked={ slected === 3 }
                value="3"
            />
            <label htmlFor='num3'>3</label>
        </li>
        <li key="4">
            <input
                type="radio"
                id="num4"
                name="calificacion"
                onChange={ handleChange }
                checked={ slected === 4 }
                value="4"
            />
            <label htmlFor='num4'>4</label>
        </li>
        <li key="5">
            <input
                type="radio"
                id="num5"
                name="calificacion"
                onChange={ handleChange }
                checked={ slected === 5 }
                value="5"
            />
            <label htmlFor='num5'>5</label>
        </li>
        <li key="6">
            <input
                type="radio"
                id="num6"
                name="calificacion"
                onChange={ handleChange }
                checked={ slected === 6 }
                value="6"
            />
            <label htmlFor='num6'>6</label>
        </li>
        <li key="7">
            <input
                type="radio"
                id="num7"
                name="calificacion"
                onChange={ handleChange }
                checked={ slected === 7 }
                value="7"
            />
            <label htmlFor='num7'>7</label>
        </li>
        <li key="8">
            <input
                type="radio"
                id="num8"
                name="calificacion"
                onChange={ handleChange }
                checked={ slected === 8 }
                value="8"
            />
            <label htmlFor='num8'>8</label>
        </li>
        <li key="9">
            <input
                type="radio"
                id="num9"
                name="calificacion"
                onChange={ handleChange }
                checked={ slected === 9 }
                value="9"
            />
            <label htmlFor='num9'>9</label>
        </li>
        <li key="10">
            <input
                type="radio"
                id="num10"
                name="calificacion"
                onChange={ handleChange }
                checked={ slected === 10 }
                value="10"
            />
            <label htmlFor='num10'>10</label>
        </li>
    </ul>
  )
}

export default ComentarioCalificaion