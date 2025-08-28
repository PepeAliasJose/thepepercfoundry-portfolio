import { lazy, useEffect, useLayoutEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Menu from './components/organisms/Menu'
import { AnimatePresence } from 'motion/react'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

//Pages
const Index = lazy(() => import('./pages/Index'))
const Test = lazy(() => import('./pages/Test'))
const NotFound = lazy(() => import('./pages/_404'))
const Education = lazy(() => import('./pages/Education'))
const DBD = lazy(() => import('./pages/DBD'))
const VS = lazy(() => import('./pages/Minerva'))
const NX = lazy(() => import('./pages/NxInventory'))
const Selene = lazy(() => import('./pages/Selene'))

//Locales
import global_en from './locales/en/translation.json'
import global_es from './locales/es/translation.json'
//Dragonball-dle
import dbd_en from './locales/en/dbd.json'
import dbd_es from './locales/es/dbd.json'
//Minerva I
import minerva_en from './locales/en/minerva.json'
import minerva_es from './locales/es/minerva.json'

import { create } from 'zustand'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    resources: {
      'en-EN': { translation: global_en, dbd: dbd_en, minerva: minerva_en },
      'es-ES': { translation: global_es, dbd: dbd_es, minerva: minerva_es }
    },
    fallbackLng: 'en-EN'
  })

function App () {
  return (
    <BrowserRouter>
      <Switch />
    </BrowserRouter>
  )
}

const useMenu = create(set => ({
  show: true,
  setShow: s => set(state => ({ show: s }))
}))
/**
 *
 * 0 projects
 * 1 experience
 * 2 education
 * 3 contact
 *
 */
export const useSubmenu = create(set => ({
  submenu: 0,
  setSubmenu: s => set(state => ({ submenu: s }))
}))

const MenuSwitch = ({ setShow, show, location }) => {
  return (
    <div
      onClick={() => {
        setShow(!show)
      }}
      className='fixed top-7 right-7 up out-rounded p-2 md:p-1.5 hover:cursor-pointer'
    >
      {show && <XMarkIcon className='size-6 md:size-7 ' />}
      {!show && <Bars2Icon className='size-6 md:size-7 ' />}
    </div>
  )
}

const Switch = () => {
  const location = useLocation()
  const { show, setShow, submenu } = useMenu()

  useEffect(() => {
    if (location.pathname == '/') {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [location])

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('pepercfoundry-theme')
    if (savedTheme) {
      document.body.setAttribute('data-theme', savedTheme)
    }
  }, [])

  useLayoutEffect(() => {
    document.body.setAttribute('data-menu', show)
  }, [show])

  return (
    <>
      <Routes location={location} key={location.pathname + ':'}>
        <Route path='/' element={<Index />} />
        <Route path='/education' element={<Education />} />
        <Route path='/dragonballdle' element={<DBD />} />
        <Route path='/minerva' element={<VS />} />
        <Route path='/nx-inventory' element={<NX />} />
        <Route path='/selene' element={<Selene />} />
        <Route path='/test' element={<Test />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <AnimatePresence>
        {show && <Menu key={'menu'} fixed={true} />}
      </AnimatePresence>

      {location.pathname !== '/' && (
        <MenuSwitch setShow={setShow} show={show} location={location} />
      )}
    </>
  )
}

export default App
