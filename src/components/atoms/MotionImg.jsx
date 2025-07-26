import { motion } from 'motion/react'
export const MotionImg = ({ src, left = false }) => {
  return (
    <motion.img
      key={'image_hero'}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, ease: 'easeIn' }
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeIn' }}
      src={src}
      alt='hero_image'
      width={1200}
      className={
        'w-full object-cover h-full absolute ' +
        (left ? ' object-left ' : '  object-right ')
      }
    />
  )
}
