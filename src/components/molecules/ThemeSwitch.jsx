import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useLayoutEffect, useState } from 'react'

function ThemeSwitch () {
  const [currentTheme, setCurrentTheme] = useState('dark')
  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('pepercfoundry-theme')
    if (savedTheme) {
      setCurrentTheme(savedTheme)
      document.body.setAttribute('data-theme', savedTheme)
    }
  }, [])

  function updateTheme (mode) {
    localStorage.setItem('pepercfoundry-theme', mode)
    setCurrentTheme(mode)
    document.body.setAttribute('data-theme', mode)
  }

  return (
    <div className='inline-flex gap-2 items-center justify-center '>
      <div
        style={{ borderRadius: '100%' }}
        className={currentTheme == 'light' && ' up p-1 '}
      >
        <div className={currentTheme == 'light' && ' down rounded-full'}>
          <div
            className={
              ' hover:cursor-pointer p-1.5 ' +
              (currentTheme == 'light' && ' text-yellow-400')
            }
            onClick={() => {
              updateTheme('light')
            }}
          >
            <SunIcon className='size-6 md:size-7 xl:size-8' />
          </div>
        </div>
      </div>
      <div
        style={{ borderRadius: '100%' }}
        className={currentTheme == 'dark' && ' up p-1'}
      >
        <div className={currentTheme == 'dark' && ' down rounded-full'}>
          <div
            className={
              ' hover:cursor-pointer p-1.5 ' +
              (currentTheme == 'dark' && ' text-cyan-500')
            }
            onClick={() => {
              updateTheme('dark')
            }}
          >
            <MoonIcon className='size-6 md:size-7 xl:size-8' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSwitch
