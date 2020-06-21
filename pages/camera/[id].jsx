import Layout from '../../components/Layout'
import fetch from 'isomorphic-unfetch'
import Router from 'next/router'
import Path from '../../components/Path'
import Camera from '../../components/Camera'

// Funçao que faz uma requisição de DELETE em api/camera/id e retorna a pagina Home
async function destroy(id) {
  const res = await fetch(Path + `/api/camera/${id}`, {
    method: 'DELETE',
  })
  const data = await res.json()
  Router.push('/')
}


// Mostra a camera escolhida e dá a possibilidade de chamar a função destroy
const Cameras = ({camera}) => {
  return (
    <Layout>
      <div className="page">
        <Camera camera={camera}/>
        <div className="actions">
          <button onClick={() => destroy(camera.id)}>Deletar</button>
        </div>
      </div>

      <style jsx>{`
        .page {
          background: white;
          padding: 1.5rem;
          margin-bottom: 1rem;
        }


        .actions {
          margin-top: 2rem;
        }

        button:hover {          
          box-shadow: 1px 1px 3px #aaa;
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


// Busca no lado do servidor o parâmetro ID
export const getServerSideProps = async (context) => {
  const res = await fetch(Path + `/api/camera/${context.params.id}`)
  const camera = await res.json()
  return { props: { camera } }
}

export default Cameras
