import Router from 'next/router'
import ReactMarkdown from 'react-markdown'

const Cameras = ({ cameras }) => {
  return (
    <div onClick={() => Router.push('/p/[id]', `/p/${cameras.id}`)}>
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