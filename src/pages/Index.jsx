import { useTranslation } from 'react-i18next'

function Index () {
  const { t } = useTranslation()
  return (
    <>
      <header className='p-10 pb-5 md:pb-10 flex justify-between items-center flex-col h-svh'></header>
      <main className='h-svh'></main>
      <footer className=''></footer>
    </>
  )
}
export default Index
