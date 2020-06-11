import Router from 'next/router'
import ReactMarkdown from 'react-markdown'

//retorna cada câmera do banco de dados listada em nome/nºserie/fabricante
//dentro de um container clicável, que vai para a página da camera escolhida /p/id

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