import { useTranslation } from 'react-i18next'
import Footer from '../components/organisms/Footer'
import { ArrowTrendingUpIcon } from '@heroicons/react/24/outline'

function Selene () {
  const { t } = useTranslation(['dbd'])
  return (
    <>
      <header className='p-10 pb-5 md:pb-10 flex justify-between items-center flex-col h-svh'>
        <div className='flex flex-col gap-2'>
          <p className='ml-1 text-center font-semibold text-[var(--soft-text)]'>
            Montaje con visión artificial
          </p>

          <h1
            className='text-7xl sm:text-9xl
            font-black bills text-center content-center leading-none'
          >
            SELENE III
          </h1>
        </div>

        <picture className='max-w-96 md:max-w-3xl 2xl:max-w-5xl'>
          <source
            srcSet={t('hero_large')}
            media='(width >= 48rem)'
            width={1400}
          />
          <img
            className='mx-auto -mt-[17%] -mb-[14%] md:my-0'
            src={t('hero_small')}
            alt='dbd_hero'
            width={350}
          />
        </picture>

        <div className='inline-flex gap-4 justify-center '>
          <div className='up out-rounded py-2 px-4 hover:cursor-pointer'>
            <a
              href='https://github.com/PepeAliasJose/dragonballdle-game'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
          </div>
          <a
            href='https://dragonballdle.web.app/'
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
      <main></main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Selene
