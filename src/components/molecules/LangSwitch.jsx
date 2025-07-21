import i18n from 'i18next'
import { useState } from 'react'

function LangSwitch () {
  const [lang, setLang] = useState(i18n.language)

  function changeLang () {
    i18n.changeLanguage(lang == 'es-ES' ? 'en-EN' : 'es-ES')
    setLang(i18n.language)
    //console.log(i18n.language)
  }

  return (
    <div
      className={
        (lang == 'es-ES' ? ' up out-rounded ' : ' down in-rounded ') +
        ' w-28 p-2 md:p-3 px-3 md:px-5 hover:cursor-pointer text-center '
      }
      onClick={changeLang}
    >
      {lang == 'es-ES' && <p>Español</p>}
      {lang == 'en-EN' && <p>English</p>}
    </div>
  )
}

export default LangSwitch
