import { ArrowTrendingUpIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'
import GraphBar from '../components/atoms/GraphBar'
import Footer from '../components/organisms/Footer'
import { useTranslation } from 'react-i18next'

function DBD () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { t } = useTranslation(['dbd'])

  return (
    <>
      <header className='p-10 pb-5 md:pb-10 flex justify-between items-center flex-col h-svh'>
        <div className='flex flex-col gap-2'>
          <p className='ml-1 text-center font-semibold text-[var(--soft-text)]'>
            {t('subtitle')}
          </p>
          <h1 className='text-5xl md:text-6xl md:mb-10 font-black koulen text-center leading-none'>
            {t('title')}
          </h1>
        </div>

        <picture className='max-w-96 md:max-w-3xl 2xl:max-w-5xl'>
          <source
            srcSet={t('hero_large')}
            media='(width >= 48rem)'
            width={1400}
          />
          <img
            className='mx-auto -mt-[17%] -mb-[14%] md:my-0'
            src={t('hero_small')}
            width={350}
          />
        </picture>

        <div className='inline-flex gap-4 justify-center '>
          <div className='up out-rounded py-2 px-4 hover:cursor-pointer'>
            <a
              href='https://github.com/PepeAliasJose/dragonballdle-game'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
          </div>
          <a
            href='https://dragonballdle.web.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div
              className='up bg-blue-400 text-white py-2 px-4 
            inline-flex gap-2 text-nowrap items-center hover:cursor-pointer'
            >
              {t('link')}
              <ArrowTrendingUpIcon className='size-5 text-white' />
            </div>
          </a>
        </div>
      </header>
      <main>
        <section className='mt-0'>
          <article className='p-5'>
            <ul
              className='inline-flex text-nowrap gap-2 md:gap-3 
             text-sm md:text-lg font-semibold flex-wrap justify-center w-full'
            >
              <li className='up px-4 py-1.5'>React JS</li>
              <li className='up px-4 py-1.5'>Tailwind CSS</li>
              <li className='up px-4 py-1.5'>CSS</li>
              <li className='up px-4 py-1.5'>i18n</li>
              <li className='up px-4 py-1.5'>Firebase</li>
              <li className='up px-4 py-1.5'>Google Analytics</li>
            </ul>
          </article>
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
                  className='max-w-[130vw] self-end md:w-full md:max-w-2xl xl:max-w-3xl -mr-10 md:mr-0'
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
            <h2 className='text-3xl md:text-5xl font-bold helvetica w-fit mx-auto'>
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
  )
}

function DoubleBars ({ children, label }) {
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='inline-flex gap-1.5'>{children}</div>
      {label && <p>{label}</p>}
    </div>
  )
}

function Tag ({ text, color = 'bg-blue-500' }) {
  return (
    <h4 className='inline-flex gap-2 items-center'>
      <div className={'size-5 rounded-full up ' + color} /> {text}
    </h4>
  )
}

export default DBD

/*
<GraphBar
                      data={'28.000'}
                      tag={'Abril'}
                      height='100%'
                      color='bg-purple-500 '
                    />

<GraphBar data={'31€'} tag={'Abril'} height='100%' />

*/
