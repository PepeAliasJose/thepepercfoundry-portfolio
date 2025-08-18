import { memo, useState } from 'react'
import ThemeSwitch from '../molecules/ThemeSwitch'

import ListItem from '../atoms/ListItem'
import { AnimatePresence, motion } from 'motion/react'
import { MotionVideo } from '../atoms/MotionVideo'
import { MotionImg } from '../atoms/MotionImg'
import LangSwitch from '../molecules/LangSwitch'

import { useTranslation } from 'react-i18next'
import { useSubmenu } from '../../App'
import { useLocation } from 'react-router-dom'

function Menu () {
  const { submenu, setSubmenu } = useSubmenu()
  const location = useLocation()

  const [hero, updateHero] = useState(0)
  const { t } = useTranslation()

  const menuList = t('menu.header', { returnObjects: true })

  const menu = menuList.map((x, i) => (
    <SectionButton
      key={i}
      {...x}
      option={i}
      selected={submenu}
      onClick={() => {
        setSubmenu(i)
      }}
    />
  ))

  //Alternar si esta en /
  const def =
    location.pathname == '/' ? (
      <Landing key={'default'} />
    ) : (
      <Logo key={'logo'} />
    )

  //Lista de cosas que mostrar en el contenido
  const hero_content = [
    [
      def,
      <MotionVideo key={'dbd'} src={'projectsResources/dbd/dbd_hero.webm'} />,
      <MotionVideo
        key={'daw'}
        src={'projectsResources/minerva/daw_hero.webm'}
      />,
      <MotionImg
        key={'nxi'}
        src={'projectsResources/nxi/nx-inventory.webp'}
        left
      />,
      <MotionImg key={'rob'} src={'projectsResources/rob/rob_wallp.webp'} />
    ],
    [def],
    [def],
    [def],
    [def]
  ]

  const lista = [
    <ProjectList update_hero={updateHero} />,
    <Miscellany updateHero={updateHero} />,
    <ExperienceList update_hero={updateHero} />,
    <StudiesList update_hero={updateHero} />,
    <ContactList update_hero={updateHero} />
  ]

  return (
    <motion.div
      key={'menu'}
      initial={{ backdropFilter: 'blur(0px)', opacity: 0 }}
      animate={{ backdropFilter: 'blur(50px)', opacity: 1 }}
      exit={{ backdropFilter: 'blur(0px)', opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut', delay: 0 }}
      className='fixed top-0 left-0 w-screen h-dvh overflow-clip inline-flex '
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut', delay: 0 }}
        className=' w-full h-dvh  hidden sm:block relative '
      >
        <AnimatePresence mode='sync'>
          <motion.section
            key={'hero_content'}
            id='hero_content'
            className=' w-full h-dvh  hidden sm:block relative'
          >
            {hero_content[submenu][hero]}
          </motion.section>
        </AnimatePresence>
      </motion.div>

      <motion.section
        key={'lateral_menu'}
        id='Lateral_menu'
        initial={{ translateX: '100%' }}
        animate={{ translateX: '0%' }}
        exit={{ translateX: '100%' }}
        transition={{ duration: 0.25, ease: 'easeInOut', delay: 0 }}
        className=' w-full sm:w-sm lg:w-full  xl:w-4xl
       h-dvh lg:min-w-xl flex flex-col justify-between bg-[var(--bg)]'
      >
        <header
          className='inline-flex p-7 py-7 pr-24 font-semibold items-center w-full overflow-scroll
        text-nowrap hide-scroll relative'
        >
          {menu}
        </header>
        <main
          className='max-h-full w-full overflow-scroll hide-scroll
         flex flex-col gap-0 text-5xl lg:text-7xl font-bold koulen py-5 '
        >
          {lista[submenu]}
        </main>
        <footer className='inline-flex gap-4 px-7 py-5 font-semibold items-center'>
          <p className=' mr-auto '>{t('menu.about')}</p>
          <ThemeSwitch />
          <LangSwitch />
        </footer>
      </motion.section>
    </motion.div>
  )
}

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
        <h1
          className='text-4xl md:text-6xl w-min font-bold uppercase
          text-center'
        >
          {t('menu.main.title')}
        </h1>
        <img
          alt='hero_main'
          width={700}
          height={400}
          src='/hero_test_1.png'
          className='-mt-0'
        />
        <h2 className='text-center md:text-lg'>{t('menu.main.subtitle')}</h2>
        <p
          className=' md:text-lg font-semibold flex flex-row gap-2 up bg-blue-400
        px-4 py-2 text-white'
        >
          {t('menu.main.hire')}
        </p>
      </div>
    </motion.div>
  )
}

const Logo = ({ children }) => {
  const { t } = useTranslation()
  return (
    <motion.div
      key={'div_hero'}
      id='div_hero'
      initial={{ opacity: 0 }}
      animate={{ opacity: 0, delay: 1000 }}
      className='w-full object-cover h-full absolute p-10 lg:p-20 default'
    ></motion.div>
  )
}

const ProjectList = memo(({ update_hero }) => {
  const { t } = useTranslation()
  const projects = t('menu.projects', { returnObjects: true })
  const l = projects.map((x, i) => {
    return (
      <ListItem
        key={'Project-' + (i + 1)}
        hover={() => update_hero(i + 1)}
        unHover={() => update_hero(0)}
        {...x}
      />
    )
  })
  return <>{l}</>
})

const Miscellany = memo(update_hero => {
  const { t } = useTranslation()
  const experience = t('menu.miscellany', { returnObjects: true })

  const l = experience.map((x, i) => {
    return (
      <ListItem
        size={'text-4xl md:text-5xl mb-2'}
        key={'miscellany-' + (i + 1)}
        {...x}
      />
    )
  })

  return <>{l}</>
})

const ExperienceList = memo(update_hero => {
  const { t } = useTranslation()
  const experience = t('menu.experience', { returnObjects: true })

  const l = experience.map((x, i) => {
    return <ListItem key={'Experience-' + (i + 1)} {...x} />
  })

  return <>{l}</>
})

const StudiesList = memo(() => {
  const { t } = useTranslation()
  const education = t('menu.education', { returnObjects: true })

  const l = education.map((x, i) => {
    return <ListItem key={'Education-' + (i + 1)} {...x} />
  })

  return <>{l}</>
})

const ContactList = memo(() => {
  return (
    <div className='flex flex-col gap-2 text-3xl lg:text-4xl px-7 bio-sans'>
      <p>GitHub</p>
      <p>LinkedIn</p>
      <p>CV</p>
      <p>781peperc@gmail.com</p>
    </div>
  )
})

const SectionButton = memo(({ onClick, option, selected, content }) => {
  return (
    <p
      onClick={onClick}
      className={
        ' hover:cursor-pointer p-2 px-4 ' + (option == selected && ' down ')
      }
    >
      {content}
    </p>
  )
})

export default Menu

/*
<div className=' fixed top-7 right-7 up out-rounded p-2 md:p-2.5'>
            <XMarkIcon className='size-6 md:size-7 ' />
          </div>
*/
