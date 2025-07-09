import SectionHeader from '@/components/shared components/sectionHeader';
import React from 'react';

const EffortlessIntegrations = () => {

    const sectionHeaderData = {
        sectionHeader: "No header",
        sectionTitle: "Effortless Integrations for a Unified Crypto Experience",
        sectionDescription: "Quickly link your preferred platforms and wallets for a streamlined and hassle-free crypto experience.",
        isCentered: true,
    };

    return (
        <div className='bg-black'>
            <SectionHeader sectionHeaderData={sectionHeaderData} />
        </div>
    );
};

export default EffortlessIntegrations;


