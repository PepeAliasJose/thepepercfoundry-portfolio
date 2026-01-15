import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

function OptionMenu({ menu }) {
  const location = useLocation();
  const ref = useRef();
  const list = useRef();

  const [buttonBack, setBb] = useState(false);
  const [buttonForward, setBf] = useState(true);

  function updateNavButtons(scroll) {
    if (scroll <= 0) {
      setBb(false);
      setBf(false);
      return;
    } else {
      setBb(true);
      setBf(true);
    }
    //No son estados excluyentes se dan los dos en pantallas muy anchas
    if (ref.current.scrollLeft < 10) {
      setBb(false);
    }
    if (ref.current.scrollLeft >= scroll - 1) {
      setBf(false);
    }
  }

  useEffect(() => {
    //Update when screen changes
    const f = () => {
      let scroll = list.current.offsetWidth - ref.current.offsetWidth;
      updateNavButtons(scroll);
    };

    window.addEventListener('resize', f);

    return () => {
      window.removeEventListener('resize', f);
    };
  }, []);

  useEffect(() => {
    let scroll = list.current.offsetWidth - ref.current.offsetWidth;
    updateNavButtons(scroll);

    ref.current.addEventListener('scroll', () => {
      scroll = list.current.offsetWidth - ref.current.offsetWidth;
      updateNavButtons(scroll);
    });

    return () =>
      ref?.current?.removeEventListener('scroll', () => {
        scroll = list.current.offsetWidth - ref.current.offsetWidth;
        updateNavButtons(scroll);
      });
  }, []);

  return (
    <div className='w-full relative'>
      {buttonBack && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className='absolute top-7 up-flat out-rounded rounded-full p-2
      hover:cursor-pointer'
        >
          <ChevronLeftIcon
            onClick={() => {
              ref.current.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
              });
            }}
            className='size-5 md:size-6 stroke-2 '
          />
        </motion.div>
      )}
      {buttonForward && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className={
            'absolute top-7 up-flat out-rounded rounded-full p-2 hover:cursor-pointer' +
            (location.pathname !== '/' ? ' right-12 ' : ' right-0')
          }
        >
          <ChevronRightIcon
            onClick={() => {
              ref.current.scroll({
                top: 0,
                left: 10000,
                behavior: 'smooth',
              });
            }}
            className='size-5 md:size-6 stroke-2 '
          />
        </motion.div>
      )}

      <div ref={ref} className=' w-full overflow-scroll hide-scroll'>
        <div ref={list} className='inline-flex py-7 pb-10 items-center pr-12 '>
          {menu}
        </div>
      </div>
    </div>
  );
}

export default OptionMenu;
