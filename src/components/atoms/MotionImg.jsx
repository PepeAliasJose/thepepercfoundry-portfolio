import { memo } from 'react';

const MotionImg = ({ src, left = false, pos, selected }) => {
  return (
    <img
      src={src}
      alt='hero_image'
      width={1200}
      className={
        'w-full object-cover h-full transition-opacity duration-200 absolute col-start-1 row-start-1 ' +
        (left ? ' object-left ' : '  object-right ') +
        (pos == selected ? ' opacity-100 ' : ' opacity-0')
      }
    />
  );
};

export default memo(MotionImg);
