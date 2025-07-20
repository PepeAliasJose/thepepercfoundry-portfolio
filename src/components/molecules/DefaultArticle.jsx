function DefaultArticle ({
  title,
  highlight,
  date,
  content,
  company,
  size,
  id
}) {
  const data = content.split(':').map((info, i) => {
    return <p key={title + '-' + i}>{info}</p>
  })

  return (
    <article id={id} className={'flex flex-col gap-2' + (size ? size : '')}>
      <div className='flex flex-col md:flex-row gap-10 md:gap-0'>
        <section className='flex flex-col gap-0 w-full max-w-72 px-0 '>
          <h3 className=' w-fit text-xl font-bold text-[var(--hl)]'>{title}</h3>
          <h4 className='font-semibold text-xl  whitespace-nowrap'>
            {company}
          </h4>
          <div className='font-normal self-start text-xs mt-1'>{date}</div>
        </section>
        <section className='max-w-lg w-full ml-auto'>{data}</section>
      </div>
    </article>
  )
}

export default DefaultArticle
