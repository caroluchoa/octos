import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Camera from '../components/Camera'
import { PATH } from '../constants'
import Router from 'next/router'

const home = ({cameras}) => {
  return (
    <Layout>
      <div className="page">
        <h2>Listagem</h2>
        <p>Clique em uma câmera abaixo para editá-la.</p>
        <main>
          {cameras.map(camera => (
             //** Mapeia as câmeras do banco de dados que estão contidas no objeto cameras */
            <div onClick={() => Router.push('/camera/[id]', `/camera/${camera.id}`)} key={camera.id} className="cameras">
              <Camera camera={camera} /> {
              /** Utiliza o componente Camera para expor cada câmera na página */}
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .cameras {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .cameras:hover {
          box-shadow: 1px 1px 3px #aaa;
          cursor:pointer;
        }

        .cameras + .cameras {
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </Layout>
  )
}

/** 
 * getServerSideProps para buscar os dados no lado do servidor 
 */
export const getServerSideProps = async () => {
  const res = await fetch(PATH + '/api/cameras')
  const cameras = await res.json()
  return {
    /** Retorna um objeto props que inclui os dados das cameras recebidas de "api/cameras" */
    props: { cameras }, 
  }
}

export default home

