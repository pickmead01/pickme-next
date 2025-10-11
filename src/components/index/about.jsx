import React, { useEffect } from 'react';
import styles from './css/about.module.css';
import AOS from 'aos';
import Link from "next/link";
import { cn } from '@utils/cn';
import 'aos/dist/aos.css';
import Image from 'next/image';
import title from '@assets/index/PICKME_WEB＿２_0801-04.svg';
import subTitle from '@assets/index/PICKME_WEB＿２_0801-05.svg';
import contactButton from '@assets/index/PICKME_WEB＿２_0801-06.svg';
import aboutTitle from '@assets/index/PICKME_WEB＿２_0801-19.svg';
import aboutContent from '@assets/index/PICKME_WEB＿２_0801-20.svg';
import problemTitle from '@assets/index/PICKME_WEB-25.svg';
import problem1 from '@assets/index/PICKME_WEB-26.svg';
import problem2 from '@assets/index/PICKME_WEB-27.svg';
import problem3 from '@assets/index/PICKME_WEB-28.svg';
import { useAppContext } from "@store/context";
import useInitial from "@services/useInitial";

export default function About() {
  const { state, dispatch } = useAppContext();
  useInitial({
    state,
    dispatch
  });

  useEffect(() => {

    AOS.init({
      offset: 500,
      delay: 50, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms);
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <div className={styles['about-us']}>
      <div className="flex flex-col items-center w-full h-auto md:h-[1724px] md:max-h-[1724px] relative bg-gradient-to-b from-[#fff] from-30% to-[#ED781E]">
        <div className='relative mt-24 z-10 md:mr-80 scale-[60%] md:scale-100'>
          <div className={styles['logo-color']} />
          <div className="flex flex-col items-center">
            <Image 
              src={title.src}
              alt="抓住流量 掌握商機"
              width={510}
              height={69}
              className="mb-[30px]"
            />
            <Image 
              src={subTitle.src}
              alt="Pickme投放精準出擊!"
              width={350}
              height={29}
              className="mb-[30px]"
            />
            <Link
              className={styles['contact-button']}
              href="https://m.me/pickme.no1"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image src={contactButton.src} alt="立即免費諮詢" width={330} height={73} />
            </Link>
          </div>
          <div className={styles['bg1']}></div>
          <div className={styles['bg2']}></div>
        </div>
        <div 
          className={cn('w-[900px] h-[790px] top-[-200px] md:top-[55px] relative md:ml-[600px] md:absolute ', styles['bg-container'])}
        >
            <div className={styles['bg12']}></div>
            <div className={styles['bg3']}></div>

            <div className={styles['bg4']}></div>
            <div className={styles['bg5']}></div>
            <div className={styles['bg6']}></div>
          </div>
          <div className={cn(styles['bg13'], 'hidden md:block')}></div>
      </div>

      <div id='about' className='md:pb-[100px] flex flex-col items-center w-full mt-[300px] md:mt-[-657px] relative bg-gradient-to-br from-transparent from-30% to-[#DCDCDC]'>
        <div className='w-full min-w-[1920px] flex flex-col items-center  md:scale-100 scale-[60%] origin-top'>
          {/* <div className={styles['bg7']} /> */}
          <div className={cn(styles['bg8'], 'flex flex-col items-center justify-center text-white')}>
            <div className={styles['bg10']} />
            <div className={styles['bg11']} />
            <Image src={aboutTitle.src} alt="全方位行銷團隊" width={532} height={100} className='mb-[40px]' />
            <Image src={aboutContent.src} alt="全方位行銷團隊" width={760} height={100} />

            {/* <div className='text-[32px] md:text-[40px] font-[200] flex items-center mt-[28px]'>
              Pickme痞米團隊擁有
              <div className='md:text-[40px] text-[36px] font-[600]'>多產業別</div>
              服務經驗
            </div>
            <div className='md:text-[40px] text-[32px] font-[200] flex items-center'>
              執行
              <div className='md:text-[40px] text-[36px] font-[600]'>數百間</div>
              品牌廣告、操盤
              <div className='md:text-[40px] text-[36px] font-[600]'>上千萬</div>
              行銷預算
            </div>
            <div className='md:text-[40px] text-[36px] font-[200] mt-[28px]'>依產品特性打造專屬客製的行銷策略</div>
            <div className='md:text-[40px] text-[36px] font-[200]'>從頭到尾一手包辦、成為你的行銷後盾！</div> */}
           
            <div className={styles['bg9']} />
          </div>
        </div>
      </div>

      <div className='py-[40px] z-10 relative w-full flex flex-col items-center h-[1155px] scale-[70%] md:scale-100'>
        <Image src={problemTitle.src} alt="你有以下行銷問題嗎？" width={720} height={100} className='mb-[40px]' />
        
        <Image src={problem1.src} alt="全方位行銷團隊" width={760} height={100} className='mb-[40px]' />
            <Image src={problem2.src} alt="全方位行銷團隊" width={760} height={100} className='mb-[40px]' />
            <Image src={problem3.src} alt="全方位行銷團隊" width={760} height={100} className='mb-[40px]' />
        {/* <div className={cn(styles['bg14'], 'scale-[60%] md:scale-100 flex flex-col justify-center text-white text-[48px] pl-[350px]')}>
          <p>投放廣告卻看不見成效</p>
        </div>
        <div className={cn(styles['bg15'], 'scale-[60%] md:scale-100 flex flex-col justify-center my-[20px] text-white text-[48px] pl-[350px]')}>
          <p>行銷管道好多，</p>
          <p>但哪一個才適合我？</p>
        </div>
        <div className={cn(styles['bg16'], 'scale-[60%] md:scale-100 flex flex-col justify-center text-white text-[48px] pl-[350px]')}>
          <p>沒人手經營社群</p>
          <p>想不到發什麼內容</p>
        </div> */}
        <div className={cn(styles['bg17'], 'scale-[60%] md:scale-100 mt-[40px]')}></div>
      </div>
    </div>
  );
}

function BubbleBoxMobile() {
  return <div className={'bubble-box-mobile'}>
    <div>
      <div
        className={'orange-bubble-product'} >
        要怎麼讓消費者能夠快速地<br />了解我的產品特色？
      </div>
      <div
        className={'orange-bubble-view'}>
        如何在網路上增加瀏覽數，<br />並且讓客人願意付費呢？
      </div>
    </div>
    <div>
      <div
        className={'blue-bubble-seo'} >
        公司要辦發新品表會，<br />該怎麼執行才好？
      </div>
      <div
        className={'blue-bubble-time'} >
        為什麼花錢做一堆廣告<br />卻沒有效果？
      </div>
    </div>
  </div>;
}

function BubbleBox() {
  return <div className={'bubble-box'}>
    <div>
      <div
        className={'orange-bubble-left'}
        data-aos='orange-slide-left'
        data-aos-delay='0' >
        如何在網路上增加瀏覽數，<br />並且讓客人願意付費呢？
      </div>
      <div
        className={'orange-bubble-right'}
        data-aos='orange-slide-right'
        data-aos-delay='400' >
        要怎麼讓消費者能夠快速地<br />了解我的產品特色？
      </div>
    </div>
    <div>
      <div
        className={'blue-bubble-left'}
        data-aos='blue-slide-left'
        data-aos-delay='600' >
        公司要辦發新品表會，<br />該怎麼執行才好？
      </div>
      <div
        className={'blue-bubble-right'}
        data-aos='blue-slide-right'
        data-aos-delay='1000' >
        為什麼花錢做一堆廣告<br />卻沒有效果？
      </div>
    </div>
  </div>;
}

