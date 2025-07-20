import { Link } from 'react-router-dom'

function _404 () {
  return (
    <>
      <header className=' font-bold flex flex-col gap-2 items-center justify-center mt-20'>
        <h2 className='text-9xl'>404</h2>
        <h3 className='text-5xl'>NOT FOUND</h3>
      </header>
      <main className='mt-10 flex justify-center'>
        <Link to={'/'} className='up out-rounded p-2 px-4 '>
          VOLVER
        </Link>
      </main>
      <footer></footer>
    </>
  )
}

export default _404
