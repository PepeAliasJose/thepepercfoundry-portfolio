import { ArrowTrendingUpIcon } from '@heroicons/react/24/outline'
import Footer from '../components/organisms/Footer'
import { useEffect } from 'react'

function Minerva () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <header className='pb-5 md:pb-10 md:pt-10 flex justify-between items-center flex-col h-svh '>
        <picture className='h-1/2 self-start md:max-w-4xl xl:maw-w-5xl 2xl:max-w-[69rem] md:self-center'>
          <source
            srcSet={'projectsResources/minerva/min_small.png'}
            media='(width >= 48rem)'
            width={1600}
          />
          <img
            className='w-full md:-translate-y-[41%] md:mx-auto object-cover'
            src={'projectsResources/minerva/min_small.png'}
            alt='Virtual sky hero'
            width={770}
          />
        </picture>
        <div className='flex flex-col gap-0 absolute translate-y-[calc(50svh-50%)]'>
          <h1
            className='text-8xl sm:text-9xl 
          lg:text-[13em] font-black koulen text-center leading-none 
          sombra'
          >
            MINERVA <span className='number'>I</span>
          </h1>
          <p className='text-center font-semibold text-[var(--soft-text)] sombra'>
            Simulador 3D del sistema solar
          </p>
        </div>

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
          <ul
            className=' p-5 inline-flex text-nowrap gap-2 md:gap-3 
             text-sm md:text-lg font-semibold flex-wrap justify-center w-full'
          >
            <li className='up px-4 py-1.5'>React JS</li>
            <li className='up px-4 py-1.5'>Tailwind CSS</li>
            <li className='up px-4 py-1.5'>Three JS</li>
            <li className='up px-4 py-1.5'>Framer motion</li>
            <li className='up px-4 py-1.5'>WebAssembly</li>
            <li className='up px-4 py-1.5'>Web Workers</li>
          </ul>
        </section>
        <section className='text-lg md:text-xl '>
          <article className='p-10 w-full flex flex-col gap-10 items-center'>
            <MinervaTitle title={'La precisión del modelo VSOP87D'} />
            <div
              className='flex flex-col items-center
              gap-10 max-w-4xl '
            >
              <p>
                <strong>Minerva I</strong> es un simulador 3D para navegador de
                codigo abierto. Puedes ver un sistema solar con los cuerpos
                celestes en la posición en las que se encuentran en la vida
                real.
              </p>
              <img
                alt='minerva screenshot'
                src='./projectsResources/minerva/min_section_1.webp'
              />
              <p>
                Muevete entre los cuerpos celestes en cualquier fecha para
                verlos de cerca en alta resolución y apreciar las grandes
                distancias que nos separan y lo pequeños que son en comparación.
              </p>
            </div>
            <div
              className='text-sm text-[var(--soft-text)] 
            text-center flex flex-col md:flex-row gap-0 md:gap-10 w-full justify-center items-center md:items-start'
            >
              <figure>
                <img
                  className=''
                  alt='Solución de Stellarium de la luna el 1/10/2026 a las 5:40'
                  src='/projectsResources/minerva/stellarium_moon.webp'
                  width={600}
                />
                <figcaption>
                  Solución de{' '}
                  <a
                    className='text-[var(--text)] underline'
                    href='https://stellarium-web.org/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Stellarium
                  </a>{' '}
                  de la luna el 1/10/2026 a las 5:40
                </figcaption>
              </figure>
              <figure>
                <img
                  className=''
                  alt='Solución de Minerva de la luna el 1/10/2026 a las 5:40'
                  src='/projectsResources/minerva/minerva_moon.webp'
                  width={600}
                />
                <figcaption>
                  Solución de{' '}
                  <a
                    className='text-[var(--text)] underline'
                    href='https://minerva-sim.web.app'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Minerva
                  </a>{' '}
                  de la luna el 1/10/2026 a las 5:40
                </figcaption>
              </figure>
            </div>
          </article>
          <article className='w-full p-10 flex flex-col gap-10 md:gap-10 '>
            <MinervaTitle title={'Distancias y trayectorias'} />

            <p className='max-w-4xl self-center'>
              Calcula la distancia entre cuerpos celestes (centro a centro).
              <br />
              <br />
              Muestra la trayectoria que va a seguir o ha seguido un planeta
              durante el tiempo que indiques junto a un menu con información
              útil, como la distancia final al cuerpo primario, su altura
              respecto al plano orbital (inicio y fin), la distancia recorrida y
              el desplazamiento respecto al inicio.
            </p>
            <p className='max-w-4xl self-center'>
              Ademas puedes pulsar en cualquier punto de la trayectoria para ver
              información adicional sobre sus coordenadas (Esféricas y
              rectangulares) en el espacio.
            </p>
            <div
              className='flex flex-col  gap-10 items-center
             md:items-start justify-center -mx-10 max-w-screen sm:max-w-full self-center'
            >
              <div
                className='text-sm text-[var(--soft-text)] text-center 
              flex flex-col gap-10 w-full justify-center overflow-x-clip'
              >
                <figure className='flex flex-col'>
                  <img
                    className='w-xl self-start sm:w-auto sm:self-auto max-w-6xl'
                    alt='Trayectoria de la tierra de los ultimos 5 días'
                    src='/projectsResources/minerva/orbita_distancias.webp'
                    width={1920}
                  />
                  <figcaption className='px-5'>
                    Trayectoria de la tierra de los ultimos 5 días antes de la
                    fecha marcada, distancia desde Mercurio a la Tierra y Venus
                    (Kilometros)
                  </figcaption>
                </figure>
                <figure className='flex flex-col'>
                  <img
                    className='w-xl self-end sm:w-auto sm:self-auto max-w-6xl'
                    alt=' Trayectoria de todos los planetas a su periodo orbital'
                    src='/projectsResources/minerva/orbita_completa.webp'
                    width={1920}
                  />
                  <figcaption className='px-5'>
                    Trayectoria de todos los planetas a su periodo orbital,
                    distancia de Venus a Mercurio y Marte (ua)
                  </figcaption>
                </figure>
              </div>
            </div>
          </article>
          <article className='w-full p-10 flex flex-col gap-10 md:gap-10 '>
            <MinervaTitle title={'Eclipses'} />
            <p className='max-w-4xl self-center'>
              Gracias a la representación en 3D del sistema solar, se pueden
              visualizar aproximaciones de eclipses solares proyectando una luz
              y unas lineas en dirección contraria al sol. Todo esto es posible
              sin realizar ningún calculo extra sobre eclipses
            </p>
            <div className='flex flex-col items-center'>
              <Eclipse1 />
              <Eclipse2 />
            </div>
          </article>
          <article className='w-full p-10 flex flex-col gap-10 md:gap-10'>
            <MinervaTitle title={'Funciones'} />
            <div className='flex flex-col items-center'></div>
          </article>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

function Eclipse1 () {
  return (
    <>
      <div
        className='text-sm text-[var(--soft-text)] 
            text-center mb-5 -mx-10 w-screen md:w-auto md:-mx-0'
      >
        <figure>
          <img
            className=''
            alt=' '
            src='/projectsResources/minerva/2026Aug12-nasa.webp'
            width={600}
          />
          <figcaption className='px-5'>
            Mapa de la{' '}
            <a
              className='text-[var(--text)] underline'
              href='https://eclipse.gsfc.nasa.gov/SEplot/SEplot2001/SE2026Aug12T.GIF'
              target='_blank'
              rel='noopener noreferrer'
            >
              NASA
            </a>{' '}
            del eclipse <br /> el 12 de Agosto de 2026 con la umbra en la costa
            de Groenlandia las 17:40 UT <br /> y en el norte de España a las
            18:30 UT
          </figcaption>
        </figure>
      </div>

      <div
        className='text-sm text-[var(--soft-text)] 
            text-center flex flex-col md:flex-row gap-5 
            md:gap-0 justify-center items-center md:items-start
            -mx-10 w-screen md:w-auto md:-mx-0'
      >
        <figure>
          <img
            className=''
            alt=' '
            src='/projectsResources/minerva/2026Aug12T17-40.webp'
            width={600}
          />
          <figcaption className='px-5'>
            Aproximación de eclipse de{' '}
            <a
              className='text-[var(--text)] underline'
              href='https://minerva-sim.web.app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Minerva
            </a>{' '}
            en la costa de <br /> Groenlandia el 12 de Agosto de 2026 a las
            17:40 UT
          </figcaption>
        </figure>
        <figure>
          <img
            className=''
            alt=' '
            src='/projectsResources/minerva/2026Aug12T18-30.webp'
            width={600}
          />
          <figcaption className='px-5'>
            Aproximación de eclipse de{' '}
            <a
              className='text-[var(--text)] underline'
              href='https://minerva-sim.web.app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Minerva
            </a>{' '}
            en el norte de <br /> España el 12 de Agosto de 2026 a las 18:30 UT
          </figcaption>
        </figure>
      </div>
    </>
  )
}

function Eclipse2 () {
  return (
    <>
      <div
        className='text-sm text-[var(--soft-text)] 
            text-center mb-5 -mx-10 w-screen md:w-auto md:-mx-0 mt-10'
      >
        <figure>
          <img
            className=''
            alt=' '
            src='/projectsResources/minerva/2034Mar20-nasa.webp'
            width={600}
          />
          <figcaption className='px-5'>
            Mapa de la{' '}
            <a
              className='text-[var(--text)] underline'
              href='https://eclipse.gsfc.nasa.gov/SEplot/SEplot2001/SE2034Mar20T.GIF'
              target='_blank'
              rel='noopener noreferrer'
            >
              NASA
            </a>{' '}
            del eclipse el 20 de Marzo <br /> de 2034 con la umbra en la costa
            de Nigeria las 09:20 UT y en en la costa <br /> de Egipto en el Mar
            Rojo a las 11:00 UT
          </figcaption>
        </figure>
      </div>

      <div
        className='text-sm text-[var(--soft-text)] 
            text-center flex flex-col md:flex-row gap-5 
            md:gap-0 justify-center items-center md:items-start
            -mx-10 w-screen md:w-auto md:-mx-0'
      >
        <figure>
          <img
            className=''
            alt=' '
            src='/projectsResources/minerva/2034Mar20T09-20.webp'
            width={600}
          />
          <figcaption className='px-5'>
            Aproximación de eclipse de{' '}
            <a
              className='text-[var(--text)] underline'
              href='https://minerva-sim.web.app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Minerva
            </a>{' '}
            en la costa de <br /> Nigeria el 20 de Marzo de 2034 a las 09:20 UT
          </figcaption>
        </figure>
        <figure>
          <img
            className=''
            alt=' '
            src='/projectsResources/minerva/2034Mar20T11-00.webp'
            width={600}
          />
          <figcaption className='px-5'>
            Aproximación de eclipse de{' '}
            <a
              className='text-[var(--text)] underline'
              href='https://minerva-sim.web.app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Minerva
            </a>{' '}
            la costa de Egipto en el <br /> Mar Rojo el 20 de Marzo de 2034 a
            las 11:00 UT
          </figcaption>
        </figure>
      </div>
    </>
  )
}

function MinervaTitle ({ title }) {
  return (
    <h2 className='text-3xl md:text-5xl font-bold helvetica md:mx-auto '>
      {title}
    </h2>
  )
}

export default Minerva
