import React from 'react'

const Header = ({autor, titulo,ficha,centro}) => {

    const headerStyles = {
        backgroundColor : 'rgba(0,0,0,0,4',
        color : 'rgba(159, 25, 227, 0.8)'
    };
    const titleStyle = {
        color: 'rgba(40, 155, 229, 0.8)', 
    };

    const autorStyle = {
        color: 'rgba(40, 229, 99, 0.8)',
    };

    const fichaStyle = {
        color: 'rgba(240, 201, 86, 0.8)', 
    };

    const centroStyle = {
        color: 'rgba(255, 165, 0, 0.8)',
    };

    return (
        <header style={headerStyles}>
            <div className='container'>
                <h1 style={titleStyle}>{titulo}</h1>
                <p style={autorStyle}>Autor: {autor}</p>
                <p style={fichaStyle}>Ficha: {ficha}</p>
                <p style={centroStyle}>Centro: {centro}</p>
            </div>
        </header>
    );
}

export default Header;