import React from 'react';
import styles from './css/ourService.module.css';
import ServiceBox from "./serviceBox";
import { cn } from '@utils/cn';
import { useAppContext } from "@store/context";
import useInitial from "@services/useInitial";
import serviceTitle from '@assets/index/PICKME_WEB_B-11.svg';
import { ourService } from "@components/index/images";
import useLoadImage from "@services/useLoadImage";
import Image from 'next/image';
export default function OurService() {
  const { state, dispatch } = useAppContext();
  useInitial({
    state,
    dispatch
  });

  const ourServiceImage = useLoadImage(ourService);
  return (
    <div id='service' className={styles['our-service-wrapper']}>
       <div className='w-full items-center flex flex-col pb-[60px]'>
        <div className={cn(styles['bg1'], 'text-white flex flex-col items-center justify-center')}>
          {/* <div className="text-[18vw] md:text-[80px] font-[500]">
            四大服務
          </div> */}
          <Image src={serviceTitle.src} alt="四大服務" width={320} height={100} />
          <div className="text-[6vw] md:text-[36px] font-[400] font-myriad mt-[20px]">
            量身打造最賺錢的行銷策略
          </div>
          <div className="text-[6vw] md:text-[36px] font-[400] font-myriad">
            有效解決各式雜症！
          </div>
          <div className={styles['bg2']}></div>
        </div>
        <div className="w-full flex-1 flex justify-center">
          <ServiceBox /> 
        </div>
        <div className="flex gap-[80px]">
          {[...Array(100)].map((_, i) => (
            <div key={i} className={styles['bg3']}></div>
          ))}
        </div>
      </div>
    </div>
  );
}