import { motion } from 'motion/react';
export const MotionImg = ({ src, left = false, pos, selected }) => {
  return (
    <motion.img
      key={'image_hero'}
      initial={{ opacity: 0 }}
      animate={{
        opacity: pos == selected ? 1 : 0,
        transition: { duration: 0.2, ease: 'easeIn' },
      }}
      exit={{ opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } }}
      src={src}
      alt='hero_image'
      width={1200}
      className={
        'w-full object-cover h-full absolute col-start-1 row-start-1 ' +
        (left ? ' object-left ' : '  object-right ') +
        (pos == selected ? ' opacity-100 ' : ' opacity-0')
      }
    />
  );
};
