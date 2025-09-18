function Logo ({ color = 'var(--text)' }) {
  return (
    <svg
      width='w-44 md:w-[250px]'
      height='w-44 md:w-[250px]'
      viewBox='0 0 250 250'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-44 md:w-[250px]'
    >
      <path
        d='M113.03 54.5L113.545 56.3203L130.131 115.006L132.638 122.058L166.353 168.741H177.5V182.5H159.278L158.53 181.461L124.923 134.812L91.4727 181.457L90.7246 182.5H72.5V168.741H83.8047L116.872 122.737L102.043 68.0967H90.4248V54.5H113.03Z'
        fill={color}
        stroke={color}
        strokeWidth='5'
      />
      <path
        d='M223.253 68.2725V181.727L125 238.452L26.7471 181.727V68.2725L125 11.5469L223.253 68.2725Z'
        stroke={color}
        strokeWidth='20'
      />
    </svg>
  )
}

export default Logo
