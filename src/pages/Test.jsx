import ThemeSwitch from '../components/molecules/ThemeSwitch'
import Menu from '../components/organisms/Menu'

function Test () {
  return (
    <>
      <header></header>
      <main className='p-5  '>
        <div className='flex flex-wrap gap-3'>
          <div className='up px-10 py-2 w-fit content-center'>Hola</div>
          <div className='up out-rounded px-10 py-2 w-fit content-center'>
            Hola
          </div>
          <div className='up in-rounded px-10 py-2 w-fit content-center'>
            Hola
          </div>
          <div className='down out-rounded px-10 py-2 w-fit content-center'>
            Hola
          </div>
          <div className='down in-rounded px-10 py-2 w-fit content-center'>
            Hola
          </div>
          <div className='up p-1 backdrop-blur-sm max-w-32'>
            <div className='down px-10 py-2 w-fit' style={{ borderRadius: 21 }}>
              Hola Hola Hola Hola
            </div>
          </div>
        </div>
        <p className=' mt-4 font-bold text-[200px]'>404s</p>
        <div
          style={{
            borderRadius: '0px',
            borderTopRightRadius: '200px',
            borderBottomLeftRadius: '200px'
          }}
          className='down in-rounded w-96 h-60 '
        ></div>
      </main>
      <footer></footer>
    </>
  )
}

export default Test
