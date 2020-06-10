import React, { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Router from 'next/router'

const Draft = () => {
  const [cameraname, setCameraname] = useState('')
  const [serialnumber, setSerialnumber] = useState('')
  const [manufacturer, setManufacturer] = useState('')

  const submitData = async e => {
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
          <h1>Adicionar Câmera</h1>
          <label>
            <input
              autoFocus
              onChange={e => setCameraname(e.target.value)}
              placeholder="Nome da Câmera"
              type="text"
              maxlength="50"
              value={cameraname}
            />
          </label>
          <label>
            <input placeholder="Número de Série"
              type="text"
              maxlength="16"
              required pattern="[A-Z0-9]+"
              value={serialnumber}
              onChange={e => 
                setSerialnumber(e.target.value)}
            />
          </label>
          <label>
            <select class="select-css" manufacturer="Fabricante" value={manufacturer} onChange={e => setManufacturer(e.target.value)}>
              <option>Fabricante</option>
              <option value="Secure Câmeras Inc">Secure Câmeras Inc</option>
              <option value="Surveillance Cams LLC">Surveillance Cams LLC</option>
              <option value="DigiEye Group">DigiEye Group</option>
              <option value="CâmeraFi Inc">CâmeraFi Inc</option>
              <option value="VidMasters Inc">VidMasters Inc</option>
            </select>
          </label>
          <input
            disabled={!serialnumber || !cameraname || !manufacturer}
            type="submit"
            value="Adicionar"
          />
          <a className="back" href="#" onClick={() => Router.push('/')}>
            Cancelar
          </a>
        </form>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .select-css{
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
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
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }

        .back {
          margin-left: 1rem;;
        }
      `}</style>
    </Layout>
  )
}

export default Draft;