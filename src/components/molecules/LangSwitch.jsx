import i18n from 'i18next';
import { useState } from 'react';

function LangSwitch() {
  const [lang, setLang] = useState(i18n.language);

  function changeLang() {
    i18n.changeLanguage(lang == 'es-ES' ? 'en-EN' : 'es-ES');
    setLang(i18n.language);
  }

  return (
    <div
      className='down w-32 hover:cursor-pointer text-center 
      relative '
      onClick={changeLang}
    >
      <div
        className={
          'absolute h-8 2xl:h-8 m-1 w-16 rounded-full bg-semi transition-transform ' +
          (lang == 'es-ES' ? ' translate-x-14 ' : ' translate-x-0 ')
        }
      >
        <div className='size-full' />
      </div>
      <div className='inline-flex justify-between items-center w-full p-2 2xl:h-10'>
        <p className='w-full 2xl:text-lg'>ES</p>
        <p className='w-full 2xl:text-lg'>ENG</p>
      </div>
    </div>
  );
}

export default LangSwitch;
