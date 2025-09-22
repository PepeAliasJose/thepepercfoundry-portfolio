import { useTranslation } from 'react-i18next'
import Footer from '../components/organisms/Footer'
import { useEffect } from 'react'
import { motion } from 'motion/react'

function Selene () {
  const { t } = useTranslation(['selene'])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, delay: 0, ease: 'backInOut' }}
        className='p-10 pb-5 md:pb-10 flex justify-between items-center flex-col h-svh'
      >
        <picture className='absolute top-0 w-screen'>
          <img
            className='w-full h-svh object-cover'
            src='/projectsResources/selene/selene2.webp'
            alt='dbd_hero'
            width={2000}
          />
        </picture>
        <div className='flex flex-col gap-2 h-full justify-between mt-10 mb-5'>
          <h1
            className='text-7xl relative sm:text-[9rem] md:text-[11rem] lg:text-[13rem]
            font-black koulen text-center content-center leading-none
            text-[var(--selene)] '
          >
            SELENE III
          </h1>
          <p
            className='w-fit px-4 py-2 ml-1 text-center
           font-semibold text-[var(--soft-text)] self-center mb-5'
          >
            {t('subtitle')}
          </p>
        </div>
        <picture className='absolute top-0 w-screen pointer-events-none'>
          <img
            className='w-full h-svh object-cover'
            src='/projectsResources/selene/selene_f.webp'
            alt='dbd_hero'
            width={2000}
          />
        </picture>

        <div className='inline-flex gap-4 justify-center '>
          <div className='up out-rounded py-2 px-4 hover:cursor-pointer'>
            <a
              href='https://github.com/PepeAliasJose/SELENE'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.header>
      <main>
        <section>
          <ul
            className=' p-5 inline-flex text-nowrap gap-2 md:gap-3 
             text-sm md:text-lg font-semibold flex-wrap justify-center w-full'
          >
            <li className='up px-4 py-1.5'>Tensorflow</li>
            <li className='up px-4 py-1.5'>Python</li>
            <li className='up px-4 py-1.5'>NVIDIA Jetson</li>
            <li className='up px-4 py-1.5'>PLC SIEMENS</li>
            <li className='up px-4 py-1.5'>KOP / AWL</li>
            <li className='up px-4 py-1.5'>AI</li>
          </ul>
        </section>
        <section className='text-lg md:text-xl '>
          <article className='w-full p-10 flex flex-col gap-10 md:gap-10 '>
            <h2 className='text-3xl md:text-5xl font-bold helvetica md:mx-auto '>
              {t('t1')}
            </h2>

            <p className='max-w-4xl self-center'>{t('p1')}</p>
            <p className='max-w-4xl self-center'>{t('p2')}</p>
            <div
              className='max-w-4xl flex flex-col md:flex-row gap-5 md:gap-10
             items-center md:items-start justify-between self-center'
            >
              <figure className='w-fit max-w-xl max-h-2xl'>
                <img
                  loading='lazy'
                  className='up'
                  alt=''
                  src='/projectsResources/selene/arm_detection.webp'
                  width={600}
                />
                <figcaption className='text-sm text-[var(--soft-text)] text-center mt-2'>
                  {t('i1')}
                </figcaption>
              </figure>
              <figure className='w-fit max-w-xl '>
                <img
                  loading='lazy'
                  className='up'
                  alt=''
                  src='/projectsResources/selene/arm_alert.webp'
                  width={600}
                />
                <figcaption className='text-sm text-[var(--soft-text)] text-center mt-2'>
                  {t('i2')}
                </figcaption>
              </figure>
            </div>
            <div
              className='max-w-4xl flex flex-col md:flex-row gap-5 md:gap-10
             items-center md:items-start justify-between self-center'
            >
              <figure className='w-fit max-w-xl '>
                <video
                  preload='none'
                  loop
                  autoPlay
                  playsInline
                  muted
                  width={500}
                  src='/projectsResources/selene/rob_vid1.webm'
                  className='up object-cover h-80'
                />
                <figcaption className='text-sm text-[var(--soft-text)] text-center mt-2'>
                  {t('v1')}
                </figcaption>
              </figure>
              <figure className='w-fit max-w-xl'>
                <video
                  preload='none'
                  loop
                  autoPlay
                  playsInline
                  muted
                  width={500}
                  src='/projectsResources/selene/rob_vid2.webm'
                  className='up object-cover h-80'
                />
                <figcaption className='text-sm text-[var(--soft-text)] text-center mt-2'>
                  {t('v2')}
                </figcaption>
              </figure>
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

/*const video1 = React.lazy(async () => {
  return (
    
  )
})

const video2 = React.lazy(async () => {
  return (
    
  )
})*/

export default Selene
