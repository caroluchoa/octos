import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'
import fetch from 'isomorphic-unfetch'
import Router from 'next/router'


async function destroy(id) {
  const res = await fetch(`http://localhost:3000/api/post/${id}`, {
    method: 'DELETE',
  })
  const data = await res.json()
  Router.push('/')
}

const Cameras = props => {
  let cameraname = props.cameraname
  return (
    <Layout>
      <div className="page">
        <p><b>Nome:</b> {props.cameraname}</p>
        <p><b>Número de série:</b>  {props.serialnumber} </p>
        <p><b>Fabricante:</b>  {props.manufacturer} </p>
        <div className="actions">
          <button onClick={() => destroy(props.id)}>Deletar</button>
        </div>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 1.5rem;
        }

        .actions {
          margin-top: 2rem;
        }

        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }

        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  )
}

export const getServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/post/${context.params.id}`)
  const data = await res.json()
  return {props: {...data}}
}

export default Cameras
