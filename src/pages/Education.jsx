import { useTranslation } from 'react-i18next'
import DefaultArticle from '../components/molecules/DefaultArticle'
import StudyArticle from '../components/molecules/StudyArticle'
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline'

function Education () {
  const { t } = useTranslation()

  const listaExp = t('education.experience', { returnObjects: true }).map(
    (exp, i) => <DefaultArticle key={i + 0.1} {...exp} />
  )

  const listaEdu = t('education.studies', { returnObjects: true }).map(
    (exp, i) => <StudyArticle key={i + 0.1} {...exp} />
  )

  return (
    <>
      <header className='mt-15 md:mt-20'></header>
      <main id='main-content' className='flex flex-col gap-24'>
        <section className='mx-auto w-full max-w-2xl md:max-w-4xl px-5 md:p-10 flex flex-col gap-10'>
          <h2 className='text-2xl md:text-4xl font-semibold inline-flex gap-4 items-center'>
            <BriefcaseIcon className='size-6 md:size-8' />
            Experiencia profesional
          </h2>
          {listaExp}
        </section>
        <section className='mx-auto w-full max-w-2xl md:max-w-4xl px-5 md:p-10 flex flex-col gap-10'>
          <h2 className='text-2xl md:text-4xl font-semibold inline-flex gap-4 items-center '>
            <AcademicCapIcon className='size-6 md:size-8' />
            Estudios
          </h2>
          {listaEdu}
        </section>
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default Education
