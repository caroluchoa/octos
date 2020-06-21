import React, { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Router from 'next/router'
import { MANUFACTURERS } from '../constants'

const toInputUppercase = e => {
  e.target.value = ("" + e.target.value).toUpperCase()
}

const Create = () => {
  const [name, setName] = useState('')
  const [serialNumber, setSerialNumber] = useState('')
  const [manufacturer, setManufacturer] = useState('')

  const submitData = async e => { //Envia uma requisição POST para o endpoint /api/post/index
    e.preventDefault()
    try {
      const body = { name, serialNumber, manufacturer }
      const res = await fetch('/api/camera', {
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
              onChange={e => setName(e.target.value)}             
              placeholder="Nome da Câmera - Ex: 'Hall de Entrada'"
              type="text"
              required
              maxLength="50"
              value={name}
            />
          </label>
          <label>
            <input placeholder="Número de Série - Apenas caracteres alfanuméricos" //recebendo o numero de serie
              type="text"
              maxLength="16"
              onInput={toInputUppercase}
              required pattern="[A-Z0-9]+"
              value={serialNumber}
              onChange={e =>
                setSerialNumber(e.target.value)}
            />
          </label>
          <label>
            <select className="select-css" manufacturer="Fabricante" value={manufacturer} onChange={e => setManufacturer(e.target.value)} required >
              <option value="">Fabricante</option>
              {MANUFACTURERS.map(manufacturer => <option value={manufacturer} key={manufacturer}>{manufacturer}</option>)}
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
          cursor:pointer;  
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

export default Create;