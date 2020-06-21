//componente expondo cada câmera do banco de dados listada em nome/nºserie/fabricante e ao clicar em alguma, roteia para a página da camera escolhida /camera/id

const Camera = ({ camera }) => {
  return (
    <div>
      <p><b>Nome:</b> {camera.cameraname}</p>
      <p><b>Número de série:</b>  {camera.serialnumber} </p>
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