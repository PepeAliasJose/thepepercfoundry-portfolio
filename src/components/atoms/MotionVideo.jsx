import { motion } from 'motion/react'
export const MotionVideo = ({ src }) => {
  return (
    <motion.video
      key={'video_hero'}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, ease: 'easeIn' }
      }}
      exit={{ opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } }}
      src={src}
      autoPlay
      muted
      loop
      className='w-full object-cover h-full absolute'
    />
  )
}
