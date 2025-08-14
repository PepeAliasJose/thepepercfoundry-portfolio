import { ArrowTrendingUpIcon } from '@heroicons/react/24/outline'
import Footer from '../components/organisms/Footer'
import { useEffect } from 'react'

function Minerva () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <header className='p-10 pb-5 md:pb-10 flex justify-between items-center flex-col h-svh'>
        <div className='flex flex-col gap-2'>
          <p className='ml-1 text-center font-semibold text-[var(--soft-text)]'>
            Simulador del sistema solar
          </p>
          <h1 className='text-6xl sm:text-8xl md:text-9xl font-black koulen text-center leading-none'>
            MINERVA I
          </h1>
        </div>

        <picture className='max-w-96 md:max-w-3xl 2xl:max-w-5xl'>
          <source
            srcSet={'projectsResources/daw/vsk_lg.webp'}
            media='(width >= 48rem)'
            width={1400}
          />
          <img
            className='mx-auto md:my-0'
            src={'projectsResources/daw/vsk_lg.webp'}
            alt='Virtual sky hero'
            width={350}
          />
        </picture>

        <div className='inline-flex gap-4 justify-center '>
          <div className='up out-rounded py-2 px-4 hover:cursor-pointer'>
            <a
              href='https://github.com/PepeAliasJose/Project-Minerva'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
          </div>
          <a
            href='https://minerva-sim.web.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div
              className='up bg-blue-400 text-white py-2 px-4 
            inline-flex gap-2 text-nowrap items-center hover:cursor-pointer'
            >
              Ver sitio
              <ArrowTrendingUpIcon className='size-5 text-white' />
            </div>
          </a>
        </div>
      </header>
      <main>
        <section>
          <article className='p-5'>
            <ul
              className='inline-flex text-nowrap gap-2 md:gap-3 
             text-sm md:text-lg font-semibold flex-wrap justify-center w-full'
            >
              <li className='up px-4 py-1.5'>React JS</li>
              <li className='up px-4 py-1.5'>Tailwind CSS</li>
              <li className='up px-4 py-1.5'>Three JS</li>
              <li className='up px-4 py-1.5'>Framer motion</li>
              <li className='up px-4 py-1.5'>WebAssembly</li>
              <li className='up px-4 py-1.5'>Web Workers</li>
            </ul>
          </article>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Minerva
