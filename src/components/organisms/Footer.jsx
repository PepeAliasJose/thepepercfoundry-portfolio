import LinkList from '../molecules/LinkList';

function Footer() {
  return (
    <div className='w-screen p-4 mb:p-2 min-h-20 inline-flex items-center'>
      <div
        className='w-full inline-flex gap-3 gap-y-2 
        justify-center items-center flex-wrap text-sm text-[var(--soft-text)] font-semibold'
      >
        <LinkList />
      </div>
    </div>
  );
}

export default Footer;
