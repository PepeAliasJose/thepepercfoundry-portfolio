import { memo, useRef, useState } from 'react';
import ThemeSwitch from '../molecules/ThemeSwitch';

import ListItem from '../atoms/ListItem';
import MotionVideo from '../atoms/MotionVideo';
import MotionImg from '../atoms/MotionImg';
import LangSwitch from '../molecules/LangSwitch';

import { useTranslation } from 'react-i18next';
import { useSubmenu } from '../../App';
import { Link, useLocation } from 'react-router-dom';
import Landing from '../atoms/Landing';
import LinkList from '../molecules/LinkList';
import { LinkIcon } from '@heroicons/react/24/outline';
import OptionMenu from '../molecules/OptionMenu';

function Menu({ fixed }) {
  const header = useRef();
  const { submenu, setSubmenu } = useSubmenu();
  const location = useLocation();

  const [hero, updateHero] = useState(0);
  const { t } = useTranslation();

  const menuList = t('menu.header', { returnObjects: true });

  const menu = menuList.map((x, i) => (
    <SectionButton
      key={i}
      {...x}
      option={i}
      selected={submenu}
      onClick={() => {
        setSubmenu(i);
      }}
    />
  ));

  const index = location.pathname !== '/';

  //Alternar si esta en /
  const def = index ? (
    <Landing key={'default'} />
  ) : (
    <Landing key={'default'} /> //<Logo key={'logo'} />
  );

  //Lista de cosas que mostrar en el contenido
  const hero_content = [
    [
      def,
      <MotionVideo
        key={'daw'}
        src={'projectsResources/minerva/daw_hero.webm'}
      />,

      <MotionVideo key={'dbd'} src={'projectsResources/dbd/dbd_hero.webm'} />,
      <MotionImg
        key={'rob'}
        //TODO: video luz parpadenando con la foto buena
        src={'projectsResources/selene/sel_hero.webp'}
      />,
    ],
    [def],
    [def],
    [def],
    [def],
  ];

  /*
  <MotionImg
  key={'nxi'}
  src={'projectsResources/nxi/nx-inventory.webp'}
  left
/>,
  */

  const lista = [
    <ProjectList update_hero={updateHero} />,
    <Miscellany updateHero={updateHero} />,
    <ExperienceList update_hero={updateHero} />,
    <StudiesList update_hero={updateHero} />,
    <ContactList update_hero={updateHero} />,
  ];

  return (
    <div
      //Blur de pantalla general y foto/video de presentación del proyecto
      className='w-screen h-dvh overflow-clip inline-flex bg-bgT
      open:backdrop-blur-2xl opacity-0 open:opacity-100 
      pointer-events-none open:pointer-events-auto
      transition-all duration-300 
      fixed top-0 left-0 '
    >
      <div
        className='w-full h-dvh hidden md:block 
        relative opacity-0 open:opacity-100 transition-opacity 
        ease-in-out duration-200 open:pointer-events-none'
      >
        <section
          key={'hero_content'}
          id='hero_content'
          className=' w-full h-dvh hidden sm:grid relative grid-cols-1 grid-rows-1'
        >
          {hero == 0 && <Landing key={'default'} />}
          <MotionVideo
            key={'daw'}
            src={'projectsResources/minerva/daw_hero.webm'}
            pos={1}
            selected={hero}
          />

          <MotionVideo
            key={'dbd'}
            src={'projectsResources/dbd/dbd_hero.webm'}
            pos={2}
            selected={hero}
          />

          <MotionImg
            key={'rob'}
            //TODO: video luz parpadenando con la foto buena
            src={'projectsResources/selene/sel_hero.webp'}
            pos={3}
            selected={hero}
          />
        </section>
      </div>

      <section
        //Menu lateral
        key={'lateral_menu'}
        id='Lateral_menu'
        className=' w-full md:max-w-[50vw] lg:w-5xl
        h-dvh lg:min-w-xl 2xl:min-w-2xl 3xl:min-w-5xl 
        flex flex-col justify-between bg-bg
        translate-x-full open:translate-x-0
        transition-transform duration-300 ease-in-out'
      >
        <header
          className='px-7 text-sm md:text-[1rem] font-semibold 
             w-full overflow-clip text-nowrap hide-scroll '
        >
          <div ref={header} className='w-full '>
            <OptionMenu menu={menu} />
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
        <footer className='inline-flex gap-2 md:gap-4 px-7 py-5 font-semibold items-center'>
          <Link
            to={'/about'}
            className=' mr-auto hover:text-hover 2xl:text-lg
           inline-flex gap-1 2xl:gap-2 items-center flex-nowrap underline'
          >
            <LinkIcon className='size-4 stroke-2' />
            {t('menu.about')}
          </Link>
          <ThemeSwitch />
          <LangSwitch />
        </footer>
      </section>
    </div>
  );
}

const ProjectList = memo(({ update_hero }) => {
  const { t } = useTranslation();
  const projects = t('menu.projects', { returnObjects: true });
  const l = projects.map((x, i) => {
    return (
      <ListItem
        key={'Project-' + (i + 1)}
        hover={() => update_hero(i + 1)}
        unHover={() => update_hero(0)}
        {...x}
      />
    );
  });
  return <>{l}</>;
});

const Miscellany = memo((update_hero) => {
  const { t } = useTranslation();

  const experience = t('menu.miscellany', { returnObjects: true });
  const l = experience.map((x, i) => {
    return (
      <ListItem
        size={'text-4xl md:text-5xl mb-2'}
        key={'miscellany-' + (i + 1)}
        newTab
        {...x}
      />
    );
  });
  return <>{l}</>;
});

const ExperienceList = memo((update_hero) => {
  const { t } = useTranslation();
  const experience = t('menu.experience', { returnObjects: true });

  const l = experience.map((x, i) => {
    return <ListItem key={'Experience-' + (i + 1)} {...x} />;
  });

  return <>{l}</>;
});

const StudiesList = memo(() => {
  const { t } = useTranslation();
  const education = t('menu.education', { returnObjects: true });

  const l = education.map((x, i) => {
    return <ListItem key={'Education-' + (i + 1)} {...x} />;
  });

  return <>{l}</>;
});

const ContactList = memo(() => {
  return (
    <div
      className='flex flex-col gap-4 text-4xl md:text-5xl px-7 bio-sans leading-none
    overflow-clip pb-10 '
    >
      <LinkList />
    </div>
  );
});

const SectionButton = memo(({ onClick, option, selected, content }) => {
  return (
    <p
      onClick={onClick}
      className={
        ' hover:cursor-pointer p-2 px-4 2xl:text-lg ' +
        (option == selected ? ' down rounded-full! ' : ' text-soft-text ')
      }
    >
      {content}
    </p>
  );
});

export default Menu;
