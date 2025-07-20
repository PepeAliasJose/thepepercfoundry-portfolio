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
        className={
          ' hover:cursor-pointer ' +
          (currentTheme == 'light'
            ? 'down in-rounded p-2  text-yellow-400'
            : ' rounded-[25px] p-2')
        }
        onClick={() => {
          updateTheme('light')
        }}
      >
        <SunIcon className='size-6 md:size-7 xl:size-8' />
      </div>
      <div
        className={
          ' hover:cursor-pointer ' +
          (currentTheme == 'dark'
            ? 'down in-rounded p-2 text-cyan-500'
            : ' rounded-[25px] p-2')
        }
        onClick={() => {
          updateTheme('dark')
        }}
      >
        <MoonIcon className='size-6 md:size-7 xl:size-8' />
      </div>
    </div>
  )
}

export default ThemeSwitch
