import { ArrowTrendingUpIcon } from '@heroicons/react/24/outline'
import Footer from '../components/organisms/Footer'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function Minerva () {
  const { t } = useTranslation(['minerva'])

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
            {t('title')}
          </h1>
          <p className='text-center font-semibold text-[var(--soft-text)] sombra'>
            {t('subtitle')}
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
              {t('link')}
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
            <MinervaTitle title={t('t1')} />
            <div
              className='flex flex-col items-center
              gap-10 max-w-4xl '
            >
              <p>
                <strong>Minerva I</strong> {t('p1')}
              </p>
              <img
                alt='minerva screenshot'
                src='./projectsResources/minerva/min_section_1.webp'
              />
              <p>{t('p2')}</p>
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
                  {t('img1&2.1')}{' '}
                  <a
                    className='text-[var(--text)] underline'
                    href='https://stellarium-web.org/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Stellarium
                  </a>
                  {t('img1&2.2')}
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
                  {t('img1&2.1')}{' '}
                  <a
                    className='text-[var(--text)] underline'
                    href='https://minerva-sim.web.app'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Minerva
                  </a>
                  {t('img1&2.2')}
                </figcaption>
              </figure>
            </div>
          </article>
          <article className='w-full p-10 flex flex-col gap-10 md:gap-10 '>
            <MinervaTitle title={t('t2')} />

            <p className='max-w-4xl self-center'>
              {t('p3.1')}
              <br />
              <br />
              {t('p3.2')}
            </p>
            <p className='max-w-4xl self-center'>{t('p4')}</p>
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
                  <figcaption className='px-5'>{t('img3')}</figcaption>
                </figure>
                <figure className='flex flex-col'>
                  <img
                    className='w-xl self-end sm:w-auto sm:self-auto max-w-6xl'
                    alt=' Trayectoria de todos los planetas a su periodo orbital'
                    src='/projectsResources/minerva/orbita_completa.webp'
                    width={1920}
                  />
                  <figcaption className='px-5'>{t('img4')}</figcaption>
                </figure>
              </div>
            </div>
          </article>
          <article className='w-full p-10 flex flex-col gap-10 md:gap-10 '>
            <MinervaTitle title={t('t3')} />
            <p className='max-w-4xl self-center'>{t('p5')}</p>
            <div className='flex flex-col items-center'>
              <Eclipse1 />
              <Eclipse2 />
            </div>
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
  const { t } = useTranslation(['minerva'])
  return (
    <>
      <div
        className='text-sm text-[var(--soft-text)] 
            text-center mb-5 -mx-10 w-screen md:w-auto md:-mx-0'
      >
        <figure className='flex flex-col items-center'>
          <img
            className=''
            alt=' '
            src='/projectsResources/minerva/2026Aug12-nasa.webp'
            width={600}
          />
          <figcaption className='px-5 max-w-xl'>
            {t('e_map')}{' '}
            <a
              className='text-[var(--text)] underline'
              href='https://eclipse.gsfc.nasa.gov/SEplot/SEplot2001/SE2026Aug12T.GIF'
              target='_blank'
              rel='noopener noreferrer'
            >
              NASA
            </a>
            {t('e1img1.2')}
          </figcaption>
        </figure>
      </div>

      <div
        className='text-sm text-[var(--soft-text)] 
            text-center flex flex-col md:flex-row gap-5 
            md:gap-0 justify-center items-center md:items-start
            -mx-10 w-screen md:w-auto md:-mx-0'
      >
        <figure className='flex flex-col items-center'>
          <img
            className=''
            alt=' '
            src='/projectsResources/minerva/2026Aug12T17-40.webp'
            width={600}
          />
          <figcaption className='px-5 max-w-96'>
            {t('e_aprox')}{' '}
            <a
              className='text-[var(--text)] underline'
              href='https://minerva-sim.web.app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Minerva
            </a>
            {t('e1img2.2')}
          </figcaption>
        </figure>
        <figure className='flex flex-col items-center'>
          <img
            className=''
            alt=' '
            src='/projectsResources/minerva/2026Aug12T18-30.webp'
            width={600}
          />
          <figcaption className='px-5 max-w-96'>
            {t('e_aprox')}{' '}
            <a
              className='text-[var(--text)] underline'
              href='https://minerva-sim.web.app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Minerva
            </a>
            {t('e1img3.2')}
          </figcaption>
        </figure>
      </div>
    </>
  )
}

function Eclipse2 () {
  const { t } = useTranslation(['minerva'])
  return (
    <>
      <div
        className='text-sm text-[var(--soft-text)] 
            text-center mb-5 -mx-10 w-screen md:w-auto md:-mx-0 mt-10'
      >
        <figure className='flex flex-col items-center'>
          <img
            className=''
            alt=' '
            src='/projectsResources/minerva/2034Mar20-nasa.webp'
            width={600}
          />
          <figcaption className='px-5 max-w-xl'>
            {t('e_map')}{' '}
            <a
              className='text-[var(--text)] underline'
              href='https://eclipse.gsfc.nasa.gov/SEplot/SEplot2001/SE2034Mar20T.GIF'
              target='_blank'
              rel='noopener noreferrer'
            >
              NASA
            </a>
            {t('e2img1.2')}
          </figcaption>
        </figure>
      </div>

      <div
        className='text-sm text-[var(--soft-text)] 
            text-center flex flex-col md:flex-row gap-5 
            md:gap-0 justify-center items-center md:items-start
            -mx-10 w-screen md:w-auto md:-mx-0'
      >
        <figure className='flex flex-col items-center'>
          <img
            className=''
            alt=' '
            src='/projectsResources/minerva/2034Mar20T09-20.webp'
            width={600}
          />
          <figcaption className='px-5 max-w-96'>
            {t('e_aprox')}{' '}
            <a
              className='text-[var(--text)] underline'
              href='https://minerva-sim.web.app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Minerva
            </a>
            {t('e2img2.2')}
          </figcaption>
        </figure>
        <figure className='flex flex-col items-center'>
          <img
            className=''
            alt=' '
            src='/projectsResources/minerva/2034Mar20T11-00.webp'
            width={600}
          />
          <figcaption className='px-5 max-w-96'>
            {t('e_aprox')}{' '}
            <a
              className='text-[var(--text)] underline'
              href='https://minerva-sim.web.app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Minerva
            </a>
            {t('e2img3.2')}
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
