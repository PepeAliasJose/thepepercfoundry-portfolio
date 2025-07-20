import { useTranslation } from 'react-i18next'
import DefaultArticle from '../components/molecules/DefaultArticle'

function Education () {
  const { t } = useTranslation()

  const listaExp = t('education.experience', { returnObjects: true }).map(
    (exp, i) => (
      <DefaultArticle
        key={i + 0.1}
        title={exp.title}
        highlight={exp.highlight}
        company={exp.company}
        date={exp.date}
        content={exp.content}
      />
    )
  )

  const listaEdu = t('education.studies', { returnObjects: true }).map(
    (exp, i) => (
      <DefaultArticle
        key={i + 0.1}
        title={exp.title}
        highlight={exp.highlight}
        company={exp.company}
        date={exp.date}
        content={exp.content}
      />
    )
  )

  return (
    <>
      <header></header>
      <main id='main-content' className='flex flex-col gap-20'>
        <section className='mx-auto w-full max-w-4xl px-5'>
          <h2>Experiencia profesional</h2>
          {listaExp}
        </section>
        <section className='mx-auto w-full max-w-4xl px-5'>
          <h2>Estudios</h2>
          {listaEdu}
        </section>
        <section className='mx-auto w-full max-w-4xl px-5'>
          <h2>Estudios</h2>
          {listaEdu}
        </section>
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default Education
