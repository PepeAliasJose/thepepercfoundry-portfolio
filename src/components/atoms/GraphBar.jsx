function GraphBar ({ data, tag, height = 'h-[0%]', color = 'bg-blue-400' }) {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <div className='h-72 down w-6  flex items-end relative'>
        <div className='absolute h-full w-full'>
          <p className='text-center p-1.5 font-semibold w-full h-full text-sm vertical leading-none rotate-180'>
            {data}
          </p>
        </div>
        <div
          className={
            ' w-full min-h-6  rounded-full overflow-clip ' +
            height +
            ' ' +
            color
          }
        >
          <div className='h-full up flex w-full items-center justify-center' />
        </div>
      </div>
      {tag && <p className='text-sm'>{tag}</p>}
    </div>
  )
}

export default GraphBar
{
}
