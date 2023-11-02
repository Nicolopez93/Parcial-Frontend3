import React from 'react'
import './Card.css'


const Card = ({nombre, apellido, edad}) => {
  return (
  <>
    <div className='Card'>
      <h2>El Alumno {apellido}, {nombre} de {edad}  años 
      se registro correctamente</h2>
    </div>
  </>
  )
}

export default Card
