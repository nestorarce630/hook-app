//Os dejo mi versión del código con comentarios de ayuda para que podáis realizar el ejercicio sobre lo que tenemos de la API de Pokemon:
 
 
//- Layout.jsx :
 
 
import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";
 
//? PARA VER EL USO DE useLayoutEffect IR AL COMPONENTE PokemonCard.jsx
 
 
export const Layout = () => {
 
  const { counter, increment, decrement, reset } = useCounter(1);
 
  const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
 
  const spriteUrls = data && data.sprites
    ? Object.values(data.sprites).filter(url => typeof url === 'string')
    : [];
 
  return (
    <div>
      <h1>Información de Pokemon</h1>
      <hr />
      {
        hasError ? <p>Error...</p> : isLoading ? <LoadingMessage /> :
          <PokemonCard id = { data.id } name={(data.name).toUpperCase()} sprites={ [...spriteUrls] } />
      }
      <div className="text-center p-0 m-2 d-flex align-items-center justify-content-center ">
        <button onClick={ increment } className="btn btn-primary ">Siguiente Pokemon</button>
        <button onClick={ decrement } className="btn btn-primary " disabled = { counter === 1 }>Pokemon Anterior</button>
        <button onClick={ reset } className="btn btn-primary ">Reset</button>
      </div>
 
    </div>
  )
}
 
 
 
