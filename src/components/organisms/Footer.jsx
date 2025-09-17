import LinkList from '../molecules/LinkList'

function Footer () {
  return (
    <div className='w-screen p-2 h-20'>
      <div
        className='w-full inline-flex gap-3 gap-y-2
        justify-center items-center flex-wrap text-sm text-[var(--soft-text)] font-semibold'
      >
        <LinkList />
      </div>
    </div>
  )
}

export default Footer
