import React from 'react'
import { cn } from '@utils/cn';
import styles from './css/serviceBox.module.css';
import Link from 'next/link';
import categoryMap from './categoryMap'
import Image from 'next/image';
import service1 from '@assets/index/PICKME_WEB-30.svg';
import service2 from '@assets/index/PICKME_WEB-31.svg';
import service3 from '@assets/index/PICKME_WEB-32.svg';
import service4 from '@assets/index/PICKME_WEB-33.svg';


const serviceMap = new Map([
  ['全方位行銷規劃', service1],
  ['數位媒體採購', service2],
  ['廣告優化分析', service3],
  ['創意內容企劃', service4],
])

export default function ServiceBox() {
  const serviceHeader = categoryMap.map((category, index) => {
    return <Link
      data-title="more"
      key={index}
      href={category.sitemapUrl}
      className={cn(styles['container'], 'scale-75 md:scale-100')}
    >
      {/* <div className='text-white text-[40px] font-[400] absolute top-[27px] left-[24px]'>
        {category.zn_title}
      </div>
      <div className='text-black text-[28px] font-[400] absolute bottom-[46px] left-[56px] whitespace-pre-line'>
        {category.content}
      </div> */}
      <Image src={serviceMap.get(category.zn_title)} alt={category.zn_title} width={447} height={100} />
    </Link>;
  });

  return <div className="flex gap-[30px] flex-wrap max-w-[1000px] py-[80px] items-center justify-center">
    {serviceHeader}
  </div>;
}