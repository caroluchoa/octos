import React, { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Router from 'next/router'

const Create = () => {
  const [cameraname, setCameraname] = useState('')
  const [serialnumber, setSerialnumber] = useState('')
  const [manufacturer, setManufacturer] = useState('')

  const submitData = async e => { //a função envia uma requisição POST para o endpoint /api/index
    e.preventDefault()
    try {
      const body = { cameraname, serialnumber, manufacturer }
      const res = await fetch(`http://localhost:3000/api/post`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      await Router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Layout>
      <div className="page">
        <form
          onSubmit={submitData}>
          <h2>Adicionar Câmera</h2>
          <label>
            <input //recebendo o nome da camera
              autoFocus
              onChange={e => setCameraname(e.target.value)}
              placeholder="Nome da Câmera"
              type="text"
              required
              maxLength="50"
              value={cameraname}
            />
          </label>
          <label>
            <input placeholder="Número de Série" //recebendo o numero de serie
              type="text"
              maxLength="16"
              required pattern="[A-Z0-9]+"
              value={serialnumber}
              onChange={e =>
                setSerialnumber(e.target.value)}
            />
          </label>
          <label> 
            <select className="select-css" manufacturer="Fabricante" value={manufacturer} onChange={e => setManufacturer(e.target.value)} required >
              <option value ="">Fabricante</option>
              <option value="Secure Câmeras Inc">Secure Câmeras Inc</option>
              <option value="Surveillance Cams LLC">Surveillance Cams LLC</option>
              <option value="DigiEye Group">DigiEye Group</option>
              <option value="CâmeraFi Inc">CâmeraFi Inc</option>
              <option value="VidMasters Inc">VidMasters Inc</option>
            </select> 
          </label>
          <input
            type="submit"
            value="Adicionar"
          />
          <button className="back" href="#" onClick={() => Router.push('/')}>
            Cancelar
          </button>
        </form>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }        

        .select-css{ 
          font-size:12pt;
          color:grey;     
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        .select-css:hover{ 
          color:black;     
        }
        
        input[type='text'],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type='submit'] {         
          margin-top: 1rem; 
          font-size:11.3pt;      
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }

        input[type='submit']:hover {         
          box-shadow: 1px 1px 3px #aaa;  
        }

        .back:hover {          
          box-shadow: 1px 1px 3px #aaa;
        }

        .back {
          margin-top: 1rem;          
          font-size:11.3pt;
          color:black;        
          background: #ececec;
          border:0 ;
          padding: 1rem 2rem;
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  )
}

export const getServerSideProps = async () => ({ props: {} })

export default Create;