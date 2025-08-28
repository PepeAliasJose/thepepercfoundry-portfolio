import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'

const Landing = () => {
  const { t } = useTranslation()
  return (
    <motion.div
      key={'div_hero'}
      id='div_hero'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='w-full object-cover h-full absolute p-10 lg:p-20'
    >
      <div className='flex flex-col justify-center items-center gap-3 h-full'>
        <img
          alt='hero_main'
          width={300}
          height={300}
          src='/prc.svg'
          className='-mt-0 '
        />
        <h2 className='text-[calc(100% - 40vw)] font-bold uppercase text-center'>
          {t('menu.main.title')}
        </h2>
        <h1 className='text-center md:text-lg max-w-lg'>
          {t('menu.main.subtitle')}
        </h1>
        <p
          className='font-semibold text-center flex flex-row gap-2 up bg-blue-400
        px-4 py-2 text-white'
        >
          {t('menu.main.hire')}
        </p>
      </div>
    </motion.div>
  )
}

/*
<h2
  className='text-4xl font-bold uppercase
  text-center'
>
  {t('menu.main.title')}
</h2>
*/

export default Landing
