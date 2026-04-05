/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { useLayoutEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Menu from './components/organisms/Menu';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

/*/Pages
const Index = lazy(() => import('./pages/Index'))
const Test = lazy(() => import('./pages/Test'))
const NotFound = lazy(() => import('./pages/_404'))
const Education = lazy(() => import('./pages/Education'))
const DBD = lazy(() => import('./pages/DBD'))
const VS = lazy(() => import('./pages/Minerva'))
const NX = lazy(() => import('./pages/NxInventory'))
const Selene = lazy(() => import('./pages/Selene'))
const About = lazy(() => import('./pages/About'))*/

import Index from './pages/Index';
import Test from './pages/Test';
import _404 from './pages/_404';
import Education from './pages/Education';
import DBD from './pages/projects/DBD';
import Minerva from './pages/projects/Minerva';
import NxInventory from './pages/projects/NxInventory';
import Selene from './pages/projects/Selene';
import About from './pages/About';

//Locales
import global_en from './locales/en/translation.json';
import global_es from './locales/es/translation.json';
//Dragonball-dle
import dbd_en from './locales/en/dbd.json';
import dbd_es from './locales/es/dbd.json';
//Minerva I
import minerva_en from './locales/en/minerva.json';
import minerva_es from './locales/es/minerva.json';
//SELENE III
import selene_en from './locales/en/selene.json';
import selene_es from './locales/es/selene.json';

//About me
import about_en from './locales/en/about.json';
import about_es from './locales/es/about.json';

import { create } from 'zustand';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    resources: {
      'en-EN': {
        translation: global_en,
        dbd: dbd_en,
        minerva: minerva_en,
        selene: selene_en,
        about: about_en,
      },
      'es-ES': {
        translation: global_es,
        dbd: dbd_es,
        minerva: minerva_es,
        selene: selene_es,
        about: about_es,
      },
    },
    fallbackLng: 'en-EN',
  });

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

function App() {
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
    measurementId: import.meta.env.VITE_measurementId,
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);

  return (
    <BrowserRouter>
      <Switch />
    </BrowserRouter>
  );
}

export const useHire = create((set) => ({
  hire: false,
}));

const useMenu = (isLanding) => {
  const [show, setShow] = useState(isLanding);

  return {
    show,
    setShow,
  };
};

/**
 *
 * 0 projects
 * 1 miscellany
 * 2 experience
 * 3 education
 * 4 contact
 *
 */
export const useSubmenu = create((set) => ({
  submenu: 0,
  setSubmenu: (s) => set(() => ({ submenu: s })),
}));

const MenuSwitch = ({ setShow, show, location }) => {
  return (
    <div
      onClick={() => {
        setShow(!show);
      }}
      className='fixed top-7 right-7 up-flat out-rounded rounded-full! p-1.5 2xl:p-2 hover:cursor-pointer'
    >
      {show && <XMarkIcon className='size-6 md:size-7 stroke-2' />}
      {!show && <Bars2Icon className='size-6 md:size-7 stroke-2' />}
    </div>
  );
};

const Switch = () => {
  const location = useLocation();
  const { show, setShow, submenu } = useMenu(location.pathname == '/');

  useLayoutEffect(() => {
    if (location.pathname == '/') {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [location]);

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('pepercfoundry-theme');
    if (savedTheme) {
      document.body.setAttribute('data-theme', savedTheme);
    }
  }, []);

  useLayoutEffect(() => {
    document.body.setAttribute('data-menu', show ? 'open' : 'close');
  }, [show, location]);

  return (
    <>
      <Routes location={location} key={location.pathname + ':'}>
        <Route path='/' element={<Index />} />
        <Route path='/education' element={<Education />} />
        <Route path='/dragonballdle' element={<DBD />} />
        <Route path='/minerva' element={<Minerva />} />
        <Route path='/nx-inventory' element={<NxInventory />} />
        <Route path='/selene' element={<Selene />} />
        <Route path='/about' element={<About />} />
        <Route path='/test' element={<Test />} />
        <Route path='*' element={<_404 />} />
      </Routes>

      <Menu key={'menu'} fixed={true} />

      {location.pathname !== '/' && (
        <MenuSwitch setShow={setShow} show={show} location={location} />
      )}
    </>
  );
};

export default App;
