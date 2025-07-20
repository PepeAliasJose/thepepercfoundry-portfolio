import { StarIcon } from '@heroicons/react/24/solid'

function StudyArticle ({
  title,
  highlight,
  date,
  content,
  school,
  size,
  id,
  hl
}) {
  const data = content.split(':').map((info, i) => {
    return <p key={title + '-' + i}>{info}</p>
  })

  return (
    <article id={id} className={'flex flex-col gap-2' + (size ? size : '')}>
      <h3 className=' w-fit text-xl md:text-3xl font-bold text-[var(--hl)]'>
        {title}
      </h3>
      <div className='flex flex-col md:flex-row gap-10 md:gap-0'>
        <section className='flex md:flex-col gap-3 md:gap-0 w-full md:max-w-72 px-0 '>
          <div className='flex flex-col '>
            <h4 className='font-semibold text-xl '>{school}</h4>
            <div className='font-normal self-start text-xs mt-1'>{date}</div>
          </div>
          {hl && (
            <div
              className='inline-flex items-center px-4 text-sm 
            py-2 up out-rounded gap-1 text-[var(--golden)] w-fit my-2 ml-auto sm:ml-0'
            >
              <StarIcon className='size-4 ' />
              Matricula de honor
            </div>
          )}
        </section>
        <section className='max-w-lg w-full md:ml-auto'>{data}</section>
      </div>
    </article>
  )
}

export default StudyArticle
