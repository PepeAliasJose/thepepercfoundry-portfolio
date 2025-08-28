import { memo, useRef, useState } from 'react'
import ThemeSwitch from '../molecules/ThemeSwitch'

import ListItem from '../atoms/ListItem'
import { AnimatePresence, motion } from 'motion/react'
import { MotionVideo } from '../atoms/MotionVideo'
import { MotionImg } from '../atoms/MotionImg'
import LangSwitch from '../molecules/LangSwitch'

import { useTranslation } from 'react-i18next'
import { useSubmenu } from '../../App'
import { useLocation } from 'react-router-dom'
import Landing from '../atoms/Landing'

function Menu ({ fixed }) {
  const header = useRef()
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

  const index = location.pathname !== '/'

  //Alternar si esta en /
  const def = index ? (
    <Landing key={'default'} />
  ) : (
    <Landing key={'default'} /> //<Logo key={'logo'} />
  )

  //Lista de cosas que mostrar en el contenido
  const hero_content = [
    [
      def,
      <MotionVideo
        key={'daw'}
        src={'projectsResources/minerva/daw_hero.webm'}
      />,
      <MotionImg
        key={'nxi'}
        src={'projectsResources/nxi/nx-inventory.webp'}
        left
      />,
      <MotionVideo key={'dbd'} src={'projectsResources/dbd/dbd_hero.webm'} />,
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
      //Blur de pantalla general y foto/video de presentación del proyecto
      key={'menu'}
      initial={{
        backdropFilter: index ? 'blur(0px)' : 'blur(50px)',
        opacity: index ? 0 : 1
      }}
      animate={{ backdropFilter: 'blur(50px)', opacity: 1 }}
      exit={{ backdropFilter: 'blur(0px)', opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut', delay: 0 }}
      className={
        'w-screen h-dvh overflow-clip inline-flex bg-[var(--bgT)] ' +
        (fixed ? ' fixed top-0 left-0 ' : '')
      }
    >
      <motion.div
        initial={{ opacity: index ? 0 : 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut', delay: 0 }}
        className=' w-full h-dvh  hidden md:block relative '
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
        //Menu lateral
        key={'lateral_menu'}
        id='Lateral_menu'
        initial={{ translateX: index ? '100%' : '0%' }}
        animate={{ translateX: '0%' }}
        exit={{ translateX: '100%' }}
        transition={{ duration: 0.25, ease: 'easeInOut', delay: 0 }}
        className='w-full md:max-w-[50vw] lg:w-5xl
       h-dvh lg:min-w-xl flex flex-col justify-between bg-[var(--bg)]'
      >
        <header
          className='px-7 text-sm md:text-[1rem] font-semibold 
             w-full overflow-clip text-nowrap hide-scroll '
        >
          <div ref={header} className='w-full'>
            <motion.div
              dragConstraints={header}
              drag='x'
              className='inline-flex py-7 items-center pr-14 hover:cursor-grab active:cursor-grabbing'
            >
              {menu}
            </motion.div>
          </div>
        </header>
        <main className='max-h-full w-full overflow-hidden '>
          <div
            className=' h-full flex flex-col gap-0 text-5xl lg:text-7xl 
          font-bold koulen overflow-scroll hide-scroll pt-10'
          >
            {lista[submenu]}
          </div>
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
        newTab
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
      <p>781peperc@gmail.com</p>
      <p>LinkedIn</p>
      <p>CV</p>
      <p>GitHub</p>
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
