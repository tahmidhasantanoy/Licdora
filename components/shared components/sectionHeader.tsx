import { ISectionHeaderData } from '@/types/types';


const SectionHeader = ({sectionHeaderData} : ISectionHeaderData) => {
    
  console.log(sectionHeaderData?.sectionDescription);

  return (
    // TODO : width problem (solved)
    <div className={`mt-[140px] mb-14 ${sectionHeaderData?.isCentered ? 'flex justify-center' : ''}`}>
      <div className={`flex flex-col items-center gap-4 max-w-5xl text-center `}>
        <h2 className='font-bold bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent text-[3.5rem] leading-[132%] mb-6'>{sectionHeaderData?.sectionTitle}</h2>
        <p className='font-normal text-white/95 text-xl leading-[32px]'>{sectionHeaderData?.sectionDescription}</p>
      </div>
    </div>
  )
}

export default SectionHeader;
