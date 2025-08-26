import { Link, useLocation } from 'react-router-dom'

const ListItem = ({
  hover,
  unHover,
  click,
  content,
  subtitle,
  link,
  size = '',
  newTab = false
}) => {
  const location = useLocation()

  return (
    <Link
      to={link ? link : '#'}
      onMouseEnter={hover}
      onMouseLeave={unHover}
      target={newTab ? '_blank' : ''}
      rel={newTab ? 'noopener noreferrer' : ''}
      className={
        ' hover:cursor-pointer px-7 leading-none overflow-clip hover:text-[var(--hover)] pb-2' +
        (location.pathname == link ? ' text-[var(--hl)] ' : '')
      }
    >
      <p className={size}>{content}</p>
      {subtitle && (
        <p className='text-lg -mt-2 bio-sans leading-none'>{subtitle}</p>
      )}
    </Link>
  )
}

export default ListItem
