import React from 'react'
import Card from '../componentes/Card'

const About = ({titulo, autor, ficha}) => {
  return (
    <Card>
        <div className='about'>
            <h1>Acerca de este Proyecto</h1>
            <h3>Esta es una app de react</h3>
            <p>
                <b>
                 Titulo:   
                </b> {titulo}
            </p>
            <p>
                <b>
                 Autor:   
                </b> {autor}
            </p>
            <p>
                <b>
                 Ficha:   
                </b> {ficha}
            </p>
            <p>
                <b>
                    Version 
                </b> 1.0.0
            </p>
        </div>
    </Card>
  )
}

export default About