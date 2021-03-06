/** 
 * Componente para expor cada câmera por nome, serialNumber e fabricante
 */

const Camera = ({ camera }) => {
  return (
    <div>
      <p><b>Nome:</b> {camera.name}</p>
      <p><b>Número de série:</b>  {camera.serialNumber} </p>
      <p><b>Fabricante:</b> {camera.manufacturer}</p>
      <style jsx>{`
        div {
          color: inherit;
          padding: 1rem;
        }
      `}</style>
    </div>
  )
}

export default Camera