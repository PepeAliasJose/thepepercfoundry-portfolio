import { useTranslation } from 'react-i18next'
import DefaultArticle from '../components/molecules/DefaultArticle'
import StudyArticle from '../components/molecules/StudyArticle'
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from '../components/organisms/Footer'

function Education () {
  const { t } = useTranslation()

  const listaExp = t('education.experience', { returnObjects: true }).map(
    (exp, i) => <DefaultArticle key={i + 0.1} {...exp} />
  )

  const listaEdu = t('education.studies', { returnObjects: true }).map(
    (exp, i) => <StudyArticle key={i + 0.1} {...exp} />
  )

  const { hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1))
      console.log(targetElement)
      targetElement?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [key, hash])

  return (
    <>
      <header className='mt-16 md:mt-20'></header>
      <main id='main-content' className='flex flex-col gap-16 md:gap-10'>
        <section className='mx-auto w-full max-w-5xl md:max-w-5xl px-5 md:p-10 flex flex-col gap-10'>
          <h2 className='text-3xl md:text-4xl font-semibold inline-flex gap-4 items-center'>
            <BriefcaseIcon className='size-6 md:size-8' />
            {t('work')}
          </h2>
          {listaExp}
        </section>
        <section className='mx-auto w-full max-w-5xl md:max-w-5xl px-5 md:p-10 flex flex-col gap-10'>
          <h2 className='text-3xl md:text-4xl font-semibold inline-flex gap-4 items-center '>
            <AcademicCapIcon className='size-6 md:size-8' />
            {t('school')}
          </h2>
          {listaEdu}
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Education
