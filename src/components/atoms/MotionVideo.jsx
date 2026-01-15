import { motion } from 'motion/react';
export const MotionVideo = ({ src, pos, selected }) => {
  return (
    <motion.video
      key={'video_hero'}
      initial={{ opacity: 0 }}
      animate={{
        opacity: pos == selected ? 1 : 0,
        transition: { duration: 0.2, ease: 'easeIn' },
      }}
      exit={{
        opacity: 0,
        transition: { duration: 0.2, ease: 'easeIn' },
      }}
      src={src}
      autoPlay
      muted
      loop
      className={'w-full object-cover h-full absolute col-start-1 row-start-1'}
    />
  );
};
