import { BuildingLibraryIcon } from '@heroicons/react/24/outline'
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
      <div className='flex flex-col md:flex-row gap-5 md:gap-0'>
        <section className='flex md:flex-col gap-4 md:gap-0 w-full md:max-w-72 px-0 '>
          <div className='flex flex-col '>
            <h3 className=' w-fit text-xl md:text-3xl font-bold text-[var(--hl)]'>
              {title}
            </h3>
            <div className='font-semibold self-start text-xs mt-1 text-gray-500'>
              {date}
            </div>
          </div>
          {hl && (
            <div
              className='inline-flex items-center px-3 text-xs md:text-sm 
            py-2 h-fit up gap-1 text-[var(--bg)] bg-[var(--golden)] w-fit
             md:my-2 ml-auto sm:ml-0 text-nowrap font-bold '
            >
              <StarIcon className='size-4 ' />
              Matricula de honor
            </div>
          )}
        </section>
        <section className='max-w-lg w-full md:ml-auto'>
          <h4 className='font-semibold text-lg mb-3 inline-flex gap-2'>
            <BuildingLibraryIcon className='size-5 mt-1' />
            {school}
          </h4>
          {data}
        </section>
      </div>
    </article>
  )
}

export default StudyArticle
