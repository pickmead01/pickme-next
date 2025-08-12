import React from 'react'
import { cn } from '@utils/cn';
import styles from './css/serviceBox.module.css';
import Link from 'next/link';
import categoryMap from './categoryMap'

export default function ServiceBox() {
  const serviceHeader = categoryMap.map((category, index) => {
    return <Link
      data-title="more"
      key={index}
      href={category.sitemapUrl}
      className={cn(styles['container'], 'scale-75 md:scale-100')}
    >
      <div className='text-white text-[40px] font-[400] absolute top-[27px] left-[24px]'>
        {category.zn_title}
      </div>
      <div className='text-black text-[28px] font-[400] absolute bottom-[46px] left-[56px] whitespace-pre-line'>
        {category.content}
      </div>
    </Link>;
  });

  return <div className="flex gap-[30px] flex-wrap max-w-[1000px] py-[80px] items-center justify-center">
    {serviceHeader}
  </div>;
}