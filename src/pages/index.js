import { GetAll } from '@/services/UsuariosService'
import { useEffect, useState } from 'react'

export default function Home() {

  return (
    <>
      <div className="row">
        <div className="col">
          <h2>Copy Jus</h2>
          <p className='text-muted'>Sistema para controlar os usuarios que podem utilizar o Copy Jus</p>
        </div>
      </div>
    </>
  )
}
