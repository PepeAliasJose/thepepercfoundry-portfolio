import { useTranslation } from 'react-i18next'
import Footer from '../components/organisms/Footer'
import Logo from '../components/atoms/Logo'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useHire } from '../App'

function About () {
  const { t } = useTranslation(['about'])
  const { t: c } = useTranslation()
  const { hire } = useHire()
  return (
    <>
      <header className=''></header>
      <main className='p-10 flex flex-col items-center'>
        <div className='flex flex-col md:flex-row gap-10 items-center max-w-4xl md:my-20'>
          <img
            src='me.webp'
            width={250}
            alt='me'
            className='rounded-full shadow-xl border-2'
          />
          <div className='flex flex-col gap-4 items-center text-lg'>
            <p className='max-w-xl'>{t('p1')}</p>
            <p className='max-w-xl'>{t('p2')}</p>
          </div>
        </div>

        <div className='flex flex-col gap-10 my-10 max-w-4xl'>
          <AboutImg
            src={'/about/andromeda.webp'}
            alt={'andromeda photography'}
            title={t('and')}
          />
          <AboutImg
            src={'/about/orion.webp'}
            alt={'andromeda photography'}
            title={t('ori')}
          />
          <AboutImg
            src={'/about/milkyWay.webp'}
            alt={'andromeda photography'}
            title={t('mil')}
          />
        </div>
        <div className='flex flex-col justify-center items-center gap-5'>
          <Logo />
          <h1 className='text-center md:text-lg max-w-lg mt-5 md:mt-0'>
            {c('menu.main.subtitle')}
          </h1>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

function AboutImg ({ src, alt, title }) {
  return (
    <div className='overflow-clip w-full rounded-none relative'>
      <h3 className='absolute px-5 py-3 font-bold text-white'>{title}</h3>
      <img src={src} width={1500} alt={alt} className='' />
    </div>
  )
}

export default About
