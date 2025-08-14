import { useTranslation } from 'react-i18next'
import Menu from '../components/organisms/Menu'
import Footer from '../components/organisms/Footer'

function Index () {
  const { t } = useTranslation()
  window.addEventListener('scroll', e => {
    console.log(e)
  })
  return (
    <>
      <header className='p-7  '>
        <div className='inline-flex items-center h-10'>
          <h2
            className='text-4xl md:text-[2.75rem] text-left font-bold 
          koulen scale-x-110 origin-left'
          >
            PEPE RC FOUNDRY
          </h2>
        </div>
      </header>
      <main className='flex flex-col items-center p-20'>
        <div className='flex flex-col justify-center items-center gap-3 h-full'>
          <h1
            className='text-4xl md:text-6xl w-min font-bold uppercase
          text-center'
          >
            {t('menu.main.title')}
          </h1>
          <h2 className='text-center md:text-lg'>{t('menu.main.subtitle')}</h2>
          <p
            className=' md:text-lg font-semibold flex flex-row gap-2 up bg-blue-400
        px-4 py-2 text-white'
          >
            {t('menu.main.hire')}
          </p>
        </div>
      </main>
      <footer className='absolute bottom-0 w-full'>
        <Footer />
      </footer>
    </>
  )
}
/*
<div className='fixed top-0 h-dvh overflow-clip '>
          <Menu />
        </div>*/
export default Index
