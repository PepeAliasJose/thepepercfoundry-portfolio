import { useTranslation } from 'react-i18next'
import Footer from '../components/organisms/Footer'

function About () {
  const { t } = useTranslation(['about'])
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
        <div className='flex flex-col gap-10 mt-10 max-w-4xl'>
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
