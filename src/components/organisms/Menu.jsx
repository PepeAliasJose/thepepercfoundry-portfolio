import { memo, useState } from 'react'
import ThemeSwitch from '../molecules/ThemeSwitch'

import ListItem from '../atoms/ListItem'
import { AnimatePresence, motion } from 'motion/react'
import { MotionVideo } from '../atoms/MotionVideo'
import { MotionImg } from '../atoms/MotionImg'
import LangSwitch from '../molecules/LangSwitch'

import { useTranslation } from 'react-i18next'

function Menu () {
  const [menuSelected, setMenuSelected] = useState(0)
  const [hero, updateHero] = useState(0)
  const { t } = useTranslation()

  const menuList = t('menu.header', { returnObjects: true })

  const menu = menuList.map((x, i) => (
    <SectionButton
      key={i}
      {...x}
      option={i}
      selected={menuSelected}
      onClick={() => {
        setMenuSelected(i)
      }}
    />
  ))

  //Lista de cosas que mostrar en el contenido
  const hero_content = [
    [
      <MotionDiv key={'default'} />,
      <MotionVideo key={'dbd'} src={'projectsResources/dbd/dbd_hero.webm'} />,
      <MotionVideo key={'daw'} src={'projectsResources/daw/daw_hero.webm'} />,
      <MotionImg
        key={'nxi'}
        src={'projectsResources/nxi/nx-inventory.webp'}
        left
      />,
      <MotionImg key={'rob'} src={'projectsResources/rob/rob_wallp.webp'} />
    ],
    [<MotionDiv key={'default'} />],
    [<MotionDiv key={'default'} />],
    [<MotionDiv key={'default'} />]
  ]

  const lista = [
    <ProjectList update_hero={updateHero} />,
    <ExperienceList update_hero={updateHero} />,
    <StudiesList update_hero={updateHero} />,
    <ContactList update_hero={updateHero} />
  ]

  return (
    <motion.div
      key={'menu'}
      initial={{ backdropFilter: 'blur(0px)' }}
      animate={{ backdropFilter: 'blur(25px)' }}
      exit={{ backdropFilter: 'blur(0px)' }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className='fixed top-0 left-0  w-screen h-dvh overflow-clip inline-flex bg-[var(--bgT)]'
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className=' w-full h-dvh  hidden sm:block relative'
      >
        <AnimatePresence mode='sync'>
          <motion.section
            key={'hero_content'}
            id='hero_content'
            className=' w-full h-dvh  hidden sm:block relative'
          >
            {hero_content[menuSelected][hero]}
          </motion.section>
        </AnimatePresence>
      </motion.div>

      <motion.section
        key={'lateral_menu'}
        id='Lateral_menu'
        initial={{ translateX: '100%' }}
        animate={{ translateX: '0%' }}
        exit={{ translateX: '100%' }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className=' w-full sm:w-sm lg:w-full  xl:w-4xl
       h-dvh lg:min-w-xl flex flex-col justify-between bg-[var(--bgT)]'
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
          {lista[menuSelected]}
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

const MotionDiv = ({ children }) => {
  const { t } = useTranslation()
  return (
    <motion.div
      key={'div_hero'}
      id='div_hero'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='w-full object-cover h-full absolute p-20'
    >
      <div className='flex flex-col justify-center gap-3 items-start h-full'>
        <h1 className=' text-6xl text-center font-semibold w-fit'>
          {t('menu.main.title')}
        </h1>
        <h2 className='text-center text-lg'>{t('menu.main.subtitle')}</h2>
        <p
          className='text-[var(--hl)] text-lg font-semibold flex flex-row gap-2 up out-rounded
        px-4 py-2'
        >
          {t('menu.main.hire')}
        </p>
      </div>
      {children}
    </motion.div>
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
        ' hover:cursor-pointer p-2 px-4 ' +
        (option == selected && ' down in-rounded')
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
