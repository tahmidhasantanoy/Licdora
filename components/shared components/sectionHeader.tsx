import { ISectionHeaderData } from '@/types/types';


const SectionHeader = ({sectionHeaderData} : ISectionHeaderData) => {

  return (
    <div className={`mt-[140px] ${sectionHeaderData?.isCentered ? 'flex justify-center' : ''}`}>
      <div className={`flex flex-col items-center gap-4 max-w-[641px] max-h-[126px] text-center `}>
        <h2 className='font-bold bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent text-5xl leading-[132%]'>{sectionHeaderData?.sectionTitle}</h2>
        <p className='font-normal text-secondary text-md leading-[164%]'>{sectionHeaderData?.sectionDescription}</p>
    </div>
    </div>
  )
}

export default SectionHeader;
