import { memo } from 'react';

const MotionVideo = ({ src, pos, selected }) => {
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      className={
        'w-full object-cover h-full absolute col-start-1 row-start-1 transition-opacity duration-200 ' +
        (pos == selected ? ' opacity-100 ' : ' opacity-0')
      }
    />
  );
};

export default memo(MotionVideo);
