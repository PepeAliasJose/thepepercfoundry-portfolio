import { Link, useLocation } from 'react-router-dom';

const ListItem = ({
  hover,
  unHover,
  click,
  content,
  subtitle,
  link,
  size = '',
  newTab = false,
}) => {
  const location = useLocation();

  return (
    <Link
      to={link ? link : '#'}
      onMouseEnter={hover}
      onMouseLeave={unHover}
      target={newTab ? '_blank' : ''}
      rel={newTab ? 'noopener noreferrer' : ''}
      className={
        ' hover:cursor-pointer mx-7 w-fit leading-none overflow-clip hover:text-hover pb-2' +
        (location.pathname == link ? ' text-hl ' : '')
      }
    >
      <strong className='text-5xl sm:text-6xl md:text-[3.4rem] lg:text-7xl 2xl:text-8xl 3xl:text-9xl koulen'>
        {content}
      </strong>
      {subtitle && (
        <p className='text-sm -mt-1.5 font-normal helvetica leading-none text-soft-text 2xl:text-xl tracking-normal'>
          {subtitle}
        </p>
      )}
    </Link>
  );
};

export default ListItem;
