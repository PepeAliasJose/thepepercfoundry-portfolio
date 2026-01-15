import { useTranslation } from 'react-i18next';
import { useHire } from '../../App';

function LinkList() {
  const { t } = useTranslation();
  const { hire } = useHire();
  return (
    <>
      <a
        className='hover:text-[var(--hover)]'
        href='https://github.com/PepeAliasJose'
        target='_blank'
        rel='noopener noreferrer'
      >
        GitHub
      </a>
      <a
        className='hover:text-[var(--hover)]'
        href='https://www.linkedin.com/in/jos%C3%A9-rodr%C3%ADguez-c%C3%A1ceres-b7721b236/'
        target='_blank'
        rel='noopener noreferrer'
      >
        LinkedIn
      </a>
      <a
        className='hover:text-[var(--hover)]'
        target='_blank'
        rel='noopener noreferrer'
        href={'./cv/' + t('cv')}
      >
        CV
      </a>
      <a
        className='hover:text-[var(--hover)]'
        href='mailto:hirejoserodriguez@gmail.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        hirejoserodriguez
        <wbr />
        @gmail.com
      </a>
      <br />
      {hire && (
        <p
          className='font-semibold text-sm leading-none helvetica text-center flex flex-row gap-2 bg-blue-400
        px-4 py-2 text-white w-fit flex-wrap rounded-full'
        >
          {t('menu.main.hire')}
        </p>
      )}
    </>
  );
}

export default LinkList;
