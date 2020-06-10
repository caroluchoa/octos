import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Cameras from '../components/Post'


const feed = props => {
  return (
    <Layout>
      <div className="page">
        <h2>Listagem</h2>
        <p>Clique em uma câmera abaixo para editá-la.</p>
        <main>
          {props.feed.map(cameras => (
            <div key={cameras.id} className="cameras">
              <Cameras cameras={cameras} />
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
        }

        .cameras + .cameras {
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/feed')
  const feed = await res.json()
  return {
    props: { feed },
  }
}

export default feed
