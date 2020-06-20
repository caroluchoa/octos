import Router from 'next/router'

//componente expondo cada câmera do banco de dados listada em nome/nºserie/fabricante e ao clicar em alguma, roteia para a página da camera escolhida /camera/id

const Cameras = ({ cameras }) => {
  return (
    <div onClick={() => Router.push('/camera/[id]', `/camera/${cameras.id}`)}>
      <p><b>Nome:</b> {cameras.cameraname}</p>
      <p><b>Número de série:</b>  {cameras.serialnumber} </p>
      <p><b>Fabricante:</b> {cameras.manufacturer}</p>
      <style jsx>{`
        div {
          color: inherit;
          padding: 1rem;
        }
      `}</style>
    </div>
  )
}

export default Cameras