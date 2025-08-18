import { Link } from 'react-router-dom'

const ListItem = ({
  hover,
  unHover,
  click,
  content,
  subtitle,
  link,
  size = ''
}) => {
  return (
    <Link
      to={link ? link : '#'}
      onMouseEnter={hover}
      onMouseLeave={unHover}
      className=' hover:cursor-pointer px-7 leading-none overflow-clip hover:text-[var(--hl)] pb-2'
    >
      <p className={size}>{content}</p>
      {subtitle && (
        <p className='text-lg -mt-2 bio-sans leading-none'>{subtitle}</p>
      )}
    </Link>
  )
}

export default ListItem
