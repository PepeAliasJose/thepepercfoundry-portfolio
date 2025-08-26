import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'

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
        <h2
          className='text-4xl font-bold uppercase
          text-center'
        >
          {t('menu.main.title')}
        </h2>
        <img
          alt='hero_main'
          width={700}
          height={400}
          src='/hero_test_1.png'
          className='-mt-0'
        />
        <h2 className='text-center md:text-lg'>{t('menu.main.subtitle')}</h2>
        <h1
          className=' md:text-lg font-semibold flex flex-row gap-2 up bg-blue-400
        px-4 py-2 text-white'
        >
          {t('menu.main.hire')}
        </h1>
      </div>
    </motion.div>
  )
}

export default Landing
