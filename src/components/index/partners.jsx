import styles from './css/partner.module.css';
import { cn } from '@utils/cn';
import Image from 'next/image';
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import partnerTitle from '@assets/index/PICKME_WEB-44.svg';
import partnerSubTitle from '@assets/index/PICKME_WEB-45.svg';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

const Partners = () => {
  // 將 45 個圖示分組，每組 10 個
  const createPartnerGroups = () => {
    const groups = [];
    const totalPartners = 45; // 從 46 到 90，共 45 個
    const partnersPerGroup = 10;
    
    for (let groupIndex = 0; groupIndex < Math.ceil(totalPartners / partnersPerGroup); groupIndex++) {
      const startIndex = 46 + (groupIndex * partnersPerGroup);
      const endIndex = Math.min(startIndex + partnersPerGroup - 1, 90);
      
      const groupPartners = [];
      for (let i = startIndex; i <= endIndex; i++) {
        groupPartners.push(i);
      }
      groups.push(groupPartners);
    }
    
    return groups;
  };

  const partnerGroups = createPartnerGroups();

  const renderPartnerGroup = (partnerIds) => {
    // 將每組分成上下兩排，每排 5 個
    const topRow = partnerIds.slice(0, 5);
    const bottomRow = partnerIds.slice(5, 10);

    return (
      <div className="w-full flex flex-col items-center justify-center gap-[20px]">
        {/* 上排 5 個 */}
        <div className="flex items-center justify-center gap-[20px] flex-wrap">
          {topRow.map((partnerId) => (
            <div
              key={partnerId}
              className={cn(
                styles[`partner-item-${partnerId}`],
                styles['logo'],
                'w-[120px] h-[100px] flex items-center justify-center'
              )}
            ></div>
          ))}
        </div>
        
        {/* 下排 5 個 */}
        {bottomRow.length > 0 && (
          <div className="flex items-center justify-center gap-[20px] flex-wrap">
            {bottomRow.map((partnerId) => (
              <div
                key={partnerId}
                className={cn(
                  styles[`partner-item-${partnerId}`],
                  styles['logo'],
                  'w-[120px] h-[100px] flex items-center justify-center'
                )}
              ></div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-[100px]">
      <Image
        className="mb-[20px]"
        src={partnerTitle.src}
        alt="客戶夥伴"
        width={290}
        height={100}
      />
      <Image
        src={partnerSubTitle.src}
        alt="客戶夥伴"
        width={600}
        height={100}
      />
      
      <div className="mt-[40px] w-full max-w-[840px]">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          spaceBetween={30}
          slidesPerView={1}
          className="partner-swiper"
        >
          {partnerGroups.map((group, index) => (
            <SwiperSlide key={index}>
              {renderPartnerGroup(group)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;