//- PokemonCard.jsx :
 
 
import { PropTypes } from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';
 
export const PokemonCard = ({ id, name, sprites = [] }) => {
 
  const pRef = useRef();
 
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 }); //? Con este estado vamos a almacenar el tamaño del elemento que contiene las imágenes de los pokemones.
  
  useLayoutEffect(() => { //? useLayoutEffect es un hook que se ejecuta después de que el DOM ha sido actualizado. Se ejecuta de forma síncrona, es decir, bloquea la renderización hasta que se haya ejecutado.
 
    const { width, height } = pRef.current.getBoundingClientRect(); //? getBoundingClientRect() es un método que devuelve el tamaño de un elemento y su posición relativa respecto a la ventana gráfica. En este caso, estamos obteniendo el tamaño del h2 que contiene el nombre del pokemon.
 
    setBoxSize({ width, height });
    
  }, [sprites])
 
  return (
    <section style={{ height: 200, display: 'flex'}} className='text-center p-0 m-0 flex-column align-items-center justify-content-center '>
      <h2 ref={pRef} >#{id} - {name} </h2>
      {/* Añadimos ref={pRef} como atributo del h2 para que useRef guarde la referencia para poder usarla en useLayoutEffect*/}
      <div style={{ display: 'flex' }}>
        {
          sprites.map((url, index) => <img key={index} src= {url}></img>)
        }
      </div>
 
      <h5>{ JSON.stringify( boxSize ) }</h5>
    </section>
  )
}
 
PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sprites: PropTypes.array.isRequired
}
