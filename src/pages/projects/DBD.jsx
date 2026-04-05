/* eslint-disable no-unused-vars */
import { LinkIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import GraphBar from '../../components/atoms/GraphBar';
import Footer from '../../components/organisms/Footer';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import AptLi from '../../components/atoms/AptLi';

function DBD() {
  const { t } = useTranslation(['dbd']);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header
        style={{ height: window.innerHeight }} //100svh not working idk
        className='p-10 pb-5 md:pb-10 flex justify-between items-center flex-col '
      >
        <motion.div
          initial={{
            willChange: 'transform',
            scale: 0.875,
            mask: 'radial-gradient(circle at -90vmax -40vmax, rgb(0,0,0) 70vmax, rgba(0,0,0,0) 90vmax)',
          }}
          animate={{
            willChange: 'transform',
            scale: 1,
            mask: 'radial-gradient(circle at 0vmax -40vmax, rgb(0,0,0) 90vmax, rgba(0,0,0,0) 90vmax)',
          }}
          transition={{
            mask: { duration: 1, delay: 0, ease: 'easeIn' },
            scale: { duration: 1, delay: 0, ease: 'easeInOut' },
          }}
          className='flex flex-col gap-2 origin-center'
        >
          <p className='ml-1 text-center font-semibold text-soft-text'>
            {t('subtitle')}
          </p>
          <h1 className='text-5xl sm:text-7xl md:text-8xl font-black koulen text-center leading-none'>
            {t('title')}
          </h1>
        </motion.div>

        <picture className='max-w-96 md:max-w-3xl 2xl:max-w-5xl overflow-visible -z-10'>
          <source
            srcSet={t('hero_large')}
            media='(width >= 48rem)'
            width={1400}
          />
          <motion.img
            initial={{
              willChange: 'transform',
              opacity: 0,
              scale: 1.05,
            }}
            animate={{
              willChange: 'transform',
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.75, delay: 0.2, ease: 'easeOut' }}
            className='mx-auto -mt-[17%] -mb-[14%] md:my-0  object-contain'
            src={t('hero_small')}
            alt='dbd_hero'
            loading='eager'
            width={350}
          />
        </picture>

        <div className='inline-flex gap-4 justify-center items-center '>
          <div
            className='border  border-soft-text rounded-full
           py-1.5 px-4 hover:cursor-pointer hover:text-hover
            hover:border-hover'
          >
            <a
              href='https://github.com/PepeAliasJose/dragonballdle-game'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex gap-2 items-center flex-nowrap'
            >
              <LinkIcon className='size-4 stroke-2 ' />
              GitHub
            </a>
          </div>
          <a
            href='https://dragonballdle.web.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div
              className='rounded-full bg-blue-400 text-white py-2 px-4 
            inline-flex gap-2 text-nowrap items-center hover:cursor-pointer'
            >
              <LinkIcon className='size-4 text-white stroke-2' />
              {t('link')}
            </div>
          </a>
        </div>
      </header>
      <main>
        <section className='p-5'>
          <ul
            className='inline-flex text-nowrap gap-2 md:gap-3 
             text-sm md:text-lg font-semibold flex-wrap justify-center w-full'
          >
            <AptLi>React JS</AptLi>
            <AptLi>Tailwind CSS</AptLi>
            <AptLi>CSS</AptLi>
            <AptLi>i18n</AptLi>
            <AptLi>Firebase</AptLi>
            <AptLi>Google Analytics</AptLi>
          </ul>
        </section>
        <section className='mt-0'>
          <article className='w-full p-10 flex flex-col gap-10 md:gap-10'>
            <h2 className='text-3xl md:text-5xl font-bold helvetica w-fit md:mx-auto'>
              {t('section_1_title')}
            </h2>
            <div className='flex flex-col items-center'>
              <div
                className='w-full flex flex-col-reverse md:flex-row justify-center 
              items-center '
              >
                <img
                  src={t('section_1_image')}
                  width={1000}
                  alt='game_image'
                  className='max-w-[130vw] self-end md:self-start md:w-full md:max-w-2xl xl:max-w-3xl -mr-10 md:mr-0'
                />

                <div
                  className='flex flex-col gap-5 justify-evenly self-start
                text-lg md:text-xl w-fit md:self-auto'
                >
                  <p className=' max-w-96'>{t('section_1_p1')}</p>
                  <p className=' max-w-96'>{t('section_1_p2')}</p>
                </div>
              </div>
            </div>
          </article>
          <article className='w-full p-10 flex flex-col gap-10 md:gap-10'>
            <h2 className='text-3xl md:text-5xl font-bold helvetica w-fit md:mx-auto'>
              {t('section_2_title')}
            </h2>
            <div className='flex flex-col items-center'>
              <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-20 w-full md:w-fit'>
                <div className='inline-flex gap-5 md:gap-20 '>
                  <div className='flex flex-col gap-3 '>
                    <Tag
                      text={t('section_2_graph_user')}
                      color='bg-purple-400'
                    />
                    <Tag text={t('section_2_graph_usage')} />
                    <Tag text={t('section_2_graph_price')} color='bg-red-400' />

                    <div className='inline-flex items-center gap-4 md:gap-10 '>
                      <DoubleBars label={t('section_2_may')}>
                        <GraphBar
                          data={'21.000'}
                          height='h-[100%]'
                          color='bg-purple-400'
                        />
                        <GraphBar data={'150.89GB'} height='h-[100%]' />
                        <GraphBar
                          data={'21€'}
                          height='h-[100%]'
                          color='bg-red-400'
                        />
                      </DoubleBars>
                      <DoubleBars label={t('section_2_june')}>
                        <GraphBar
                          data={'15.000'}
                          height='h-[71.4%]'
                          color='bg-purple-400'
                        />
                        <GraphBar data={'77.5GB'} height='h-[51.36%]' />
                        <GraphBar
                          data={'10€'}
                          height='h-[47.6%]'
                          color='bg-red-400'
                        />
                      </DoubleBars>
                      <DoubleBars label={t('section_2_july')}>
                        <GraphBar
                          data={'16.000'}
                          height='h-[76.19%]'
                          color='bg-purple-400'
                        />
                        <GraphBar data={'17.59GB'} height='h-[11.65%]' />
                        <GraphBar
                          data={'1€'}
                          height='h-[4.76%]'
                          color='bg-red-400'
                        />
                      </DoubleBars>
                    </div>
                  </div>
                </div>

                <div
                  className='flex flex-col gap-5 justify-evenly 
                text-lg md:text-xl w-fit self-start md:self-auto'
                >
                  <p className=' max-w-96 '>{t('section_2_p1')}</p>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

function DoubleBars({ children, label }) {
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='inline-flex gap-1.5'>{children}</div>
      {label && <p>{label}</p>}
    </div>
  );
}

function Tag({ text, color = 'bg-blue-500' }) {
  return (
    <h4 className='inline-flex gap-2 items-center'>
      <div className={'size-5 rounded-full up ' + color} /> {text}
    </h4>
  );
}

export default DBD;

/*
initial={{
  mask: 'radial-gradient(circle at 50% 330%, rgb(0,0,0) 100vh, rgba(0,0,0,0) 150vh)'
}}
animate={{
  mask: 'radial-gradient(circle at 50% 50%, rgb(0,0,0) 100vh, rgba(0,0,0,0) 150vh)'
}}
transition={{ duration: 1, delay: 0.15, ease: 'linear' }}

*/
